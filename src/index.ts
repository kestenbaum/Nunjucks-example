import "dotenv/config";

import nunjucks from "nunjucks";
import express from "express";
import cors from "cors";

import data from "./data/data.json"

import type { Request, Response } from "express";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(cors());

nunjucks.configure("src/view", {
    autoescape: true,
    express: app,
    watch: true
})

app.get("/", (req: Request, res: Response) => {
  res.render("index.html", {
    title: "Main page",
    test: "Test "
  })
});

app.get("/fruits", (req: Request, res: Response) => {
  res.render("fruits.html", {
    title: "Fruits",
    data
  })
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});