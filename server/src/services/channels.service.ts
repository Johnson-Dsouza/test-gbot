export {};
let channels: { name: string; id: string }[] = [];

async function getChannels(app: any) {
  const data = await app.client.conversations.list();

  data.channels.forEach((channel: { name: string; id: string }) =>
    channels.push({ name: channel.name, id: channel.id })
  );
}

export { getChannels, channels };
