import "reflect-metadata";

import express, { Response, Request } from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";

import { AppError } from "./errors/AppErrors";
import { router } from "./routes";
import swaggerDocument from "./swagger.json";

import "./database";
import "./shared/container";

const app = express();

app.use(express.json());

app.get("/", (_, res) => res.json({ message: "Hallo warudo" }));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(router);

app.use((err: Error, _: Request, res: Response) => {
  console.log("233243rf");
  if (err instanceof AppError)
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });

  return res.status(500).json({
    status: "error",
    message: `Internal server error -> ${err.message}`,
  });
});

app.listen(3000, () => console.log("server running"));
