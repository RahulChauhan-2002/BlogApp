require("dotenv").config();
const express=require("express");
const app=express();
const dbConnect=require("./config/dbConnect");
dbConnect()



app.use(express.json());

const port=process.env.PORT || 4000 ;

app.listen(port,()=>{
    console.log(`app running on the port ${port}`);
})

