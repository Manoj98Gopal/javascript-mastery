# Data Types in JavaScript

## Overview

JavaScript has **two main categories** of data types:
1. **Primitive Types** (Immutable)
2. **Non-Primitive Types** (Reference Types - Mutable)

---

## 1. Primitive Data Types (7 Types)

Primitive types are the most basic data types. They are **immutable** (cannot be changed) and stored in **Stack Memory**.

### 1.1 Number

Represents both integers and floating-point numbers.
```javascript
let integer = 42;
let decimal = 3.14;
let negative = -100;
let scientific = 5e3;  // 5000
```

**Special Number Values:**
```javascript
let infinite = Infinity;
let negInfinite = -Infinity;
let notANumber = NaN;  // Not a Number

console.log(typeof Infinity);  // "number"
console.log(typeof NaN);       // "number"
```

**Range:**
- Min: -(2^53 - 1) to Max: (2^53 - 1)
- Beyond this, use BigInt

**Important:**
```javascript
// NaN is special
console.log(NaN === NaN);       // false (NaN is not equal to itself!)
console.log(Number.isNaN(NaN)); // true (correct way to check)

// Division by zero
console.log(5 / 0);   // Infinity
console.log(-5 / 0);  // -Infinity
console.log(0 / 0);   // NaN
```

### 1.2 String

Represents textual data. Strings are **immutable**.
```javascript
let single = 'Hello';
let double = "World";
let template = `Hello ${single}`;  // Template literal (ES6)
```

**Immutability Example:**
```javascript
let str = "Hello";
str[0] = "h";  // Doesn't work (no error in non-strict mode)
console.log(str);  // Still "Hello"

// Methods create NEW strings
let original = "hello";
let upper = original.toUpperCase();
console.log(original);  // "hello" (unchanged)
console.log(upper);     // "HELLO" (new string)
```

**String Length:**
```javascript
let text = "JavaScript";
console.log(text.length);  // 10
```

### 1.3 Boolean

Represents logical values: `true` or `false`.
```javascript
let isActive = true;
let isCompleted = false;
```

**Boolean Conversion:**
```javascript
Boolean(1);      // true
Boolean(0);      // false
Boolean("");     // false
Boolean("text"); // true
```

### 1.4 Undefined

Represents a variable that has been declared but not assigned a value.
```javascript
let x;
console.log(x);  // undefined
console.log(typeof x);  // "undefined"
```

**When you get undefined:**
- Variable declared but not initialized
- Function with no return statement
- Accessing non-existent object property
- Function parameter not provided
```javascript
let a;
console.log(a);  // undefined

function test() {
    // no return
}
console.log(test());  // undefined

let obj = { name: "Manoj" };
console.log(obj.age);  // undefined
```

### 1.5 Null

Represents intentional absence of any value. It's an assignment value.
```javascript
let empty = null;
console.log(empty);  // null
console.log(typeof empty);  // "object" (JavaScript bug!)
```

**Important Bug:**
```javascript
console.log(typeof null);  // "object" (incorrect!)
// This is a bug from JavaScript's early days (1995)
// Kept for backward compatibility

// Correct way to check null:
console.log(empty === null);  // true
```

**undefined vs null:**
```javascript
let a;           // undefined (not initialized)
let b = null;    // null (intentionally empty)

console.log(a == b);   // true (loose equality)
console.log(a === b);  // false (strict equality)
```

### 1.6 Symbol (ES6)

Represents a unique identifier. Every Symbol is unique.
```javascript
let sym1 = Symbol("id");
let sym2 = Symbol("id");

console.log(sym1 === sym2);  // false (each is unique)
console.log(typeof sym1);    // "symbol"
```

**Use Case:**
```javascript
// Creating unique object keys
const ID = Symbol("id");
let user = {
    name: "Manoj",
    [ID]: 12345  // Symbol as property key
};

console.log(user[ID]);  // 12345
console.log(user.ID);   // undefined (different!)
```

**Symbols are not enumerable:**
```javascript
let obj = {
    name: "Manoj",
    [Symbol("id")]: 123
};

for (let key in obj) {
    console.log(key);  // Only "name" (Symbol is hidden)
}
```

### 1.7 BigInt (ES2020)

Represents integers larger than 2^53 - 1.
```javascript
let bigNum = 9007199254740991n;  // 'n' at the end
let bigNum2 = BigInt(9007199254740991);

console.log(typeof bigNum);  // "bigint"
```

**Usage:**
```javascript
let huge = 1234567890123456789012345678901234567890n;
let result = huge + 100n;  // Must use 'n' with BigInt

// Cannot mix BigInt with Number
// let wrong = huge + 100;  // ❌ TypeError
let correct = huge + 100n;  // ✅ Works
```

---

## 2. Non-Primitive Data Types (Reference Types)

Non-primitive types are **mutable** (can be changed) and stored in **Heap Memory**.

### 2.1 Object

Collection of key-value pairs.
```javascript
let person = {
    name: "Manoj",
    age: 25,
    city: "Chennai"
};

console.log(typeof person);  // "object"
```

**Accessing Properties:**
```javascript
console.log(person.name);      // "Manoj" (dot notation)
console.log(person["age"]);    // 25 (bracket notation)

// Adding new property
person.email = "manoj@example.com";

// Modifying property
person.age = 26;

// Deleting property
delete person.city;
```

**Objects are Mutable:**
```javascript
let obj1 = { value: 10 };
obj1.value = 20;  // ✅ Allowed (mutation)
console.log(obj1.value);  // 20
```

### 2.2 Array

Ordered collection of values. Arrays are special objects.
```javascript
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null];

console.log(typeof numbers);        // "object"
console.log(Array.isArray(numbers)); // true (correct check)
```

**Array Methods:**
```javascript
let arr = [1, 2, 3];

arr.push(4);      // Add to end: [1, 2, 3, 4]
arr.pop();        // Remove from end: [1, 2, 3]
arr.unshift(0);   // Add to start: [0, 1, 2, 3]
arr.shift();      // Remove from start: [1, 2, 3]
```

**Arrays are Mutable:**
```javascript
let arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1);  // [1, 2, 3, 4] (changed)
```

### 2.3 Function

Functions are special objects that can be called.
```javascript
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(typeof greet);  // "function"
```

**Function as Object:**
```javascript
function test() {
    console.log("Hello");
}

test.property = "I'm a property";
console.log(test.property);  // "I'm a property"
```

### 2.4 Date

Represents dates and times.
```javascript
let now = new Date();
let specific = new Date("2025-01-26");

console.log(typeof now);  // "object"
console.log(now);         // Current date and time
```

### 2.5 Other Non-Primitive Types
```javascript
// RegExp (Regular Expression)
let pattern = /hello/i;
console.log(typeof pattern);  // "object"

// Map (ES6)
let map = new Map();
console.log(typeof map);  // "object"

// Set (ES6)
let set = new Set();
console.log(typeof set);  // "object"
```

---

## 3. Primitive vs Non-Primitive

### Key Differences

| Feature | Primitive | Non-Primitive |
|---------|-----------|---------------|
| **Mutability** | Immutable | Mutable |
| **Storage** | Stack Memory | Heap Memory |
| **Copying** | Copy by Value | Copy by Reference |
| **Comparison** | By Value | By Reference |
| **Types** | 7 types | Multiple types |

### 3.1 Immutable vs Mutable

**Primitive (Immutable):**
```javascript
let str = "Hello";
str[0] = "h";  // Doesn't work
console.log(str);  // Still "Hello"

let num = 5;
num++;  // Creates new value, doesn't modify 5
console.log(num);  // 6
```

**Non-Primitive (Mutable):**
```javascript
let obj = { name: "Manoj" };
obj.name = "Kumar";  // ✅ Works (mutation)
console.log(obj.name);  // "Kumar"

let arr = [1, 2, 3];
arr[0] = 10;  // ✅ Works (mutation)
console.log(arr);  // [10, 2, 3]
```

### 3.2 Copy by Value vs Copy by Reference

**Primitive (Copy by Value):**
```javascript
let a = 10;
let b = a;  // Copies the VALUE
b = 20;     // Changes only b

console.log(a);  // 10 (unchanged)
console.log(b);  // 20
```

**Visual:**
```
Stack Memory:
a → 10
b → 20 (separate value)
```

**Non-Primitive (Copy by Reference):**
```javascript
let obj1 = { value: 10 };
let obj2 = obj1;  // Copies the REFERENCE
obj2.value = 20;  // Changes the object

console.log(obj1.value);  // 20 (changed!)
console.log(obj2.value);  // 20 (same object)
```

**Visual:**
```
Stack Memory:       Heap Memory:
obj1 → ref ------→ { value: 20 }
obj2 → ref ------→ (same object)
```

### 3.3 Comparison

**Primitive (By Value):**
```javascript
let a = 10;
let b = 10;
console.log(a === b);  // true (same value)

let str1 = "Hello";
let str2 = "Hello";
console.log(str1 === str2);  // true (same value)
```

**Non-Primitive (By Reference):**
```javascript
let obj1 = { name: "Manoj" };
let obj2 = { name: "Manoj" };
console.log(obj1 === obj2);  // false (different references)

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
console.log(arr1 === arr2);  // false (different references)

// Same reference
let obj3 = obj1;
console.log(obj1 === obj3);  // true (same reference)
```

---

## 4. Memory Storage

### Stack Memory (Primitives)

**Characteristics:**
- Fixed size
- Fast access
- LIFO (Last In, First Out)
- Automatic memory management

**What's stored:**
- Primitive values
- References to objects (not the objects themselves)
```javascript
let x = 10;      // Value 10 stored in stack
let y = "Hello"; // Value "Hello" stored in stack
```

### Heap Memory (Non-Primitives)

**Characteristics:**
- Dynamic size
- Slower access than stack
- No specific order
- Garbage collected

**What's stored:**
- Objects
- Arrays
- Functions
- Other complex data structures
```javascript
let obj = { name: "Manoj" };  // Object in heap, reference in stack
let arr = [1, 2, 3];          // Array in heap, reference in stack
```

**Visual Representation:**
```
Stack Memory              Heap Memory
┌──────────────┐         ┌─────────────────────┐
│ x = 10       │         │                     │
│ y = "Hello"  │         │ obj: {              │
│ obj = ref ───┼────────→│   name: "Manoj"     │
│ arr = ref ───┼────────→│ }                   │
└──────────────┘         │                     │
                         │ arr: [1, 2, 3]      │
                         └─────────────────────┘
```

---

## 5. Type Checking

### Using typeof Operator
```javascript
// Primitives
console.log(typeof 42);           // "number"
console.log(typeof "Hello");      // "string"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof Symbol("id")); // "symbol"
console.log(typeof 100n);         // "bigint"

// Non-Primitives
console.log(typeof {});           // "object"
console.log(typeof []);           // "object"
console.log(typeof function(){}); // "function"
console.log(typeof new Date());   // "object"

// Special case (bug)
console.log(typeof null);         // "object" (incorrect!)
```

### Better Type Checking
```javascript
// Check for null
let x = null;
console.log(x === null);  // true

// Check for array
let arr = [1, 2, 3];
console.log(Array.isArray(arr));  // true

// Check for NaN
let num = NaN;
console.log(Number.isNaN(num));  // true

// Check for object (excluding null)
let obj = {};
console.log(typeof obj === "object" && obj !== null);  // true
```

---

## 6. Shallow Copy vs Deep Copy

### Shallow Copy

Copies only the first level. Nested objects are still referenced.
```javascript
let original = {
    name: "Manoj",
    address: {
        city: "Chennai"
    }
};

// Shallow copy methods:
let copy1 = { ...original };  // Spread operator
let copy2 = Object.assign({}, original);

copy1.address.city = "Mumbai";

console.log(original.address.city);  // "Mumbai" (changed!)
console.log(copy1.address.city);     // "Mumbai"
```

### Deep Copy

Copies all levels. Completely independent.
```javascript
let original = {
    name: "Manoj",
    address: {
        city: "Chennai"
    }
};

// Deep copy:
let deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.address.city = "Mumbai";

console.log(original.address.city);  // "Chennai" (unchanged)
console.log(deepCopy.address.city);  // "Mumbai"
```

**Limitation of JSON method:**
- Doesn't work with functions
- Doesn't work with undefined
- Doesn't work with Symbols
- Doesn't work with Dates (converts to string)

---

## 7. Common Pitfalls

### Pitfall 1: typeof null
```javascript
console.log(typeof null);  // "object" (bug!)

// Correct check:
let x = null;
console.log(x === null);  // true
```

### Pitfall 2: NaN Comparison
```javascript
console.log(NaN === NaN);  // false

// Correct check:
console.log(Number.isNaN(NaN));  // true
```

### Pitfall 3: Array is Object
```javascript
console.log(typeof []);  // "object"

// Correct check:
console.log(Array.isArray([]));  // true
```

### Pitfall 4: Reference Copy
```javascript
let arr1 = [1, 2, 3];
let arr2 = arr1;  // Reference copy!
arr2.push(4);

console.log(arr1);  // [1, 2, 3, 4] (changed!)

// Solution: Create actual copy
let arr3 = [...arr1];  // or arr1.slice()
```

---


## 8. Summary

### Primitive Types (7)
✅ Number, String, Boolean, undefined, null, Symbol, BigInt  
✅ Immutable  
✅ Stored in Stack  
✅ Copied by value  
✅ Compared by value  

### Non-Primitive Types
✅ Object, Array, Function, Date, etc.  
✅ Mutable  
✅ Stored in Heap  
✅ Copied by reference  
✅ Compared by reference  

### Key Points for Interviews
⭐ 7 primitive types in JavaScript  
⭐ `typeof null` returns "object" (bug)  
⭐ `typeof NaN` returns "number"  
⭐ Arrays are objects, use `Array.isArray()` to check  
⭐ Primitives are immutable, non-primitives are mutable  
⭐ Primitives stored in stack, non-primitives in heap  
⭐ Primitives copy by value, non-primitives copy by reference  
⭐ NaN is the only value not equal to itself