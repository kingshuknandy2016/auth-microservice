<html><center><h1>TypeScript Express Microservice Template</h1></center></html>

![Image]("docs/images/Microservices-Built-With-Node-1.jpg")
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
## DB Setup

### Using Postgres Docker Image

```cmd
docker pull postgres
```

```cmd
docker run --name postgres-db -p 5432:5432 -e POSTGRES_PASSWORD=password -d postgres
```

## List of Routes

```sh
# API Routes:
+--------+------------------------------+
  Method | URI
+--------+------------------------------+
  GET    | /health
  GET    | /apis/v1/users/getUsersBasic
  GET    | /apis/apis/v1/users/getUsers
  POST   | /apis/v1/users/setUser
+--------+------------------------------+
```