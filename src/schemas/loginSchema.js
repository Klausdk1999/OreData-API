import joi from "joi";

export const loginSchema = joi.object({
    login: joi.string().max(30).required(),
    senha: joi.string().required()
  });