import { AppError } from "@errors/AppErrors";
import { CategoriesRepositoryInMemory } from "@modules/cars/repositories/in-memory/CategoriesRepositoryInMemory";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let createCategory: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe("Create Category", () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategory = new CreateCategoryUseCase(categoriesRepositoryInMemory);
  });

  it("should create a new category", async () => {
    const request = {
      name: "Category 1",
      description: "Description 1",
    };

    await createCategory.execute(request);

    expect(categoriesRepositoryInMemory.categories.length).toBe(1);
  });

  it("should not create a new category if it already exists", async () => {
    expect(async () => {
      const request = {
        name: "Category 1",
        description: "Description 1",
      };

      await createCategory.execute(request);
      await createCategory.execute(request);
    }).rejects.toBeInstanceOf(AppError);
  });
});
