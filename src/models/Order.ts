import mongoose from "mongoose";

const productKeySchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  count: {
    type: Number,
  },
});

const order = new mongoose.Schema({
  products: [
    {
      type: productKeySchema,
    },
  ],
  owner: {
    type: String,
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Store",
    require: true,
  },
  status: {
    type: String,
    default: "pending",
    require: true,
  },
  buyDate: {
    type: mongoose.Schema.Types.Date,
    default: new Date(),
    require: true,
  },
  reservationDate: {
    type: mongoose.Schema.Types.Date,
    require: true,
  },
});

export default mongoose.model("Order", order);
