export {};
const express = require("express");
const router = express.Router();
let channelMembers: { member_name: string }[] = [];

type CallBackArgs = {
  req: {};
  res: { send: Function };
};

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
