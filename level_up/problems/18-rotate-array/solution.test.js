const rotateArray = require("./solution");

describe("Rotate the array", () => {
  it("Test 01", () => {
    expect(rotateArray([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3]);
  });
  it("Test 02", () => {
    expect(rotateArray([1, 2, 3, 4, 5], 1)).toEqual([5, 1, 2, 3, 4]);
  });
  it("Test 03", () => {
    expect(rotateArray([1, 2, 3], 3)).toEqual([1, 2, 3]);
  });
  it("Test 04", () => {
    expect(rotateArray([1, 2, 3], 5)).toEqual([2, 3, 1]);
  });
  it("Test 05", () => {
    expect(rotateArray([], 2)).toEqual([]);
  });
});
