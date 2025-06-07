const Comment=require("../models/commentModel");
const Post=require("../models/postModel");

exports.createComment=async(req,res)=>{
    try {
        //fetch data from req body
        const {post,user,body}=req.body;

        //create comment object
        const comment=new Comment({
            post, user, body
        });

        //save the new comment in database
        const savedComment=await comment.save();


        //find post by id and update comment in comment  array
        const updatePost=await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}},{new:true})
        .populate("comments").exec();

        res.json({
            post:updatePost,
        });
    } catch (error) {
        return res.status(500).json({
            error:"Error While creating Comment"
        })
    }
}