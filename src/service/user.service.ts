import logger from "../loggers/logger.winston";
import User, { UserInterface } from "../models/user.model";

export default class UserService {
  public async getUsers() {
    const users: User[] = await User.findAll();
    logger.info(users);
    return users;
  }

  public async setUser(userInput: UserInterface) {
    const c = new User(userInput);
    return await c.save();
  }
}
