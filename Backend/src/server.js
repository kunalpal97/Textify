import cookieParser from 'cookie-parser';
import cors from "cors";
import express from "express";

import connectDB from "./lib/db.js";
import { ENV } from "./lib/env.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import {app, server} from "./lib/socket.js";


const PORT = ENV.PORT || 3000;
// const app = express();
app.use(cookieParser()); // used when you create a middle ware like protected rotutie project 
app.use(express.json({limit : "10mb"})); // req.body mai..jo bhajege wo aayega idhar pe
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cors({
  origin : [ENV.CLIENT_URL , ENV.CLIENT_URL_PROD],
  credentials : true,
}));


app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDB();
});
