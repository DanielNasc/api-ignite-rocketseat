import { AppError } from "@errors/AppErrors";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUsersRepository";
import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "@modules/accounts/useCases/createUser/CreateUserUseCase";

import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let authenticateUserUseCase: AuthenticateUserUseCase;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory
    );
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it("should authenticate a user", async () => {
    const user: ICreateUserDTO = {
      driver_license: "123456789",
      email: "eee",
      name: "eee",
      password: "eee",
    };

    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty("token");
  });

  it("should not authenticate a user if it does not exist", async () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: "eee",
        password: "eee",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not authenticate a user if the password is wrong", async () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        driver_license: "123456789",
        email: "eee",
        name: "eee",
        password: "eee",
      };

      await createUserUseCase.execute(user);

      await authenticateUserUseCase.execute({
        email: user.email,
        password: "wrongPassword",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
