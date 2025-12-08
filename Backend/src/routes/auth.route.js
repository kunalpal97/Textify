
import express from 'express'

const router = express.Router();

import { signup , login , logout, updateProfile } from '../controllers/auth.controller.js';
import { protectedRoute } from '../middleware/auth.middleware.js';
import User from '../models/User.js';
import { arcjetProtection } from '../middleware/arcjet.middleware.js';


// router.use(arcjetProtection);

// router.get("/test" , (req , res) => {
//     res.status(200).json({
//         message : "Arcjet is working fine , you are human !"
//     });
// }); testing the rate limiting here 

router.post("/signup"  , signup);
router.post("/login" ,  login);
router.post("/logout" ,  logout);

router.put('/update-profile' , protectedRoute ,  updateProfile);

router.get("/check" , protectedRoute , (req , res) => res.status(200).json(req.user));


export default router;