const sumDigits = require("./solution");

describe("Sum digits using recursion", () => {
  it("Test 01", () => {
    expect(sumDigits(123)).toBe(6);
  });
  it("Test 02", () => {
    expect(sumDigits(456)).toBe(15);
  });
  it("Test 03", () => {
    expect(sumDigits(9)).toBe(9);
  });
  it("Test 04", () => {
    expect(sumDigits(0)).toBe(0);
  });
  it("Test 05", () => {
    expect(sumDigits(9999)).toBe(36);
  });
});
