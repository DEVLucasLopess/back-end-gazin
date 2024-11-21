import { RequestHandler } from "express";
import * as yup from "yup";
import { validation } from "../../shared/middlewares";
import { INiveis } from "../../database/models";
import { NiveisProvider } from "../../database/providers/nivel";
import { StatusCodes } from "http-status-codes";

interface IBodyProps extends INiveis {};

const dataValidation: yup.ObjectSchema<IBodyProps> = yup.object({
  nivel: yup
    .string()
    .required("Nível é um campo obrigatório")
    .min(3, "precisa ter no minimo 3 caracteres no nível"),
});

export const createValidation = validation('body', dataValidation);

export const create: RequestHandler = async (req, res) => {
  
  const result = await NiveisProvider.create(req.body);
  
  if(result instanceof Error) {
   res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message,
      }
    });
    return;
  }

  res.status(StatusCodes.CREATED).json(result);
};
