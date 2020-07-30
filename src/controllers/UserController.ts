import { Request, Response } from "express";
import { injectable, injectAll } from "tsyringe";

import { IUserRepository } from "../interfaces/repositories/IUserRepository";

@injectable()
export class UserController {
  constructor(
    @injectAll("IUserRepository") private userRepositorys: IUserRepository[]
  ) {}

  async index(req: Request, res: Response) {
    const response = await Promise.all(
      this.userRepositorys.map(async (repo) => await repo.create(repo.id))
    );

    return res.json({ response });
  }
}
