import express, { Application } from "express";
import cors from "cors";
import channelsRouter from "./routes/channels.router";
import channelMemberRouter from "./routes/channelMembers.route";

const expressApp: Application = express();
expressApp.use(cors());

expressApp.use("/channels", channelsRouter);
expressApp.use("/channelMembers", channelMemberRouter);

export default expressApp;
