export {};
import { Express } from "express";

const fetchChannelHandler = require("./controllers/channels.controller");
const fetchChannelMemberHandler = require("./controllers/channelMembers.controller");

const routes = (app: Express) => {
  app.get("/channels", fetchChannelHandler);

  app.get("/channelMembers", fetchChannelMemberHandler);
};

module.exports = routes;
