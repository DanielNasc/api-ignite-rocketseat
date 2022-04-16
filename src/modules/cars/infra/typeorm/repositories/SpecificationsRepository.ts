import { getRepository, Repository } from "typeorm";

import { Specification } from "@modules/cars/infra/typeorm/entities/Specifications";
import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from "@modules/cars/repositories/ISpecificationsRepository";

export class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({
      description,
      name,
    });

    await this.repository.save(specification);
  }

  async findByName(name: string): Promise<Specification | undefined> {
    const specification = await this.repository.findOne({
      where: { name },
    });

    return specification;
  }
}
