import mongoose from "mongoose";

const storeCategory = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  picture: {
    type: String,
    require: true,
  },
});

export default mongoose.model("StoreCategory", storeCategory);
