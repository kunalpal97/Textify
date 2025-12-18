import { Server } from "socket.io";
import http from "http";
import express from "express";
import { ENV } from "./env.js";
import { socketAuthMiddleware } from "../middleware/socket.auth.middleware.js";

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: [ENV.CLIENT_URL, ENV.CLIENT_URL_PROD],
    credentials: true,
  },
});

// apply authentication middleware to all socket connections

io.use(socketAuthMiddleware);

// we will use this fun to check if user is online or not ?

export function getReceiverSocketId(userId){
    return userSocketMap[userId]
}

// this is to store online user
const userSocketMap = {}; // {userId : socketId};

io.on("connection", (socket) => {
  console.log("A user connected", socket.user.fullname);

  const userId = socket.userId;

  userSocketMap[userId] = socket.id;

  // to build a method where our socket server will tell to all other user that hay guys this A user is online now
  // you can have a chat with him okay
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  // with socket.on we listen the events from the clients

  socket.on("disconnect", () => {
    console.log("A user disconnected", socket.user.fullname);
    delete userSocketMap[userId];

    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});


export {io ,app, server};