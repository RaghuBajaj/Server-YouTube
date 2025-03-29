import { Router } from "express";
import { createPlaylist, getPlaylist, addToPlaylist, removeVideoFromPlaylist, getUserPlaylists } from "../controllers/playlist.controller.js";

const router = Router();

router.route("/createPlaylist").post(createPlaylist);
router.route("/getUserPlaylists").post(getUserPlaylists);
router.route("/getPlaylist").get(getPlaylist);  
router.route("/addToPlaylist").post(addToPlaylist); 
router.route("/removeVideoFromPlaylist").post(removeVideoFromPlaylist);

export default router