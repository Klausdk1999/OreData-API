import joi from "joi";


export const amostraSchema = joi.object({
    idFuro:joi.number().required(),
    idUsuario:joi.number().required(),
    intervaloInicio:joi.number().required(),
    intervaloFim:joi.number().required(),
    pesoA:joi.number().required(),
    pesoB:joi.number().required(),
    pesoC:joi.number().required(),
    pesoD:joi.number().required(),
    pesoTotal:joi.number().required(),
    dataUpdate:joi.date().timestamp('unix'),
    agua:joi.number(),
    ar:joi.number(),
    observacao:joi.string()
}); 
