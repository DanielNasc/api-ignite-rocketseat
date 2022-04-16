import { Category } from "@modules/cars/infra/typeorm/entities/Category";

export interface ICreateCategoryDTORequest {
  name: string;
  description: string;
}

export interface ICategoriesRepository {
  create({ name, description }: ICreateCategoryDTORequest): Promise<void>;
  getAll(): Promise<Category[]>;
  findByName(name: string): Promise<Category | undefined>;
}
