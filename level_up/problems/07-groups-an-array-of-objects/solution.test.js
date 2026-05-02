const groupBy = require("./solution");

const people = [
  { name: "Alice", city: "Delhi" },
  { name: "Bob", city: "Mumbai" },
  { name: "Charlie", city: "Delhi" },
  { name: "David", city: "Mumbai" },
  { name: "Eve", city: "Bangalore" }
];

const result = {
  Delhi: [
    { name: "Alice", city: "Delhi" },
    { name: "Charlie", city: "Delhi" }
  ],
  Mumbai: [
    { name: "Bob", city: "Mumbai" },
    { name: "David", city: "Mumbai" }
  ],
  Bangalore: [{ name: "Eve", city: "Bangalore" }]
};

describe("Group an array of objects", () => {
  it("Test 1", () => {
    expect(groupBy(people, "city")).toEqual(result);
  });
});
