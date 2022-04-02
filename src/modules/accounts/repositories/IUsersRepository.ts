import { ICreateUserDTO } from "../dtos/ICreateUsersRepository";
import { User } from "../entities/User";

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findByName(name: string): Promise<User>;
  findById(id: string): Promise<User>;
}
