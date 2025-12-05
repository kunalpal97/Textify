import express from "express";
import cookieParser from 'cookie-parser';

import connectDB from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { ENV } from "./lib/env.js";


const PORT = ENV.PORT || 3000;
const app = express();

app.use(express.json()); // req.body mai..jo bhajege wo aayega idhar pe
app.use(cookieParser()); // used when you create a middle ware like protected rotutie project 

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDB();
});
