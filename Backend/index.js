import express, { json, urlencoded } from "express";
const app = express();
import cookieParser from "cookie-parser";
import cors from "cors";
import { config } from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
import path from "path";
config({});

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOption = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOption));

const PORT = process.env.PORT || 3000;

const _dirname = path.resolve();

//api's
app.use("/api/v1/user", userRoute);
// "http://localhost:8000/api/v1/user/register";
// "http://localhost:8000/api/v1/user/login";
// "http://localhost:8000/api/v1/user/profile/update";
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

app.use(express.static(path.join(_dirname, "/Frontend/dist")));
app.get("*",(req,res)=>{
  res.sendFile(path.resolve(_dirname,"Frontend","dist","index.html"))
});
app.listen(PORT, () => {
  connectDB();
  console.log(`server is running at port ${PORT}`);
});
