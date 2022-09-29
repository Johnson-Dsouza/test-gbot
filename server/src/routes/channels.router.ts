import express from "express";
import { fetchChannelHandler } from "../controllers/channels.controller";

const router = express.Router();

router.get("/", fetchChannelHandler);

export default router;
