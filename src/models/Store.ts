import mongoose from "mongoose";

const store = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
  picture: {
    type: String,
  },
  category: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "StoreCategory",
    },
  ],
  owner: {
    type: String,
  },
});

export default mongoose.model("Store", store);
