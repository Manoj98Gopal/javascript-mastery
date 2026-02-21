# Hoisting & Temporal Dead Zone (TDZ)

## What is Hoisting?

**Hoisting** is JavaScript's behavior where variable and function declarations are processed during the **Memory Creation Phase** before code execution begins.

**Important:** Code doesn't physically "move" - JavaScript scans and allocates memory for declarations before executing any code.

---

## Why Does Hoisting Happen?

Hoisting occurs because of the **two-phase** Execution Context creation:

**Phase 1: Memory Creation Phase**
- JavaScript scans the code
- Allocates memory for variables and functions
- Variables get initial values (undefined for var, TDZ for let/const)
- Functions are stored completely

**Phase 2: Code Execution Phase**
- JavaScript executes code line by line
- Variables get their actual values

**Hoisting = Result of Memory Creation Phase**

---

## Types of Hoisting

### 1. Function Declaration Hoisting

Function declarations are **fully hoisted** - the entire function is available before its declaration.
```javascript
// This works!
greet();  // "Hello!"

function greet() {
  console.log("Hello!");
}
```

**Memory Creation Phase:**
```javascript
greet: <function code fully stored>
```

---

### 2. var Hoisting

`var` variables are hoisted and **initialized as undefined**.
```javascript
console.log(x);  // undefined (not error!)
var x = 10;
console.log(x);  // 10
```

**Memory Creation Phase:**
```javascript
x: undefined
```

**Code Execution Phase:**
```javascript
x: 10  // actual value assigned
```

---

### 3. let and const Hoisting

`let` and `const` are hoisted but **NOT initialized** - they remain in **Temporal Dead Zone (TDZ)**.
```javascript
console.log(x);  // ReferenceError: Cannot access 'x' before initialization
let x = 10;
```

**Memory Creation Phase:**
```javascript
x: <uninitialized> (in TDZ)
```

**Accessing before declaration = ReferenceError**

---

### 4. Function Expression Hoisting

Function expressions follow their **variable's** hoisting rules.

**With var:**
```javascript
console.log(greet);  // undefined
greet();  // TypeError: greet is not a function

var greet = function() {
  console.log("Hello!");
};
```

**With let/const:**
```javascript
console.log(greet);  // ReferenceError (TDZ)
greet();  // ReferenceError (TDZ)

const greet = function() {
  console.log("Hello!");
};
```

---

### 5. Arrow Function Hoisting

Arrow functions follow the same rules as function expressions - only the **variable** is hoisted.
```javascript
console.log(greet);  // ReferenceError (const in TDZ)
greet();  // ReferenceError

const greet = () => {
  console.log("Hello!");
};
```

---

### 6. Class Hoisting

Classes are hoisted but in **TDZ** (like let/const).
```javascript
const obj = new MyClass();  // ReferenceError

class MyClass {
  constructor() {}
}
```

---

## Hoisting Summary Table

| Type | Hoisted? | Initial Value | Before Declaration |
|------|----------|---------------|-------------------|
| **Function Declaration** | ✅ Yes | Full function | ✅ Can call |
| **var** | ✅ Yes | `undefined` | Returns `undefined` |
| **let** | ✅ Yes | TDZ | ❌ ReferenceError |
| **const** | ✅ Yes | TDZ | ❌ ReferenceError |
| **Function Expression** | Variable only | Follows variable rules | Depends on var/let/const |
| **Arrow Function** | Variable only | Follows variable rules | Depends on var/let/const |
| **Class** | ✅ Yes | TDZ | ❌ ReferenceError |

---

## What is Temporal Dead Zone (TDZ)?

**Temporal Dead Zone (TDZ)** is the time period between when a variable is hoisted and when it's initialized (declared in code).

**TDZ = Time when variable exists but cannot be accessed**
```javascript
// TDZ starts here for 'x'
console.log(x);  // ReferenceError - in TDZ

let x = 10;  // TDZ ends here
console.log(x);  // 10 - now accessible
```

---

## TDZ Timeline
```
Scope Start
    ↓
[TDZ BEGINS] ← Variable hoisted but not initialized
    ↓
    ↓ (any access here = ReferenceError)
    ↓
let/const declaration ← [TDZ ENDS] Variable initialized
    ↓
Variable accessible
```

---

## TDZ Examples

### Example 1: Basic TDZ
```javascript
{
  // TDZ for x starts
  console.log(x);  // ReferenceError
  // Still in TDZ
  let x = 10;  // TDZ ends
  console.log(x);  // 10 - works
}
```

---

### Example 2: TDZ in Functions
```javascript
function test() {
  // TDZ for y starts
  console.log(y);  // ReferenceError
  let y = 20;  // TDZ ends
  console.log(y);  // 20
}

test();
```

---

### Example 3: TDZ with typeof
```javascript
console.log(typeof x);  // ReferenceError (x in TDZ)
let x = 10;

// Compare with undeclared variable:
console.log(typeof undeclared);  // "undefined" (not declared at all)
```

---

## var vs let vs const in Hoisting

### var - Initialized as undefined
```javascript
console.log(x);  // undefined
var x = 10;
console.log(x);  // 10
```

**Why:**
- Hoisted and **initialized** to `undefined`
- No TDZ

---

### let - In TDZ
```javascript
console.log(y);  // ReferenceError
let y = 20;
console.log(y);  // 20
```

**Why:**
- Hoisted but **not initialized**
- In TDZ until declaration

---

### const - In TDZ
```javascript
console.log(z);  // ReferenceError
const z = 30;
console.log(z);  // 30
```

**Why:**
- Hoisted but **not initialized**
- In TDZ until declaration
- Must be initialized at declaration

---

## Common Hoisting Mistakes

### ❌ Mistake 1: Calling function expression before declaration
```javascript
greet();  // TypeError: greet is not a function

var greet = function() {
  console.log("Hello!");
};
```

**Why:** Variable `greet` is `undefined` until assignment.

---

### ❌ Mistake 2: Accessing let/const before declaration
```javascript
console.log(x);  // ReferenceError
let x = 10;
```

**Why:** `x` is in TDZ.

---

### ❌ Mistake 3: Thinking let/const aren't hoisted
```javascript
let x = 10;

{
  console.log(x);  // ReferenceError (not 10!)
  let x = 20;
}
```

**Why:** Inner `x` IS hoisted to top of block (in TDZ), shadowing outer `x`.

---

## Function Hoisting Details

### Function Declaration - Fully Hoisted
```javascript
// ✅ Works
test();

function test() {
  console.log("Function declaration");
}
```

---

### Function Expression - NOT Fully Hoisted
```javascript
// ❌ Error
test();  // TypeError: test is not a function

var test = function() {
  console.log("Function expression");
};
```

---

### Arrow Function - NOT Fully Hoisted
```javascript
// ❌ Error
test();  // ReferenceError

const test = () => {
  console.log("Arrow function");
};
```

---

### Named Function Expression
```javascript
const greet = function sayHello() {
  console.log("Hello!");
};

// Variable 'greet' follows let/const hoisting
// Function name 'sayHello' only available inside function
```

---

## Best Practices

### ✅ 1. Declare variables at the top
```javascript
// Good
function test() {
  let x = 10;
  const y = 20;
  
  // ... rest of code
}
```

---

### ✅ 2. Use let and const (avoid var)
```javascript
// ❌ Bad
var x = 10;

// ✅ Good
const x = 10;  // If won't change
let y = 20;    // If will change
```

---

### ✅ 3. Always initialize const at declaration
```javascript
// ❌ Error
const x;
x = 10;

// ✅ Good
const x = 10;
```

---

### ✅ 4. Use function declarations for hoisting when needed
```javascript
// If you need to call before definition:
test();  // Works

function test() {
  console.log("Hello!");
}
```

---

## Why TDZ Exists

TDZ exists to:

1. **Catch errors early** - Accessing before declaration is likely a bug
2. **Make const work properly** - const needs value at initialization
3. **More predictable code** - Variables should be declared before use
4. **Better than undefined** - ReferenceError is clearer than undefined

**var's undefined behavior can hide bugs:**
```javascript
console.log(x);  // undefined - looks okay, but might be a typo
var x = 10;
```

**let/const's TDZ catches bugs:**
```javascript
console.log(x);  // ReferenceError - error is obvious
let x = 10;
```

---

## Interview Key Points

### Q1. What is hoisting?
**Answer:** JavaScript's behavior during Memory Creation Phase where declarations are processed before code execution. Variables and functions are allocated memory before the first line runs.

---

### Q2. Are let and const hoisted?
**Answer:** **YES**, let and const ARE hoisted, but they're in Temporal Dead Zone (TDZ) and cannot be accessed before declaration.

---

### Q3. What is Temporal Dead Zone?
**Answer:** TDZ is the time period between when a variable is hoisted (beginning of scope) and when it's initialized (declaration line). Accessing variables in TDZ causes ReferenceError.

---

### Q4. Difference between var and let/const hoisting?
**Answer:**
- **var:** Hoisted and initialized as `undefined` (accessible before declaration)
- **let/const:** Hoisted but NOT initialized (in TDZ, ReferenceError before declaration)

---

### Q5. Are function expressions hoisted?
**Answer:** Only the **variable** is hoisted (follows var/let/const rules). The function itself is NOT hoisted.

---

### Q6. Can you call a function declaration before its definition?
**Answer:** **YES** - function declarations are fully hoisted.

---

### Q7. Why does TDZ exist?
**Answer:** To catch errors early, make const work properly, and encourage declaring variables before use.

---

### Q8. What error do you get in TDZ?
**Answer:** `ReferenceError: Cannot access 'variable' before initialization`

---

## Summary
```
HOISTING:
✅ Result of Memory Creation Phase
✅ Declarations processed before execution
✅ Code doesn't physically "move"

FUNCTION DECLARATIONS:
✅ Fully hoisted (can call before definition)

var:
✅ Hoisted
✅ Initialized as undefined
✅ Accessible before declaration (returns undefined)

let/const:
✅ Hoisted
❌ NOT initialized (TDZ)
❌ Cannot access before declaration (ReferenceError)

FUNCTION EXPRESSIONS & ARROW FUNCTIONS:
✅ Variable hoisted (follows var/let/const rules)
❌ Function NOT hoisted

TEMPORAL DEAD ZONE (TDZ):
- Time: Scope start → Declaration line
- State: Variable exists but not accessible
- Error: ReferenceError if accessed
- Purpose: Catch bugs, make const work

BEST PRACTICES:
✅ Use let/const (avoid var)
✅ Declare variables at top
✅ Initialize const at declaration
✅ Understand hoisting for debugging
```