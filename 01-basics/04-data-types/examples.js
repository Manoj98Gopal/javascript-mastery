// ============================================
// DATA TYPES - Complete Examples
// ============================================

console.log("=== PRIMITIVE DATA TYPES ===\n");

// -------------------------------------------
// 1. NUMBER
// -------------------------------------------

let integer = 42;
let decimal = 3.14;
let negative = -100;
let scientific = 5e3;  // 5000

console.log("--- Number Type ---");
console.log(typeof integer);    // "number"
console.log(typeof decimal);    // "number"

// Special number values
let infinite = Infinity;
let negInfinite = -Infinity;
let notANumber = NaN;

console.log(typeof Infinity);   // "number"
console.log(typeof NaN);        // "number"

// Division by zero
console.log(5 / 0);    // Infinity
console.log(-5 / 0);   // -Infinity
console.log(0 / 0);    // NaN

// NaN is special
console.log(NaN === NaN);       // false (NaN is not equal to itself!)
console.log(Number.isNaN(NaN)); // true (correct way)

// Number range
console.log(Number.MAX_VALUE);          // 1.7976931348623157e+308
console.log(Number.MIN_VALUE);          // 5e-324
console.log(Number.MAX_SAFE_INTEGER);   // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER);   // -9007199254740991


// -------------------------------------------
// 2. STRING
// -------------------------------------------

console.log("\n--- String Type ---");

let single = 'Hello';
let double = "World";
let template = `Hello ${single}`;  // Template literal

console.log(typeof single);  // "string"
console.log(template);       // "Hello Hello"

// Strings are immutable
let str = "Hello";
str[0] = "h";  // Doesn't work (no error in non-strict mode)
console.log(str);  // Still "Hello"

// String methods create NEW strings
let original = "hello";
let uppercase = original.toUpperCase();
console.log(original);  // "hello" (unchanged)
console.log(uppercase); // "HELLO" (new string)

// String length
console.log("JavaScript".length);  // 10


// -------------------------------------------
// 3. BOOLEAN
// -------------------------------------------

console.log("\n--- Boolean Type ---");

let isTrue = true;
let isFalse = false;

console.log(typeof isTrue);  // "boolean"

// Boolean conversion
console.log(Boolean(1));      // true
console.log(Boolean(0));      // false
console.log(Boolean(""));     // false
console.log(Boolean("text")); // true
console.log(Boolean(null));   // false
console.log(Boolean(undefined)); // false


// -------------------------------------------
// 4. UNDEFINED
// -------------------------------------------

console.log("\n--- Undefined Type ---");

let notDefined;
console.log(notDefined);        // undefined
console.log(typeof notDefined); // "undefined"

// When you get undefined
function noReturn() {
    // no return statement
}
console.log(noReturn());  // undefined

let obj = { name: "Manoj" };
console.log(obj.age);  // undefined (property doesn't exist)


// -------------------------------------------
// 5. NULL
// -------------------------------------------

console.log("\n--- Null Type ---");

let empty = null;
console.log(empty);         // null
console.log(typeof empty);  // "object" (JavaScript bug!)

// Correct way to check null
console.log(empty === null);  // true

// undefined vs null
let a;           // undefined
let b = null;    // null

console.log(a == b);   // true (loose equality)
console.log(a === b);  // false (strict equality)


// -------------------------------------------
// 6. SYMBOL (ES6)
// -------------------------------------------

console.log("\n--- Symbol Type ---");

let sym1 = Symbol("id");
let sym2 = Symbol("id");

console.log(typeof sym1);    // "symbol"
console.log(sym1 === sym2);  // false (each symbol is unique)

// Symbol as object key
const ID = Symbol("id");
let user = {
    name: "Manoj",
    [ID]: 12345
};

console.log(user[ID]);  // 12345
console.log(user.ID);   // undefined

// Symbols are hidden in loops
for (let key in user) {
    console.log(key);  // Only "name" (Symbol is hidden)
}


// -------------------------------------------
// 7. BIGINT (ES2020)
// -------------------------------------------

console.log("\n--- BigInt Type ---");

let bigNum = 9007199254740991n;
let bigNum2 = BigInt(9007199254740991);

console.log(typeof bigNum);  // "bigint"
console.log(bigNum);         // 9007199254740991n

// BigInt operations
let huge = 1234567890123456789012345678901234567890n;
let result = huge + 100n;  // Must use 'n'

console.log(result);

// Cannot mix BigInt with Number
// let wrong = huge + 100;  // ❌ TypeError
let correct = huge + BigInt(100);  // ✅ Works


console.log("\n=== NON-PRIMITIVE DATA TYPES ===\n");

// -------------------------------------------
// 1. OBJECT
// -------------------------------------------

console.log("--- Object Type ---");

let person = {
    name: "Manoj",
    age: 25,
    city: "Chennai"
};

console.log(typeof person);  // "object"

// Accessing properties
console.log(person.name);      // "Manoj"
console.log(person["age"]);    // 25

// Adding property
person.email = "manoj@example.com";

// Modifying property
person.age = 26;

// Deleting property
delete person.city;

console.log(person);

// Objects are mutable
let obj1 = { value: 10 };
obj1.value = 20;  // ✅ Allowed
console.log(obj1.value);  // 20


// -------------------------------------------
// 2. ARRAY
// -------------------------------------------

console.log("\n--- Array Type ---");

let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null];

console.log(typeof numbers);         // "object"
console.log(Array.isArray(numbers)); // true (correct check)

// Array methods
let arr = [1, 2, 3];
arr.push(4);      // [1, 2, 3, 4]
arr.pop();        // [1, 2, 3]
arr.unshift(0);   // [0, 1, 2, 3]
arr.shift();      // [1, 2, 3]

console.log(arr);

// Arrays are mutable
let arr1 = [1, 2, 3];
arr1[0] = 10;
console.log(arr1);  // [10, 2, 3]


// -------------------------------------------
// 3. FUNCTION
// -------------------------------------------

console.log("\n--- Function Type ---");

function greet(name) {
    return `Hello, ${name}!`;
}

console.log(typeof greet);  // "function"
console.log(greet("Manoj")); // "Hello, Manoj!"

// Function as object
greet.customProperty = "I'm a property";
console.log(greet.customProperty);  // "I'm a property"


// -------------------------------------------
// 4. DATE
// -------------------------------------------

console.log("\n--- Date Type ---");

let now = new Date();
let specific = new Date("2025-01-26");

console.log(typeof now);  // "object"
console.log(now);


// -------------------------------------------
// 5. OTHER NON-PRIMITIVE TYPES
// -------------------------------------------

console.log("\n--- Other Types ---");

// RegExp
let pattern = /hello/i;
console.log(typeof pattern);  // "object"

// Map
let map = new Map();
console.log(typeof map);  // "object"

// Set
let set = new Set();
console.log(typeof set);  // "object"


console.log("\n=== PRIMITIVE VS NON-PRIMITIVE ===\n");

// -------------------------------------------
// COPY BY VALUE (Primitives)
// -------------------------------------------

console.log("--- Copy by Value ---");

let prim1 = 10;
let prim2 = prim1;  // Copies the VALUE
prim2 = 20;

console.log("prim1:", prim1);  // 10 (unchanged)
console.log("prim2:", prim2);  // 20


// -------------------------------------------
// COPY BY REFERENCE (Non-Primitives)
// -------------------------------------------

console.log("\n--- Copy by Reference ---");

let ref1 = { value: 10 };
let ref2 = ref1;  // Copies the REFERENCE
ref2.value = 20;

console.log("ref1.value:", ref1.value);  // 20 (changed!)
console.log("ref2.value:", ref2.value);  // 20 (same object)


// -------------------------------------------
// IMMUTABILITY
// -------------------------------------------

console.log("\n--- Immutability ---");

// Primitive (immutable)
let string1 = "hello";
let string2 = string1.toUpperCase();
console.log("string1:", string1);  // "hello" (unchanged)
console.log("string2:", string2);  // "HELLO" (new string)

// Non-primitive (mutable)
let array1 = [1, 2, 3];
array1.push(4);
console.log("array1:", array1);  // [1, 2, 3, 4] (changed)


// -------------------------------------------
// COMPARISON
// -------------------------------------------

console.log("\n--- Comparison ---");

// Primitive (by value)
let num1 = 10;
let num2 = 10;
console.log("num1 === num2:", num1 === num2);  // true

// Non-primitive (by reference)
let obj2 = { name: "Manoj" };
let obj3 = { name: "Manoj" };
console.log("obj2 === obj3:", obj2 === obj3);  // false (different objects)

let obj4 = obj2;
console.log("obj2 === obj4:", obj2 === obj4);  // true (same reference)


console.log("\n=== SHALLOW VS DEEP COPY ===\n");

// -------------------------------------------
// SHALLOW COPY
// -------------------------------------------

console.log("--- Shallow Copy ---");

let originalObj = {
    name: "Manoj",
    address: {
        city: "Chennai"
    }
};

// Shallow copy using spread
let shallowCopy = { ...originalObj };
shallowCopy.address.city = "Mumbai";

console.log("original city:", originalObj.address.city);  // "Mumbai" (changed!)
console.log("shallow city:", shallowCopy.address.city);   // "Mumbai"


// -------------------------------------------
// DEEP COPY
// -------------------------------------------

console.log("\n--- Deep Copy ---");

let originalObj2 = {
    name: "Kumar",
    address: {
        city: "Chennai"
    }
};

// Deep copy using JSON
let deepCopy = JSON.parse(JSON.stringify(originalObj2));
deepCopy.address.city = "Delhi";

console.log("original city:", originalObj2.address.city);