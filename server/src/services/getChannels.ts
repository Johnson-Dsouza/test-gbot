export {};
let channels: { name: string; id: string }[] = [];

const getChannels = async (app: any) => {
  await app.client.conversations.list().then((data: any) => {
    data.channels.forEach((channel: { name: string; id: string }) => {
      channels.push({ name: channel.name, id: channel.id });
    });
  });
};

module.exports = { getChannels, channels };
