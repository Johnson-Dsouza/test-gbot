const standupMessageMarkup = require("../constants/messageMarkup");

type PostStandupMessageArgs = {
  client: { chat: { postMessage: Function } };
  token: string;
  channel: string;
};

const postStandupMessage = async ({
  token,
  channel,
  client,
}: PostStandupMessageArgs) => {
  try {
    await client.chat.postMessage({
      token,
      // Channel to send message to
      channel,
      // Markup for interactive message
      blocks: standupMessageMarkup,
      // Text in the notification
      text: "Message from G-Bot",
    });
  } catch (error) {
    await client.chat.postMessage({
      token: token,
      channel: channel,
      text: error,
    });
    console.error(error);
  }
};

module.exports = postStandupMessage;
