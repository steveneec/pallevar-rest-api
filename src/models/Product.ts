import mongoose from "mongoose";

const product = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  picture: {
    type: String,
    require: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Store",
    require: true,
  },
});

export default mongoose.model("Product", product);
