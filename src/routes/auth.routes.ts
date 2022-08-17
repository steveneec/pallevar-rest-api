import { Router } from "express";
import * as authController from "../controllers/auth.controller";

const router = Router();

router.post("/signin", authController.signin);
router.post("/signup", authController.signup);

export default router;
