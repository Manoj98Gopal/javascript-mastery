# Execution Context & Call Stack - Interview Q&A

## 📌 Conceptual Questions

### Q1. What is an Execution Context?
**Answer:** An Execution Context is the environment where JavaScript code is executed. It contains everything needed to run code including:
- **Variable Environment** (variables, functions)
- **Lexical Environment** (scope chain)
- **`this` binding**

Every time JavaScript runs code, it creates an execution context.

---

### Q2. What are the types of Execution Contexts?
**Answer:** There are **three types**:

1. **Global Execution Context (GEC)**
   - Created when script first runs
   - Only ONE per program
   - Creates global object (`window` in browser)

2. **Function Execution Context (FEC)**
   - Created every time a function is called
   - New context for each call
   - Destroyed when function completes

3. **Eval Execution Context**
   - Created by `eval()` function
   - Avoid using (security and performance issues)

---

### Q3. What are the two phases of Execution Context?
**Answer:** Every Execution Context is created in **two phases**:

**Phase 1: Memory Creation Phase (Creation Phase)**
- Variables allocated memory and assigned `undefined` (var)
- `let`/`const` allocated but in TDZ
- Functions stored completely in memory
- `this` keyword determined

**Phase 2: Code Execution Phase**
- JavaScript executes code line by line
- Variables get actual values
- Functions are invoked
- New execution contexts created for function calls

---

### Q4. What is the Call Stack?
**Answer:** The Call Stack (or Execution Stack) is a data structure that keeps track of all execution contexts.

**Key features:**
- Follows **LIFO** (Last In First Out) principle
- When function called → new EC pushed onto stack
- When function completes → EC popped from stack
- Global EC is always at the bottom
- Used by JavaScript engine to manage execution

---

### Q5. What is LIFO in the context of Call Stack?
**Answer:** **LIFO = Last In First Out**

Like a stack of plates:
- Last plate placed on top is first one removed
- Last function called is first one completed
- Most recent execution context is at the top
```javascript
function first() {
  second();
}
function second() {
  third();
}
function third() {
  console.log("Done");
}
first();

// Stack: [third EC] [second EC] [first EC] [Global EC]
// third completes first (LIFO)
```

---

### Q6. What happens during Memory Creation Phase?
**Answer:**

**For variables:**
- `var` → allocated memory, assigned `undefined`
- `let`/`const` → allocated memory, placed in TDZ (not accessible)

**For functions:**
- Function declarations → entire code stored in memory
- Function expressions → treated as variables

**Example:**
```javascript
var x = 10;
function test() {}

// Memory Creation:
// x → undefined
// test → function code stored
```

---

### Q7. What is hoisting and why does it happen?
**Answer:** Hoisting is JavaScript's behavior of moving declarations to the top of their scope before code execution.

**Why it happens:** Because of the **Memory Creation Phase**!

Before executing code, JavaScript:
- Allocates memory for all variables and functions
- Variables (var) are set to `undefined`
- Functions are fully stored
```javascript
console.log(x); // undefined (not error!)
var x = 10;

// Works because in Memory Creation:
// x: undefined
```

---

### Q8. What is the difference between `var`, `let`, and `const` in Execution Context?
**Answer:**

**`var`:**
- Memory Creation: Initialized as `undefined`
- Can access before declaration (returns `undefined`)

**`let` and `const`:**
- Memory Creation: Allocated but in **Temporal Dead Zone (TDZ)**
- Cannot access before declaration (ReferenceError)
```javascript
console.log(a); // undefined
var a = 10;

console.log(b); // ReferenceError
let b = 20;
```

---

### Q9. What is Stack Overflow?
**Answer:** Stack Overflow occurs when the call stack exceeds its maximum size (too many execution contexts).

**Common cause:** Infinite recursion
```javascript
function recursive() {
  recursive(); // Calls itself forever
}
recursive(); // RangeError: Maximum call stack size exceeded
```

**What happens:**
- Each call creates new EC on stack
- Stack keeps growing
- Eventually runs out of memory
- Browser throws error

---

### Q10. What happens when a function is called?
**Answer:** When a function is called:

1. **New Function Execution Context** is created
2. **Memory Creation Phase** runs (parameters, local variables)
3. **Code Execution Phase** runs
4. Function **returns** (if return statement)
5. **Function EC is destroyed** (popped from stack)
6. Control returns to **previous EC**

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

**Explanation:**
- Memory Creation: `x = undefined`
- Execution: First log prints `undefined`, then `x = 10`, second log prints `10`

---

### Q12. What will be the output?
```javascript
test();

function test() {
  console.log("Hello!");
}
```

**Answer:** `Hello!`

**Explanation:** Function declarations are fully hoisted. `test` function is stored in memory during Memory Creation Phase, so it can be called before its definition.

---

### Q13. What will be the output?
```javascript
console.log(y);
let y = 20;
```

**Answer:** `ReferenceError: Cannot access 'y' before initialization`

**Explanation:** `let` variables are in TDZ during Memory Creation. They can't be accessed before the line where they're declared.

---

### Q14. What will be the output?
```javascript
greet();

var greet = function() {
  console.log("Hi!");
};
```

**Answer:** `TypeError: greet is not a function`

**Explanation:**
- Memory Creation: `greet = undefined` (variable, not function yet)
- Execution: Trying to call `undefined()` causes TypeError
- Function expression is NOT hoisted like declaration

---

### Q15. What will be the output?
```javascript
function first() {
  console.log("First");
  second();
  console.log("First again");
}

function second() {
  console.log("Second");
}

first();
```

**Answer:**
```
First
Second
First again
```

**Explanation:**
- `first()` called → prints "First"
- `second()` called → prints "Second", returns
- Back to `first()` → prints "First again"

---

### Q16. What will be the output?
```javascript
var x = 100;

function test() {
  console.log(x);
  var x = 200;
  console.log(x);
}

test();
```

**Answer:**
```
undefined
200
```

**Explanation:**
- Function EC has its own `x` variable
- Memory Creation: local `x = undefined`
- First log: `undefined` (local x shadows global x)
- Then `x = 200`
- Second log: `200`

---

### Q17. What will be the output?
```javascript
function outer() {
  var a = 10;
  
  function inner() {
    console.log(a);
  }
  
  inner();
}

outer();
```

**Answer:** `10`

**Explanation:** `inner()` function can access variables from its parent scope (`outer`). This is closure in action.

---

### Q18. What will be the output?
```javascript
console.log(a);
console.log(b);

var a = 10;
let b = 20;
```

**Answer:**
```
undefined
ReferenceError: Cannot access 'b' before initialization
```

**Explanation:**
- `var a`: Hoisted as `undefined`
- `let b`: In TDZ, can't access before declaration

---

### Q19. What will be the output and explain the call stack?
```javascript
function a() {
  console.log("a start");
  b();
  console.log("a end");
}

function b() {
  console.log("b");
}

a();
```

**Answer:**
```
a start
b
a end
```

**Call Stack:**
```
1. [Global EC]
2. [a() EC] [Global EC]
3. [b() EC] [a() EC] [Global EC]  ← b called
4. [a() EC] [Global EC]            ← b done
5. [Global EC]                     ← a done
```

---

### Q20. What will be the output?
```javascript
var x = 1;

function test() {
  console.log(x);
  var x = 2;
}

test();
console.log(x);
```

**Answer:**
```
undefined
1
```

**Explanation:**
- Inside `test()`, local `x` is hoisted as `undefined`
- First log: `undefined` (local x)
- Global `x` is still `1`

---

## ✅ True or False

### Q21. There can be multiple Global Execution Contexts in a JavaScript program.
**Answer:** **FALSE**

**Explanation:** There is only **ONE** Global Execution Context per program, created when the script first runs.

---

### Q22. Functions are fully hoisted in JavaScript.
**Answer:** **TRUE** (for function declarations)

**Explanation:** Function declarations are fully hoisted - the entire function code is stored in memory during Memory Creation Phase.

**Note:** Function expressions are NOT fully hoisted.

---

### Q23. The Call Stack follows FIFO (First In First Out).
**Answer:** **FALSE**

**Explanation:** Call Stack follows **LIFO** (Last In First Out). Last function called is first to complete.

---

### Q24. Variables declared with `let` are hoisted.
**Answer:** **TRUE**

**Explanation:** `let` variables ARE hoisted, but they're placed in **Temporal Dead Zone (TDZ)** and can't be accessed before declaration.

**Note:** Hoisting ≠ Initialization

---

### Q25. Each function call creates a new Execution Context.
**Answer:** **TRUE**

**Explanation:** Every time a function is called, a new Function Execution Context is created, even if it's the same function called multiple times.

---

### Q26. Function Execution Contexts remain in memory after the function completes.
**Answer:** **FALSE**

**Explanation:** Function Execution Context is **destroyed** (removed from stack) when the function completes execution.

---

### Q27. Global Execution Context is destroyed when the program ends.
**Answer:** **TRUE**

**Explanation:** Global EC is the last to be destroyed, when the entire program/script finishes execution.

---

## 🛠️ Code Fixing & Analysis

### Q28. Fix this code:
```javascript
greet();

var greet = function() {
  console.log("Hello!");
};
```

**Fixed Code:**
```javascript
var greet = function() {
  console.log("Hello!");
};

greet(); // Call after definition

// OR use function declaration:
function greet() {
  console.log("Hello!");
}

greet(); // Can call before or after
```

---

### Q29. Explain what's wrong:
```javascript
function test() {
  console.log(x);
  let x = 10;
}

test();
```

**Issue:** `ReferenceError: Cannot access 'x' before initialization`

**Explanation:** `let` variable `x` is in TDZ. Can't access it before the declaration line.

**Fix:**
```javascript
function test() {
  let x = 10;
  console.log(x); // 10
}

test();
```

---

### Q30. Trace the execution and call stack:
```javascript
var a = 10;

function first() {
  var b = 20;
  second();
}

function second() {
  var c = 30;
  console.log(a + c);
}

first();
```

**Answer:**

**Execution Trace:**

1. **Global EC - Memory Creation:**
```
   a: undefined
   first: function code
   second: function code
```

2. **Global EC - Execution:**
```
   a = 10
   first() called
```

3. **first() EC - Memory Creation:**
```
   b: undefined
```

4. **first() EC - Execution:**
```
   b = 20
   second() called
```

5. **second() EC - Memory Creation:**
```
   c: undefined
```

6. **second() EC - Execution:**
```
   c = 30
   console.log(10 + 30) → 40
   second() completes
```

7. **Back to first() EC:**
```
   first() completes
```

8. **Back to Global EC:**
```
   Program ends
```

**Call Stack:**
```
Step 1: [Global EC]
Step 2: [first EC] [Global EC]
Step 3: [second EC] [first EC] [Global EC]
Step 4: [first EC] [Global EC]
Step 5: [Global EC]
```

**Output:** `40`

---

## 🧠 Tricky Interview Questions

### Q31. What's the output? Explain why.
```javascript
var x = 10;

function test() {
  console.log(x);
  if (false) {
    var x = 20;
  }
}

test();
```

**Answer:** `undefined`

**Explanation:**
- `var x = 20` inside `if` is hoisted to top of function scope
- Memory Creation: local `x = undefined`
- Even though `if (false)` never runs, hoisting still happens
- `console.log(x)` prints `undefined` (local x)

---

### Q32. What happens here?
```javascript
function outer() {
  return function inner() {
    console.log("Inner");
  };
}

var fn = outer();
fn();
```

**Answer:** Prints `Inner`

**Explanation:**
- `outer()` returns the `inner` function (doesn't call it)
- `fn` now holds the `inner` function
- `fn()` calls `inner` function → prints "Inner"

**Call Stack when `fn()` is called:**
```
[inner EC]
[Global EC]
```

---

### Q33. What will be the output?
```javascript
console.log(typeof test);
console.log(typeof greet);

function test() {}
var greet = function() {};
```

**Answer:**
```
function
undefined
```

**Explanation:**
- Memory Creation Phase:
  - `test`: function code (fully hoisted)
  - `greet`: undefined (only variable hoisted)
- `typeof test` → "function"
- `typeof greet` → "undefined" (not assigned yet)

---

### Q34. Explain the call stack for this recursion:
```javascript
function countdown(n) {
  if (n === 0) {
    console.log("Done!");
    return;
  }
  console.log(n);
  countdown(n - 1);
}

countdown(3);
```

**Answer:**

**Output:**
```
3
2
1
Done!
```

**Call Stack:**
```
Step 1: [countdown(3) EC] [Global EC]
Step 2: [countdown(2) EC] [countdown(3) EC] [Global EC]
Step 3: [countdown(1) EC] [countdown(2) EC] [countdown(3) EC] [Global EC]
Step 4: [countdown(0) EC] [countdown(1) EC] [countdown(2) EC] [countdown(3) EC] [Global EC]
        ↑ Prints "Done!", returns
Step 5: [countdown(1) EC] [countdown(2) EC] [countdown(3) EC] [Global EC]
Step 6: [countdown(2) EC] [countdown(3) EC] [Global EC]
Step 7: [countdown(3) EC] [Global EC]
Step 8: [Global EC]
```

---

### Q35. What's wrong with this?
```javascript
function bad() {
  good();
}

function good() {
  bad();
}

bad();
```

**Answer:** `RangeError: Maximum call stack size exceeded`

**Explanation:**
- `bad()` calls `good()`
- `good()` calls `bad()`
- `bad()` calls `good()`
- ... infinite loop
- Stack keeps growing until overflow

---

### Q36. What will be the output?
```javascript
var a = 1;

function test() {
  a = 10;
  return;
  
  function a() {}
}

test();
console.log(a);
```

**Answer:** `1`

**Explanation:**
- Inside `test()`, `function a()` is hoisted
- This creates a LOCAL variable `a` (shadows global `a`)
- `a = 10` modifies the local `a`, not global
- Global `a` remains `1`

---

### Q37. What's the output?
```javascript
console.log(foo());

function foo() {
  return bar();
  
  function bar() {
    return "Hello";
  }
}
```

**Answer:** `Hello`

**Explanation:**
- Both `foo` and `bar` are function declarations
- Both are fully hoisted
- `foo()` can be called before definition
- Inside `foo`, `bar()` is also hoisted and can be called
- Returns "Hello"

---

### Q38. Trace this execution:
```javascript
var x = 1;

function a() {
  var x = 2;
  b();
}

function b() {
  console.log(x);
}

a();
```

**Answer:** `1`

**Explanation:**
- `b()` is defined in global scope
- When `b()` runs, it looks for `x` in its scope chain
- `b`'s parent scope is Global (not `a`), because that's where it's defined
- Prints global `x` which is `1`

**Key Concept:** Lexical scoping - where function is DEFINED, not where it's CALLED

---

### Q39. What will be the output?
```javascript
function test() {
  console.log(arguments);
}

test(1, 2, 3);
```

**Answer:** `[Arguments] { '0': 1, '1': 2, '2': 3 }`

**Explanation:**
- Every function EC has an `arguments` object
- Contains all arguments passed to the function
- Array-like object (not a real array)

---

### Q40. Final Challenge - What's the output?
```javascript
var x = 21;

var test = function() {
  console.log(x);
  var x = 20;
};

test();
x;
```

**Answer:**
```
undefined
21 (value of x, not logged)
```

**Explanation:**
- Inside `test()` EC:
  - Memory Creation: local `x = undefined`
  - Execution: `console.log(x)` → prints `undefined`
  - Then `x = 20`
- Global `x` is still `21`
- Last line `x;` doesn't log anything (just evaluates to 21)

---

## 🎯 Summary - Must Know Points

1. **Execution Context** = Environment where code runs
2. **Three types:** Global, Function, Eval
3. **Two phases:** Memory Creation, Code Execution
4. **Call Stack** = LIFO data structure tracking contexts
5. **Hoisting** = Result of Memory Creation Phase
6. **var** → undefined in Memory Creation
7. **let/const** → TDZ in Memory Creation
8. **Each function call** = New EC
9. **Stack Overflow** = Too many ECs (infinite recursion)
10. **Understanding EC** = Key to understanding scope, hoisting, closures