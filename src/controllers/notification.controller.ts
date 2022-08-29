import { Request, Response } from "express";
import Notification from "../models/Notification";

export async function getNotificationsByUser(req: Request, res: Response) {
  try {
    const notification = await Notification.find({ owner: req.params.uid });
    res.json({ status: "success", data: notification });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "An error has been ocurred!", error });
  }
}

export async function getNotificationsByStore(req: Request, res: Response) {
  try {
    const notification = await Notification.find({ store: req.params.store });
    res.json({ status: "success", data: notification });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "An error has been ocurred!", error });
  }
}

export async function newNotification(req: Request, res: Response) {
  try {
    const notification = await Notification.create(req.body);
    res.json({ status: "success", data: notification });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "An error has been ocurred!", error });
  }
}

export async function deleteNotification() {
  try {
  } catch (error) {}
}
