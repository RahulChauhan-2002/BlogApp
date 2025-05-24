//import mongoose
const mongoose=require("mongoose");

//route Handler

const likeSchema=new mongoose.Schema({
    post:{
        Type:mongoose.Schema.Types.ObjectId,
        ref:"Post"
    },
    user:{
        type:String,
        require:true
    }
});

//export 
module.exports=mongoose.model("Like",likeSchema);
