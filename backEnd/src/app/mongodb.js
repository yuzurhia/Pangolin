import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongodb = mongoose
  .connect(process.env.MONGODB_URI, {
    autoIndex: true,
  })
  .then(() => console.log("connect to mongoDB"))
  .catch((err) => console.log("fail to connect"));

export default mongodb;
