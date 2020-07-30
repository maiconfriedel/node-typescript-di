export interface IUserRepository {
  create(): Promise<string>;
}
