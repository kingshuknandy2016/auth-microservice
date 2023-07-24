import dotenv from "dotenv";
import { Log } from "../loggers/logger.winston";
import path from "path";

dotenv.config({ path: path.resolve(".env") });

export const NODE_ENV = process.env.NODE_ENV || "development";

export const LOG: Log = {
  level: NODE_ENV === "production" ? "info" : "debug",
};
