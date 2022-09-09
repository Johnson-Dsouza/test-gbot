const postStandup = require("./postStandup");

type Action = {
  action: Function;
};

module.exports.handle = (app: Action) => {
  app.action("button_post_standup", postStandup);
};
