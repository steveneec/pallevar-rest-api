import mongoose from "mongoose";

const notification = new mongoose.Schema({
  message: {
    type: String,
    require: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  store: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Store",
  },
  isread: {
    type: Boolean,
    require: true,
  },
});

export default mongoose.model("Notification", notification);
