import { IUserRepository } from "../../interfaces/repositories/IUserRepository";
import { uuid } from "uuidv4";

export class UserRepository implements IUserRepository {
  private id: string;

  constructor() {
    this.id = uuid();
  }

  async create(): Promise<string> {
    console.log(this.id);

    return "true";
  }
}
