import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { ENV } from "../lib/env.js";

export const protectedRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    // ye kab kaam karege jab cookie parser libaray improted hogi
    // so that we can verify that this is legitmiate cookie here okay
    if (!token) {
      return res.status(401).json({
        message: "Unauthorized User - No Token Provided",
      });
    }

    const decoded = jwt.verify(token, ENV.JWT_SECRET); // jo humhare pass
    // jwt token key hai uss se verify kar ke check karege agar key barobar hai then only verify
    // that user here other bol do tu kon hai be mai..nhi jaanta tujhe

    if (!decoded) {
      return res.status(400).json({
        message: "Unauthorized User - Invalid Token Provided",
      });
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    req.user = user;

    next();
  } catch (error) {
    console.error("Error in ProtectedRoute Middleware:", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
