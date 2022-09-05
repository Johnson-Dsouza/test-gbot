"use strict";
require("dotenv").config();
const { handleListeners } = require("./listeners");
const { App } = require("@slack/bolt");
//initializing the app
const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGINING_SECRET,
    socketMode: true,
    appToken: process.env.SLACK_APP_TOKEN,
});
handleListeners(app);
console.log("running");
app.start(3000);
//# sourceMappingURL=index.js.map