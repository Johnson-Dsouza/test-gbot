import { appendFile } from "fs";

require("dotenv").config();

const { handleListeners } = require("./listeners");
const { App, ExpressReceiver } = require("@slack/bolt");

const express = require("express");
const expressApp = express();

const receiver = new ExpressReceiver({
  app: expressApp,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

const slackApp = new App({
  token: process.env.SLACK_BOT_TOKEN,
  receiver,
});

handleListeners(slackApp);

expressApp.listen(process.env.PORT || 8000, () => {
  console.log("⚡️ Bolt app is running! ⚡️");
});
