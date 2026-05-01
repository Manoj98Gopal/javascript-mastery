const flattenArray = require("./solution");

describe("Flatten Array", () => {
  it("Test 01", () => {
    const input = [1, [2, 3], [4, [5, 6]]];
    const result = [1, 2, 3, 4, 5, 6];
    expect(flattenArray(input)).toEqual(result);
  });
  it("Test 02", () => {
    const input = [[1, 2], [3, 4], [5]];
    const result = [1, 2, 3, 4, 5];
    expect(flattenArray(input)).toEqual(result);
  });
  it("Test 03", () => {
    const input = [1, [2, [3, [4, [5]]]]];
    const result = [1, 2, 3, 4, 5];
    expect(flattenArray(input)).toEqual(result);
  });
  it("Test 04", () => {
    const input = [];
    const result = [];
    expect(flattenArray(input)).toEqual(result);
  });
});



