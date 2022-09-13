const messageMarkup = [
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
];

module.exports = messageMarkup;
