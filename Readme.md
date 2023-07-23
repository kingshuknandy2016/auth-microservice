<html><center><h1>TypeScript Express Microservice Template</h1></center></html>

## Quick Start

In order to start the application execute the following command

```cmd
npm run start:dev
```

Check the health of the application from the url http://localhost:3000/health

## Swagger

Access the Swagger from the URL http://localhost:3000/api-docs/

## Containerization

Build the Docker Image

```cmd
docker build . -t kingshuknandy/node-microservice
```

Run the docker image in detached mode(-d)

```cmd
docker run -p 3000:3000 -d kingshuknandy/node-microservice:latest
```
