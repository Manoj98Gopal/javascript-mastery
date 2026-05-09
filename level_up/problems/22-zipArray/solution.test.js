const zipArrays = require("./solution");

describe("Zip array", () => {
  it("Test 01", () => {
    expect(zipArrays([1, 2, 3], ["a", "b", "c"])).toEqual([[1,"a"], [2,"b"], [3,"c"]]);
  });
  it("Test 02", () => {
    expect(zipArrays([1, 2], ["a", "b", "c"])).toEqual([[1,"a"], [2,"b"]]);
  });
  it("Test 03", () => {
    expect(zipArrays([], [1, 2, 3])).toEqual([]);
  });
  it("Test 04", () => {
    expect(zipArrays([1, 2, 3], [])).toEqual([]);
  });
});
