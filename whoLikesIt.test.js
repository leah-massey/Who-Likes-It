const likes = require("./whoLikesIt");

describe("likes", () => {
  it("returns the name of the person who likes the post", () => {
    expect(likes(["Peter"])).toEqual("Peter likes this");
  });
});
