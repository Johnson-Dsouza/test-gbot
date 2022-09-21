export {};
const express = require("express");
const router = express.Router();
const channels = require("../slackApiCalls/getChannels");

type CallBackArgs = {
  req: {};
  res: { status: Function };
};

router.get("/", ({ req, res }: CallBackArgs) => {
  return res.status(200).json({ data: channels });
});

module.exports = router;
