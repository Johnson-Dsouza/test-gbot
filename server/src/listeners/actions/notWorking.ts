type NotWorkingArguments = {
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
}: NotWorkingArguments): Promise<void> => {
  await ack();

  /**
   * Making a request to fetch user details
   * to submit the response in the channel selected
   * as user
   */

  const user = client.users.profile
    .get({ token: client.token, user: body.user.id })
    .then((data: any) => data)
    .then(
      (data: { profile: { image_192: string; display_name: string } }) =>
        data.profile
    );

  try {
    await client.chat.postMessage({
      //posting message as a user
      icon_url: user.image_192,
      username: user.display_name,

      token: context.botToken,

      // Channel to send message to
      channel: "C0403497QV8",

      text: `*${user[0].profile.display_name}* has marked as not working today`,
    });
  } catch (error) {
    await client.chat.postMessage({
      token: context.botToken,
      // Channel to send message to
      channel: "C0403497QV8",
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

module.exports = notWorking;
