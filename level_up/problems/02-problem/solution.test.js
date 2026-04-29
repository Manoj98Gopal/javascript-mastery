const subtraction = require("./solution");

describe("subtraction", () => {
  it("should return the difference of two numbers", () => {
    expect(subtraction(5, 2)).toBe(3);
  });
});
