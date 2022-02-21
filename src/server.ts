import express from "express";

const app = express();

app.get("/", (_, res) => res.send("e"));

app.listen(3000, () => console.log("server running"));
