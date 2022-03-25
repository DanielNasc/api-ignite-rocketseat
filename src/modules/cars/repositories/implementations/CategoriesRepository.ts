import { Repository, getRepository } from "typeorm";

import { Category } from "../../entities/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTORequest,
} from "../ICategoriesRepository";

export class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  // static getInstance(): CategoriesRepository {
  //   if (!CategoriesRepository.INSTANCE) {
  //     CategoriesRepository.INSTANCE = new CategoriesRepository();
  //   }

  //   return CategoriesRepository.INSTANCE;
  // }

  async create({
    name,
    description,
  }: ICreateCategoryDTORequest): Promise<void> {
    const category = this.repository.create({ name, description });

    await this.repository.save(category);
  }

  async getAll(): Promise<Category[]> {
    const category = await this.repository.find();

    return category;
  }

  async findByName(name: string): Promise<Category | undefined> {
    const category = await this.repository.findOne({ where: { name } });

    return category;
  }
}
