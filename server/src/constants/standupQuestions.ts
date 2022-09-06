type Questions = {
  question: string;
  id: string;
};
const questions: Questions[] = [
  { question: 'How do you feel today?', id: 'question_one' },
  {
    question:
      "What is/are the things that you've done which mattered to the sprint goal since yesterday?",
    id: 'question_two',
  },
  {
    question:
      'What is the next important thing that you will do to achieve the sprint goal?',
    id: 'question_three',
  },
  {
    question: 'Any Blockers that need to be addressed by the team?',
    id: 'question_four',
  },
];

module.exports = questions;
