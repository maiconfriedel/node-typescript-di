import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";

import { IUserRepository } from "../interfaces/IUserRepository";

@injectable()
export class UserController {
  constructor(
    @inject("IUserRepository") private userRepository: IUserRepository,
    @inject("IUserRepository") private userRepository2: IUserRepository
  ) {}

  async index(req: Request, res: Response) {
    const response = await this.userRepository.create();
    await this.userRepository2.create();

    return res.json({ response });
  }
}
