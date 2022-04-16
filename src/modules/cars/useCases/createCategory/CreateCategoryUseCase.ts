import { inject, injectable } from "tsyringe";

import { AppError } from "@errors/AppErrors";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
export class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    if (await this.categoriesRepository.findByName(name)) {
      throw new AppError("Category already exists", 400);
    }

    await this.categoriesRepository.create({
      name,
      description,
    });
  }
}
