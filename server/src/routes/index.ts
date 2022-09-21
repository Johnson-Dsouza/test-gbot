export {};
const express = require("express");
const router = express.Router();

const { getChannels } = require("./api/channels");

const api = require("./api");

const handleApiCalls = async (app: any) => {
  await getChannels(app);
};

router.use("/api", api);

module.exports = { router, handleApiCalls };
