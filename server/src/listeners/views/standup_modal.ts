type StandupModalArguments = {
  client: { chat: { postMessage: Function } };
  context: { botToken: string };
  ack: Function;
  payload: { channel_id: string; state: { values: any | object } };
};

const standupModal = async ({
  ack,
  client,
  payload,
  context,
}: StandupModalArguments) => {
  await ack();

  try {
    await client.chat.postMessage({
      token: context.botToken,

      // Channel to send message to
      channel: "C03TSR2EE4Q",

      blocks: [
        {
          type: "section",

          text: {
            type: "mrkdwn",
            text: "*Standup from Whatsup Bot*",
          },
        },
      ],

      // Text in the notification
      text: "Today's standup from Whatsup App",
      attachments: [
        {
          mrkdwn_in: ["text"],
          color: "#A66CFF",

          fields: [
            {
              title: "How do you feel today?",
              value: `${payload.state.values.question_one.question_one.value}`,
              short: false,
            },
          ],
        },
        {
          mrkdwn_in: ["text"],
          color: "#9C9EFE",

          fields: [
            {
              title: "What did you do yesterday?",
              value: `${payload.state.values.question_two.question_two.value}`,
              short: false,
            },
          ],
        },
        {
          mrkdwn_in: ["text"],
          color: "#AFB4FF",

          fields: [
            {
              title: "What will you do today?",
              value: `${payload.state.values.question_three.question_three.value}`,
              short: false,
            },
          ],
        },
        {
          mrkdwn_in: ["text"],
          color: "#B1E1FF",

          fields: [
            {
              title: "Is there anything blocking your progress?",
              value: `${payload.state.values.question_four.question_four.value}`,
              short: false,
            },
          ],
        },
      ],
    });
    console.log("modal submitted")
  } catch (error) {
    await app.client.chat.postMessage({
      token: context.botToken,
      // Channel to send message to
      channel: "C03TSR2EE4Q",
      // Include a button in the message (or whatever blocks you want!)
      blocks: [
        {
          type: "section",
          text: {
            type: "plain_text",
            text: `${error}`,
            emoji: true,
          },
        },
      ],

      // Text in the notification
    });
    console.error(error);
  }
};

module.exports = standupModal;
