const likes = require("./whoLikesIt");

describe("likes", () => {
  it("returns the name of the person who likes the post", () => {
    expect(likes(["James"])).toEqual("James likes this");
  });

  it("returns the name of the people who likes the post", () => {
    expect(likes(["Jacob", "Alex"])).toEqual("Jacob and Alex like this");
  });
});
