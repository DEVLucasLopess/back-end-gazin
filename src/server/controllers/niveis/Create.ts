import { RequestHandler } from "express";
import * as yup from "yup";
import { validation } from "../../shared/middlewares";

type NiveisType = {
  nivel: string;
};

const dataValidation: yup.ObjectSchema<NiveisType> = yup.object({
  nivel: yup
    .string()
    .required("Nível é um campo obrigatório")
    .min(3, "precisa ter no minimo 3 caracteres no nível"),
});

export const createValidation = validation('body', dataValidation);

export const create: RequestHandler = async (req, res) => {
  res.send({ message: "Create Niveis", data: req.body });

  

  return;
};
