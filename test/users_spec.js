const expect = require("chai").expect;
const request = require("supertest");

const app = require("../index");

describe("Users", () => {

  it("GET /users should return a 200 status code and an array of users", (done) => {
    request(app)
    .get("/users")
    .end((err, result) => {
      expect(result.status).to.equal(200);
      expect(result.body).to.be.an("array");
      done();
    });
  });

});
