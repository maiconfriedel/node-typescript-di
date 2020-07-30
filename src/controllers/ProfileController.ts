import { Request, Response } from "express";
import { injectable, injectAll } from "tsyringe";

import { IUserRepository } from "../interfaces/repositories/IUserRepository";
import { UserRepository } from "../infrastructure/repositories/UserRepository";

@injectable()
export class ProfileController {
  private userRepository: IUserRepository;

  constructor(
    @injectAll("IUserRepository") userRepositories: IUserRepository[]
  ) {
    this.userRepository = userRepositories.find(
      (repo) => repo instanceof UserRepository
    );
  }

  async index(req: Request, res: Response) {
    const response = await this.userRepository.create(this.userRepository.id);

    return res.json({ response });
  }
}
