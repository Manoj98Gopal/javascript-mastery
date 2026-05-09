const memoize = require("./solution")

describe("memoize function", () => {

  test("should return correct result", () => {

    const sum = (a, b) => a + b;

    const memoizedSum = memoize(sum);

    expect(memoizedSum(2, 3)).toBe(5);

  });

});