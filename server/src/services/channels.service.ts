import {
  Channel,
  ConversationsListResponse,
} from "@slack/web-api/dist/response/ConversationsListResponse";
import { slackApp } from "..";

type ChannelDetails = {
  name?: string;
  id?: string;
};

export const getChannels = async () => {
  let channels: ChannelDetails[] = [];
  const data: ConversationsListResponse =
    await slackApp.client.conversations.list();
  if (data.channels) {
    data.channels.forEach((channel: Channel) =>
      channels.push({ name: channel.name, id: channel.id })
    );
  }

  return channels;
};
