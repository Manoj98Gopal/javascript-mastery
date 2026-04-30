const isPalindrome = require("./solution");

describe("isPalindrome", () => {
  it("test 01", () => {
    const input = "racecar";
    expect(isPalindrome(input)).toBe(true);
  });
  it("test 02", () => {
    const input = "hello";
    expect(isPalindrome(input)).toBe(false);
  });
  it("test 03", () => {
    const input = "A man a plan a canal Panama";
    expect(isPalindrome(input)).toBe(true);
  });
  it("test 04", () => {
    const input = "Never odd or even";
    expect(isPalindrome(input)).toBe(true);
  });
  it("test 05", () => {
    const input = "";
    expect(isPalindrome(input)).toBe(true);
  });
});
