# Scope in JavaScript

## What is Scope?

**Scope** determines **where variables can be accessed** in your code. It defines the visibility and lifetime of variables.

Think of scope as boundaries that control which parts of your code can "see" and use specific variables.

---

## Why Scope Matters

1. **Prevents naming conflicts** - Same variable names in different scopes don't clash
2. **Organizes code** - Variables exist only where needed
3. **Memory management** - Variables are cleaned up when scope ends
4. **Security** - Private variables can't be accessed from outside
5. **Debugging** - Easier to track where variables are used

---

## Types of Scope

JavaScript has **three types of scope**:

### 1. Global Scope
### 2. Function Scope
### 3. Block Scope

---

## 1. Global Scope

Variables declared **outside any function or block** are in the global scope.

**Characteristics:**
- ✅ Accessible **everywhere** in your code
- ✅ Created when script starts
- ✅ Exists until page/program closes
- ⚠️ Can be overwritten from anywhere (risky!)

**In Browser:**
- Global variables become properties of `window` object
- `var globalVar = 10;` → `window.globalVar`

**In Node.js:**
- Global variables attach to `global` object
```javascript
// Global scope
var name = "Manoj";
let age = 25;
const city = "Bangalore";

function greet() {
  console.log(name);  // Can access global variables
  console.log(age);
  console.log(city);
}

greet();  // Works - accesses global variables
console.log(name);  // Works - in global scope
```

---

### Global Scope Best Practices

❌ **Avoid excessive global variables:**
```javascript
var x = 10;
var y = 20;
var z = 30;
// Pollutes global namespace
```

✅ **Use modules or wrap in functions:**
```javascript
const app = {
  x: 10,
  y: 20,
  z: 30
};
// Organized, single global object
```

---

## 2. Function Scope

Variables declared **inside a function** are in function scope.

**Characteristics:**
- ✅ Accessible **only inside that function**
- ✅ Created when function is called
- ✅ Destroyed when function completes
- ✅ Each function call creates new scope
- ✅ `var`, `let`, `const` all respect function scope
```javascript
function test() {
  var x = 10;      // Function scoped
  let y = 20;      // Function scoped
  const z = 30;    // Function scoped
  
  console.log(x, y, z);  // Works
}

test();  // 10 20 30
console.log(x);  // Error: x is not defined
console.log(y);  // Error: y is not defined
console.log(z);  // Error: z is not defined
```

---

### Function Scope - Important Points

**1. Variables are private to function:**
```javascript
function calculate() {
  var result = 100;
  return result;
}

calculate();  // Returns 100
console.log(result);  // Error: result is not defined
```

**2. Same variable names in different functions don't conflict:**
```javascript
function first() {
  var x = 10;
  console.log(x);  // 10
}

function second() {
  var x = 20;
  console.log(x);  // 20
}

first();   // 10
second();  // 20
// Two different 'x' variables, no conflict!
```

**3. Nested functions:**
```javascript
function outer() {
  var x = 10;
  
  function inner() {
    console.log(x);  // Can access outer function's variables
  }
  
  inner();  // 10
}

outer();
```

---

## 3. Block Scope

Variables declared **inside a block** `{}` are in block scope.

**Blocks include:**
- `if` statements
- `for` loops
- `while` loops
- `switch` statements
- Any code within `{}`

**Characteristics:**
- ✅ `let` and `const` respect block scope
- ❌ `var` does **NOT** respect block scope (function scoped only)
- ✅ Created when block executes
- ✅ Destroyed when block ends
```javascript
if (true) {
  var x = 10;      // NOT block scoped (function scoped)
  let y = 20;      // Block scoped
  const z = 30;    // Block scoped
}

console.log(x);  // 10 (var leaks out!)
console.log(y);  // Error: y is not defined
console.log(z);  // Error: z is not defined
```

---

### Block Scope Examples

**Example 1: if statement**
```javascript
if (true) {
  let blockVar = "I'm block scoped";
  console.log(blockVar);  // Works
}

console.log(blockVar);  // Error: blockVar is not defined
```

**Example 2: for loop**
```javascript
for (let i = 0; i < 3; i++) {
  console.log(i);  // 0, 1, 2
}

console.log(i);  // Error: i is not defined (block scoped)
```

**Example 3: Standalone block**
```javascript
{
  let x = 10;
  const y = 20;
  console.log(x, y);  // 10 20
}

console.log(x);  // Error: x is not defined
```

---

## var vs let vs const in Scope

### Summary Table

| Feature | var | let | const |
|---------|-----|-----|-------|
| **Global Scope** | ✅ Yes | ✅ Yes | ✅ Yes |
| **Function Scope** | ✅ Yes | ✅ Yes | ✅ Yes |
| **Block Scope** | ❌ No | ✅ Yes | ✅ Yes |
| **Hoisting** | ✅ Yes (as undefined) | ✅ Yes (TDZ) | ✅ Yes (TDZ) |
| **Re-declaration** | ✅ Yes | ❌ No | ❌ No |
| **Re-assignment** | ✅ Yes | ✅ Yes | ❌ No |

---

### var - Function Scope Only
```javascript
function test() {
  if (true) {
    var x = 10;  // var ignores block scope
  }
  console.log(x);  // 10 (accessible outside if block)
}

test();
```

**Why var ignores block scope:**
- `var` was designed before block scope existed (ES5)
- Only respects function and global scope
- This causes variable leaks and bugs

---

### let and const - Block Scope
```javascript
function test() {
  if (true) {
    let x = 10;     // let respects block scope
    const y = 20;   // const respects block scope
  }
  console.log(x);  // Error: x is not defined
  console.log(y);  // Error: y is not defined
}

test();
```

---

## Variable Shadowing

When a variable in an inner scope has the **same name** as a variable in an outer scope, the inner variable "shadows" (hides) the outer one.

**Example 1: Function shadowing global**
```javascript
var name = "Global";

function test() {
  var name = "Local";  // Shadows global name
  console.log(name);   // "Local" (uses local variable)
}

test();
console.log(name);  // "Global" (global variable unchanged)
```

**Example 2: Block shadowing function**
```javascript
function test() {
  let x = 10;
  
  if (true) {
    let x = 20;  // Shadows function's x
    console.log(x);  // 20 (block's x)
  }
  
  console.log(x);  // 10 (function's x)
}

test();
```

**Example 3: Nested shadowing**
```javascript
let x = 1;  // Global

function outer() {
  let x = 2;  // Shadows global x
  
  function inner() {
    let x = 3;  // Shadows outer's x
    console.log(x);  // 3
  }
  
  inner();
  console.log(x);  // 2
}

outer();
console.log(x);  // 1
```

---

## Common Scope Mistakes

### ❌ Mistake 1: Forgetting to declare variable
```javascript
function test() {
  x = 10;  // No var/let/const - creates GLOBAL variable!
}

test();
console.log(x);  // 10 (accidentally global)
```

**Fix:**
```javascript
function test() {
  let x = 10;  // ✅ Properly scoped
}

test();
console.log(x);  // Error (as expected)
```

---

### ❌ Mistake 2: var in loops
```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);  // 3, 3, 3 (var is not block scoped)
  }, 100);
}
```

**Fix:**
```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);  // 0, 1, 2 (let is block scoped)
  }, 100);
}
```

---

### ❌ Mistake 3: Accessing before declaration
```javascript
console.log(x);  // Error with let/const
let x = 10;
```

**Explanation:** `let` and `const` are in Temporal Dead Zone before declaration.

---

## Scope Best Practices

### ✅ 1. Use let and const (avoid var)
```javascript
// ❌ Old way
var x = 10;

// ✅ Modern way
const x = 10;  // If value won't change
let y = 20;    // If value will change
```

---

### ✅ 2. Declare variables in smallest scope needed
```javascript
// ❌ Bad - unnecessary global
let result;
function calculate() {
  result = 10 + 20;
}

// ✅ Good - local scope
function calculate() {
  let result = 10 + 20;
  return result;
}
```

---

### ✅ 3. Use const by default
```javascript
const name = "Manoj";     // Won't change - use const
const age = 25;           // Won't change - use const
let score = 0;            // Will change - use let
```

---

### ✅ 4. Avoid polluting global scope
```javascript
// ❌ Bad
var config = {};
var utils = {};
var data = {};

// ✅ Good
const app = {
  config: {},
  utils: {},
  data: {}
};
```

---

## Interview Key Points

### Q1. What is scope?
**Answer:** Scope determines where variables can be accessed in code. It defines the visibility and lifetime of variables.

---

### Q2. Types of scope in JavaScript?
**Answer:** Three types:
- **Global Scope** - Accessible everywhere
- **Function Scope** - Accessible only inside function
- **Block Scope** - Accessible only inside {} block

---

### Q3. Difference between var, let, and const in terms of scope?
**Answer:**
- `var` - Function and Global scope (NO block scope)
- `let` - Function, Global, and Block scope
- `const` - Function, Global, and Block scope (cannot reassign)

---

### Q4. What is variable shadowing?
**Answer:** When an inner scope variable has the same name as an outer scope variable, the inner variable "shadows" (hides) the outer one within its scope.

---

### Q5. Why avoid var?
**Answer:**
- No block scope (causes variable leaks)
- Can be re-declared (confusing)
- Hoisted as undefined (can cause bugs)
- `let` and `const` are more predictable

---

### Q6. Can you access function variables from outside?
**Answer:** No. Function scope variables are private to that function and cannot be accessed from outside.

---

### Q7. What happens if you don't use var/let/const?
**Answer:** Variable becomes global (even inside function) - this is a mistake and should be avoided.
```javascript
function test() {
  x = 10;  // Accidentally global
}
test();
console.log(x);  // 10 (global)
```

---

### Q8. Does const mean the value can't change?
**Answer:** `const` means the **binding** (variable reference) can't change, but object properties CAN change:
```javascript
const obj = { name: "Manoj" };
obj.name = "Kumar";  // ✅ Allowed (property change)
obj = {};            // ❌ Error (reassignment not allowed)
```

---

## Summary
```
SCOPE HIERARCHY:

Global Scope
└── Function Scope
    └── Block Scope
        └── Nested Block Scope

ACCESS RULES:
- Inner scopes can access outer scopes
- Outer scopes CANNOT access inner scopes
- Same-level scopes CANNOT access each other

VARIABLE TYPES:
var   → Function + Global scope (NO block scope)
let   → Function + Global + Block scope
const → Function + Global + Block scope (no reassignment)

BEST PRACTICES:
1. Use const by default
2. Use let when value needs to change
3. Avoid var
4. Declare in smallest scope needed
5. Don't pollute global scope
```