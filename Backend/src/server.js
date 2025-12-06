import cookieParser from 'cookie-parser';
import cors from "cors";
import express from "express";

import connectDB from "./lib/db.js";
import { ENV } from "./lib/env.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";



const PORT = ENV.PORT || 3000;
const app = express();

app.use(express.json()); // req.body mai..jo bhajege wo aayega idhar pe
app.use(cors({
  origin : [ENV.CLIENT_URL , ENV.CLIENT_URL_PROD],
  credentials : true,
}));
app.use(cookieParser()); // used when you create a middle ware like protected rotutie project 

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDB();
});
