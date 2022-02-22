import { Category } from "../model/Category";
import {
  ICreateCategoriesRepository,
  ICreateCategoryDTORequest,
} from "./ICategoriesRepository";

export class CategoriesRepository implements ICreateCategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCategoryDTORequest): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
    });

    this.categories.push(category);
  }

  getAll(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category | undefined {
    return this.categories.find((category) => category.name === name);
  }
}
