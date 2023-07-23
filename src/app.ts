import express, { Express, Request, Response, Application } from "express";
import fs from "fs";
import path from "path";
import YAML from "yamljs";
import swagger from "swagger-express-middleware";
import swaggerUi from "swagger-ui-express";
import cors from "cors";
import http from "http";
import Debug from "debug";
import { handleErrors } from "./middlewares/error-handler.middleware";

const swaggerYamlPath = path.resolve("./swagger-definition.yaml");

const debug = Debug("microservice-application");

export default class ServiceConfiguration {
  app: Application;
  port: number;
  server: http.Server;

  constructor(port: number) {
    this.app = express();
    this.port = port;
    this.server = new http.Server();
  }

  registeringCommonMiddleware = (): Promise<Application> => {
    return new Promise((resolve, reject) => {
      try {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        resolve(this.app);
      } catch (error) {
        reject(error);
      }
    });
  };

  // Swagger Initialization Helper
  initializeSwagger = (): Promise<swagger.SwaggerMiddleware> => {
    return new Promise((resolve, reject) => {
      return swagger(swaggerYamlPath, this.app, (err, middleware) => {
        if (err) {
          reject(err);
        } else {
          resolve(middleware);
        }
      });
    });
  };
  configureApplication = (): Promise<Application> => {
    this.app.set("port", this.port);
    return new Promise((resolve, reject) => {
      try {
        // Registering Common Middleware
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));

        // Swagger Express Middleware Setup
        fs.promises.readFile(swaggerYamlPath).then((swaggerConfig) => {
          swaggerConfig = YAML.parse(swaggerConfig.toString("utf-8"));
          this.initializeSwagger().then(
            (middleware: swagger.SwaggerMiddleware) => {
              const corsOptions = [
                middleware.metadata(),
                middleware.CORS(),
                middleware.parseRequest(),
                middleware.validateRequest(),
              ];
              const allowedOrigin = "*";
              this.app.use(cors({ origin: allowedOrigin }));
              this.app.use(express.json());
              this.app.use(
                "/api-docs",
                swaggerUi.serve,
                swaggerUi.setup(swaggerConfig),
              );
            },
          );
        });

        this.app.use(handleErrors);
        // Testing Basic Route(Health)
        this.app.get("/health", (req: Request, res: Response) => {
          res.send("Express Server is healthy");
        });

        resolve(this.app);
      } catch (error) {
        reject(error);
      }
    });
  };

  //Event listener for HTTP server "error" event.
  onError(error: any) {
    if (error.syscall !== "listen") {
      throw error;
    }

    const bind =
      typeof this.port === "string" ? "Pipe " + this.port : "Port " + this.port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
      case "EACCES":
        console.error(bind + " requires elevated privileges");
        process.exit(1);
        break;
      case "EADDRINUSE":
        console.error(bind + " is already in use");
        process.exit(1);
        break;
      default:
        throw error;
    }
  }

  // Event listener for HTTP server "listening" event.
  onListening() {
    debug("Server is listening");
    console.log("Server is listening");
    // const addr = this.server.address();
    // console.log(`"Listening on : ${addr}`);
    // debug("Listening on " + addr);
  }

  startApplication = (): Promise<http.Server> => {
    return new Promise((resolve, reject) => {
      this.configureApplication()
        .then(() => {
          // Create HTTP server
          this.server = http.createServer(this.app);
          this.server.on("listening", this.onListening);
          this.server.on("error", this.onError);
          this.server.listen(this.port);
          resolve(this.server);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
}
