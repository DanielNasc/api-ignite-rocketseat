import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export class ListCategoriesController {
  constructor(private ListCategoriesUseCase: ListCategoriesUseCase) {}

  handle(_: Request, res: Response) {
    return res.json(this.ListCategoriesUseCase.execute());
  }
}
