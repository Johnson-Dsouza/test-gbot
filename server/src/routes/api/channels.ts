export {};
const express = require("express");
const router = express.Router();
const channels = require("../slackApiCalls/getChannels");

type CallBackArgs = {
  req: {};
  res: { send: Function };
};

router.get("/", async ({ req, res }: CallBackArgs) => {
  await res.send({ status: 200, data: channels });
});

module.exports = router;
