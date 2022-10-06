import {
  Channel,
  ConversationsListResponse,
} from "@slack/web-api/dist/response/ConversationsListResponse";
import {
  ConversationsMembersResponse,
  UsersProfileGetResponse,
} from "@slack/web-api";
import { slackApp } from "..";

type ChannelDetails = {
  name?: string;
  id?: string;
};

type ChannelMemberDetails = {
  member_name?: string;
  member_id: number;
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

// method for extracting channel members
export const getChannelMembers = async (channel_id: string) => {
  let channelMembers: ChannelMemberDetails[] = [];
  // this method gets the userId of channel members from the workspace
  const data: ConversationsMembersResponse =
    await slackApp.client.conversations.members({
      token: slackApp.client.token,
      channel: channel_id,
    });

  if (data.members) {
    for (let [index, member] of data.members.entries()) {
      //this method gets the name of the members using userId from above
      const memberDetail: UsersProfileGetResponse =
        await slackApp.client.users.profile.get({
          token: slackApp.client.token,
          user: member,
        });

      channelMembers.push({
        member_name: memberDetail.profile?.real_name,
        member_id: index,
      });
    }
  }
  return channelMembers;
};
