import mongoose from "mongoose";

const mongodb = mongoose
  .connect(
    "mongodb+srv://tomy:htH8rXAoGMp95Ky8@pangolindb.gqmcllp.mongodb.net/?retryWrites=true&w=majority",
    {
      autoIndex: true,
    }
  )
  .then(() => console.log("connect to mongoDB"))
  .catch((err) => console.log("fail to connect"));

export default mongodb;
