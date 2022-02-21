import { Router } from "express";

import { Category } from "../model/Category";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  if (categoriesRepository.findByName(name)) {
    return res.status(400).send({ error: "Category already exists" });
  }

  const newCategory = new Category();

  Object.assign(newCategory, {
    name,
    description,
  });

  categoriesRepository.create(newCategory);

  return res.status(201).send();
});

categoriesRoutes.get("/", (_, res) => {
  const categories = categoriesRepository.getAll();

  return res.status(200).json(categories);
});

export { categoriesRoutes };
