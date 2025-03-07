import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"; // read about it

const videoSchema = new mongoose.Schema(
    {
        videoFile:{
            type: String, //url
            required: true
        },
        thumbnail:{
            type: String,
            required: true
        },
        title:{
            type: String,
            required: true
        },
        description:{
            type: String,
            required: true
        },
        duration:{
            type: Number,
            required: true
        },
        views:{
            type: Number,
            default: 0
        },
        likes: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }],
        dislikes: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }],
        owner:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        isPublished:{
            type: Boolean,
            default: true
        },
        tags: [{
            type: String
        }],
    },
    { timestamps : true }
);

videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoSchema);