const longestWord = require("./solution");

describe("Identify Longest word", () => {
  it("Test 1", () => {
    expect(longestWord("The quick brown fox")).toBe("quick");
  });
  it("Test 2", () => {
    expect(longestWord("I love JavaScript")).toBe("JavaScript");
  });
  it("Test 3", () => {
    expect(longestWord("cat bat hat")).toBe("cat");
  });
  it("Test 4", () => {
    expect(longestWord("Hello World")).toBe("Hello");
  });
  it("Test 5", () => {
    expect(longestWord("")).toBe("");
  });
});
