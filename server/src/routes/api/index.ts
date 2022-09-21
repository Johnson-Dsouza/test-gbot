export {};

const express = require("express");
const router = express.Router();
const channelRouter = require("./channels");

router.use("/channels", channelRouter);

module.exports = router;
