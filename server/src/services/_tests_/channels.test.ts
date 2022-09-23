//@ts-nocheck
export {};

const request = require("supertest");

const app = require("../../server");

import * as ChannelService from "../channels.service";

jest.mock("../channels.service", () => [
  {
    name: "random",
    id: 1,
  },
]);

const data = [
  {
    name: "random",
    id: 1,
  },
];

describe("GET /channels", () => {
  describe("get channels", () => {
    it("should return the name of channel as random", async () => {
      const createChannelServiceMock = jest
        .spyOn(ChannelService, "getChannels")
        .mockReturnValueOnce(data);
      const response = await request(app).get("/channels");

      expect(response.status).toBe(200);
    });
  });
});
