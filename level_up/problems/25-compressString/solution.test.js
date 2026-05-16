const compressString = require("./solution");

describe("compressString", () => {
  it("test case 1", () => {
    expect(compressString("aabcccdddd")).toBe("a2b1c3d4");
  });
  it("test case 2", () => {
    expect(compressString("abcd")).toBe("a1b1c1d1");
  });
  it("test case 3", () => {
    expect(compressString("aaabaa")).toBe("a3b1a2");
  });
  it("test case 4", () => {
    expect(compressString("a")).toBe("a1");
  });
  it("test case 5", () => {
    expect(compressString("")).toBe("");
  });
});
