import mongoose from "mongoose";

const user = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
    require: true,
  },
  fuid: {
    type: String,
    require: true,
    unique: true,
  },
});

export default mongoose.model("User", user);
