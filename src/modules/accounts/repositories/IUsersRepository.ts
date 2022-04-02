import { ICreateUserDTO } from "../dtos/ICreateUsersRepository";
import { User } from "../entities/User";

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findByUsername(username: string): Promise<User>;
  findById(id: string): Promise<User>;
}
