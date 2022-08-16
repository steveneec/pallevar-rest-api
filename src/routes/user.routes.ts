import { Router } from "express";
import * as userController from "../controllers/user.cotroller";

const router = Router();

router.get("/:uid", userController.getUserByFid);

export default router;
