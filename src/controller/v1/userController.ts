import { NextFunction, RequestHandler, Request, Response } from "express";
import UserService from "../../service/user.service";
import logger from "../../loggers/logger.winston";

const userService = new UserService();
export class UserController {
  public async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await userService.getUsers();
      return res
        .status(200)
        .json({ data: data, message: "Successfully got all the user" });
    } catch (error) {
      next(error);
    }
  }

  public async setUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, age } = req.body;
      const data = await userService.setUser({ name, age });
      return res
        .status(200)
        .json({ data, message: "Successfully Inserted the User" });
    } catch (error) {
      next(error);
    }
  }
}
