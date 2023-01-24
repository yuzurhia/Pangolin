import express from "express";
import cors from "cors";
import path from "path";
const app = express();

// const router = require("../routes/authentification.js");
import router from "../routes/authentification.js";
import bodyParser from "body-parser";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static directory
// app.use(express.static(path.resolve("public")));

// External middleware

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/", router);

export { app, express };
