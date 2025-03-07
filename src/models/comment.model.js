import mongoose from "mongoose";

const commentSchema = new mongoose.Schema( 
    {
        video: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Video",
            require: true
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            require: true
        },
        text: {
            type: String,
            require: true
        },
        likes: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }],
        dislikes: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }],
    }, { timestamps: true }
);

export const Comment = mongoose.model("Comment", commentSchema);

    