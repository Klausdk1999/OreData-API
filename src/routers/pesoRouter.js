import { Router } from "express";
import { postPeso , getPeso } from "../controllers/pesoController.js";
import validateSchema from "../middlewares/schemaValidation.js";
import { orderSchema } from "../schemas/cakeSchema.js";
const pesoRouter = Router();


pesoRouter.post("/peso/:peso", postPeso );
pesoRouter.get("/peso",  getPeso);

export default pesoRouter;