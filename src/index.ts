import ServiceConfiguration from "./app";

const microservice = new ServiceConfiguration(3000);
microservice
  .startApplication()
  .then(() => {
    console.log("Server Started Successfully");
  })
  .catch((err: Error) => {
    // eslint-disable-next-line no-console
    console.log(err);
    // eslint-disable-next-line no-console
    console.info("Error occurred while starting the application");
  });
