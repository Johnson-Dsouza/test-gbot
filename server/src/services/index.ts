export {};

const { getChannels } = require("./getChannels");
const { getChannelMembers } = require("./getChannelMembers");

const handleApiCalls = async (app: any) => {
  await getChannels(app);
  await getChannelMembers(app);
};

module.exports = handleApiCalls;
