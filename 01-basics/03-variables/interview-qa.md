# Interview Questions - Variables (var, let, const)

## Q1: What are the different ways to declare variables in JavaScript?

**Answer:**  
There are three ways to declare variables in JavaScript:

1. **var** (ES5 - old way)
2. **let** (ES6 - modern)
3. **const** (ES6 - modern)

**Recommendation:** Use `const` by default, `let` when you need to reassign, never use `var`.

---

## Q2: What is the difference between var, let, and const?

**Answer:**

| Feature | var | let | const |
|---------|-----|-----|-------|
| Scope | Function | Block | Block |
| Re-declaration | ✅ Yes | ❌ No | ❌ No |
| Re-assignment | ✅ Yes | ✅ Yes | ❌ No |
| Hoisting | Yes (undefined) | Yes (TDZ) | Yes (TDZ) |
| Initialization Required | No | No | Yes |

---

## Q3: What is block scope vs function scope?

**Answer:**

**Function Scope (var):**
- Variable is accessible throughout the entire function
- Not limited to blocks ({ })
```javascript
function test() {
    if (true) {
        var x = 10;
    }
    console.log(x);  // 10 (accessible)
}
```

**Block Scope (let, const):**
- Variable is only accessible within the block ({ })
- Limited to if, for, while, or any { }
```javascript
function test() {
    if (true) {
        let x = 10;
    }
    console.log(x);  // ❌ Error: x is not defined
}
```

---

## Q4: What is Temporal Dead Zone (TDZ)?

**Answer:**  
Temporal Dead Zone is the period between the start of a scope and the point where a variable is declared. During this time, the variable exists but cannot be accessed.

**Example:**
```javascript
// ---- TDZ starts for 'x' ----
console.log(x);  // ❌ ReferenceError
let x = 10;      // ---- TDZ ends ----
console.log(x);  // ✅ 10
```

**Key Points:**
- Applies to `let` and `const`
- Does NOT apply to `var` (var is initialized with `undefined`)
- Helps catch errors early

---

## Q5: What is hoisting?

**Answer:**  
Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope during the compilation phase.

**var hoisting:**
```javascript
console.log(x);  // undefined
var x = 10;

// Equivalent to:
var x;           // Declaration hoisted
console.log(x);  // undefined
x = 10;          // Assignment stays
```

**let/const hoisting:**
```javascript
console.log(x);  // ❌ ReferenceError (TDZ)
let x = 10;

// let is hoisted but NOT initialized
```

---

## Q6: Can you reassign a const variable?

**Answer:**  
No, you cannot reassign a `const` variable.
```javascript
const x = 10;
x = 20;  // ❌ TypeError: Assignment to constant variable
```

**However**, you CAN modify objects and arrays declared with `const`:
```javascript
const obj = { name: "Manoj" };
obj.name = "Kumar";  // ✅ Allowed (mutation)
obj = {};            // ❌ Not allowed (reassignment)

const arr = [1, 2, 3];
arr.push(4);         // ✅ Allowed (mutation)
arr = [];            // ❌ Not allowed (reassignment)
```

---

## Q7: Why can we modify a const object?

**Answer:**  
`const` prevents **reassignment** of the variable, not **mutation** of the value.

When you declare `const obj = {}`:
- The variable `obj` holds a **reference** (memory address) to the object
- `const` prevents changing this reference
- `const` does NOT prevent changing the object's contents

**Visual:**
```
const obj → [Reference 0x001] → { name: "Manoj" }

obj.name = "Kumar"  // ✅ Modifies object at 0x001
obj = {}            // ❌ Tries to change reference itself
```

---

## Q8: Output-based Question - var in loop
```javascript
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}
```

**What will be the output?**

**Answer:** `3 3 3`

**Reason:**
- `var` is function-scoped, not block-scoped
- Only one `i` variable exists for entire loop
- By the time setTimeout executes, loop has finished and `i = 3`
- All three callbacks reference the same `i`

**Fix using let:**
```javascript
for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);  // 0 1 2
    }, 1000);
}
```
- `let` is block-scoped
- Each iteration gets its own `i`

---

## Q9: Output-based Question - Hoisting
```javascript
console.log(a);
console.log(b);
console.log(c);

var a = 10;
let b = 20;
const c = 30;
```

**What will be the output?**

**Answer:**
```
undefined
ReferenceError: Cannot access 'b' before initialization
(doesn't reach 'c')
```

**Reason:**
- `var a` is hoisted and initialized with `undefined`
- `let b` is hoisted but in TDZ (not initialized)
- Code stops at `b` error, never reaches `c`

---

## Q10: What happens here?
```javascript
let x = 10;

if (true) {
    let x = 20;
    console.log(x);
}

console.log(x);
```

**What will be the output?**

**Answer:**
```
20
10
```

**Reason:**
- First `x` is in outer scope
- Second `x` is in block scope (different variable)
- Inside block: prints 20
- Outside block: prints 10 (outer `x`)

---

## Q11: What's wrong with this code?
```javascript
const arr;
arr = [1, 2, 3];
```

**Answer:**  
`const` must be initialized at the time of declaration.

**Error:** `SyntaxError: Missing initializer in const declaration`

**Fix:**
```javascript
const arr = [1, 2, 3];
```

---

## Q12: When should you use var, let, and const?

**Answer:**

**const (Default - 95% of time):**
- Use for values that won't be reassigned
- Configuration objects
- Fixed values (MAX_SIZE, API_URL)
- Arrays and objects (even if contents change)

**let (When needed):**
- Loop counters
- Values that will be reassigned
- Accumulator variables

**var (Never):**
- Don't use in modern JavaScript
- Only in legacy code

**Decision tree:**
```
Does value need to change?
├─ No  → const
└─ Yes → let

var → NEVER
```

---

## Q13: What is the problem with var?

**Answer:**  
`var` has several problems:

**1. Function scoped, not block scoped**
```javascript
if (true) {
    var x = 10;
}
console.log(x);  // 10 (leaked out!)
```

**2. Can be re-declared**
```javascript
var x = 10;
var x = 20;  // No error, but confusing
```

**3. Hoisting confusion**
```javascript
console.log(x);  // undefined (not error)
var x = 10;
```

**4. Loop issues**
```javascript
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
// Output: 3 3 3 (not 0 1 2)
```

---

## Q14: Can you access a variable before declaration with let?

**Answer:**  
No, you'll get a ReferenceError due to Temporal Dead Zone.
```javascript
console.log(x);  // ❌ ReferenceError: Cannot access 'x' before initialization
let x = 10;
```

This is GOOD because it catches errors early!

---

## Q15: What will this code output?
```javascript
const person = {
    name: "Manoj",
    age: 25
};

person.age = 30;
person = { name: "Kumar" };

console.log(person);
```

**Answer:**  
**Error at line 6:** `TypeError: Assignment to constant variable`

**Reason:**
- Line 5: Modifying property ✅ Allowed
- Line 6: Reassigning whole object ❌ Not allowed

The code stops at line 6, never reaches console.log

---

## Q16: Explain this behavior
```javascript
let a = 10;

function test() {
    console.log(a);
    let a = 20;
}

test();
```

**Answer:**  
**Output:** `ReferenceError: Cannot access 'a' before initialization`

**Reason:**
- Function has its own `let a = 20`
- This creates a local variable `a` in the function scope
- The local `a` is in TDZ before its declaration
- The outer `a` is shadowed (hidden) by the local `a`

---

## Q17: What's the output?
```javascript
const arr1 = [1, 2, 3];
const arr2 = arr1;

arr2.push(4);

console.log(arr1);
console.log(arr2);
```

**Answer:**
```
[1, 2, 3, 4]
[1, 2, 3, 4]
```

**Reason:**
- `arr2 = arr1` copies the **reference**, not the array
- Both variables point to the same array in memory
- Modifying through either variable affects the same array

**To create a copy:**
```javascript
const arr2 = [...arr1];  // Spread operator
// or
const arr2 = arr1.slice();
```

---

## Q18: True or False Questions

**Q1:** `const` makes objects immutable.  
**A:** **False.** `const` prevents reassignment, not mutation.

**Q2:** `var` is block-scoped.  
**A:** **False.** `var` is function-scoped.

**Q3:** `let` and `const` are hoisted.  
**A:** **True.** But they're in TDZ until declaration.

**Q4:** You can declare `const` without initialization.  
**A:** **False.** `const` must be initialized.

**Q5:** `let` can be re-declared in the same scope.  
**A:** **False.** Only `var` can be re-declared.

---

## Q19: Best practice question

**Which is better and why?**
```javascript
// Option A
let config = {
    timeout: 5000,
    retries: 3
};

// Option B
const config = {
    timeout: 5000,
    retries: 3
};
```

**Answer:** **Option B** is better.

**Reason:**
- The `config` object reference won't be reassigned
- Even if we modify properties, the reference stays the same
- `const` prevents accidental reassignment
- Signals to other developers: "This reference won't change"

---

## Q20: Fix this code
```javascript
for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log("Value:", i);
    }, 100);
}
```

**Problem:** Outputs `Value: 5` five times

**Solution 1: Use let**
```javascript
for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log("Value:", i);  // 0 1 2 3 4
    }, 100);
}
```

**Solution 2: IIFE with var**
```javascript
for (var i = 0; i < 5; i++) {
    (function(j) {
        setTimeout(function() {
            console.log("Value:", j);  // 0 1 2 3 4
        }, 100);
    })(i);
}
```

**Solution 3: Pass parameter to setTimeout**
```javascript
for (var i = 0; i < 5; i++) {
    setTimeout(function(j) {
        console.log("Value:", j);  // 0 1 2 3 4
    }, 100, i);
}
```

---

## Q21: What will happen?
```javascript
const x = 10;

{
    console.log(x);
    const x = 20;
}
```

**Answer:**  
**Error:** `ReferenceError: Cannot access 'x' before initialization`

**Reason:**
- The inner block has its own `const x = 20`
- This creates a local `x` in the block scope
- The local `x` is in TDZ before line 4
- Even though there's an outer `x`, the inner one shadows it

---

## Q22: Predict the output
```javascript
var a = 1;

function outer() {
    console.log(a);
    var a = 2;
    
    function inner() {
        console.log(a);
    }
    
    inner();
    console.log(a);
}

outer();
console.log(a);
```

**Answer:**
```
undefined
2
2
1
```

**Explanation:**
1. `console.log(a)` in outer → `undefined` (hoisted `var a` in outer)
2. `console.log(a)` in inner → `2` (outer's `a`)
3. `console.log(a)` in outer → `2` (outer's `a`)
4. `console.log(a)` globally → `1` (global `a`)

---

## Q23: What's the difference between these?
```javascript
// Code A
if (true) {
    var x = 10;
}
console.log(x);

// Code B
if (true) {
    let x = 10;
}
console.log(x);
```

**Answer:**

**Code A:** Prints `10`  
- `var` is function-scoped (or global if not in function)
- `x` leaks out of the if block

**Code B:** `ReferenceError: x is not defined`  
- `let` is block-scoped
- `x` is only accessible inside the if block

---

## Q24: Memory question
```javascript
const obj1 = { a: 1 };
const obj2 = { a: 1 };

console.log(obj1 == obj2);
console.log(obj1 === obj2);

const obj3 = obj1;
console.log(obj1 === obj3);
```

**Answer:**
```
false
false
true
```

**Reason:**
- `obj1` and `obj2` are different objects (different memory locations)
- `obj3 = obj1` copies the reference, so they point to same object
- `==` and `===` compare references for objects, not contents

---

## Q25: Advanced - What prints?
```javascript
for (let i = 0; i < 3; i++) {
    let i = "abc";
    console.log(i);
}
```

**Answer:**
```
abc
abc
abc
```

**Reason:**
- Loop's `let i` is in the loop scope
- Inner `let i = "abc"` is in the block scope (inside loop body)
- They are different variables
- Each iteration creates new block scope with `i = "abc"`

---

## Q26: Tricky const question
```javascript
const arr = [1, 2, 3];

arr = [4, 5, 6];      // Line A
arr.push(4);          // Line B
arr[0] = 10;          // Line C
arr.length = 0;       // Line D
```

**Which lines cause errors?**

**Answer:**  
Only **Line A** causes error: `TypeError: Assignment to constant variable`

Lines B, C, D are all valid:
- They modify the array's contents
- They don't reassign the variable
- `const` allows mutation, not reassignment

---

## Q27: What happens in strict mode?
```javascript
"use strict";

x = 10;
console.log(x);
```

**Answer:**  
**Error:** `ReferenceError: x is not defined`

**Reason:**
- In strict mode, you must declare variables
- Without `var`, `let`, or `const`, it's an error
- In non-strict mode, this creates a global variable (bad practice!)

---

## Q28: Redeclaration rules
```javascript
var a = 1;
var a = 2;      // Line 1
let a = 3;      // Line 2
```

**What happens?**

**Answer:**  
**Error at Line 2:** `SyntaxError: Identifier 'a' has already been declared`

**Reason:**
- Line 1: `var` can redeclare `var` ✅
- Line 2: `let` cannot redeclare any variable ❌

---

## Q29: Complex scoping
```javascript
let x = 1;

{
    let x = 2;
    {
        let x = 3;
        console.log(x);
    }
    console.log(x);
}

console.log(x);
```

**Answer:**
```
3
2
1
```

**Reason:**
- Each `let x` creates a new variable in its own scope
- JavaScript looks for variable in current scope first
- Three different `x` variables exist

---

## Q30: Final challenge
```javascript
const obj = {
    a: 1,
    b: 2
};

Object.freeze(obj);

obj.a = 10;
obj.c = 3;
delete obj.b;

console.log(obj);
```

**Answer:**
```
{ a: 1, b: 2 }
```

**Reason:**
- `Object.freeze()` makes object immutable
- All modifications silently fail (or error in strict mode)
- `const` only prevents reassignment, but `freeze` prevents mutation
- Object remains unchanged

**Note:** This combines `const` with `Object.freeze()`:
- `const` → prevents reassignment
- `Object.freeze()` → prevents mutation