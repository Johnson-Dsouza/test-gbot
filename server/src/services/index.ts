export {};

const { getChannels } = require("./getChannels");

const handleApiCalls = async (app: any) => {
  await getChannels(app);
};

module.exports = handleApiCalls;
