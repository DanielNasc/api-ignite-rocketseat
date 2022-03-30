import { inject, injectable } from "tsyringe";

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
      throw new Error("Specification already exists");
    }

    await this.createSpecificationsRepository.create({ name, description });
  }
}
