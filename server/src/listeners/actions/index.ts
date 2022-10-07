/**
 * This folder contains the logic and response for handling
 * actions taken by user while interacting with the bot
 * eg:- Clicking a button provided by an interactive message
 */

import { postStandupButton } from "./postStandup";
import { notWorking } from "./notWorking";

type Action = {
  action: Function;
};

module.exports.handle = (app: Action) => {
  app.action("button_post_standup", postStandupButton);
  app.action("button_not_working_today", notWorking);
};
