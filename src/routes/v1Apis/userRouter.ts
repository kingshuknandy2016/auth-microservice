import { Router, Request, Response } from "express";

export class UserRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.setRoutes();
  }

  public setRoutes() {
    this.router.use("/getUsers", (req: Request, res: Response) => {
      res.status(200).json({
        message: "Received the User Details",
        users: [
          { name: "Ram", age: 23 },
          { name: "Tonu", age: 42 },
        ],
      });
    });
  }
}
