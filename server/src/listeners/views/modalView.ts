require("dotenv").config();
const userInfo = require("../../utils/userDetails");
import { updatingMessageOnPostingStandup } from "../actions/postStandup";

type StandupModalArgs = {
  client: {
    chat: { postMessage: ({}) => void; update: ({}) => void };
    users: { profile: { get: Function } };
    token: string;
  };
  context: { botToken: string };
  ack: Function;
  payload: { channel_id: string; state: { values: any | object } };
  body: { user: { id: string } };
};

const standupModal = async ({
  ack,
  client,
  payload,
  context,
  body,
}: StandupModalArgs) => {
  await ack();

  const user = await userInfo({ client, body });

  try {
    await client.chat.postMessage({
      //posting message as a user
      icon_url: user.image_192,
      username: user.display_name,
      token: context.botToken,
      // Channel to send message to
      channel: process.env.GATHER_BOT_CHANNEL,
      // Markup for the standup response
      blocks: [
        {
          type: "section",

          text: {
            type: "mrkdwn",
            text: "*Standup from G-bot*",
          },
        },
      ],
      // Text in the notification
      text: "Today's standup G-bot App",
      attachments: [
        {
          mrkdwn_in: ["text"],
          color: "#A66CFF",

          fields: [
            {
              title: "How do you feel today?",
              value: payload.state.values.question_one.question_one.value,
              short: false,
            },
          ],
        },
        {
          mrkdwn_in: ["text"],
          color: "#9C9EFE",

          fields: [
            {
              title:
                "What is/are the things that you've done which mattered to the sprint goal since yesterday?",
              value: payload.state.values.question_two.question_two.value,
              short: false,
            },
          ],
        },
        {
          mrkdwn_in: ["text"],
          color: "#AFB4FF",

          fields: [
            {
              title:
                "What is the next important thing that you will do to achieve the sprint goal?",
              value: payload.state.values.question_three.question_three.value,
              short: false,
            },
          ],
        },
        {
          mrkdwn_in: ["text"],
          color: "#B1E1FF",

          fields: [
            {
              title: "Any Blockers that need to be addressed by the team?",
              value: payload.state.values.question_four.question_four.value,
              short: false,
            },
          ],
        },
      ],
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
  // updating the standup message after submitting response
  try {
    await client.chat.update({
      token: context.botToken,
      channel: updatingMessageOnPostingStandup.userChannelId,
      ts: updatingMessageOnPostingStandup.timeStampValue,
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "Response was submitted:",
          },
        },
      ],

      attachments: [
        {
          mrkdwn_in: ["text"],
          color: "#3a86ff",
          text: "*Thankyou for submitting your response*",
        },
      ],
      text: "Response was submitted by the user",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = standupModal;
