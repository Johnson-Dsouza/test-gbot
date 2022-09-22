export {};
import { Express, Request, Response } from "express";

const fetchChannelHandler = require("./controllers/channels.controller");

const routes = (app: Express) => {
  app.get("/channels", fetchChannelHandler);
};

module.exports = routes;
