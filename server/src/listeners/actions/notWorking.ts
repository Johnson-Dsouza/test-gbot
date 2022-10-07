require("dotenv").config();
const userData = require("../../utils/userDetails");

let updatingMessageWhenNotWorking: {
  userChannelId: string;
  timeStampValue: string;
} = {
  userChannelId: "",
  timeStampValue: "",
};

type NotWorkingArgs = {
  client: {
    chat: { postMessage: ({}) => void; update: ({}) => void };
    users: { profile: { get: Function } };
    token: string;
  };
  context: { botToken: string };
  ack: Function;

  body: {
    user: { id: string };
    channel: { id: string };
    container: { message_ts: string };
  };
};

export const notWorking = async ({
  client,
  context,
  ack,
  body,
}: NotWorkingArgs): Promise<void> => {
  await ack();

  const user = await userData({ client, body });

  //storing user channel id
  updatingMessageWhenNotWorking.userChannelId = body.channel.id;

  //storing time stamp
  updatingMessageWhenNotWorking.timeStampValue = body.container.message_ts;

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
  // updating the standup message after clicking not working
  try {
    await client.chat.update({
      token: context.botToken,
      channel: updatingMessageWhenNotWorking.userChannelId,
      ts: updatingMessageWhenNotWorking.timeStampValue,
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "You are marked as not working today",
          },
        },
      ],
      text: "Response was submitted by the user",
    });
  } catch (error) {
    console.log(error);
  }
};
