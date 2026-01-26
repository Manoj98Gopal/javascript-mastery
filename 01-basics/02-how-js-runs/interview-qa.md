# Interview Questions - How JavaScript Runs

## Q1: What is a JavaScript Engine?

**Answer:**  
A JavaScript engine is a program that executes JavaScript code. It converts high-level JavaScript code into machine code that computers can understand.

**Examples:**
- V8 (Chrome, Node.js, Edge)
- SpiderMonkey (Firefox)
- JavaScriptCore/Nitro (Safari)

---

## Q2: Which JavaScript engine does Node.js use?

**Answer:**  
Node.js uses the **V8 engine**, the same engine used by Google Chrome.

---

## Q3: What is the Call Stack?

**Answer:**  
The Call Stack is a data structure that tracks function execution in JavaScript. It uses LIFO (Last In, First Out) principle.

**How it works:**
- When a function is called, it's pushed to the stack
- When a function finishes, it's popped from the stack
- JavaScript executes code from the top of the stack

**Example:**
```javascript
function first() {
    second();
}
function second() {
    console.log("Hello");
}
first();

// Call Stack:
// 1. first() pushed
// 2. second() pushed
// 3. console.log() pushed
// 4. console.log() popped
// 5. second() popped
// 6. first() popped
```

---

## Q4: What is the difference between Stack Memory and Heap Memory?

**Answer:**

| Stack Memory | Heap Memory |
|--------------|-------------|
| Stores primitive types | Stores non-primitive types |
| Fixed size | Dynamic size |
| Fast access | Slower access |
| LIFO structure | No specific order |
| Automatically managed | Garbage collected |

**Stored in Stack:**
- Numbers, Strings, Booleans, undefined, null, Symbol, BigInt

**Stored in Heap:**
- Objects, Arrays, Functions

---

## Q5: Why do objects behave differently when copied?

**Answer:**  
When you copy an object, you copy its **reference** (memory address), not the actual object. Both variables point to the same object in heap memory.
```javascript
let obj1 = { name: "Ravi" };
let obj2 = obj1;  // Copies reference
obj2.name = "Kumar";

console.log(obj1.name);  // "Kumar" (changed!)
```

**Primitives copy the value:**
```javascript
let a = 10;
let b = a;  // Copies value
b = 20;

console.log(a);  // 10 (unchanged)
```

---

## Q6: What is JIT (Just-In-Time) Compilation?

**Answer:**  
JIT compilation is a technique where code is compiled during execution, not before. Modern JavaScript engines (like V8) use JIT to improve performance.

**How it works:**
1. Code is initially interpreted (fast startup)
2. Hot code (frequently executed) is identified
3. Hot code is optimized and compiled
4. Optimized code runs faster

**Benefits:**
- Fast startup (interpretation)
- Fast execution (compilation of hot code)

---

## Q7: What is the difference between Browser JavaScript and Node.js JavaScript?

**Answer:**

| Browser | Node.js |
|---------|---------|
| Runs in browser | Runs on server |
| Can access DOM | Cannot access DOM |
| Global object: `window` | Global object: `global` |
| No file system access | Full file system access |
| Browser APIs (fetch, localStorage) | Node APIs (fs, http, path) |
| Client-side code | Server-side code |

**Same:**
- Both use JavaScript language
- Both can use V8 engine
- Same syntax and core features

---

## Q8: What happens when JavaScript code is executed?

**Answer:**  
**Three main phases:**

1. **Parsing:**
   - Code is converted to AST (Abstract Syntax Tree)
   - Syntax errors are caught here

2. **Compilation:**
   - AST is converted to bytecode
   - JIT compilation optimizes code

3. **Execution:**
   - Code runs line by line
   - Call Stack manages execution
   - Variables are stored in memory

---

## Q9: What is the Global Execution Context?

**Answer:**  
When JavaScript starts, it creates a Global Execution Context (GEC). This is the default environment where code runs.

**Components:**
1. **Global Object** (`window` in browser, `global` in Node.js)
2. **this** (points to global object)
3. **Variable Environment** (stores variables and functions)

---

## Q10: Output-based Question
```javascript
function outer() {
    var x = 10;
    
    function inner() {
        console.log(x);
    }
    
    return inner;
}

var innerFunc = outer();
innerFunc();
```

**What will be the output?**

**Answer:** `10`

**Reason:**  
The `inner` function forms a closure over the variable `x` from the `outer` function. Even after `outer` finishes executing, `inner` still has access to `x`.

---

## Q11: What causes "Maximum call stack size exceeded" error?

**Answer:**  
This error occurs when the call stack runs out of space, usually due to:

1. **Infinite recursion:**
```javascript
function recursive() {
    recursive();  // Never stops calling itself
}
recursive();  // Stack overflow!
```

2. **Very deep recursion:**
```javascript
function count(n) {
    if (n === 0) return;
    count(n - 1);
}
count(100000);  // Might cause stack overflow
```

**Solution:**
- Add proper base case for recursion
- Use iteration instead of deep recursion
- Use techniques like tail call optimization

---

## Q12: Can you access `window` object in Node.js?

**Answer:**  
No. `window` object exists only in browsers. In Node.js, the global object is called `global`.
```javascript
// Browser
console.log(window);  // ✅ Works

// Node.js
console.log(global);  // ✅ Works
console.log(window);  // ❌ Error: window is not defined
```

---

## Q13: What is an AST (Abstract Syntax Tree)?

**Answer:**  
AST is a tree representation of JavaScript code structure. During parsing, JavaScript engine converts code to AST.

**Example:**
```javascript
let x = 5 + 3;
```

**AST (Simplified):**
```
VariableDeclaration
├── identifier: x
└── BinaryExpression (+)
    ├── Literal: 5
    └── Literal: 3
```

**Use:**
- Helps engine understand code structure
- Used by compilers and transpilers (Babel)
- Used by linters (ESLint)

---

## Q14: How does V8 engine optimize code?

**Answer:**  
V8 uses two compilers:

1. **Ignition (Interpreter):**
   - Quickly interprets code
   - Generates bytecode
   - Starts execution fast

2. **TurboFan (Optimizing Compiler):**
   - Identifies hot code (frequently executed)
   - Compiles hot code to highly optimized machine code
   - Makes execution faster

**Process:**
```
JavaScript Code
    ↓
Parser (AST)
    ↓
Ignition (Bytecode) → Quick execution
    ↓
TurboFan (Optimized Machine Code) → Fast execution
```

---

## Q15: What is stored in the Call Stack?

**Answer:**  
The Call Stack stores:
- **Execution Contexts** (Global and Function)
- **Function calls** (in order)
- **Local variables** (primitive types)
- **Return addresses** (where to go after function finishes)

**NOT stored in Call Stack:**
- Objects (stored in Heap)
- Arrays (stored in Heap)
- Large data structures

---

## Q16: Why is JavaScript called single-threaded?

**Answer:**  
JavaScript has only **one Call Stack**, so it can execute only one thing at a time.

**Single Call Stack = Single Thread**

However, JavaScript can handle asynchronous operations using:
- Event Loop
- Callback Queue
- Web APIs (in browser)
- Microtask Queue

This makes it seem like JavaScript is doing multiple things at once, but it's still single-threaded.

---

## Q17: What happens to variables after function execution?

**Answer:**  
**For primitive types:**
- Removed from stack when function ends
- Memory is freed automatically

**For objects:**
- Reference is removed from stack
- Object remains in heap
- Garbage collector removes it if no references exist

**Example:**
```javascript
function test() {
    let x = 10;           // Stack
    let obj = { a: 1 };   // Heap (reference in stack)
}
test();

// After function ends:
// x is removed from stack
// obj reference is removed from stack
// { a: 1 } in heap is marked for garbage collection
