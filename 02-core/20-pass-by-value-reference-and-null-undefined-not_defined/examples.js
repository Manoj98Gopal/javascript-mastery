// ============================================
// PASS BY VALUE VS REFERENCE
// null, undefined, not defined
// Complete Examples
// ============================================

// --------------------------------------------
// EXAMPLE 1: PASS BY VALUE (PRIMITIVES)
// --------------------------------------------

console.log("=== EXAMPLE 1: Pass by Value ===");

let x = 10;
let y = x; // Copy of value

y = 20; // Change copy

console.log("x:", x); // 10 (original unchanged)
console.log("y:", y); // 20 (copy changed)

/*
Primitives (number, string, boolean, etc.):
- Pass by value
- Copy is created
- Changes to copy don't affect original
*/

// --------------------------------------------
// EXAMPLE 2: PASS BY VALUE IN FUNCTION
// --------------------------------------------

console.log("\n=== EXAMPLE 2: Pass by Value in Function ===");

function changeValue(num) {
  num = 100; // Changes local copy only
  console.log("Inside function:", num); // 100
}

let value = 10;
changeValue(value);
console.log("Outside function:", value); // 10 (unchanged)

/*
What happens:
1. value (10) is passed
2. Copy is created as parameter 'num'
3. num is changed to 100 (only copy)
4. Original value remains 10
*/

// --------------------------------------------
// EXAMPLE 3: PASS BY REFERENCE (OBJECTS)
// --------------------------------------------

console.log("\n=== EXAMPLE 3: Pass by Reference ===");

let obj1 = { name: "Manoj" };
let obj2 = obj1; // Copy of reference (both point to same object)

obj2.name = "Kumar"; // Modify through obj2

console.log("obj1.name:", obj1.name); // "Kumar" (original affected!)
console.log("obj2.name:", obj2.name); // "Kumar"

/*
Objects:
- Pass by reference (copy of reference)
- Both variables point to SAME object
- Changes through either variable affect the object
*/

// --------------------------------------------
// EXAMPLE 4: PASS BY REFERENCE IN FUNCTION
// --------------------------------------------

console.log("\n=== EXAMPLE 4: Pass by Reference in Function ===");

function changeObject(obj) {
  obj.name = "Changed"; // Modifies original object
  console.log("Inside function:", obj.name); // "Changed"
}

const person = { name: "Manoj" };
changeObject(person);
console.log("Outside function:", person.name); // "Changed" (affected!)

/*
What happens:
1. Reference to person is passed
2. Copy of reference is created as 'obj'
3. Both point to SAME object
4. Modifying obj.name changes the original object
*/

// --------------------------------------------
// EXAMPLE 5: MUTATION VS REASSIGNMENT
// --------------------------------------------

console.log("\n=== EXAMPLE 5: Mutation vs Reassignment ===");

// Mutation - affects original
function mutate(obj) {
  obj.age = 25; // Modifying property
  console.log("After mutation:", obj);
}

// Reassignment - doesn't affect original
function reassign(obj) {
  obj = { age: 30 }; // Reassignment
  console.log("After reassignment:", obj);
}

const user = { age: 20 };

mutate(user);
console.log("After mutate call:", user); // { age: 25 } (affected!)

reassign(user);
console.log("After reassign call:", user); // { age: 25 } (unchanged!)

/*
KEY DIFFERENCE:
- Mutation (obj.prop = x): affects original
- Reassignment (obj = {}): doesn't affect original
*/

// --------------------------------------------
// EXAMPLE 6: ARRAYS (PASS BY REFERENCE)
// --------------------------------------------

console.log("\n=== EXAMPLE 6: Arrays Pass by Reference ===");

function addElement(arr) {
  arr.push(4); // Modifies original array
}

const numbers = [1, 2, 3];
addElement(numbers);
console.log("After adding:", numbers); // [1, 2, 3, 4] (affected!)

/*
Arrays are objects:
- Pass by reference
- Modifications affect original
*/

// --------------------------------------------
// EXAMPLE 7: SHALLOW COPY WITH SPREAD
// --------------------------------------------

console.log("\n=== EXAMPLE 7: Shallow Copy with Spread ===");

const original = { name: "Manoj", age: 25 };
const copy = { ...original }; // Shallow copy

copy.name = "Kumar";
copy.age = 30;

console.log("Original:", original); // { name: "Manoj", age: 25 }
console.log("Copy:", copy); // { name: "Kumar", age: 30 }

/*
Spread operator creates shallow copy:
- First level is copied
- Changes to copy don't affect original
*/

// --------------------------------------------
// EXAMPLE 8: SHALLOW COPY LIMITATION
// --------------------------------------------

console.log("\n=== EXAMPLE 8: Shallow Copy Limitation ===");

const original2 = {
  name: "Manoj",
  address: {
    city: "Bangalore"
  }
};

const shallowCopy = { ...original2 };
shallowCopy.address.city = "Mumbai"; // Nested object modified

console.log("Original city:", original2.address.city); // "Mumbai" (affected!)
console.log("Copy city:", shallowCopy.address.city); // "Mumbai"

/*
Shallow copy limitation:
- Only first level is copied
- Nested objects still share reference
*/

// --------------------------------------------
// EXAMPLE 9: DEEP COPY WITH structuredClone
// --------------------------------------------

console.log("\n=== EXAMPLE 9: Deep Copy with structuredClone ===");

const original3 = {
  name: "Manoj",
  address: {
    city: "Bangalore",
    country: "India"
  }
};

const deepCopy = structuredClone(original3);
deepCopy.address.city = "Mumbai";

console.log("Original city:", original3.address.city); // "Bangalore" (unchanged!)
console.log("Copy city:", deepCopy.address.city); // "Mumbai"

/*
structuredClone:
- True deep copy
- All levels copied
- Completely independent
*/

// --------------------------------------------
// EXAMPLE 10: DEEP COPY WITH JSON (LIMITATIONS)
// --------------------------------------------

console.log("\n=== EXAMPLE 10: Deep Copy with JSON ===");

const obj = {
  name: "Manoj",
  age: 25,
  greet: function () {
    console.log("Hello!");
  }
};

const jsonCopy = JSON.parse(JSON.stringify(obj));

console.log("Original:", obj);
console.log("JSON Copy:", jsonCopy); // Function is lost!

/*
JSON.parse(JSON.stringify()) limitations:
- Functions are lost
- undefined values are lost
- Dates become strings
- Can't handle circular references
- Use structuredClone() instead
*/

// --------------------------------------------
// EXAMPLE 11: undefined - UNINITIALIZED
// --------------------------------------------

console.log("\n=== EXAMPLE 11: undefined - Uninitialized ===");

let a;
console.log("Uninitialized variable:", a); // undefined
console.log("typeof:", typeof a); // "undefined"

/*
undefined:
- Variable declared but not assigned
- Automatic (by JavaScript)
*/

// --------------------------------------------
// EXAMPLE 12: undefined - MISSING PARAMETER
// --------------------------------------------

console.log("\n=== EXAMPLE 12: undefined - Missing Parameter ===");

function greet(name, age) {
  console.log("Name:", name); // "Manoj"
  console.log("Age:", age); // undefined (not provided)
}

greet("Manoj");

/*
Missing parameters are undefined
*/

// --------------------------------------------
// EXAMPLE 13: undefined - NO RETURN
// --------------------------------------------

console.log("\n=== EXAMPLE 13: undefined - No Return ===");

function noReturn() {
  // No return statement
  let x = 10;
}

const result = noReturn();
console.log("Function result:", result); // undefined

/*
Functions without return statement return undefined
*/

// --------------------------------------------
// EXAMPLE 14: undefined - NON-EXISTENT PROPERTY
// --------------------------------------------

console.log("\n=== EXAMPLE 14: undefined - Non-Existent Property ===");

const obj4 = { name: "Manoj" };
console.log("Existing property:", obj4.name); // "Manoj"
console.log("Non-existent property:", obj4.age); // undefined

/*
Accessing non-existent properties returns undefined
*/

// --------------------------------------------
// EXAMPLE 15: null - INTENTIONAL EMPTY
// --------------------------------------------

console.log("\n=== EXAMPLE 15: null - Intentional Empty ===");

let selectedUser = null; // Intentionally no user selected
console.log("Selected user:", selectedUser); // null
console.log("typeof null:", typeof selectedUser); // "object" (BUG!)

/*
null:
- Intentionally empty
- Assigned by developer
- typeof returns "object" (historic bug)
*/

// --------------------------------------------
// EXAMPLE 16: null VS undefined
// --------------------------------------------

console.log("\n=== EXAMPLE 16: null vs undefined ===");

let x1; // undefined (not assigned)
let x2 = undefined; // undefined (explicitly assigned)
let x3 = null; // null (intentionally empty)

console.log("x1:", x1); // undefined
console.log("x2:", x2); // undefined
console.log("x3:", x3); // null

console.log("x1 == null:", x1 == null); // true
console.log("x1 === null:", x1 === null); // false
console.log("x3 == undefined:", x3 == undefined); // true
console.log("x3 === undefined:", x3 === undefined); // false

/*
Loose equality (==):
- null == undefined is true

Strict equality (===):
- null === undefined is false
*/

// --------------------------------------------
// EXAMPLE 17: not defined - REFERENCE ERROR
// --------------------------------------------

console.log("\n=== EXAMPLE 17: not defined ===");

try {
  console.log(nonExistent); // ReferenceError
} catch (error) {
  console.log("Error:", error.message);
}

/*
not defined:
- Variable never declared
- Throws ReferenceError
- Not a value, it's an error
*/

// --------------------------------------------
// EXAMPLE 18: typeof WITH not defined
// --------------------------------------------

console.log("\n=== EXAMPLE 18: typeof with not defined ===");

// typeof doesn't throw error for undeclared variables
console.log("typeof undeclared:", typeof undeclaredVariable); // "undefined"

/*
Special case:
- typeof with undeclared variable returns "undefined"
- Doesn't throw ReferenceError
*/

// --------------------------------------------
// EXAMPLE 19: CHECKING FOR null/undefined
// --------------------------------------------

console.log("\n=== EXAMPLE 19: Checking for null/undefined ===");

function checkValue(value) {
  // Loose equality - catches both
  if (value == null) {
    console.log("Value is null or undefined");
  }

  // Strict equality - specific
  if (value === null) {
    console.log("Value is null");
  }

  if (value === undefined) {
    console.log("Value is undefined");
  }
}

checkValue(null);
checkValue(undefined);
checkValue(0);

/*
Checking strategies:
- value == null: catches both null and undefined
- value === null: only null
- value === undefined: only undefined
*/

// --------------------------------------------
// EXAMPLE 20: NULLISH COALESCING (??)
// --------------------------------------------

console.log("\n=== EXAMPLE 20: Nullish Coalescing ===");

let a1 = null;
let a2 = undefined;
let a3 = 0;
let a4 = "";
let a5 = false;

console.log(a1 ?? "default"); // "default" (null)
console.log(a2 ?? "default"); // "default" (undefined)
console.log(a3 ?? "default"); // 0 (not null/undefined)
console.log(a4 ?? "default"); // "" (not null/undefined)
console.log(a5 ?? "default"); // false (not null/undefined)

// Compare with ||
console.log("\nWith ||:");
console.log(a3 || "default"); // "default" (0 is falsy)
console.log(a4 || "default"); // "default" ("" is falsy)
console.log(a5 || "default"); // "default" (false is falsy)

/*
Nullish coalescing (??):
- Returns right side if left is null or undefined
- Doesn't treat 0, "", false as falsy
- Better than || for default values
*/

// --------------------------------------------
// EXAMPLE 21: DEFAULT PARAMETERS
// --------------------------------------------

console.log("\n=== EXAMPLE 21: Default Parameters ===");

function greet2(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet2(); // "Hello, Guest!"
greet2("Manoj"); // "Hello, Manoj!"
greet2(undefined); // "Hello, Guest!" (default used)
greet2(null); // "Hello, null" (default NOT used)

/*
Default parameters:
- Used when parameter is undefined
- NOT used when parameter is null
*/

// --------------------------------------------
// EXAMPLE 22: OPTIONAL CHAINING
// --------------------------------------------

console.log("\n=== EXAMPLE 22: Optional Chaining ===");

const user1 = {
  name: "Manoj",
  address: {
    city: "Bangalore"
  }
};

const user2 = {
  name: "Alice",
  address: null
};

console.log(user1.address?.city); // "Bangalore"
console.log(user2.address?.city); // undefined (doesn't error!)

/*
Optional chaining (?.):
- Safely access nested properties
- Returns undefined if property doesn't exist
- Prevents errors
*/

// --------------------------------------------
// EXAMPLE 23: REAL-WORLD EXAMPLE
// --------------------------------------------

console.log("\n=== EXAMPLE 23: Real-World Example ===");

function findUser(id) {
  const users = [
    { id: 1, name: "Manoj" },
    { id: 2, name: "Alice" }
  ];

  const user = users.find((u) => u.id === id);
  return user ?? null; // Return null if not found
}

const found = findUser(1);
const notFound = findUser(999);

console.log("Found:", found); // { id: 1, name: "Manoj" }
console.log("Not found:", notFound); // null

/*
Best practice:
- Return null to indicate "not found"
- undefined indicates "missing value"
- Clear semantic meaning
*/
