import { Router, Request, Response } from "express";
import controller from "../../controller";

export class UserRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.setRoutes();
  }

  public setRoutes() {
    this.router.get("/getUsersBasic", (req: Request, res: Response) => {
      res.status(200).json({
        message: "Received the User Details",
        users: [
          { name: "Ram", age: 23 },
          { name: "Tittoo", age: 42 },
        ],
      });
    });

    const userController = new controller.v1.UserController();
    this.router.get("/getUsers", userController.getUsers);
    this.router.post("/setUser", userController.setUser);
  }
}
