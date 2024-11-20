import { RequestHandler } from "express";
import * as yup from "yup";
import { validation } from "../../shared/middlewares";

interface IQueryPropsId {
  id?: number;
}

interface IParamsPropsId {
  nome: string;
}

const getByIdValidation: yup.ObjectSchema<IQueryPropsId> = yup.object({
  id: yup
    .number()
    .typeError("Error, esse campo tem que ser númerico e ele é obrigatório!")
    .required("Este campo é obrigatorio e deve ser um valor númerico!"),
});

const getByIdValidationName: yup.ObjectSchema<IParamsPropsId> = yup.object({
  nome: yup
    .string()
    .min(3, "precisa ter no minimo 3 caracteres no nível")
    .typeError("Error, esse campo tem que ser númerico e ele é obrigatório!")
    .required("Este campo é obrigatorio e deve ser um valor númerico!"),
});

export const updateValidationsParams = validation("params", getByIdValidation);
export const updateValidationsBody = validation("body", getByIdValidationName);
export const update: RequestHandler = async (req, res) => {
  console.log(req.params);
  console.log(req.body);

  res.send({ message: "Criado com sucesso!", data: req.params, body: req.body });
  return;
};
