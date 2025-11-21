
import express from 'express';

const router = express.Router();


router.get("/send" , (req,res) => {
    res.send("You are seeing the message");
})


export default router;