import { IUserRepository } from "../../interfaces/repositories/IUserRepository";
import { uuid } from "uuidv4";

export class UserRepositoryTemp implements IUserRepository {
  public id: string;

  constructor() {
    this.id = uuid();
  }

  async create(text: string): Promise<string> {
    console.log(this.id);

    return `TEMP: ${text}`;
  }
}
