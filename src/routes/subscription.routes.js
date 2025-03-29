import { Router } from "express";   
import { getChannelSubscribers, getSubscribedChannels } from "../controllers/subscription.controller.js";

const router = Router();

router.route("/getChannelSubscribers").post(getChannelSubscribers)
router.route("/getSubscribedChannels").get(getSubscribedChannels)

export default router