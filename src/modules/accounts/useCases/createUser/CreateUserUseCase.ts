import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../../dtos/ICreateUsersRepository";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    driver_license,
    email,
    password,
    name,
    avatar,
  }: ICreateUserDTO): Promise<void> {
    await this.usersRepository.create({
      driver_license,
      email,
      password,
      name,
      avatar,
    });
  }
}
