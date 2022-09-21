export {};

const request = require("supertest");
const express = require("express");

const app = require("../server");

app.use(express.json());

const channelMembersRouter = require("../routes/api/channelMembers");

app.use("/api/channelMembers", channelMembersRouter);

jest.mock("../routes/slackApiCalls/getChannelMembers.ts", () => [
  { member_name: "mario", id: 1 },
  { member_name: "scooby", id: 2 },
  { member_name: "doo", id: 3 },
]);

describe("GET /api/channelMembers", () => {
  describe("get channels", () => {
    it("should return the name of channel as mario", async () => {
      const response = await request(app).get("/api/channelMembers");
      console.log(response._data);
      expect(response.body.data[0].member_name).toBe("mario");
    });
  });
});
