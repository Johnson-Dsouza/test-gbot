const scheduledStandup = require("../initiate standup/initiateStandup");
const cron = require("node-cron");

/**
 * This function is used to send a message
 * to users reminding them for their standup
 * submission
 */

const standupScheduler = (app: any) => {
  cron.schedule("7 9 * * 1-5", function () {
    scheduledStandup(app);
  });
};

module.exports = standupScheduler;
