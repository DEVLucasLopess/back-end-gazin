import { RequestHandler } from "express";
import * as yup from "yup";
import { validation } from "../../shared/middlewares";

interface IParamsPropsId {
  id?: number;
}

const deleteByIdValidation: yup.ObjectSchema<IParamsPropsId> = yup.object({
  id: yup
    .number()
    .typeError("Error, esse campo tem que ser númerico e ele é obrigatório!")
    .required("Este campo é obrigatorio e deve ser um valor númerico!"),
});

export const deleteByIdValidations = validation("params", deleteByIdValidation);

export const deleteById: RequestHandler = async (req, res) => {
  console.log(req.params);

  res.send({ message: "Deletado com sucesso!", data: req.params });
  return;
};
