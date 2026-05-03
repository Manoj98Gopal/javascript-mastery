const invertObject = require("./solution");

describe("Invert object :", () => {
  it("Test 01", () => {
    const input = { a: 1, b: 2, c: 3 };
    const result = { 1: "a", 2: "b", 3: "c" };
    expect(invertObject(input)).toEqual(result);
  });
  it("Test 02", () => {
    const input = { name: "Alice", city: "Delhi" };
    const result = { Alice: "name", Delhi: "city" };
    expect(invertObject(input)).toEqual(result);
  });
  it("Test 03", () => {
    const input = {};
    const result = {};
    expect(invertObject(input)).toEqual(result);
  });
});
