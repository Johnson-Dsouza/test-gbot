import request from "supertest";
import app from "../utils/expressApp";
import { getChannels } from "../services/channels.service";

jest.mock("../services/channels.service");

const mockGetChannels = getChannels as jest.MockedFunction<typeof getChannels>;

mockGetChannels.mockResolvedValueOnce([{ name: "random", id: "1" }]);

app.use("/channels", fetchChannelHandler);
describe("GET", () => {
  describe("/channels", () => {
    it("should return the name of channel as random", async () => {
      const response = await request(app).get("/channels");
      console.log(response);
      expect(response.status).toBe(200);
    });
  });
});
