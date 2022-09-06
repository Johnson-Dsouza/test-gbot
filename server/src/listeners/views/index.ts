const modal = require("./modalView");

type View = {
  view: Function;
};

module.exports.handle = (app: View) => {
  app.view("modal-with-standup-questions", modal);
};
