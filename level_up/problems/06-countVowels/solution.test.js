const countVowels = require("./solution");

describe("Count vowels", () => {
  it("Test 01", () => {
    const input = "hello";
    expect(countVowels(input)).toBe(2);
  });
  it("Test 02", () => {
    const input = "javascript";
    expect(countVowels(input)).toBe(3);
  });
  it("Test 03", () => {
    const input = "why";
    expect(countVowels(input)).toBe(0);
  });
  it("Test 04", () => {
    const input = "AEIOUaeiou";
    expect(countVowels(input)).toBe(10);
  });
  it("Test 05", () => {
    const input = "";
    expect(countVowels(input)).toBe(0);
  });
});
