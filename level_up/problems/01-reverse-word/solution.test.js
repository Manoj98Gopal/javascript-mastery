const ReverseWord = require("./solution");

describe("Reverse Word function", () => {
  it("test - 01", () => {
    const sentence = "Hello World";
    const result = "World Hello";
    expect(ReverseWord(sentence)).toBe(result);
  });

  it("test - 02", () => {
    const sentence = "the sky is blue";
    const result = "blue is sky the";
    expect(ReverseWord(sentence)).toBe(result);
  });

  it("test - 03", () => {
    const sentence = "  spaces here  ";
    const result = "here spaces";
    expect(ReverseWord(sentence)).toBe(result);
  });

  it("test - 04", () => {
    const sentence = "one";
    const result = "one";
    expect(ReverseWord(sentence)).toBe(result);
  });
});
