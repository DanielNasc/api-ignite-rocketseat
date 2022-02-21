import express from "express";

import { categoriesRoutes } from "./routes/categories.routes";

const app = express();

app.use(express.json());

app.get("/", (_, res) => res.json({ message: "Hallo warudo" }));
app.use("/categories", categoriesRoutes);

app.listen(3000, () => console.log("server running"));
