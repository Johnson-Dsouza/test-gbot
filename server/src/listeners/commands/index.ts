const standupCommand = require("./initiateStandup");

type Command = {
  command: Function;
};

module.exports.handle = (app: Command) => {
  app.command("/standup", standupCommand);
};
