const Anagram = require("./solution");

describe("Checking string is Anagram", () => {
  it("Test 01", () => {
    expect(Anagram("listen", "silent")).toBe(true);
  });
  it("Test 02", () => {
    expect(Anagram("hello", "world")).toBe(false);
  });
  it("Test 03", () => {
    expect(Anagram("anagram", "nagaram")).toBe(true);
  });
  it("Test 04", () => {
    expect(Anagram("rat", "car")).toBe(false);
  });
  it("Test 05", () => {
    expect(Anagram("ab", "abc")).toBe(false);
  });
  it("Test 06", () => {
    expect(Anagram("aab", "abb")).toBe(false);
  });
   it("Test 07", () => {
    expect(Anagram("", "")).toBe(true);
  });
});
