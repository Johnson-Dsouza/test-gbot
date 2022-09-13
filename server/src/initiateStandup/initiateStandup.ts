require("dotenv").config();

type ScheduleStandupArguments = {
  client: { chat: { postMessage: Function }; token: string };
  context: { botToken: string };
};

const scheduleStandup = async ({
  client,
  context,
}: ScheduleStandupArguments): Promise<void> => {
  const users: string[] | undefined = process.env.USERS?.split(" ");

  users?.forEach(async (user: any) => {
    try {
      await client.chat.postMessage({
        token: client.token,
        // Channel to send message to
        channel: user,
        // Text in the notification
        text: "Message from G-Bot",
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Can you provide responses for standup?*",
            },
          },
          // Include a button in the message
          {
            type: "actions",
            elements: [
              {
                type: "button",
                text: {
                  type: "plain_text",
                  text: "Post Standup",
                  emoji: true,
                },
                style: "primary",
                value: "approve",
                action_id: "button_post_standup",
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
      });
    } catch (error) {
      await client.chat.postMessage({
        token: context.botToken,
        channel: user,
        text: error,
      });
      console.error(error);
    }
  });
};

module.exports = scheduleStandup;
