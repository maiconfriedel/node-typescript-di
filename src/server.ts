import "reflect-metadata";
import express, { Application } from "express";
import { registry, container, Lifecycle } from "tsyringe";

import { Routes } from "./routes";
import { UserRepository } from "./infrastructure/repositories/UserRepository";

@registry([
  {
    token: "IUserRepository",
    useClass: UserRepository,
    options: {
      lifecycle: Lifecycle.Transient,
    },
  },
])
class Server {
  public app: Application;
  public routes: Routes;

  constructor() {
    this.app = express();
    this.routes = new Routes();
  }

  start() {
    this.app.use(this.routes.registerRoutes());
    this.app.listen(3333);
  }
}

new Server().start();
