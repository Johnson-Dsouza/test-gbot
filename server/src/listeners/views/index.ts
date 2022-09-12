/**
 * This folder contains logic to listen and handle
 * the opening and closing of a modal
 */

const modal = require("./modalView");

type View = {
  view: Function;
};

module.exports.handle = (app: View) => {
  app.view("modal-with-standup-questions", modal);
};
