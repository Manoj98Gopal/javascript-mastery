const pairSum = require("./solution");

describe("All unique pairs of sum", () => {
  it("Test 01", () => {
    expect(pairSum([1, 2, 3, 4, 5], 6)).toEqual([
      [1, 5],
      [2, 4]
    ]);
  });
  it("Test 02", () => {
    expect(pairSum([1, 1, 2, 3, 4, 5], 6)).toEqual([
      [1, 5],
      [2, 4]
    ]);
  });
  it("Test 03", () => {
    expect(pairSum([1, 2, 3], 10)).toEqual([]);
  });
  it("Test 04", () => {
    expect(pairSum([1, 3, 5, 7], 8)).toEqual([
      [1, 7],
      [3, 5]
    ]);
  });
});
