// import jwt from "jsonwebtoken";
// import { ENV } from "./env.js";

// export const generateToken = (userId, res) => {
//   // token for the user

//   const { JWT_SECRET } = ENV;

//   if (!JWT_SECRET) {
//     throw new Error("JWT_SECRET is not Configured");
//   }
//   const token = jwt.sign({ userId: userId }, JWT_SECRET, {
//     expiresIn: "7d",
//   });

//   res.cookie("jwt", token, {
//     maxAge: 7 * 24 * 60 * 60 * 1000, // this is in MILI second
//     httpOnly: true, // this will prevents XSS attacks : cross-site scripting
//     sameSite: "strict", // CSRF attack prevention
//     secure: ENV.NODE_ENV === "development" ? false : true,
//   });

//   return token;
// };

import jwt from "jsonwebtoken";
import { ENV } from "./env.js";

export const generateToken = (userId, res) => {
  const { JWT_SECRET, NODE_ENV } = ENV;

  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not Configured");
  }

  const token = jwt.sign(
    { userId },
    JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "none",              // 🔥 MUST for Vercel ↔ Render
    secure: NODE_ENV === "production", // 🔥 MUST true on prod
  });

  return token;
};
