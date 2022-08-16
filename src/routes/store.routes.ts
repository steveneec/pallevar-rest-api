import * as storeController from "../controllers/store.controller";
import { uploadStore } from "../controllers/upload.controller";
import { Router } from "express";

const router = Router();

router.post("/", [uploadStore, storeController.newStore]);
router.get("/id/:storeid", storeController.getStoreById);
router.get("/random", storeController.getStoresRandom);
router.get("/:page", storeController.getStores);
router.get("/owner/:owner", storeController.getStoreByOwner);
router.get("/:category/:page", storeController.getStoresByCategory);

export default router;
