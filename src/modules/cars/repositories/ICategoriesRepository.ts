import { Category } from "../model/Category";

export interface ICreateCategoryDTORequest {
  name: string;
  description: string;
}

export interface ICategoriesRepository {
  create({ name, description }: ICreateCategoryDTORequest): void;
  getAll(): Category[];
  findByName(name: string): Category | undefined;
}
