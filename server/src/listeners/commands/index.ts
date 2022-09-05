const  standupCommand  = require("./standup_command_called");

type Command = {
 command : Function 
}

module.exports.handle = (app:Command) => {

  app.command("/standup", standupCommand);
};
