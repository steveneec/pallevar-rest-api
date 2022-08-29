import { Request, Response } from "express";
import Store from "../models/Store";

export async function getStores(req: Request, res: Response) {
  try {
    const page: number = parseInt(req.params.page);
    const skip: number = page === 1 ? 0 : 10 * (page - 1);

    const stores = await Store.find().skip(skip).limit(10);

    res.json({ status: "success", data: stores });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      status: "error",
      message: "An error has been ocurred!",
      error,
    });
  }
}

export async function getStoresRandom(req: Request, res: Response) {
  try {
    const stores = await Store.aggregate([
      {
        $sample: { size: 5 },
      },
    ]).exec();

    const storesPopulate = await Store.populate(stores, { path: "category" });

    res.json({ status: "success", data: storesPopulate });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "An error has been ocurred!", error });
  }
}

export async function getStoreById(req: Request, res: Response) {
  try {
    const store = await Store.findOne({ _id: req.params.storeid }).populate(
      "category"
    );
    res.json({ status: "success", data: store });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "An error has been ocurred!", error });
  }
}

export async function getStoresByCategory(req: Request, res: Response) {
  try {
    const page: number = parseInt(req.params.page);
    const skip: number = page === 1 ? 0 : 10 * (page - 1);
    const stores = await Store.find({ category: req.params.category })
      .skip(skip)
      .limit(10);
    res.json({ status: "success", data: stores });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "An error has been ocurred!", error });
  }
}

export async function getStoreByOwner(req: Request, res: Response) {
  try {
    const store = await Store.findOne({ owner: req.params.owner });

    const storePopulate = await Store.populate(store, { path: "category" });

    res.json({ status: "success", data: storePopulate });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "An error has been ocurred!", error });
  }
}

export async function newStore(req: Request, res: Response) {
  try {
    //@ts-ignore
    req.body.picture = req.imagestore;

    //extract categories

    const cat: string = req.body.category.split(",");

    req.body.category = cat;

    const store = await Store.create(req.body);
    res.json({ status: "success", data: store });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "An error has been ocurred!", error });
  }
}

export async function updateStore(req: Request, res: Response) {
  try {
    //@ts-ignore
    if (req.imagestore) {
      //@ts-ignore
      req.body.picture = req.imagestore;
    }

    const cat: string = req.body.category.split(",");
    req.body.category = cat;

    const store = await Store.findByIdAndUpdate(req.params.id, req.body);

    res.json({ status: "success", data: store });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "An error has been ocurred!", error });
  }
}

export async function getManyStores(req: Request, res: Response) {
  try {
    const stores = req.body.stores;

    const _stores = await Store.find({ _id: { $in: stores } });

    res.json({ status: "success", data: _stores });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "An error has been ocurred!", error });
  }
}
