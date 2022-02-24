import express from "express";
import { router } from "./routes";

const app = express();

app.use(express.json());

app.get("/", (_, res) => res.json({ message: "Hallo warudo" }));
app.use(router);

app.listen(3000, () => console.log("server running"));
