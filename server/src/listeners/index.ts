const commandListener = require("./commands");
const actionListener = require("./actions");
const viewListener = require("./views");

module.exports.handleListeners = (app: any) => {
  commandListener.handle(app);
  actionListener.handle(app);
  viewListener.handle(app);
};
