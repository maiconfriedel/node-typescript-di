import { Router } from "express";
import { container } from "tsyringe";

import { UserController } from "./controllers/UserController";
import { ProfileController } from "./controllers/ProfileController";

export class Routes {
  private routes: Router = Router();
  private userController: UserController;
  private profileController: ProfileController;

  constructor() {
    this.userController = container.resolve(UserController);
    this.profileController = container.resolve(ProfileController);
  }

  registerRoutes(): Router {
    this.routes.get("/", (req, res) => this.userController.index(req, res));
    this.routes.get("/profile", (req, res) =>
      this.profileController.index(req, res)
    );
    return this.routes;
  }
}
