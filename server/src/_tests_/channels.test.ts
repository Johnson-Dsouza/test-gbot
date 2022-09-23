export {};

const request = require("supertest");

const app = require("../server");

const fetchChannelHandler = require("../controllers/channels.controller.ts");

jest.mock("../services/getChannels", () => [
  { name: "random", id: 1 },
  { name: "g-bot", id: 2 },
  { name: "testing", id: 3 },
]);

app.use("/channels", fetchChannelHandler);

describe("GET /channels", () => {
  describe("get channels", () => {
    it("should return the name of channel as random", async () => {
      const response = await request(app).get("/channels");

      expect(response.status).toBe(200);
    });
  });
});
