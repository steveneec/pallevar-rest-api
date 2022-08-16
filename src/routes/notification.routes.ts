import { Router } from "express";
import * as notificationController from "../controllers/notification.controller";

const router = Router();

router.get("/user/:uid", notificationController.getNotificationsByUser);
router.get("/store/:store", notificationController.getNotificationsByStore);
router.post("/", notificationController.newNotification);

export default router;
