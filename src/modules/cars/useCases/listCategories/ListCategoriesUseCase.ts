import { inject, injectable } from "tsyringe";

import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

@injectable()
export class ListCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private readonly categoriesRepositoru: ICategoriesRepository
  ) {}

  execute() {
    return this.categoriesRepositoru.getAll();
  }
}
