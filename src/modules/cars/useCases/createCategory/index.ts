import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export default () => {
  const categoriesRepository = new CategoriesRepository();

  const createCategoriyUseCase = new CreateCategoryUseCase(
    categoriesRepository
  );

  const createCategoryController = new CreateCategoryController(
    createCategoriyUseCase
  );

  return createCategoryController;
};
