import mongoose from "mongoose";

const user = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
  },
  fuid: {
    type: String,
    require: true,
    unique: true,
  },
});

export default mongoose.model("User", user);
