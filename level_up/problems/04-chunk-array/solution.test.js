const chunkArray = require("./solution");

describe("chunkArray", () => {
  it("test case 1", () => {
    const array = [1, 2, 3, 4, 5];
    const size = 2;
    const expected = [[1, 2], [3, 4], [5]];
    expect(chunkArray(array, size)).toEqual(expected);
  });

  it("test case 2", () => {
    const array = [1, 2, 3, 4, 5, 6];
    const size = 3;
    const expected = [
      [1, 2, 3],
      [4, 5, 6]
    ];
    expect(chunkArray(array, size)).toEqual(expected);
  });

  it("test case 3", () => {
    const array = [1, 2, 3];
    const size = 5;
    const expected = [[1, 2, 3]];
    expect(chunkArray(array, size)).toEqual(expected);
  });

  it("test case 4", () => {
    const array = [];
    const size = 3;
    const expected = [];
    expect(chunkArray(array, size)).toEqual(expected);
  });
});
