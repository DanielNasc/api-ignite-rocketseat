import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUsersRepository";
import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";

export class UsersRepository implements IUsersRepository {
  private repostiory: Repository<User>;

  constructor() {
    this.repostiory = getRepository(User);
  }

  async create({
    driver_license,
    email,
    password,
    name,
    avatar,
    id,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repostiory.create({
      name,
      email,
      password,
      driver_license,
      avatar,
      id,
    });
    await this.repostiory.save(user);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.repostiory.findOne({ where: { email } });
    return user;
  }

  async findByName(name: string): Promise<User | undefined> {
    const user = await this.repostiory.findOne({ where: { name } });
    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repostiory.findOne(id);
    return user;
  }
}
