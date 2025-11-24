
import mongoose from 'mongoose'


export const connectDB = async () => {

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongodb Connected Successfully ✅ : " , conn.connection.host);
    }
    catch (error){
        console.error("Mongodb Connection faild ❌" , error);
        process.exit(1); // here the 1 status code is for failed and 0 means success

    }

}


export default connectDB;