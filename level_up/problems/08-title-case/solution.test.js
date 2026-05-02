const titleCase = require("./solution");

describe("Title case", () => {
  it("Test 01", () => {
    const input = "hello world";
    const output = "Hello World";
    expect(titleCase(input)).toBe(output);
  });
  it("Test 02", () => {
    const input = "the quick brown fox";
    const output = "The Quick Brown Fox";
    expect(titleCase(input)).toBe(output);
  });
  it("Test 03", () => {
    const input = "javaScript is GREAT";
    const output = "Javascript Is Great";
    expect(titleCase(input)).toBe(output);
  });
  it("Test 04", () => {
    const input = "";
    const output = "";
    expect(titleCase(input)).toBe(output);
  });
});
