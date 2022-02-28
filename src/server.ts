import express from "express";
import swaggerUi from "swagger-ui-express";

import { router } from "./routes";

import swaggerDocument from "./swagger.json";

const app = express();

app.use(express.json());

app.get("/", (_, res) => res.json({ message: "Hallo warudo" }));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(router);

app.listen(3000, () => console.log("server running"));
