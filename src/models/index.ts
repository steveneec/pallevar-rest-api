//Enviroment
import "dotenv/config";
//Mongoose
import mongoose from "mongoose";
import initDb from "../libs/init";

export default async function main() {
  //connect to db
  await mongoose.connect(`${process.env.HOST}`);

  //init categories
  initDb()
    .then(() => {
      console.log("init db ok!");
    })
    .catch((error) => console.log(error));
}
