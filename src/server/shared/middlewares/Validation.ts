import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { ObjectSchema, ValidationError } from "yup";

type TValidation = (field: 'body' | 'header' | 'params' | 'query', scheme: ObjectSchema<any>) => RequestHandler;

export const validation: TValidation = (field, scheme) => async (req, res, next) => {
    
    try {
      await scheme.validate(req[field], { abortEarly: false });
      return next();
    } catch (err) {

      const yupError = err as ValidationError;

      const errors: Record<string, string> = {};

      yupError.inner.forEach(error => {
        if(error.path === undefined) return; 
            errors[error.path] = error.message;
      });

      res.status(StatusCodes.BAD_REQUEST).json({ errors });
    }
  };
