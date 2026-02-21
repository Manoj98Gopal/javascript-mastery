# Hoisting & TDZ - Interview Q&A

## 📌 Conceptual Questions

### Q1. What is hoisting?
**Answer:** Hoisting is JavaScript's behavior during the **Memory Creation Phase** where variable and function declarations are processed before code execution. Memory is allocated for declarations before the first line runs.

**Important:** Code doesn't physically "move" - JavaScript scans and allocates memory during Execution Context creation.

---

### Q2. Why does hoisting happen?
**Answer:** Hoisting happens because of the **two-phase** Execution Context creation:

**Phase 1: Memory Creation Phase**
- Scan code for declarations
- Allocate memory for variables and functions
- Initialize values (undefined for var, TDZ for let/const, full function for declarations)

**Phase 2: Code Execution Phase**
- Execute code line by line

---

### Q3. Are let and const hoisted?
**Answer:** **YES**, let and const ARE hoisted. However, they are placed in the **Temporal Dead Zone (TDZ)** and cannot be accessed before their declaration line.
```javascript
console.log(x);  // ReferenceError (hoisted but in TDZ)
let x = 10;
```

---

### Q4. What is Temporal Dead Zone (TDZ)?
**Answer:** TDZ is the **time period** between when a variable is hoisted (beginning of scope) and when it's initialized (declaration line in code). Accessing a variable in TDZ causes a **ReferenceError**.
```javascript
{
  // TDZ starts for x
  console.log(x);  // ReferenceError
  let x = 10;  // TDZ ends
}
```

---

### Q5. What's the difference between var and let/const hoisting?
**Answer:**

| Feature | var | let/const |
|---------|-----|-----------|
| **Hoisted?** | ✅ Yes | ✅ Yes |
| **Initialized?** | ✅ Yes (undefined) | ❌ No (TDZ) |
| **Before declaration** | Returns `undefined` | ReferenceError |
```javascript
console.log(a);  // undefined
var a = 1;

console.log(b);  // ReferenceError
let b = 2;
```

---

### Q6. Can you call a function declaration before its definition?
**Answer:** **YES** - function declarations are **fully hoisted**.
```javascript
greet();  // Works!

function greet() {
  console.log("Hello!");
}
```

---

### Q7. Are function expressions hoisted?
**Answer:** Only the **variable** is hoisted (following var/let/const rules). The **function itself** is NOT hoisted.
```javascript
greet();  // TypeError: greet is not a function

var greet = function() {
  console.log("Hello!");
};
```

**Why:** Variable `greet` is hoisted as `undefined`, not as a function.

---

### Q8. Are arrow functions hoisted?
**Answer:** Arrow functions follow the same hoisting rules as function expressions - only the **variable** is hoisted.
```javascript
greet();  // ReferenceError (const in TDZ)

const greet = () => {
  console.log("Hello!");
};
```

---

### Q9. Are classes hoisted?
**Answer:** **YES**, classes are hoisted but placed in **TDZ** (like let/const).
```javascript
const obj = new MyClass();  // ReferenceError

class MyClass {
  constructor() {}
}
```

---

### Q10. Why does TDZ exist?
**Answer:** TDZ exists to:
1. **Catch errors early** - Accessing before declaration is likely a bug
2. **Make const work** - const needs value at initialization
3. **Encourage best practices** - Declare before use
4. **Better error messages** - ReferenceError is clearer than undefined

---

## 🔢 Output-Based Questions

### Q11. What will be the output?
```javascript
console.log(x);
var x = 10;
console.log(x);
```

**Answer:**
```
undefined
10
```

**Explanation:** `var` is hoisted and initialized as `undefined`, then assigned `10` during execution.

---

### Q12. What will be the output?
```javascript
console.log(y);
let y = 20;
```

**Answer:** `ReferenceError: Cannot access 'y' before initialization`

**Explanation:** `let` is hoisted but in TDZ - cannot access before declaration.

---

### Q13. What will be the output?
```javascript
greet();

function greet() {
  console.log("Hello!");
}
```

**Answer:** `Hello!`

**Explanation:** Function declarations are fully hoisted - can call before definition.

---

### Q14. What will be the output?
```javascript
greet();

var greet = function() {
  console.log("Hello!");
};
```

**Answer:** `TypeError: greet is not a function`

**Explanation:** Variable `greet` is hoisted as `undefined`. Trying to call `undefined()` causes TypeError.

---

### Q15. What will be the output?
```javascript
console.log(a);
console.log(b);

var a = 1;
let b = 2;
```

**Answer:**
```
undefined
ReferenceError: Cannot access 'b' before initialization
```

**Explanation:**
- `var a` hoisted as `undefined`
- `let b` in TDZ - ReferenceError

---

### Q16. What will be the output?
```javascript
{
  console.log(x);
  let x = 10;
}
```

**Answer:** `ReferenceError: Cannot access 'x' before initialization`

**Explanation:** `x` is hoisted to block scope but in TDZ.

---

### Q17. What will be the output?
```javascript
let x = "Outer";

{
  console.log(x);
  let x = "Inner";
}
```

**Answer:** `ReferenceError: Cannot access 'x' before initialization`

**Explanation:** Inner `x` is hoisted and in TDZ, shadowing outer `x`. Even though outer `x` exists, inner `x` is not accessible before its declaration.

---

### Q18. What will be the output?
```javascript
console.log(typeof undeclared);
console.log(typeof x);
let x = 10;
```

**Answer:**
```
undefined
ReferenceError
```

**Explanation:**
- `typeof undeclared` → "undefined" (variable not declared at all)
- `typeof x` → ReferenceError (x exists but in TDZ)

---

### Q19. What will be the output?
```javascript
function test() {
  console.log(a);
  var a = 10;
  console.log(a);
}

test();
```

**Answer:**
```
undefined
10
```

**Explanation:** `var a` hoisted to function scope as `undefined`, then assigned `10`.

---

### Q20. What will be the output?
```javascript
console.log(test);

function test() {
  return "Function";
}

var test = "Variable";

console.log(test);
```

**Answer:**
```
[Function: test]
Variable
```

**Explanation:**
- Memory Creation: Function declaration hoisted first
- First log: function
- Then variable assignment overwrites it
- Second log: "Variable"

---

## 🎯 Summary - Must Know Points

1. **Hoisting** = Memory Creation Phase behavior (not code "moving")
2. **Function declarations** = Fully hoisted (can call before definition)
3. **var** = Hoisted and initialized as `undefined`
4. **let/const** = Hoisted but in TDZ (not initialized)
5. **TDZ** = Time from scope start to declaration line
6. **Function expressions/arrows** = Variable hoisted only (follows var/let/const rules)
7. **Classes** = Hoisted but in TDZ
8. **TDZ error** = ReferenceError: Cannot access before initialization
9. **Best practice** = Declare at top, use let/const (avoid var)
10. **Purpose of TDZ** = Catch bugs early, make const work, encourage best practices