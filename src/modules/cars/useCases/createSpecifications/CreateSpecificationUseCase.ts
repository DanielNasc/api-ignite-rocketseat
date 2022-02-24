import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateSpecificationUseCase {
  constructor(
    private createSpecificationsRepository: ISpecificationsRepository
  ) {}
  execute({ name, description }: IRequest): void {
    if (this.createSpecificationsRepository.findByName(name)) {
      throw new Error("Specification already exists");
    }

    this.createSpecificationsRepository.create({ name, description });
  }
}
