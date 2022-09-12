/**
 * This folder contains the logic and response for handling
 * actions taken by user while interacting with the bot
 * eg:- Clicking a button provided by an interactive message
 */

const postStandup = require("./postStandup");
const notWorkingResponse = require("./notWorking");

type Action = {
  action: Function;
};

module.exports.handle = (app: Action) => {
  app.action("button_post_standup", postStandup);
  app.action("button_not_working_today", notWorkingResponse);
};
