import request from "supertest";
import expressApp from "../server";
import { getChannels } from "../services/channels.service";
import mockChannelData from "../../__mock__/channel.mock";
import { getChannelMembers } from "../services/channels.service";
import mockChannelMembersData from "../../__mock__/channelMember.mock";

jest.mock("../services/channels.service");

const mockGetChannels = getChannels as jest.MockedFunction<typeof getChannels>;

describe("Channels", () => {
  describe("GET /channels", () => {
    test("should return the name of channel as random", async () => {
      mockGetChannels.mockResolvedValue(mockChannelData);
      const response = await request(expressApp).get("/channels");
      expect(response.status).toBe(200);
      expect(response.body.data[0].name).toBe("random");
    });
  });
});

// test for channel members route
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
