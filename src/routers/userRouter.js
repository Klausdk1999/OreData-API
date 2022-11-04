import { Router } from "express";
import validateSchema from "../middlewares/schemaValidation.js";
import { singIn } from "../controllers/userController.js";
import { loginSchema } from "../schemas/loginSchema.js";

const userRouter = Router();

//usersRouter.post('/', validateSchema(createUserSchema), usersPost);
userRouter.post('/sign-in', validateSchema(loginSchema), singIn);

export default userRouter;
