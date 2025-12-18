
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { ENV }  from "../lib/env.js";

export const socketAuthMiddleware = async(socket , next) => {

    try{
        // extract the token from http-only cookie here 

        // cookie 

        const cookie = socket.handshake.headers.cookie;

        if(!cookie){
            return next(new Error("Authentication error : No cookies found"));
        }

        // extract jwt token from cookie
        const token = cookie
            .split("; ")
            .find((row) => row.trim().startsWith("jwt="))
            ?.split("=")[1];

        if(!token){
            console.log("Socket connection rejected : No token Provided");
            return next(new Error("Unauthorized - No Token Provided"));
        }

        // verify the token 

        const decoded = jwt.verify(token , ENV.JWT_SECRET);

        if(!decoded){
            console.log("Socket connection rejected : Invalid token");
            return next(new Error("Unauthorized - Invalid token"));
        }

        const user = await User.findById(decoded.userId).select("-password");
        if(!user){
            console.log("Socket connection rejected : User not found");
            return next(new Error("user not found"));
        }


        // attached the user info with the socket 
        socket.user = user;

        socket.userId = user._id.toString();

        console.log(`Socket authenticated for user ${user.fullname} (${user._id})`);
        next();
    }
    catch(error){
        console.log("Error in socket authentication" , error.message);
        next(new Error("Unauthorized - Authentication failed"));


    }
}