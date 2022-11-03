import { Router } from "express";
import { getFuros, getFuroById } from "../controllers/furosController.js";
import validateSchema from "../middlewares/schemaValidation.js";
const furoRouter = Router();

furoRouter.get("/furos", getFuros );
furoRouter.get("/furos/:id",  getFuroById);

export default furoRouter;
