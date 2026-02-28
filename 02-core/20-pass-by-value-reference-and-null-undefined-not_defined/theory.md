# Pass by Value vs Pass by Reference

## Introduction

In JavaScript, when you pass values to functions or assign variables, the behavior differs based on the **data type**:

- **Primitives:** Pass by value (copy)
- **Objects:** Pass by reference (copy of reference)

---

## What is Pass by Value?

**Pass by value** means a **copy** of the actual value is passed. Changes to the copy don't affect the original.

### Primitive Data Types (Pass by Value)

- `number`
- `string`
- `boolean`
- `undefined`
- `null`
- `symbol`
- `bigint`
```javascript
let x = 10;
let y = x;  // Copy of value

y = 20;     // Change copy

console.log(x);  // 10 (original unchanged)
console.log(y);  // 20 (copy changed)
```

---

### Pass by Value in Functions
```javascript
function changeValue(num) {
  num = 100;  // Changes local copy
  console.log("Inside:", num);  // 100
}

let value = 10;
changeValue(value);
console.log("Outside:", value);  // 10 (unchanged)
```

**What happens:**
1. `value` (10) is passed to function
2. A **copy** is created as parameter `num`
3. `num` is changed to 100 (only copy changes)
4. Original `value` remains 10

---

## What is Pass by Reference?

**Pass by reference** (more accurately: pass by **value of reference**) means a **copy of the reference** (memory address) is passed. Changes to the object affect the original.

### Non-Primitive Data Types (Pass by Reference)

- `objects`
- `arrays`
- `functions`
```javascript
let obj1 = { name: "Manoj" };
let obj2 = obj1;  // Copy of reference (both point to same object)

obj2.name = "Kumar";  // Modify through obj2

console.log(obj1.name);  // "Kumar" (original affected!)
console.log(obj2.name);  // "Kumar"
```

---

### Pass by Reference in Functions
```javascript
function changeObject(obj) {
  obj.name = "Changed";  // Modifies original object
  console.log("Inside:", obj.name);  // "Changed"
}

const person = { name: "Manoj" };
changeObject(person);
console.log("Outside:", person.name);  // "Changed" (affected!)
```

**What happens:**
1. `person` reference is passed to function
2. A **copy of the reference** is created as parameter `obj`
3. Both `person` and `obj` point to **same object** in memory
4. Changing `obj.name` affects the original object
5. Original `person` is modified

---

## Important: JavaScript is ALWAYS Pass by Value

**Technically, JavaScript is ALWAYS pass by value.**

For objects, what's passed by value is the **reference** (memory address), not the object itself.

This is sometimes called **"pass by sharing"** or **"pass by value of reference"**.
```javascript
// The REFERENCE is copied, not the object
function test(obj) {
  obj = { new: "object" };  // Reassignment doesn't affect original
}

let original = { old: "object" };
test(original);
console.log(original);  // { old: "object" } (unchanged)
```

---

## Mutation vs Reassignment

### Mutation (Modifying Properties) - Affects Original
```javascript
function mutate(obj) {
  obj.name = "Changed";  // Modifying property - affects original
}

const person = { name: "Manoj" };
mutate(person);
console.log(person.name);  // "Changed" (affected!)
```

---

### Reassignment - Doesn't Affect Original
```javascript
function reassign(obj) {
  obj = { name: "New Object" };  // Reassignment - doesn't affect original
}

const person = { name: "Manoj" };
reassign(person);
console.log(person.name);  // "Manoj" (unchanged!)
```

**Why:** Reassignment changes what the local parameter points to, but doesn't affect the original reference.

---

## Arrays (Pass by Reference)

Arrays are objects, so they're also passed by reference:
```javascript
function addElement(arr) {
  arr.push(4);  // Modifies original array
}

const numbers = [1, 2, 3];
addElement(numbers);
console.log(numbers);  // [1, 2, 3, 4] (affected!)
```

---

## How to Avoid Mutation

### 1. Shallow Copy with Spread Operator
```javascript
function changeObject(obj) {
  const copy = { ...obj };  // Shallow copy
  copy.name = "Changed";
  return copy;
}

const person = { name: "Manoj" };
const newPerson = changeObject(person);

console.log(person.name);     // "Manoj" (unchanged)
console.log(newPerson.name);  // "Changed"
```

---

### 2. Shallow Copy with Object.assign()
```javascript
function changeObject(obj) {
  const copy = Object.assign({}, obj);
  copy.name = "Changed";
  return copy;
}
```

---

### 3. Deep Copy with structuredClone()
```javascript
const original = {
  name: "Manoj",
  address: {
    city: "Bangalore"
  }
};

const copy = structuredClone(original);
copy.address.city = "Mumbai";

console.log(original.address.city);  // "Bangalore" (unchanged)
console.log(copy.address.city);      // "Mumbai"
```

**Best for:** Nested objects (true deep copy)

---

### 4. Deep Copy with JSON (Limitations)
```javascript
const copy = JSON.parse(JSON.stringify(original));
```

**Limitations:**
- Loses functions
- Loses `undefined` values
- Loses `Symbol` keys
- Loses `Date` objects (becomes string)
- Can't handle circular references

**Use structuredClone() instead** (modern, better)

---

## Shallow Copy vs Deep Copy

### Shallow Copy

Copies first level only. Nested objects/arrays still share reference.
```javascript
const original = {
  name: "Manoj",
  address: { city: "Bangalore" }
};

const shallow = { ...original };
shallow.address.city = "Mumbai";

console.log(original.address.city);  // "Mumbai" (nested object affected!)
```

---

### Deep Copy

Copies all levels. Completely independent.
```javascript
const original = {
  name: "Manoj",
  address: { city: "Bangalore" }
};

const deep = structuredClone(original);
deep.address.city = "Mumbai";

console.log(original.address.city);  // "Bangalore" (unchanged!)
```

---

# null, undefined, and not defined

## Overview

JavaScript has three ways to represent "no value":

1. **null** - Intentional absence of value
2. **undefined** - Variable declared but not assigned
3. **not defined** - Variable not declared (ReferenceError)

---

## 1. undefined

### What is undefined?

`undefined` means a variable has been **declared** but **not assigned** a value.
```javascript
let x;
console.log(x);  // undefined
```

---

### Where undefined Comes From

**1. Uninitialized Variables**
```javascript
let x;
console.log(x);  // undefined
```

**2. Missing Function Parameters**
```javascript
function greet(name) {
  console.log(name);
}

greet();  // undefined (no argument passed)
```

**3. Function with No Return**
```javascript
function test() {
  // No return statement
}

console.log(test());  // undefined
```

**4. Accessing Non-Existent Properties**
```javascript
const obj = { name: "Manoj" };
console.log(obj.age);  // undefined (property doesn't exist)
```

**5. Array Holes**
```javascript
const arr = [1, , 3];
console.log(arr[1]);  // undefined
```

---

### typeof undefined
```javascript
console.log(typeof undefined);  // "undefined"
```

---

## 2. null

### What is null?

`null` represents the **intentional absence** of any object value. It's assigned by developers to indicate "no value" or "empty".
```javascript
let user = null;  // Intentionally empty
```

---

### When to Use null

Use `null` when you want to explicitly indicate "no value":
```javascript
let selectedItem = null;  // No item selected yet

function findUser(id) {
  // Search for user...
  if (!found) {
    return null;  // Explicitly return "no user"
  }
  return user;
}
```

---

### typeof null (Historic Bug!)
```javascript
console.log(typeof null);  // "object" (BUG!)
```

**This is a JavaScript bug from the beginning that can't be fixed** (would break existing code).

`null` is NOT an object, but `typeof` says it is.

---

## 3. not defined

### What is not defined?

"not defined" means a variable was **never declared**. Accessing it throws a **ReferenceError**.
```javascript
console.log(nonExistent);  // ReferenceError: nonExistent is not defined
```

**Key Point:** This is an **error**, not a value like `undefined` or `null`.

---

## Comparison Table

| Feature | undefined | null | not defined |
|---------|-----------|------|-------------|
| **Type** | Primitive value | Primitive value | Error (ReferenceError) |
| **Meaning** | Declared but not assigned | Intentionally empty | Never declared |
| **typeof** | "undefined" | "object" (bug!) | Throws error |
| **Assignment** | Automatic (by JavaScript) | Manual (by developer) | N/A |
| **Example** | `let x;` | `let x = null;` | `console.log(y);` |

---

## Checking for null and undefined

### Loose Equality (==)
```javascript
null == undefined   // true
null === undefined  // false

let x = null;
if (x == null) {
  // Catches BOTH null AND undefined
}
```

---

### Strict Equality (===)
```javascript
null === null       // true
undefined === undefined  // true
null === undefined  // false

let x = null;
if (x === null) {
  // Only catches null
}
```

---

### typeof Check
```javascript
if (typeof x === "undefined") {
  // x is undefined
}

// Note: typeof doesn't throw error for not defined variables
console.log(typeof nonExistent);  // "undefined" (doesn't error!)
```

---

### Nullish Coalescing Operator (??)

Returns right side if left is `null` or `undefined`:
```javascript
let x = null;
let y = undefined;
let z = 0;

console.log(x ?? "default");  // "default"
console.log(y ?? "default");  // "default"
console.log(z ?? "default");  // 0 (not null/undefined)
```

---

## Common Patterns

### Pattern 1: Default Values
```javascript
function greet(name) {
  name = name ?? "Guest";  // Default if null/undefined
  console.log(`Hello, ${name}!`);
}

greet();          // "Hello, Guest!"
greet("Manoj");   // "Hello, Manoj!"
```

---

### Pattern 2: Optional Chaining
```javascript
const user = {
  name: "Manoj",
  address: null
};

console.log(user.address?.city);  // undefined (doesn't error)
```

---

### Pattern 3: Check Before Access
```javascript
if (obj !== null && obj !== undefined) {
  console.log(obj.property);
}

// Shorter
if (obj != null) {
  console.log(obj.property);
}
```

---

## Interview Key Points

### Q1. What's the difference between pass by value and pass by reference?
**Answer:** 
- **Pass by value:** Primitives. Copy of value is passed. Changes don't affect original.
- **Pass by reference:** Objects. Copy of reference (memory address) is passed. Modifying properties affects original, but reassignment doesn't.

---

### Q2. Is JavaScript pass by value or pass by reference?
**Answer:** JavaScript is **always pass by value**. For objects, the value passed is the **reference** (memory address). This is sometimes called "pass by sharing" or "pass by value of reference".

---

### Q3. Why does changing object properties affect the original?
**Answer:** Because both the original and the copy point to the **same object in memory**. They share the same reference.

---

### Q4. Why doesn't reassignment affect the original object?
**Answer:** Reassignment changes what the **local parameter** points to, but doesn't change what the original variable points to.

---

### Q5. How do you create a copy that won't affect the original?
**Answer:**
- **Shallow copy:** `{...obj}` or `Object.assign({}, obj)`
- **Deep copy:** `structuredClone(obj)` (modern) or `JSON.parse(JSON.stringify(obj))` (limitations)

---

### Q6. What's the difference between null and undefined?
**Answer:**
- **undefined:** Declared but not assigned (automatic)
- **null:** Intentionally empty (manual)

---

### Q7. What does typeof null return?
**Answer:** `"object"` - This is a **historic bug** in JavaScript that can't be fixed without breaking existing code.

---

### Q8. What's the difference between undefined and not defined?
**Answer:**
- **undefined:** Variable declared but not assigned (value)
- **not defined:** Variable never declared (ReferenceError)

---

### Q9. How do you check for both null and undefined?
**Answer:** Use loose equality: `if (x == null)` catches both.

---

### Q10. What is nullish coalescing (??)?
**Answer:** Operator that returns right side if left is `null` or `undefined`. Unlike `||`, it doesn't treat `0`, `""`, or `false` as falsy.

---

## Summary
```
PASS BY VALUE VS REFERENCE:
- Primitives: pass by value (copy)
- Objects: pass by reference (copy of reference)
- JavaScript: always pass by value (of reference for objects)

MUTATION VS REASSIGNMENT:
- Mutation (obj.prop = x): affects original
- Reassignment (obj = {}): doesn't affect original

COPYING:
- Shallow: {...obj}, Object.assign()
- Deep: structuredClone(), JSON methods (limitations)

undefined:
- Declared but not assigned
- Automatic (by JavaScript)
- typeof: "undefined"
- Sources: uninitialized, missing params, no return, non-existent properties

null:
- Intentionally empty
- Manual (by developer)
- typeof: "object" (bug!)
- Use: explicit "no value"

not defined:
- Never declared
- ReferenceError (not a value)
- Throws error when accessed

CHECKING:
- Loose equality: == null (both)
- Strict equality: === null / === undefined (specific)
- typeof: typeof x === "undefined"
- Nullish coalescing: x ?? default
```