import { Router } from "express";

// import { Category } from "../model/Category";
import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const categoriesService = new CreateCategoryService(categoriesRepository);

  categoriesService.execute({ name, description });

  return res.status(201).send();
});

categoriesRoutes.get("/", (_, res) => {
  const categories = categoriesRepository.getAll();

  return res.status(200).json(categories);
});

export { categoriesRoutes };
