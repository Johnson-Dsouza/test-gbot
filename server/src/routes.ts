export {};
import { Express } from "express";

const fetchChannelHandler = require("./controllers/channels.controller");

const routes = (app: Express) => {
  app.get("/channels", fetchChannelHandler);
};

module.exports = routes;
