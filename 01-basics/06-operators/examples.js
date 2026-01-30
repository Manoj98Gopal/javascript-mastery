// Arithmetic operators

let a = 10;
let b = 3;

const addition = a + b;
const subtraction = a - b;
const multiplications = a * b;
const division = a / b;
const modulus = a % b;
const exponentiation = a ** b;

console.log("Addition: ", addition); // 13
console.log("Subtraction: ", subtraction); // 7
console.log("Multiplication: ", multiplications); // 30
console.log("Division: ", division); // 3.3333...
console.log("Modulus: ", modulus); // 1
console.log("Exponentiation: ", exponentiation); // 1000

// Assignment operators

let x = 5;

console.log("Initial x:", x); // 5
console.log("x += 3:", (x += 3)); // 8
console.log("x -= 2:", (x -= 2)); // 6
console.log("x *= 4:", (x *= 4)); // 24
console.log("x /= 3:", (x /= 3)); // 8
console.log("x %= 5:", (x %= 5)); // 3
console.log("x **= 2:", (x **= 2)); // 9

// Comparison operators

const p = 7;
const q = "7";

console.log("p == q:", p == q); // true
console.log("p === q:", p === q); // false
console.log("p != q:", p != q); // false
console.log("p !== q:", p !== q); // true
console.log("p > 5:", p > 5); // true
console.log("p < 10:", p < 10); // true
console.log("p >= 7:", p >= 7); // true
console.log("p <= 6:", p <= 6); // false

// increment and decrement operators

let count = 0;

console.log("Initial count:", count); // 0
console.log("Post-increment:", count++); // 0
console.log("After post-increment:", count); // 1
console.log("Pre-increment:", ++count); // 2
console.log("After pre-increment:", count); // 2
console.log("Post-decrement:", count--); // 2
console.log("After post-decrement:", count); // 1
console.log("Pre-decrement:", --count); // 0
console.log("After pre-decrement:", count); // 0

// ternary operator

const age = 20;
const canVote = age >= 18 ? "Yes, can vote." : "No, cannot vote.";
console.log("Can vote:", canVote); // Yes, can vote.

// Nullish coalescing operator

let value = null ?? "default";
console.log("Nullish coalescing:", value); // default

value = undefined ?? "default";
console.log("Nullish coalescing with 0:", value); // default

value = 0 ?? "default";
console.log("Nullish coalescing with 0:", value); // 0

value = "" ?? "default";
console.log("Nullish coalescing with empty string:", value); // ""

// Different from ||:
0 || "default"; // "default" (0 is falsy)
0 ?? "default"; // 0 (0 is not null/undefined)

// optional chaining operator

const user = {
  name: "Alice",
  address: {
    city: "Wonderland"
  }
};

console.log("User city:", user.address?.city); // Wonderland
console.log("User zip code:", user.address?.zipCode); // undefined
console.log("User phone number:", user.contact?.phoneNumber); // undefined

// Equality operators with objects

const obj1 = { key: "value" };
const obj2 = { key: "value" };
const obj3 = obj1;

console.log("obj1 == obj2:", obj1 == obj2); // false
console.log("obj1 === obj2:", obj1 === obj2); // false
console.log("obj1 === obj3:", obj1 === obj3); // true

// Logical operators
const boolA = true;
const boolB = false;

console.log("boolA && boolB:", boolA && boolB); // false
console.log("boolA || boolB:", boolA || boolB); // true
console.log("!boolA:", !boolA); // false
console.log("!boolB:", !boolB); // true

// typeof operator
console.log("typeof 42:", typeof 42); // number
console.log("typeof 'hello':", typeof "hello"); // stringss
console.log("typeof true:", typeof true); // boolean
console.log("typeof undefined:", typeof undefined); // undefined
console.log("typeof null:", typeof null); // object
console.log("typeof {}:", typeof {}); // object
console.log("typeof []:", typeof []); // object
console.log("typeof function():", typeof function () {}); // function

// delete operator

const sampleObj = {
  prop1: "value1",
  prop2: "value2"
};

console.log("Before delete:", sampleObj); // { prop1: 'value1', prop2: 'value2' }
delete sampleObj.prop1;
console.log("After delete:", sampleObj); // { prop2: 'value2' }
