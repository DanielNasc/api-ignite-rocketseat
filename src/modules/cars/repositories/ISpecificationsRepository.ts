import { Specification } from "@modules/cars/infra/typeorm/entities/Specifications";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDTO): Promise<void>;
  findByName(name: string): Promise<Specification | undefined>;
}

export { ICreateSpecificationDTO, ISpecificationsRepository };
