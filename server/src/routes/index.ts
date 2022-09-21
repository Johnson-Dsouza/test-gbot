export {};
const express = require("express");
const router = express.Router();

const { getChannels } = require("./slackApiCalls/getChannels");

const api = require("./api");

const handleApiCalls = async (app: any) => {
  await getChannels(app);
};

router.use("/api", api);

module.exports = { router, handleApiCalls };
