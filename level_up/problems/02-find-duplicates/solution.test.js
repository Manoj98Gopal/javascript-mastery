const findDuplicates = require("./solution");

describe("Find Duplicates function", () => {
  it("test - 01", () => {
    const arr = [1, 2, 3, 2, 4, 3];
    const result = [2, 3];
    expect(findDuplicates(arr)).toEqual(result);
  });

  it("test - 02", () => {
    const arr = [5, 5, 5, 1];
    const result = [5];
    expect(findDuplicates(arr)).toEqual(result);
  });

  it("test - 03", () => {
    const arr = [1, 2, 3];
    const result = [];
    expect(findDuplicates(arr)).toEqual(result);
  });

  it("test - 04", () => {
    const arr = [];
    const result = [];
    expect(findDuplicates(arr)).toEqual(result);
  });
});
