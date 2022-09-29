import { createApp } from "./createApp";
import expressApp from "./server";
const { handleListeners } = require("./listeners");
const standupScheduled = require("./schedulers/standupScheduler");
const { slackApp } = createApp();

handleListeners(slackApp);

standupScheduled(slackApp);

expressApp.listen(process.env.PORT || 8000, () => {
  console.log("⚡️ Bolt app is running! ⚡️");
});

export { slackApp };
