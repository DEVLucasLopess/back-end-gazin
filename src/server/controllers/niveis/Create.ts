import { RequestHandler } from "express";
import * as yup from "yup";
import { validation } from "../../shared/middlewares";

type NiveisType = {
  nivel: string;
};

type NiveisFilter = {
  filter?: string;
}

const bodyValidation: yup.ObjectSchema<NiveisType> = yup.object({
  nivel: yup
    .string()
    .required("Nível é um campo obrigatório")
    .min(3, "precisa ter no minimo 3 caracteres no nível"),
});

const queryValidation: yup.ObjectSchema<NiveisFilter> = yup.object({
  filter: yup
    .string()
    .required("Nível é um campo obrigatório")
    .min(3, "precisa ter no minimo 3 caracteres no nível"),
});

export const createBodyValidation = validation('body', bodyValidation);
export const createValidation = validation('query', queryValidation);

export const create: RequestHandler = async (req, res) => {
  console.log("Deu bom", req.body);
  console.log("Deu bom", req.query);
  res.send({ message: "Create Niveis", data: req.body });
};
