import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Playlist } from "../models/playlist.model.js";

const createPlaylist = asyncHandler( async(req, res) => {
    const { user, name } = req.body;

    if([user, name].some((field) => field.trim() == "")){
        throw new ApiError(400, "All fields are required!");
    }

    const existedPlaylist = Playlist.findOne({
        $and:[ {user}, {name}]
    })

    if(existedPlaylist){
        throw new ApiError(400, "Playlist already exists!")
    }

    const newPlaylist = await Playlist.create({
        user,
        name
    })

    const createdPlaylist = await Playlist.findById(newPlaylist._id)

    if(!createdPlaylist){
        throw new ApiError(500, " Some error occured while creating playlist!")
    }

    return res.status(200).json(
        new ApiResponse(201, createdPlaylist, "Playlist is created")
    )
});

const getUserPlaylists = asyncHandler( async(req, res) =>{
    const { user } = req.body;
    
    if(user.trim() == ""){
        throw new ApiError(401, "User is required!")        
    }

    const playlists = await Playlist.find({user})

    if(!playlists){
        throw new ApiError(402, "No playlist found!")
    }

    return res.status(200).json(
        new ApiResponse(201, playlists, "Playlist is retrieved!")
    )
})

const getPlaylist = asyncHandler( async(req, res) => {

    const { user, name } = req.body;

    if([user, name].some((item)=> item.trim() == "")){
        throw new ApiError(401, "All fields are required!")
    }
    
    const existedPlaylist = await Playlist.find({
        $and:[ {user}, {name} ]
    })

    if(!existedPlaylist){
        throw new ApiError(402, "Playlist does not exists!")
    }

    return res.status(200).json(
        new ApiResponse(201, existedPlaylist, "playlist is send!")
    )
})

const addToPlaylist = asyncHandler( async(req, res) => {
    //const { user, name}
    const msg = "code not found!"
    return res.status(200).json(
        new ApiResponse(200, msg, "addToPlaylist code is yet to write!")
    )
})

const removeVideoFromPlaylist = asyncHandler( async(req, res) => {
    const msg = "code not found!"
    return res.status(200).json(
        new ApiResponse(200, msg, "removeVideoFromPlaylist code is yet to write!")
    )
})

export { createPlaylist, getUserPlaylists, getPlaylist, addToPlaylist, removeVideoFromPlaylist }