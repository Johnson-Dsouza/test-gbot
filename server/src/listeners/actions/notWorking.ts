require("dotenv").config();
const userData = require("../../utils/userDetails");

type NotWorkingArgs = {
  client: {
    chat: { postMessage: Function };
    users: { profile: { get: Function } };
    token: string;
  };
  context: { botToken: string };
  ack: Function;

  body: { user: { id: string } };
};

const notWorking = async ({
  client,
  context,
  ack,
  body,
}: NotWorkingArgs): Promise<void> => {
  await ack();

  const user = await userData({ client, body });

  try {
    await client.chat.postMessage({
      //posting message as a user
      icon_url: user.image_192,
      username: user.display_name,
      token: context.botToken,
      // Channel to send message to
      channel: process.env.GATHER_BOT_CHANNEL,
      text: `*${user.display_name}* reported as not working today`,
    });
  } catch (error) {
    await client.chat.postMessage({
      token: context.botToken,
      // Channel to send message to
      channel: process.env.GATHER_BOT_CHANNEL,
      // Include a button in the message (or whatever blocks you want!)
      blocks: [
        {
          type: "section",
          text: {
            type: "plain_text",
            text: error,
            emoji: true,
          },
        },
      ],
    });
    console.error(error);
  }
};

module.exports = notWorking;
