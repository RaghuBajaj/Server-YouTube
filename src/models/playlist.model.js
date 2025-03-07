import mongoose from "mongoose";

const playlistSchema = new mongoose.Schema( 
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            require: true
        },
        name: {
            type: String,
            require: true
        },
        videos: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Video",
        }],
    }, { timestamps: true } 
);

export const Playlist = mongoose.model("Playlist", playlistSchema);  