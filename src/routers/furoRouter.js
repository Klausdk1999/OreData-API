import { Router } from "express";
import { getFuros, getFuroById } from "../controllers/furosController.js";
import validateSchema from "../middlewares/schemaValidation.js";
import { orderSchema } from "../schemas/cakeSchema.js";
const furoRouter = Router();

//furoRouter.post("/furo", postfuro);
furoRouter.get("/furos", getFuros );
furoRouter.get("/furos/:id",  getFuroById);

export default furoRouter;
