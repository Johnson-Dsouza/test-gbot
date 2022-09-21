<<<<<<< HEAD
export {};
const express = require("express");
const router = express.Router();
const channelMembers = require("../slackApiCalls/getChannelMembers");

type CallBackArgs = {
  req: {};
  res: { status: Function };
};

<<<<<<<< HEAD:server/src/services/getChannelMembers.ts
module.exports = { getChannelMembers, channelMembers };
========
router.get("/", async ({ req, res }: CallBackArgs) => {
  return res.status(200).json({ data: channelMembers });
});

module.exports = router;
>>>>>>>> 736fead (refactored the code):server/src/routes/api/channelMembers.ts
=======
let channelMembers: { member_name: string }[] = [];

type GetChannelMemberArgs = {
  client: {
    token: string;
    conversations: { members: Function };
    users: { profile: { get: Function } };
  };
};

const getChannelMembers = async (app: GetChannelMemberArgs) => {
  // this method gets the userId of channel members from the workspace
  await app.client.conversations
    .members({ token: app.client.token, channel: "C0403497QV8" })
    .then((data: { profile: any; members: String[] }) => {
      data.members.forEach((member) => {
        //this method gets the name of the members using userId from above
        app.client.users.profile
          .get({ token: app.client.token, user: member })
          .then(async (data: { profile: { real_name: string } }) => {
            channelMembers.push({ member_name: data.profile.real_name });
          });
      });
    });
};

module.exports = { getChannelMembers, channelMembers };
>>>>>>> 736fead (refactored the code)
