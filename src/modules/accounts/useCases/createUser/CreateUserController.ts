import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { driver_license, email, password, name, avatar } = req.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);
    await createUserUseCase.execute({
      driver_license,
      email,
      password,
      name,
      avatar,
    });

    return res.status(201).send();
  }
}
