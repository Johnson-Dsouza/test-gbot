"use strict";
const { standupCommand } = require("./standup_command_called");
module.exports.handle = (app) => {
    app.command("/standup", standupCommand);
};
//# sourceMappingURL=index.js.map