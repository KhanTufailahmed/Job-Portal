import { connect } from "mongoose";

const connectDB = async () => {
  try {
    await connect(process.env.MONGO_URI);
    console.log("Mongodb Connected successfully");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
