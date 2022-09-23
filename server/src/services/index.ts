export {};

const { getChannels } = require("./channels.service");

const handleApiCalls = async (app: any) => {
  await getChannels(app);
};

module.exports = handleApiCalls;
