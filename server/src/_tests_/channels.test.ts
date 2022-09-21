export {};

const request = require("supertest");

const app = require("../server");

const channelsRouter = require("../routes/api/channels");

app.use("/api/channels", channelsRouter);

jest.mock("../routes/slackApiCalls/getChannels.ts", () => [
  { name: "random", id: 1 },
  { name: "g-bot", id: 2 },
  { name: "testing", id: 3 },
]);

describe("GET /api/channels", () => {
  describe("get channels", () => {
    it("should return the name of channel as random", async () => {
      const response = await request(app).get("/api/channels");
      expect(response.body.data[0].name).toBe("random");
    });
  });
});
