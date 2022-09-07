const approveButton = require("./postStandup");

type Action = {
  action: Function;
};

module.exports.handle = (app: Action) => {
  app.action("button_approve", approveButton);
};
