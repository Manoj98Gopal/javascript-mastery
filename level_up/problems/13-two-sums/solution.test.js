const twoSum = require("./solution");

describe("Two sum", () => {
  it("Test 01", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
  it("Test 02", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });
  it("Test 03", () => {
    expect(twoSum([1, 5, 3, 7], 8)).toEqual([1, 2]);
  });
  it("Test 04", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });
});
