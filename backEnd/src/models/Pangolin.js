import mongoose from "mongoose";

const PangolinSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  nom: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    require: false,
  },
  amis: [{ type: mongoose.Types.ObjectId, ref: "Pangolin" }],
});

export default mongoose.model("Pangolin", PangolinSchema);
