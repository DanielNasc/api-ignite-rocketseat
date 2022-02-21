import { Category } from "../model/Category";

interface ICategoryDto {
  name: string;
  description: string;
}

export class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICategoryDto): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
    });

    this.categories.push(category);
  }

  getAll(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category | undefined {
    return this.categories.find((category) => category.name === name);
  }
}
