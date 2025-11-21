
import express from 'express'

const router = express.Router();

router.get("/signup" , (req , res) => {
    res.send("Signup Successfull");
})

router.get("/login" , (req , res) => {
    res.send("Login is done successfull");
})

router.get("/logout" , (req , res) => {
    res.send("Logout is Successfully");
})



export default router;