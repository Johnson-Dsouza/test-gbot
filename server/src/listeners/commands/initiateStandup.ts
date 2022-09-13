const initiateStandupOnCommand = require("../../services/postMessage");

type StandupArgs = {
  client: { chat: { postMessage: Function } };
  context: { botToken: string };
  ack: Function;
  payload: { channel_id: string };
};

const initiateStandup = async ({
  client,
  context,
  ack,
  payload,
}: StandupArgs): Promise<void> => {
  await ack();

  const token = context.botToken;
  const channel = payload.channel_id;

  initiateStandupOnCommand({ token, channel, client });
};

module.exports = initiateStandup;
