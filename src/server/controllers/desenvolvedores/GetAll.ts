// import { RequestHandler } from "express";
// import * as yup from "yup";
// import { validation } from "../../shared/middlewares";

// interface IQueryProps {
//     page?: number;
//     limit?: number;
//     filter?: string;
// }

// const getAllValidation: yup.ObjectSchema<IQueryProps> = yup.object({
//     page: yup.number().typeError('Error, esse campo tem que ser númerico e ele é obrigatório!')
//     .required('Este campo é obrigatorio e deve ser um valor númerico!'),
//     filter: yup.string().typeError('Este campo tem que ser texto e ele é obrigatório!')
//     .required('Este campo é obrigatorio e deve ser um valor númerico!'),
//     limit: yup.number().typeError('Error, esse campo tem que ser texto e ele é obrigatório!')
//     .required('Este campo é obrigatorio e deve ser um valor númerico!'),
// });

// export const getAllValidations = validation('query', getAllValidation);

// export const getAll: RequestHandler = async (req, res) => {
//   res.send({ message: "Criado com sucesso!", data: req.query });
//   return;
// };