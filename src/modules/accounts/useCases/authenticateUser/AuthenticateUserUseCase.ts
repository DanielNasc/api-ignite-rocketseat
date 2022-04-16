import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { injectable, inject } from "tsyringe";

import { AppError } from "@errors/AppErrors";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

const SECRET = process.env.APP_SECRET || "secret";

@injectable()
export class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    // Checa se o usuário existe
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Sorry, but this email or password is invalid.", 401);
    }

    // Checa se a senha está correta
    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError("Sorry, but this email or password is invalid.", 401);
    }

    // Gera o json web token
    const token = sign({}, SECRET, {
      subject: user.id,
      expiresIn: "1d",
    });

    const response: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    };

    return response;
  }
}
