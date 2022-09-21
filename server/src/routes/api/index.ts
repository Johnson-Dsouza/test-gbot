export {};

const express = require("express");
const router = express.Router();
const { router: channelRouter } = require("./channels");

router.use("/channels", channelRouter);

module.exports = router;
