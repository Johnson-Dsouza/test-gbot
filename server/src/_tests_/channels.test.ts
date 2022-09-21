export {};
// const supertest = require("supertest");
// const app = require("../server");
const request = require("supertest");
jest.mock("../routes/api/channels.ts");

describe("channel", () => {
  describe("get channels", () => {
    it("should return status code as 200", async () => {
      const response = await request("http://localhost:8000").get(
        "/api/channels"
      );

      console.log(response.body);
      //expect(response.body.data).toBe("hello");
    });
  });
});
