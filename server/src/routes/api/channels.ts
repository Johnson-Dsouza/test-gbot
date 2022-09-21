export {};
const express = require("express");
const router = express.Router();
let channels: { name: string; id: string }[] = [];

type CallBackArgs = {
  req: {};
  res: { send: Function };
};

const getChannels = async (app: any) => {
  await app.client.conversations.list().then((data: any) => {
    data.channels.forEach((channel: { name: string; id: string }) => {
      channels.push({ name: channel.name, id: channel.id });
    });
  });
};

router.get("/", async ({ req, res }: CallBackArgs) => {
  await res.send({ status: 200, data: channels });
});

module.exports = { router, getChannels };
