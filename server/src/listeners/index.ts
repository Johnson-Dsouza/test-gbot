const commandListener = require("./commands");

module.exports.handleListeners = (app:any) => {
  commandListener.handle(app);
};
