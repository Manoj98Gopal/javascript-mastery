# Execution Context & Call Stack

## What is Execution Context?

**Execution Context** is the environment where JavaScript code is executed. Think of it as a container that holds all the information needed to run your code.

Every time JavaScript runs, it creates an execution context.

---

## Types of Execution Context

### 1. Global Execution Context (GEC)

- **Created when JavaScript file first runs**
- **Only ONE** global execution context per program
- Creates the global object (`window` in browser, `global` in Node.js)
- Creates `this` keyword (points to global object)
- All code not inside a function runs here
```javascript
// This runs in Global Execution Context
var name = "Manoj";
console.log(name); // Global context
```

---

### 2. Function Execution Context (FEC)

- **Created every time a function is called**
- **New context for each function call**
- Deleted after function completes
- Has its own Variable Environment and `this` binding
```javascript
function greet() {
  // This runs in Function Execution Context
  var message = "Hello";
  console.log(message);
}

greet(); // Creates new Function Execution Context
```

---

### 3. Eval Execution Context

- Created when code runs inside `eval()` function
- **Avoid using** - security issues and performance problems
- Rarely used in modern JavaScript
```javascript
eval("var x = 10"); // Creates Eval Execution Context (DON'T USE!)
```

---

## Components of Execution Context

Every Execution Context has three main components:

### 1. Variable Environment
- Stores variables and function declarations
- Holds `var`, `let`, `const` declarations
- Stores function definitions

### 2. Lexical Environment
- Similar to Variable Environment
- Stores the scope chain
- Determines what variables are accessible

### 3. `this` Binding
- Determines what `this` keyword points to
- Global context: `this` = global object
- Function context: depends on how function is called
```
Execution Context = {
  Variable Environment: {...},
  Lexical Environment: {...},
  this: {...}
}
```

---

## Two Phases of Execution Context

Every execution context is created in **TWO phases**:

### Phase 1: Memory Creation Phase (Creation Phase)

Also called the **"Creation Phase"** or **"Hoisting Phase"**

**What happens:**

1. **Variables** (var, let, const):
   - `var` → allocated memory, assigned `undefined`
   - `let`, `const` → allocated memory, **not initialized** (TDZ)

2. **Functions**:
   - Entire function code is stored in memory
   - Function declarations are fully available

3. **`this` keyword** is determined

**Example:**
```javascript
var x = 10;
function test() {
  console.log("Hello");
}

// Memory Creation Phase:
// x → undefined
// test → function code stored
```

---

### Phase 2: Code Execution Phase (Execution Phase)

**What happens:**

1. JavaScript executes code **line by line**
2. Variables get their **actual values** assigned
3. Functions are **invoked** (if called)
4. New execution contexts created for function calls

**Example:**
```javascript
var x = 10;  // x gets value 10 (was undefined in creation phase)
function test() {
  console.log("Hello");
}
test();  // Function executed, new execution context created
```

---

## How Execution Context Works - Step by Step

Let's trace this code:
```javascript
var name = "Manoj";

function greet() {
  var message = "Hello";
  console.log(message + " " + name);
}

greet();
console.log(name);
```

### Step-by-Step Execution:

**1. Global Execution Context Created**

**Memory Creation Phase:**
```
Global EC {
  name: undefined
  greet: function code
}
```

**Code Execution Phase:**
- Line 1: `name = "Manoj"` (name gets value)
- Line 3-6: Function definition (already in memory, skip)
- Line 8: `greet()` called → **New Function EC created!**

---

**2. Function Execution Context Created (for `greet`)**

**Memory Creation Phase:**
```
greet() EC {
  message: undefined
}
```

**Code Execution Phase:**
- Line 4: `message = "Hello"`
- Line 5: `console.log(...)` → prints "Hello Manoj"
- Function completes → **Function EC destroyed**

---

**3. Back to Global Execution Context**

- Line 9: `console.log(name)` → prints "Manoj"
- Program ends → **Global EC destroyed**

---

## Call Stack (Execution Stack)

The **Call Stack** is a data structure that keeps track of execution contexts.

### How Call Stack Works

- **LIFO** - Last In, First Out (like a stack of plates)
- When a function is called → push new EC onto stack
- When a function returns → pop EC from stack
- Global EC is always at the bottom
```
Call Stack (grows upward):

|                    |
|  Function EC 3     |  ← Top (current execution)
|  Function EC 2     |
|  Function EC 1     |
|  Global EC         |  ← Bottom (always there)
+--------------------+
```

---

## Call Stack Example
```javascript
function first() {
  console.log("First");
  second();
  console.log("First again");
}

function second() {
  console.log("Second");
  third();
  console.log("Second again");
}

function third() {
  console.log("Third");
}

first();
```

### Call Stack Steps:

**Step 1:** Global EC pushed
```
|  Global EC  |
+-------------+
```

**Step 2:** `first()` called → Function EC pushed
```
|  first() EC |
|  Global EC  |
+-------------+
```

**Step 3:** Inside `first()`, `second()` called → Function EC pushed
```
|  second() EC |
|  first() EC  |
|  Global EC   |
+--------------+
```

**Step 4:** Inside `second()`, `third()` called → Function EC pushed
```
|  third() EC  |
|  second() EC |
|  first() EC  |
|  Global EC   |
+--------------+
```

**Step 5:** `third()` completes → Popped
```
|  second() EC |
|  first() EC  |
|  Global EC   |
+--------------+
```

**Step 6:** `second()` completes → Popped
```
|  first() EC |
|  Global EC  |
+-------------+
```

**Step 7:** `first()` completes → Popped
```
|  Global EC  |
+-------------+
```

**Step 8:** Program ends → Global EC popped (stack empty)

---

## Stack Overflow

When the call stack exceeds its limit (too many execution contexts).

**Common Cause:** Infinite recursion
```javascript
function recursive() {
  recursive(); // Calls itself forever
}

recursive(); // RangeError: Maximum call stack size exceeded
```

**What happens:**
- Each call creates new EC
- Stack keeps growing
- Eventually runs out of memory
- Browser throws error

---

## Visualizing with DevTools

You can see the call stack in browser DevTools:

1. Open DevTools (F12)
2. Go to **Sources** tab
3. Set a **breakpoint**
4. Run code
5. Check **Call Stack** panel

---

## Memory Creation vs Execution - Detailed

### Example Code:
```javascript
var x = 10;
var y = 20;

function add(a, b) {
  var result = a + b;
  return result;
}

var sum = add(x, y);
```

### Global EC - Memory Creation:
```
x: undefined
y: undefined
add: function code
sum: undefined
```

### Global EC - Code Execution:
```
x: 10              (line 1)
y: 20              (line 2)
add: function code (already stored)
sum: add(x, y) is called → New Function EC!
```

### Function EC (add) - Memory Creation:
```
a: undefined
b: undefined
result: undefined
```

### Function EC (add) - Code Execution:
```
a: 10              (parameter)
b: 20              (parameter)
result: 30         (line 5)
return 30          (line 6)
```

Function EC destroyed, returns 30 to Global EC

### Back to Global EC:
```
sum: 30  (receives returned value)
```

---

## Hoisting Explained (Why it Happens)

**Hoisting** is a result of the Memory Creation Phase!
```javascript
console.log(x); // undefined (not error!)
var x = 10;

greet(); // "Hello!" (works!)
function greet() {
  console.log("Hello!");
}
```

**Why this works:**

**Memory Creation Phase:**
- `x` → allocated as `undefined`
- `greet` → entire function stored

**Execution Phase:**
- `console.log(x)` → prints `undefined` (already in memory)
- `greet()` → executes (already in memory)

---

## `let` and `const` in Execution Context

Unlike `var`, `let` and `const` are in **Temporal Dead Zone (TDZ)** during Memory Creation.
```javascript
console.log(x); // ReferenceError
let x = 10;
```

**Memory Creation:**
- `x` → allocated but **not initialized** (TDZ)

**Execution:**
- `console.log(x)` → Error! (trying to access before initialization)
- `x = 10` → Now initialized

---

## Key Interview Points

### 1. What is Execution Context?
Environment where JavaScript code is executed. Contains Variable Environment, Lexical Environment, and `this` binding.

### 2. How many phases?
**Two phases:**
- Memory Creation (variables = undefined, functions stored)
- Code Execution (actual values assigned, code runs)

### 3. Types of Execution Contexts?
- **Global:** Created when script starts, only one
- **Function:** Created on each function call
- **Eval:** Created by eval() (avoid using)

### 4. What is Call Stack?
Data structure that tracks execution contexts using LIFO (Last In First Out).

### 5. What happens when function is called?
1. New Function Execution Context created
2. Memory Creation Phase runs
3. Code Execution Phase runs
4. Function returns
5. Function EC destroyed
6. Back to previous EC

### 6. What causes Stack Overflow?
Too many execution contexts (usually infinite recursion).

### 7. Where does hoisting come from?
Memory Creation Phase - variables and functions are stored in memory before code execution.

### 8. Difference between `var` and `let` in EC?
- `var`: Initialized as `undefined` in Memory Creation
- `let`/`const`: Allocated but in TDZ (not accessible until execution reaches declaration)

---

## Summary
```
JavaScript Execution:
1. Global Execution Context created
2. Memory Creation Phase (hoisting)
   - var → undefined
   - functions → stored
   - let/const → TDZ
3. Code Execution Phase
   - Assigns values
   - Calls functions
   - Creates new Function ECs
4. Call Stack manages all contexts (LIFO)
5. Function EC created → executed → destroyed
6. Global EC destroyed when program ends
```

**Remember:** Every function call = New Execution Context!