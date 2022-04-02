import { hash } from "bcrypt";
import { getRepository, Repository } from "typeorm";

import { AppError } from "../../../../errors/AppErrors";
import { ICreateUserDTO } from "../../dtos/ICreateUsersRepository";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

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
  }: ICreateUserDTO): Promise<void> {
    if (await this.findByEmail(email)) {
      throw new AppError("Email already in use.", 400);
    }
    if (await this.findByName(name))
      throw new AppError("Name already in use.", 400);

    const hashedPassword = await hash(password, 8);

    const user = this.repostiory.create({
      name,
      email,
      password: hashedPassword,
      driver_license,
      avatar,
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
