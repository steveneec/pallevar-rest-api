import User from "../models/User";
import { Request, Response } from "express";

export async function getUserByFid(req: Request, res: Response) {
  try {
    const user = await User.find({ fuid: req.params.uid }, [
      "-__v",
      "-fuid",
      "-_id",
    ]);
    res.json({ status: "success", data: user });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: "error", message: "An error has been ocurred!", error });
  }
}
