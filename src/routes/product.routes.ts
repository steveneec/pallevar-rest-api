import * as productController from "../controllers/product.controller";
import { uploadProduct } from "../controllers/upload.controller";
import { Router } from "express";

const router = Router();

router.get("/", productController.getLastProducts);
router.get("/store/:store", productController.getProductsByStore);
router.get("/category/cat/:category", productController.getProductsByCategory);
router.post("/", [uploadProduct, productController.newProduct]);
router.post("/multiple/many/get", productController.getManyProducts);

export default router;
