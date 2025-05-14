const mongoose=require("mongoose");


const dbConnect=async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1); // Exit process with failure
    }
}


module.exports=dbConnect;
