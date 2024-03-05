import express, { Router } from "express";
import { AuthController } from "./controller";

const router: Router = express.Router();

router.post("/register", AuthController.register);
router.get("/login", AuthController.login);

export default router;
