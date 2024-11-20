// import { RequestHandler } from "express";
// import * as yup from "yup";
// import { validation } from "../../shared/middlewares";

// interface IQueryPropsId {
//   id?: number;
// }

// const getByIdValidation: yup.ObjectSchema<IQueryPropsId> = yup.object({
//   id: yup
//     .number()
//     .typeError("Error, esse campo tem que ser númerico e ele é obrigatório!")
//     .required("Este campo é obrigatorio e deve ser um valor númerico!"),
// });

// export const getByIdValidations = validation("params", getByIdValidation);

// export const getById: RequestHandler = async (req, res) => {
//   console.log(req.params);

//   res.send({ message: "Busca feita com sucesso!", data: req.params });
//   return;
// };
