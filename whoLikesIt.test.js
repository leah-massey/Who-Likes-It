const likes = require("./whoLikesIt");

describe("likes", () => {
  it("returns the name of the person who likes the post", () => {
    expect(likes(["James"])).toEqual("James likes this");
  });

  it("returns the name of the two people who like the post", () => {
    expect(likes(["Jacob", "Alex"])).toEqual("Jacob and Alex like this");
  });

  it("includes the names of all three people who like the post", () => {
    expect(likes(["Max", "John", "Mark"])).toEqual(
      "Max, John and Mark like this"
    );
  });

  it("returns the correct result when more than 4 names are inputted", () => {
    expect(likes(["Alex", "Jacob", "Mark", "Max"])).toEqual(
      "Alex, Jacob and 2 others like this"
    );
  });

  it("returns the a statement if the array is empty", () => {
    expect(likes([])).toEqual("no one likes this");
  });

  it("throws error", () => {
    expect(() => likes("peter")).toThrow("Input not in correct format.");
  });
});
