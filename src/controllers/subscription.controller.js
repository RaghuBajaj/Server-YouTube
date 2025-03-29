import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Subscription } from "../models/subscription.model.js";

const getChannelSubscribers = asyncHandler( async( req, res ) => {

    const { channel } = req.body;   

    const subscribers = await Subscription.find( { channel } ).populate("subscriber");

    if( subscribers.length = 0 ) {
        return res.status(200).json(
            new ApiResponse(200,  subscribers,"Subscribers",)
        )
    }

    if(!subscribers) {
        return res.status(404).json(
            new ApiResponse(404, "Not found", "No subscribers found!")
        )
    }

    return res.status(200).json(
        new ApiResponse(201, "Not found", "Code not found!")
    )
})

const getSubscribedChannels = asyncHandler( async( req, res) => {
    return res.status(200).json(
        new ApiResponse(202, "Not found", "Code not found!")
    )
})

export { getChannelSubscribers, getSubscribedChannels }