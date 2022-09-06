const modal = require("./standup_modal");

type View = {
  view: Function;
};

module.exports.handle = (app: View) => {
  app.view("modal-with-standup-questions", modal);
};
