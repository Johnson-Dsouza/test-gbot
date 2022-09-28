import { createApp } from "./createApp";
import routes from "./routes";
const { handleListeners } = require("./listeners");
const standupScheduled = require("./schedulers/standupScheduler");
const { slackApp } = createApp();
import expressApp from "./server";

routes();

handleListeners(slackApp);

standupScheduled(slackApp);

expressApp.listen(process.env.PORT || 8000, () => {
  console.log("⚡️ Bolt app is running! ⚡️");
});

export { slackApp, expressApp };
