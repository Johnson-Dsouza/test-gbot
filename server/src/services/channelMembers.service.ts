import {
  ConversationsMembersResponse,
  UsersProfileGetResponse,
} from "@slack/web-api";
import { slackApp } from "..";

type ChannelMemberDetails = {
  member_name?: string;
  member_id: number;
};

export const getChannelMembers = async (channel: string) => {
  let channelMembers: ChannelMemberDetails[] = [];
  // this method gets the userId of channel members from the workspace
  const data: ConversationsMembersResponse =
    await slackApp.client.conversations.members({
      token: slackApp.client.token,
      channel,
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
