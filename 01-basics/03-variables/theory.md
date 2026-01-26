# Variables in JavaScript (var, let, const)

## What is a Variable?

A variable is a container that stores data. It's like a labeled box where you can put values and retrieve them later.
```javascript
let name = "Manoj";  // 'name' is the variable, "Manoj" is the value
```

---

## Types of Variable Declarations

JavaScript has three ways to declare variables:
1. **var** (Old way - ES5)
2. **let** (Modern way - ES6)
3. **const** (Modern way - ES6)

---

## 1. var (Old Way - Avoid Using)

### Syntax
```javascript
var variableName = value;
```

### Characteristics

#### ✅ Can be Re-declared
```javascript
var name = "Manoj";
var name = "Kumar";  // ✅ No error
console.log(name);   // "Kumar"
```

#### ✅ Can be Re-assigned
```javascript
var age = 25;
age = 30;           // ✅ Allowed
console.log(age);   // 30
```

#### 📦 Function Scoped
```javascript
function test() {
    if(true){
        var x = 10;
    }
    console.log(x);  // 10
}
test();
// console.log(x);  // ❌ Error: x is not defined
```

#### 🔄 Hoisted with `undefined`
```javascript
console.log(name);  // undefined (not error!)
var name = "Manoj";
console.log(name);  // "Manoj"
```

**Behind the scenes (how JavaScript sees it):**
```javascript
var name;           // Declaration hoisted to top
console.log(name);  // undefined
name = "Manoj";     // Assignment stays in place
console.log(name);  // "Manoj"
```

#### ⚠️ NOT Block Scoped
```javascript
if (true) {
    var city = "Chennai";
}
console.log(city);  // "Chennai" (leaked out of block!)
```

### Problems with var

1. **Unexpected Re-declaration**
```javascript
var score = 100;
// ... 1000 lines of code later
var score = 200;  // Accidentally re-declared, original value lost!
```

2. **Variable Leaking**
```javascript
for (var i = 0; i < 3; i++) {
    // loop code
}
console.log(i);  // 3 (leaked outside loop!)
```

3. **Confusing Behavior in Loops**
```javascript
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);  // 3, 3, 3 (not 0, 1, 2!)
    }, 1000);
}
```

---

## 2. let (Modern Way - Use for Changing Values)

### Syntax
```javascript
let variableName = value;
```

### Characteristics

#### ❌ Cannot be Re-declared
```javascript
let name = "Manoj";
// let name = "Kumar";  // ❌ Error: Identifier 'name' has already been declared
```

#### ✅ Can be Re-assigned
```javascript
let age = 25;
age = 30;           // ✅ Allowed
console.log(age);   // 30
```

#### 📦 Block Scoped
```javascript
if (true) {
    let city = "Chennai";
    console.log(city);  // "Chennai"
}
// console.log(city);  // ❌ Error: city is not defined
```

#### 🔄 Hoisted but NOT Initialized (Temporal Dead Zone)
```javascript
// console.log(name);  // ❌ ReferenceError: Cannot access 'name' before initialization
let name = "Manoj";
console.log(name);     // "Manoj"
```

**Temporal Dead Zone (TDZ):**
```javascript
// ---- TDZ starts ----
// console.log(x);  // ❌ Error
// console.log(x);  // ❌ Error
let x = 10;  // ---- TDZ ends ----
console.log(x);  // ✅ 10
```

#### ✅ No Variable Leaking
```javascript
for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);  // 0, 1, 2 (correct!)
    }, 1000);
}
// console.log(i);  // ❌ Error: i is not defined
```

### When to Use let

✅ Loop counters
✅ Variables that will change
✅ Temporary variables
✅ Variables with limited scope

**Examples:**
```javascript
let counter = 0;
let isLoggedIn = false;
let currentPage = 1;
```

---

## 3. const (Modern Way - Use for Fixed Values)

### Syntax
```javascript
const variableName = value;
```

### Characteristics

#### ❌ Cannot be Re-declared
```javascript
const PI = 3.14;
// const PI = 3.14159;  // ❌ Error: Identifier 'PI' has already been declared
```

#### ❌ Cannot be Re-assigned
```javascript
const country = "India";
// country = "USA";  // ❌ Error: Assignment to constant variable
```

#### 📦 Block Scoped
```javascript
if (true) {
    const city = "Chennai";
    console.log(city);  // "Chennai"
}
// console.log(city);  // ❌ Error: city is not defined
```

#### 🔄 Hoisted but NOT Initialized (Temporal Dead Zone)
```javascript
// console.log(PI);  // ❌ ReferenceError
const PI = 3.14;
console.log(PI);     // 3.14
```

#### ⚠️ Must be Initialized
```javascript
// const x;  // ❌ Error: Missing initializer in const declaration
const x = 10;  // ✅ Correct
```

### IMPORTANT: const with Objects and Arrays

#### Objects
```javascript
const person = {
    name: "Manoj",
    age: 25
};

// ✅ Can MODIFY properties
person.name = "Kumar";
person.age = 30;
person.city = "Chennai";  // Add new property
console.log(person);  // { name: "Kumar", age: 30, city: "Chennai" }

// ❌ Cannot REASSIGN whole object
// person = {};  // ❌ Error: Assignment to constant variable
```

#### Arrays
```javascript
const numbers = [1, 2, 3];

// ✅ Can MODIFY array
numbers.push(4);
numbers[0] = 10;
numbers.pop();
console.log(numbers);  // [10, 2, 3, 4]

// ❌ Cannot REASSIGN whole array
// numbers = [];  // ❌ Error: Assignment to constant variable
```

**Why?**
- `const` prevents **reassignment** of the variable
- `const` does NOT prevent **mutation** of objects/arrays
- The reference (memory address) cannot change
- The content at that address CAN change

### When to Use const

✅ Fixed values (PI, MAX_USERS, API_URL)
✅ Configuration objects
✅ Function declarations
✅ Arrays/Objects that won't be reassigned
✅ **DEFAULT CHOICE** (use const unless you need to reassign)

**Examples:**
```javascript
const MAX_LOGIN_ATTEMPTS = 3;
const API_URL = "https://api.example.com";
const config = { timeout: 5000 };
const colors = ["red", "green", "blue"];
```

---

## Comparison Table

| Feature | var | let | const |
|---------|-----|-----|-------|
| **Re-declare** | ✅ Yes | ❌ No | ❌ No |
| **Re-assign** | ✅ Yes | ✅ Yes | ❌ No |
| **Scope** | Function | Block | Block |
| **Hoisting** | Yes (undefined) | Yes (TDZ) | Yes (TDZ) |
| **Initialization Required** | ❌ No | ❌ No | ✅ Yes |
| **Temporal Dead Zone** | ❌ No | ✅ Yes | ✅ Yes |
| **Use in Modern Code** | ❌ Avoid | ✅ When reassignment needed | ✅ Default choice |

---

## Scope Comparison

### Function Scope (var)
```javascript
function test() {
    if (true) {
        var x = 10;
    }
    console.log(x);  // 10 (accessible throughout function)
}
```

### Block Scope (let, const)
```javascript
function test() {
    if (true) {
        let x = 10;
        const y = 20;
    }
    // console.log(x);  // ❌ Error
    // console.log(y);  // ❌ Error
}
```

**Block = Anything inside `{ }`:**
- if statements
- for loops
- while loops
- Functions
- Just curly braces `{ }`

---

## Hoisting Explained

### What is Hoisting?
JavaScript moves variable and function declarations to the top of their scope during compilation phase.

### var Hoisting
```javascript
console.log(name);  // undefined
var name = "Manoj";

// Equivalent to:
var name;           // Declaration hoisted
console.log(name);  // undefined
name = "Manoj";     // Assignment stays
```

### let/const Hoisting (Temporal Dead Zone)
```javascript
// ---- TDZ starts ----
// console.log(name);  // ❌ ReferenceError
let name = "Manoj";    // ---- TDZ ends ----
console.log(name);     // "Manoj"
```

**Key Difference:**
- `var` → Hoisted and initialized with `undefined`
- `let`/`const` → Hoisted but NOT initialized (TDZ until declaration)

---

## Best Practices

### ✅ DO

1. **Use `const` by default**
```javascript
const user = { name: "Manoj" };
const API_KEY = "abc123";
```

2. **Use `let` when you need to reassign**
```javascript
let counter = 0;
counter++;
```

3. **Avoid `var` completely**
```javascript
// ❌ Don't do this
var name = "Manoj";

// ✅ Do this instead
const name = "Manoj";
```

4. **Use descriptive names**
```javascript
// ❌ Bad
const x = 100;

// ✅ Good
const MAX_USERS = 100;
```

5. **One declaration per line**
```javascript
// ❌ Avoid
let a = 1, b = 2, c = 3;

// ✅ Better
let a = 1;
let b = 2;
let c = 3;
```

### ❌ DON'T

1. **Don't use var**
2. **Don't reassign const**
3. **Don't use let when const is enough**
4. **Don't declare without initialization (for const)**

---

## Common Mistakes

### Mistake 1: Using let instead of const
```javascript
// ❌ Bad (value never changes)
let PI = 3.14;

// ✅ Good
const PI = 3.14;
```

### Mistake 2: Thinking const makes objects immutable
```javascript
const obj = { a: 1 };
obj.a = 2;  // ✅ This works! const ≠ immutable
```

### Mistake 3: Declaring const without value
```javascript
// ❌ Error
const x;
x = 10;

// ✅ Correct
const x = 10;
```

### Mistake 4: Using var in loops
```javascript
// ❌ Bad
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
// Output: 3, 3, 3

// ✅ Good
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
// Output: 0, 1, 2
```

---

## Decision Tree: Which to Use?
```
Will the value change?
│
├─ No  → Use const
│
└─ Yes → Use let

Never use var in modern code!
```

---

## Summary

### var (Old - Avoid)
- ❌ Function scoped
- ❌ Can be re-declared
- ❌ Causes bugs in large apps
- ❌ Don't use in modern code

### let (Modern - For changing values)
- ✅ Block scoped
- ✅ Cannot be re-declared
- ✅ Can be reassigned
- ✅ Use for loop counters, temporary values

### const (Modern - Default choice)
- ✅ Block scoped
- ✅ Cannot be re-declared
- ✅ Cannot be reassigned
- ✅ Use for everything else (95% of the time)
- ⚠️ Objects/arrays can be mutated

---

## Interview Key Points

⭐ Always use `const` by default, `let` when needed  
⭐ Never use `var` in modern JavaScript  
⭐ `const` doesn't make objects immutable  
⭐ `let` and `const` are block-scoped  
⭐ `var` is function-scoped  
⭐ Temporal Dead Zone applies to `let` and `const`  
⭐ `var` is hoisted and initialized with `undefined`  
⭐ `let`/`const` are hoisted but not initialized