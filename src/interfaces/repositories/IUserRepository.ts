export interface IUserRepository {
  create(text: string): Promise<string>;

  id: string;
}
