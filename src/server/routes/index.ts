import { Router } from "express";
import { NiveisController } from "./../controllers";

const router = Router();

router.get("/", (_, res) => {
  res.send("Hello Dev!");
});

router.post(
  "/niveis",
  NiveisController.createBodyValidation,
  NiveisController.createValidation,
  NiveisController.create
);

export { router };
