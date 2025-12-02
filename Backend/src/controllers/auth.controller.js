import { sendWelcomeEmail } from "../email/emailHandlers.js";
import { ENV } from "../lib/env.js";
import { generateToken } from "../lib/utils.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  const { fullname, email, password } = req.body;

  try {
    if (!fullname || !email || !password) {
      return res.staus(400).json({
        message: "Plese Enter every Details Correctly ",
      });
    }

    // check if password length is greater then 6 or not

    if (password.length < 6) {
      return res.status(400).json({
        message: "Password Should be Atleast 6 character long",
      });
    }

    // check if email valid or not we will use regx

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Please Enter valid Email",
      });
    }

    // yaha pe humko pta rehna chahiye ki kon se user ne wo email le liya taki duplicate email na aayege
    // using model we can have a track of that okay
    const user = await User.findOne({ email });
    if (user)
      return res.status(400).json({
        message: "Email already exists",
      });

    // and for password hashing we will use the bcrypt so that password will be safe and secure here

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullname,
      email,
      password: hashedPassword,
    });

    if (newUser) {
      const saveUser = await newUser.save();
      generateToken(newUser._id, res);

      res.status(201).json({
        _id: newUser._id,
        fullname: newUser.fullname,
        email: newUser.email,
        profilePic: newUser.profilePic,
      });

    
    // Below is the Logic where user Will get the Email 
    // after they First Time Login 

    try{
      await sendWelcomeEmail(saveUser.email , saveUser.fullname , ENV.CLIENT_URL);

    } catch(error){
      console.error("failed to send welcome email : ", error);

    }
    
    } else {
      res.status(400).json({
        message: "Invalid user data",
      });
    }
  } catch (error) {
    console.log("Error in signup controller", error);

    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const login = async (req, res) => {};

export const logout = async (req, res) => {};
