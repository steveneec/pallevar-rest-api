import { Request, Response } from "express";
import Order from "../models/Order";

export async function getOrdersByUser(req: Request, res: Response) {
  try {
    const orders = await Order.find({ owner: req.params.uid });
    res.json({ status: "success", data: orders });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "An error has been ocurred!", error });
  }
}

export async function getOrdersByStore(req: Request, res: Response) {
  try {
    const orders = await Order.find({ seller: req.params.store });
    res.json({ status: "success", data: orders });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "An error has been ocurred!", error });
  }
}

export async function newOrder(req: Request, res: Response) {
  try {
    const order = await Order.create(req.body);
    res.json({ status: "success", data: order });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "An error has been ocurred!", error });
  }
}

export async function updateOrder(req: Request, res: Response) {
  try {
    const order = await Order.findOneAndUpdate(
      { _id: req.params.orderid },
      req.body
    );
    res.json({ status: "success", data: order });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "An error has been ocurred!", error });
  }
}
