const sortByFrequency = require("./solution");

describe("Sort by frequency", () => {
  it("Test 01", () => {
    expect(sortByFrequency([1, 1, 2, 3, 3, 3, 2])).toEqual([3, 3, 3, 1, 1, 2, 2]);
  });
  it("Test 02", () => {
    expect(sortByFrequency([4, 4, 1, 2, 2, 3])).toEqual([4, 4, 2, 2, 1, 3]);
  });
  it("Test 03", () => {
    expect(sortByFrequency([1, 2, 3])).toEqual([1, 2, 3]);
  });
  it("Test 04", () => {
    expect(sortByFrequency([])).toEqual([]);
  });
});
