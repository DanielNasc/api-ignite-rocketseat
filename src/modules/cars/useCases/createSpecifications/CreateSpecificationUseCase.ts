import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppErrors";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
export class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private createSpecificationsRepository: ISpecificationsRepository
  ) {}
  async execute({ name, description }: IRequest): Promise<void> {
    if (await this.createSpecificationsRepository.findByName(name)) {
      throw new AppError("Specification already exists");
    }

    await this.createSpecificationsRepository.create({ name, description });
  }
}
