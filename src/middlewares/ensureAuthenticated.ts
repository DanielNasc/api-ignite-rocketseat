import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRespository";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Token not provided" });
  }

  const [, token] = authHeader.split(" ");

  const { sub: user_id } = verify(
    token,
    process.env.APP_SECRET || "secret"
  ) as IPayload;

  const usersRepository = new UsersRepository();
  const user = usersRepository.findById(user_id);

  if (!user) {
    return res.status(401).json({ message: "User not found" });
  }

  return next();
}
