import mongoose from "mongoose";

const dbConnect = async () => {
  try {

    const mongo_url = process.env.MONGO_URL 

    const conn =await mongoose.connect(mongo_url)
    console.log(`mongo db connected:`);
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect