import express from 'express';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js'
import connectDB from './lib/db.js';

dotenv.config();


const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json()); // req.body mai..jo bhajege wo aayega idhar pe 

app.use("/api/auth" , authRoutes);
app.use("/api/messages" , messageRoutes);


app.listen(PORT , () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    connectDB();
})