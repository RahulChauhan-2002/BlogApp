require("dotenv").config();
const express=require("express");
const app=express();
const dbConnect=require("./config/dbConnect");
dbConnect()



app.use(express.json());

const port=process.env.PORT || 4000 ;

const blog=require('./routes/blog')
app.use("/api/v1",blog);

app.listen(port,()=>{
    console.log(`app running on the port ${port}`);
})

