// Import mongoose
const mongoose = require("mongoose");

// Schema definition
const likeSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Post",
        required: true            
    },
    user: {
        type: String,
        required: true   
    }
});

// Export model
module.exports = mongoose.model("Like", likeSchema);
