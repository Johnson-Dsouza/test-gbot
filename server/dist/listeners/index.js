"use strict";
const commandListener = require("./commands");
module.exports.handleListeners = (app) => {
    commandListener.handle(app);
};
//# sourceMappingURL=index.js.map