require("dotenv").config();

const { App } = require("@slack/bolt");

//initializing the app
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGINING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
});


