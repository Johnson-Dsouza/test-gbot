import express from "express";
import { fetchChannelMemberHandler } from "../controllers/channelMembers.controller";

const router = express.Router();

router.get("/:channel_id", fetchChannelMemberHandler);

export default router;
