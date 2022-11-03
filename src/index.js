import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import furoRouter from "./routers/furoRouter.js";
import pesoRouter from "./routers/pesoRouter.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use(pesoRouter);
app.use(furoRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log("Server running on port " + process.env.PORT)
);
