const standupQuestions = require("../../constants/standupQuestions");

export let updatingMessageOnPostingStandup: {
  userChannelId: string;
  timeStampValue: string;
} = {
  userChannelId: "",
  timeStampValue: "",
};

type PostStandupArgs = {
  client: { views: { open: Function } };
  body: {
    botToken: string;
    trigger_id: string;
    channel: { id: string };
    container: { message_ts: string };
  };
  ack: Function;
};

type StandupQuestionModal = {
  trigger_id: string;
  token: string;
  view: {
    type: string;
    callback_id: string;
    title: {
      type: string;
      text: string;
    };
    submit: {
      type: string;
      text: string;
    };
    close: {
      type: string;
      text: string;
    };
    blocks: object[];
  };
};

type StandupQuestion = { question: string; id: string };

export const postStandupButton = async ({
  client,
  body,
  ack,
}: PostStandupArgs): Promise<void> => {
  //acknowledge the request
  ack();

  //storing user channel id
  updatingMessageOnPostingStandup.userChannelId = body.channel.id;

  //storing time stamp
  updatingMessageOnPostingStandup.timeStampValue = body.container.message_ts;

  const standupModal: StandupQuestionModal = {
    trigger_id: body.trigger_id,
    token: body.botToken,
    view: {
      type: "modal",
      callback_id: "modal-with-standup-questions",
      title: {
        type: "plain_text",
        text: "G-bot",
      },
      submit: {
        type: "plain_text",
        text: "Submit",
      },
      close: {
        type: "plain_text",
        text: "Cancel",
      },
      blocks: [],
    },
  };

  standupQuestions.forEach((question: StandupQuestion) =>
    standupModal.view.blocks.push({
      type: "input",
      element: {
        type: "plain_text_input",
        multiline: true,
        action_id: question.id,
      },
      block_id: question.id,
      label: {
        type: "plain_text",
        text: question.question,
      },
    })
  );

  try {
    //Call the views.open method using the WebClient passed to listeners
    await client.views.open(standupModal);
  } catch (error) {
    console.error(error);
  }
};
