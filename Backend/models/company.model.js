import { Schema, model } from "mongoose";
import mongoose from "mongoose";

const companySchmea = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
    website: {
      type: String,
    },
    location: {
      type: String,
    },
    logo: {
      type: String, //url to company logo
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { timestamps: true }
);
const Company = mongoose.model("Company", companySchmea);

export default Company;
