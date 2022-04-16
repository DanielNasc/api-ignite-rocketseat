import { Category } from "../../infra/typeorm/entities/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTORequest,
} from "../ICategoriesRepository";

export class CategoriesRepositoryInMemory implements ICategoriesRepository {
  categories: Category[] = [];

  async create({
    name,
    description,
  }: ICreateCategoryDTORequest): Promise<void> {
    const category = new Category();

    Object.assign(category, { name, description });

    this.categories.push(category);
  }
  async getAll(): Promise<Category[]> {
    return this.categories;
  }
  async findByName(name: string): Promise<Category | undefined> {
    const category = this.categories.find((category) => category.name === name);

    return category;
  }
}
