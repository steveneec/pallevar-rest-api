import User from "../models/User";
import { Request, Response } from "express";

export async function signin(req: Request, res: Response) {
  try {
    //search for user
    const user = await User.find({ fuid: req.body.fuid }, ["-__v"]);
    if (!user) {
      //return
      res.json({ status: "error", message: "User not found!" });
    }
    //return user
    res.json({ status: "success", data: user });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "An error has been ocurred!", error });
  }
}

export async function signup(req: Request, res: Response) {
  try {
    const user = await User.create(req.body);
    res.json({ status: "success", data: user });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "An error has been ocurred!", error });
  }
}
