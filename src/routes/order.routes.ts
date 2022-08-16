import * as orderController from "../controllers/order.controller";
import { Router } from "express";

const router = Router();

router.post("/", orderController.newOrder);
router.get("/user/:uid", orderController.getOrdersByUser);
router.get("/store/:store", orderController.getOrdersByStore);
router.put("/:orderid", orderController.updateOrder);
router.post("/", orderController.newOrder);

export default router;
