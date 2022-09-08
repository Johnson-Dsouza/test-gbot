const postStandup = require("./postStandup");
const notWorkingResponse = require("./notWorking");

type Action = {
  action: Function;
};

module.exports.handle = (app: Action) => {
  app.action("button_post_standup", postStandup);
  app.action("button_not_working_today", notWorkingResponse);
};
