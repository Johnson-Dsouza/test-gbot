import { expressApp } from ".";

const { fetchChannelHandler } = require("./controllers/channels.controller");

const routes = () => {
  expressApp.get("/channels", fetchChannelHandler);
};

export default routes;
