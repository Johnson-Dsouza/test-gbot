import express from "express";
import { fetchChannelHandler } from "../controllers/channels.controller";
import { fetchChannelMemberHandler } from "../controllers/channels.controller";

const router = express.Router();

router.get("/", fetchChannelHandler);

router.get("/:channel_id/members", fetchChannelMemberHandler);

export default router;
