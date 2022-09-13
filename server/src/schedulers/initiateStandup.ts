require("dotenv").config();
const initiateStandupOnSchedule = require("../services/postMessage");

type ScheduleStandupArguments = {
  client: { chat: { postMessage: Function }; token: string };
};

const scheduleStandup = async ({
  client,
}: ScheduleStandupArguments): Promise<void> => {
  const users: string[] | undefined = process.env.USERS?.split(" ");
  const token = client.token;

  users?.forEach(async (channel: string) => {
    initiateStandupOnSchedule({ token, channel, client });
  });
};

module.exports = scheduleStandup;
