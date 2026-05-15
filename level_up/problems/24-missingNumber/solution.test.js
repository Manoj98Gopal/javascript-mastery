const missingNumber = require("./solution");

describe("missingNumber", () => {
  it("Test 01", () => {
    expect(missingNumber([3, 0, 1])).toBe(2);
  });
  it("Test 02", () => {
    expect(missingNumber([0, 1])).toBe(2);
  });
  it("Test 03", () => {
    expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8);
  });
  it("Test 04", () => {
    expect(missingNumber([0])).toBe(1);
  });
});
    