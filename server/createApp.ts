require("dotenv").config();

import { App, ExpressReceiver } from "@slack/bolt";
import express from "express";
import cors from "cors";

const expressApp = express();
expressApp.use(cors());

export const createApp = () => {
  const receiver = new ExpressReceiver({
    app: expressApp,
    signingSecret: process.env.SLACK_SIGNING_SECRET!,
  });

  const slackApp = new App({
    token: process.env.SLACK_BOT_TOKEN,
    receiver,
  });

  return { slackApp, expressApp };
};
