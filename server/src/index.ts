require("dotenv").config();

const { handleListeners } = require("./listeners");
const { App, ExpressReceiver } = require("@slack/bolt");
const standupScheduled = require("./schedulers/standupScheduler");
const handleApiCalls = require("./services/index");
const expressApp = require("./server");
const routes = require("./routes");

const cors = require("cors");

expressApp.use(cors());

const receiver = new ExpressReceiver({
  app: expressApp,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

const slackApp = new App({
  token: process.env.SLACK_BOT_TOKEN,
  receiver,
});

handleListeners(slackApp);

standupScheduled(slackApp);

handleApiCalls(slackApp);

routes(expressApp);

expressApp.listen(process.env.PORT || 8000, () => {
  console.log("⚡️ Bolt app is running! ⚡️");
});

module.exports = expressApp;
