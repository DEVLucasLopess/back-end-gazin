import { Router } from "express";
import { NiveisController } from "./../controllers";
const router = Router();

router.get("/", (_, res) => {
  res.send("Hello Dev!");
});

router.post("/niveis", NiveisController.createValidation, NiveisController.create);
router.get("/niveis", NiveisController.getAllValidations, NiveisController.getAll);
router.get("/niveis/:id", NiveisController.getByIdValidations, NiveisController.getById);
router.put("/niveis/:id", NiveisController.updateValidationsBody,NiveisController.updateValidationsParams, NiveisController.update);
router.delete("/niveis/:id", NiveisController.deleteByIdValidations, NiveisController.deleteById);

export { router };
