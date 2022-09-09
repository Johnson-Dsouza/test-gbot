const commandListener = require("./commands");
const actionListener = require("./actions");

module.exports.handleListeners = (app: any) => {
  commandListener.handle(app);
  actionListener.handle(app);
};
