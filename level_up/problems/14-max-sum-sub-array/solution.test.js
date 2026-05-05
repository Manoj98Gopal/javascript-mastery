const maxSumSubarray = require("./solution");

describe("Maximum sum sub array", () => {
  it("Test 01", () => {
    expect(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)).toBe(9);
  });
  it("Test 02", () => {
    expect(maxSumSubarray([1, 4, 2, 10, 2, 3], 4)).toBe(18);
  });
  it("Test 03", () => {
    expect(maxSumSubarray([5,5,5,5], 2)).toBe(10);
  });
  it("Test 04", () => {
    expect(maxSumSubarray([1,2,3], 3)).toBe(6);
  });
});
