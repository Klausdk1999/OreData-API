import { Router } from "express";
import { getAmostras,createAmostra, getAmostraById ,updateAmostraById,deleteAmostraById} from "../controllers/amostrasController.js";
import validateSchema from "../middlewares/schemaValidation.js";
import { amostraSchema } from "../schemas/amostrasSchema.js";

const amostraRouter = Router();

amostraRouter.get("/furo/:idFuro/amostras", getAmostras );
amostraRouter.post("/amostra", validateSchema(amostraSchema), createAmostra);
amostraRouter.get("/furo/:idFuro/amostras/:idAmostra",  getAmostraById);
amostraRouter.put("/furo/:idFuro/amostras/:idAmostra", validateSchema(amostraSchema),updateAmostraById);
amostraRouter.delete("/furo/:idFuro/amostras/:idAmostra", deleteAmostraById);


export default amostraRouter;
