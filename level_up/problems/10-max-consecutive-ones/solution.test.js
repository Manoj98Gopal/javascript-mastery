const maxConsecutiveOnes = require("./solution");

describe("Max consecutive ones", () => {
  it("Test 01", () => {
    const input = [1, 1, 0, 1, 1, 1];
    expect(maxConsecutiveOnes(input)).toBe(3);
  });
  it("Test 02", () => {
    const input = [1, 0, 1, 0, 1];
    expect(maxConsecutiveOnes(input)).toBe(1);
  });
  it("Test 03", () => {
    const input = [0, 0, 0];
    expect(maxConsecutiveOnes(input)).toBe(0);
  });
  it("Test 04", () => {
    const input = [1, 1, 1, 1];
    expect(maxConsecutiveOnes(input)).toBe(4);
  });
  it("Test 05", () => {
    const input = [];
    expect(maxConsecutiveOnes(input)).toBe(0);
  });
  it("Test 06", () => {
    const input = [1, 1, 1, 0, 1];
    expect(maxConsecutiveOnes(input)).toBe(3);
  });
  it("Test 07", () => {
    const input = [1, 1, 1, 0, 1, 0, 1, 1];
    expect(maxConsecutiveOnes(input)).toBe(3);
  });
});
