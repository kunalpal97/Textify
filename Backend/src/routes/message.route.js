
import express from 'express';
import { 
    getAllContacts, 
    getChatPartners, 
    getMessageByUserId, 
    sendMessage 
    } from '../controllers/message.controller.js';
import { protectedRoute } from '../middleware/auth.middleware.js';
import { arcjetProtection } from '../middleware/arcjet.middleware.js';

const router = express.Router();

router.use( arcjetProtection, protectedRoute); 
// insted of using the every time 
// in the router we can once use it here only okay 



router.get("/contacts"  , getAllContacts);
router.get("/chats" , getChatPartners);
router.get("/:id"  , getMessageByUserId);
router.post("/send/:id"  , sendMessage);


export default router;