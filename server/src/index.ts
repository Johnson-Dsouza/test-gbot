require("dotenv").config();

const { handleListeners } = require("./listeners");

const { App } = require("@slack/bolt");
const express = require("express");

const app = express();

//initializing the app
const boltApp = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGINING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
});

handleListeners(boltApp);

boltApp.start(8080);

app.listen(8000, () => {
  console.log("Server is running");
});
