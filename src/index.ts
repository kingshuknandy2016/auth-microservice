import ServiceConfiguration from "./app";

const microservice = new ServiceConfiguration(3000);
microservice
  .startApplication()
  .then(() => {
    console.log("Server Started Successfully");
  })
  .catch((err: Error) => {
    console.log(err);
    console.info("Error occurred while starting the application");
  });
