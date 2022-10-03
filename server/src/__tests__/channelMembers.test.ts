import request from "supertest";
import expressApp from "../server";
import { getChannelMembers } from "../services/channelMembers.service";
import mockChannelMembersData from "../../__mock__/channelMember.mock";

jest.mock("../services/channelMembers.service");

const mockGetChannelMembers = getChannelMembers as jest.MockedFunction<
  typeof getChannelMembers
>;

describe("Channel Members", () => {
  describe("GET /channelsMembers/:channel_id", () => {
    test("should return the name of the channel member as Dennis Schulist", async () => {
      mockGetChannelMembers.mockResolvedValue(mockChannelMembersData);
      const channel_id = "1234";
      const response = await request(expressApp).get(
        `/channels/${channel_id}/members`
      );
      expect(response.status).toBe(200);
      expect(response.body.data[8].member_name).toBe("Dennis Schulist");
    });
  });
});
