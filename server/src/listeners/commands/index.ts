/**
 * This folder contains the logic and response for handling the pre-defined
 * commands by the Bot admin to perform various task when ran
 * by the user in slack workspace
 * eg:- Running the command "/standup" will return an interactive message
 * with buttons to Post a standup or Mark the absence
 */

const standupCommand = require("./initiateStandup");

type Command = {
  command: Function;
};

module.exports.handle = (app: Command) => {
  app.command("/standup", standupCommand);
};
