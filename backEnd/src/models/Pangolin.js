import mongoose from "mongoose";

const PangolinSchema = new mongoose.Schema({
  nom: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  role: {
    type: "Guerrier" | "Alchimiste" | "Sorcier" | "Espions" | "Enchanteur",
    require: false,
  },
  amis: [{ type: mongoose.Types.ObjectId, ref: "Pangolin" }],
});

export default mongoose.model("Pangolin", PangolinSchema);
