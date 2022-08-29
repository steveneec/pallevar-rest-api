import { Request, Response } from "express";
import Product from "../models/Product";

export async function getLastProducts(req: Request, res: Response) {
  try {
    const products = await Product.find().limit(20).populate("owner");
    res.json({ status: "success", data: products });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "An error has been ocurred!", error });
  }
}

/*export async function findProduct(req: Request, res: Response) {
  try {
  } catch (error) {}
}*/

export async function getProductsByStore(req: Request, res: Response) {
  try {
    const products = await Product.find({ owner: req.params.store }).populate(
      "owner"
    );
    res.json({ status: "success", data: products });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "An error has been ocurred!", error });
  }
}

export async function getProductsByCategory(req: Request, res: Response) {
  try {
    const products = await Product.aggregate([
      {
        $sample: {
          size: 10,
        },
      },
    ]).exec();

    const productsPopulate = await Product.populate(products, {
      path: "owner",
      match: { category: req.params.category },
    });
    res.json({ status: "success", data: productsPopulate });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "An error has been ocurred!", error });
  }
}

export async function newProduct(req: Request, res: Response) {
  try {
    //@ts-ignore
    req.body.picture = req.imageproduct;
    const product = await Product.create(req.body);
    res.json({ status: "success", data: product });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "An error has been ocurred!", error });
  }
}

export async function getManyProducts(req: Request, res: Response) {
  try {
    const products = req.body.products;

    const _products = await Product.find({ _id: { $in: products } });

    res.json({ status: "success", data: _products });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "An error has been ocurred!", error });
  }
}
