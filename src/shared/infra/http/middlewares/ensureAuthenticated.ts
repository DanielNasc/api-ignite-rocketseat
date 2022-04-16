import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "@errors/AppErrors";
import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRespository";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) throw new AppError("JWT token is missing", 401);

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      process.env.APP_SECRET || "secret"
    ) as IPayload;

    const usersRepository = new UsersRepository();
    const user = usersRepository.findById(user_id);

    if (!user) throw new AppError("User not found", 404);

    req.user = {
      id: user_id,
    };

    return next();
  } catch (error) {
    throw new AppError("Invalid JWT token", 401);
  }
}
