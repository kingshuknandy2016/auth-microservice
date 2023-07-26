<html><center><h1>TypeScript Express Microservice Template</h1></center></html>

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)

![Microservices-Built-With-Node-1](https://github.com/kingshuknandy2016/microservice-nodejs-starter/assets/36564770/28454ace-8629-4849-8da1-38bab6076e26)

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
  GET    | /apis/v1/employees/getEmployeeBasic
  GET    | /apis/v1/employees/getEmployees
  POST   | /apis/v1/employees/setEmployee
  GET    | /apis/v1/users/getUsersBasic
  GET    | /apis/v1/users/getUsers
  POST   | /apis/v1/users/setUser
+--------+------------------------------+
```
