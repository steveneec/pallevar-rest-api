import { Request, Response } from "express";
import StoreCategory from "../models/StoreCategory";

export async function getAllCategories(req: Request, res: Response) {
  try {
    const categories = await StoreCategory.find();
    res.json({ status: "success", data: categories });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "An error has been ocurred!", error });
  }
}

export async function newCategory(req: Request, res: Response) {
  try {
    const category = await StoreCategory.create(req.body);
    res.json({ status: "success", data: category });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "An error has been ocurred!", error });
  }
}
