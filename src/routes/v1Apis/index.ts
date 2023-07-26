import { Router } from "express";
import { UserRouter } from "./userRouter";
import { EmployeeRouter } from "./employeeRoute";

export class APISRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.setRoutes();
  }

  public setRoutes() {
    this.router.use("/v1/users", new UserRouter().router);
    this.router.use("/v1/employees", new EmployeeRouter().router);
  }
}
