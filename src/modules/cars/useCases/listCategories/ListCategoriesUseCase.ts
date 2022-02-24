import { ICreateCategoriesRepository } from "../../repositories/ICategoriesRepository";

export class ListCategoriesUseCase {
  constructor(
    private readonly categoriesRepositoru: ICreateCategoriesRepository
  ) {}

  execute() {
    return this.categoriesRepositoru.getAll();
  }
}
