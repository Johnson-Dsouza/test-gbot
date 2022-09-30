import request from "supertest";
import expressApp from "../server";
import { getChannels } from "../services/channels.service";
import mockChannelData from "../../__mock__/channel.mock";

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
