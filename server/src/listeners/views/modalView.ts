require("dotenv").config();

type StandupModalArgs = {
  client: {
    chat: { postMessage: Function };
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

  /**
   * Making a request to receive user details
   * using it to populate response as user
   * in the selected channel
   */

  const user = await client.users.profile
    .get({ token: client.token, user: body.user.id })
    .then((data: any) => data)
    .then(
      (data: { profile: { image_192: string; diplay_name: string } }) =>
        data.profile
    );

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
          type: 'section',

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
          mrkdwn_in: ['text'],
          color: '#A66CFF',

          fields: [
            {
              title: 'How do you feel today?',
              value: `${payload.state.values.question_one.question_one.value}`,
              short: false,
            },
          ],
        },
        {
          mrkdwn_in: ['text'],
          color: '#9C9EFE',

          fields: [
            {
              title:
                "What is/are the things that you've done which mattered to the sprint goal since yesterday?",
              value: `${payload.state.values.question_two.question_two.value}`,
              short: false,
            },
          ],
        },
        {
          mrkdwn_in: ['text'],
          color: '#AFB4FF',

          fields: [
            {
              title:
                "What is the next important thing that you will do to achieve the sprint goal?",
              value: `${payload.state.values.question_three.question_three.value}`,
              short: false,
            },
          ],
        },
        {
          mrkdwn_in: ['text'],
          color: '#B1E1FF',

          fields: [
            {
              title: "Any Blockers that need to be addressed by the team?",
              value: `${payload.state.values.question_four.question_four.value}`,
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
      channel: "C0403497QV8",
      // Include a button in the message (or whatever blocks you want!)
      blocks: [
        {
          type: 'section',
          text: {
            type: 'plain_text',
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
