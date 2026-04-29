const addition = require("./solution");

describe("addition", () => {
  it("should return the sum of two numbers", () => {
    expect(addition(2, 3)).toBe(5);
  });
});
