type StandupCommandArguments = {
  client: { chat: { postMessage: Function } };
  context: { botToken: string };
  ack: Function;
  payload: { channel_id: string };
};

const standupCommandCalled = async ({
  client,
  context,
  ack,
  payload,
}: StandupCommandArguments): Promise<void> => {
  await ack();
  try {
    await client.chat.postMessage({
      token: context.botToken,
      // Channel to send message to
      channel: payload.channel_id,
      // Include a button in the message
      blocks: [
        {
          type: "actions",
          elements: [
            {
              type: "button",
              text: {
                type: "plain_text",
                text: "Approve",
                emoji: true,
              },
              style: "primary",
              value: "approve",
              action_id: "button_approve",
            },
            {
              type: "button",
              text: {
                type: "plain_text",
                text: "Not Working Today",
                emoji: true,
              },
              style: "danger",
              value: "not_working_today",
              action_id: "button_not_working_today",
            },
          ],
        },
      ],
      // Text in the notification
      text: "Message from G-Bot",
    });
  } catch (error) {
    await client.chat.postMessage({
      token: context.botToken,
      channel: payload.channel_id,
      text: `${error}`,
    });
    console.error(error);
  }
};

module.exports = standupCommandCalled;
