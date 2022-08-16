import * as storeCategoryController from "../controllers/storeCategory.controller";
import { Router } from "express";

const router = Router();

router.get("/", storeCategoryController.getAllCategories);

export default router;
