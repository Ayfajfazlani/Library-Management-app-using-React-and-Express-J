// const express = require("express");
import express, { Application } from "express";
const cors = require("cors");
const routes = require("./src/routes/index");
const db = require("./src/models/index.ts");

const app: Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

db.sequelize
  .sync()
  .then(() => {
    console.log("DB Connection Established Successfully!");
  })
  .catch((err) => {
    console.log("Failed to sync DB: " + err.message);
  });

  app.get("/", (req, res) => { res.send("Welcome to BBC"); });

  const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Listening to port 5000");
});

app.use("/api", routes);

export default app;
