const removeDuplicates = require("./solution");

describe("Remove duplicates", () => {
  it("Test 01", () => {
    const input = [1, 2, 2, 3, 4, 4, 5];
    const result = [1, 2, 3, 4, 5];
    expect(removeDuplicates(input)).toEqual(result);
  });
  it("Test 02", () => {
    const input = ["a", "b", "a", "c"];
    const result = ["a", "b", "c"];
    expect(removeDuplicates(input)).toEqual(result);
  });
  it("Test 03", () => {
    const input = [1, 1, 1, 1];
    const result = [1];
    expect(removeDuplicates(input)).toEqual(result);
  });
  it("Test 04", () => {
    const input = [];
    const result = [];
    expect(removeDuplicates(input)).toEqual(result);
  });
});
