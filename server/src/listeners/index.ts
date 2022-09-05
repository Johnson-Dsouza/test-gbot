const commandListener = require("./commands");

module.exports.handleListeners = (app:{}) => {
  commandListener.handle(app);
};
