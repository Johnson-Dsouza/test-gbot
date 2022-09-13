const scheduledStandup = require("./initiateStandup");
const cron = require("node-cron");

// This function is used to send a message to
// users reminding them for their standup submission

const standupScheduler = (app: any) => {
  // Calls the function provided in second argument
  // at 9:30 AM on weekdays

  cron.schedule("30 9 * * 1-5", () => {
    scheduledStandup(app);
  });
};

module.exports = standupScheduler;
