import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppErrors";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
export class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: CategoriesRepository
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
