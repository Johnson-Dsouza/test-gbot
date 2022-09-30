import express, { Application } from "express";
import cors from "cors";
import channelsRouter from "./routes/channels.router";

const expressApp: Application = express();
expressApp.use(cors());

expressApp.use("/channels", channels);
expressApp.use("/channelMembers", channelMemberRouter);

export default expressApp;
