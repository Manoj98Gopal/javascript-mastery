const makeCounter = require("./solution");

describe("Counter using closure", () => {
  it("Testing the counter", () => {
    const counter = makeCounter();
    expect(counter.increment()).toBe(1);
    expect(counter.increment()).toBe(2);
    expect(counter.decrement()).toBe(1);
    expect(counter.reset()).toBe(0);
  });
});
