import mongoose from "mongoose";

const historySchema = new mongoose.Schema( 
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
    }, { timestamps: true }
);

export const History = mongoose.model("History", historySchema);