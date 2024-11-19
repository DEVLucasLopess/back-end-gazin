import { Router } from "express";
import { StatusCodes } from 'http-status-codes'

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post('/teste', (req: any, res: any) => {
  return res.status(StatusCodes.UNAUTHORIZED).json(req.body);
});

export { router };
