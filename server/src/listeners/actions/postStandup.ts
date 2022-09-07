type PostStandupdArguments = {
  client: { views: { open: Function } };
  body: { botToken: string; trigger_id: string };
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
      emoji: boolean;
    };
    submit: {
      type: string;
      text: string;
      emoji: boolean;
    };
    close: {
      type: string;
      text: string;
      emoji: boolean;
    };
    blocks: object[];
  };
};

const approveButtonClicked = async ({
  client,
  body,
  ack,
}: PostStandupdArguments): Promise<void> => {
  //acknowledge the request
  ack();

  const questions = [
    { question: "How do you feel?", id: "question_one" },
    { question: "What did you do yesterday?", id: "question_two" },
    { question: "What will you do today?", id: "question_three" },
    { question: "Anything blocking your progress?", id: "question_four" },
  ];

  const obj: StandupQuestionModal = {
    trigger_id: body.trigger_id,
    token: body.botToken,
    view: {
      type: "modal",
      callback_id: "modal-with-inputs",
      title: {
        type: "plain_text",
        text: "Whatsup",
        emoji: true,
      },
      submit: {
        type: "plain_text",
        text: "Submit",
        emoji: true,
      },
      close: {
        type: "plain_text",
        text: "Cancel",
        emoji: true,
      },
      blocks: [],
    },
  };
  questions.forEach((question) =>
    obj.view.blocks.push({
      type: "input",
      element: {
        type: "plain_text_input",
        multiline: true,
        action_id: `${question.id}`,
      },
      block_id: `${question.id}`,
      label: {
        type: "plain_text",
        text: `${question.question}`,
        emoji: true,
      },
    })
  );

  try {
    //Call the views.open method using the WebClient passed to listeners
    await client.views.open(obj);
  } catch (error) {
    console.error(error);
  }
};

module.exports = approveButtonClicked;
