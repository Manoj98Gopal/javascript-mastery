# How JavaScript Runs in Browser & Node.js

## Overview
JavaScript needs an engine to execute code. This engine converts high-level JavaScript code into machine-level code that computers can understand.

---

## 1. JavaScript in Browser

### What is a JavaScript Engine?
A JavaScript engine is a program that reads and executes JavaScript code. Every browser has its own JavaScript engine.

### Popular JavaScript Engines

| Browser | JavaScript Engine |
|---------|-------------------|
| Chrome | V8 |
| Firefox | SpiderMonkey |
| Safari | JavaScriptCore (Nitro) |
| Edge | V8 (Chromium-based) |
| Opera | V8 |

### How Browser Executes JavaScript

**Step-by-step process:**

1. **Browser loads HTML**
2. **Finds `<script>` tag** or external `.js` file
3. **JavaScript Engine starts**
4. **Code is parsed** (converted to AST - Abstract Syntax Tree)
5. **Code is compiled** (JIT - Just-In-Time compilation)
6. **Code is executed** line by line

### What JavaScript Can Do in Browser

✅ **DOM Manipulation**
```javascript
document.getElementById("demo").innerHTML = "Hello!";
```

✅ **Event Handling**
```javascript
button.addEventListener("click", function() {
    alert("Clicked!");
});
```

✅ **Form Validation**
```javascript
function validateEmail(email) {
    return email.includes("@");
}
```

✅ **Animations**
```javascript
element.style.transform = "translateX(100px)";
```

✅ **API Calls**
```javascript
fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => console.log(data));
```

---

## 2. JavaScript in Node.js (Server)

### What is Node.js?
Node.js is a runtime environment that allows JavaScript to run outside the browser, on servers and computers.

### JavaScript Engine in Node.js
- **Engine:** V8 (same as Chrome)
- **Created by:** Ryan Dahl (2009)
- **Purpose:** Run JavaScript on server-side

### How Node.js Executes JavaScript

**Process:**
1. **Node.js reads `.js` file**
2. **V8 engine parses code**
3. **Code is compiled** (JIT compilation)
4. **Code is executed**
5. **Provides access to:**
   - File system
   - Network
   - Operating system APIs
   - Databases

### What JavaScript Can Do in Node.js

✅ **Create Web Servers**
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Hello from Server!");
});

server.listen(3000);
```

✅ **File Operations**
```javascript
const fs = require('fs');

fs.readFile('data.txt', 'utf8', (err, data) => {
    console.log(data);
});
```

✅ **Database Operations**
```javascript
// Connect to database
// Perform CRUD operations
```

✅ **Build REST APIs**
```javascript
app.get('/api/users', (req, res) => {
    res.json({ users: [] });
});
```

---

## 3. JavaScript Engine Architecture

### Main Components
```
┌────────────────────────────────────────┐
│      JavaScript Engine (V8)            │
├────────────────────────────────────────┤
│                                        │
│  ┌──────────────┐  ┌───────────────┐  │
│  │  Call Stack  │  │  Heap Memory  │  │
│  │              │  │               │  │
│  │  Execution   │  │  Objects      │  │
│  │  Context     │  │  Arrays       │  │
│  │  Functions   │  │  Functions    │  │
│  └──────────────┘  └───────────────┘  │
│                                        │
└────────────────────────────────────────┘
```

### 1. Call Stack (Execution Stack)

**What is Call Stack?**
- A data structure that tracks function execution
- Uses LIFO (Last In, First Out) principle
- Manages execution context

**How it works:**
```javascript
function first() {
    console.log("First");
    second();
}

function second() {
    console.log("Second");
}

first();
```

**Call Stack flow:**
```
1. first() pushed to stack
2. console.log("First") pushed
3. console.log("First") popped (executed)
4. second() pushed
5. console.log("Second") pushed
6. console.log("Second") popped
7. second() popped
8. first() popped
9. Stack is empty
```

### 2. Heap Memory

**What is Heap Memory?**
- Storage area for objects and complex data types
- Dynamic memory allocation
- No specific order

**What is stored in Heap:**
- Objects: `{ name: "Ravi" }`
- Arrays: `[1, 2, 3]`
- Functions: `function() {}`

### 3. Memory Allocation

**Stack Memory (Primitive Types):**
- Numbers
- Strings
- Booleans
- undefined
- null
- Symbol
- BigInt

**Heap Memory (Non-Primitive Types):**
- Objects
- Arrays
- Functions

**Visual Representation:**
```javascript
let name = "Ravi";        // Stack
let age = 25;             // Stack

let person = {            // Heap (reference in Stack)
    name: "Kumar",
    age: 30
};

let numbers = [1, 2, 3];  // Heap (reference in Stack)
```

**Memory Diagram:**
```
Stack Memory          Heap Memory
┌─────────────┐      ┌──────────────────────┐
│ name: "Ravi"│      │                      │
│ age: 25     │      │ person: {            │
│ person: ref─┼─────→│   name: "Kumar",     │
│ numbers:ref─┼─────→│   age: 30            │
└─────────────┘      │ }                    │
                     │                      │
                     │ numbers: [1, 2, 3]   │
                     └──────────────────────┘
```

---

## 4. How JavaScript Engine Works

### Step 1: Parsing
JavaScript code is converted into **AST (Abstract Syntax Tree)**.

**Example:**
```javascript
let x = 5 + 3;
```

**AST (Simplified):**
```
Program
└── VariableDeclaration
    ├── Identifier: x
    └── BinaryExpression (+)
        ├── Literal: 5
        └── Literal: 3
```

### Step 2: Compilation (JIT - Just-In-Time)
Modern JavaScript engines use **JIT compilation**:
- Code is compiled while executing
- Hot code (frequently executed) is optimized
- Faster than pure interpretation

**Two compilers in V8:**
1. **Ignition (Interpreter):** Quick execution
2. **TurboFan (Optimizing Compiler):** Optimizes hot code

### Step 3: Execution
- Code runs line by line
- Variables are assigned
- Functions are called
- Operations are performed

---

## 5. Browser vs Node.js

| Feature | Browser | Node.js |
|---------|---------|---------|
| **Engine** | V8, SpiderMonkey, etc. | V8 |
| **Purpose** | Run client-side code | Run server-side code |
| **DOM Access** | ✅ Yes | ❌ No |
| **File System** | ❌ No (limited) | ✅ Yes |
| **Global Object** | `window` | `global` |
| **Modules** | ES Modules | CommonJS + ES Modules |
| **APIs** | Browser APIs (fetch, localStorage) | Node APIs (fs, http, path) |
| **Use Case** | Interactive websites | Servers, APIs, CLI tools |

---

## 6. JavaScript Execution Flow
```
┌─────────────────────────────────────────┐
│   JavaScript Code Written               │
└────────────────┬────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────┐
│   Parsing (Create AST)                  │
└────────────────┬────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────┐
│   Compilation (JIT - Bytecode)          │
└────────────────┬────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────┐
│   Execution (Line by Line)              │
│   - Call Stack manages execution        │
│   - Heap stores objects                 │
└─────────────────────────────────────────┘
```

---

## 7. Global Execution Context

When JavaScript starts, it creates a **Global Execution Context (GEC)**.

**Components:**
1. **Global Object** (`window` in browser, `global` in Node.js)
2. **this keyword** (points to global object)
3. **Variable Environment** (stores variables)
4. **Outer Environment** (null for global)

---

## Key Takeaways

✅ JavaScript needs an engine to execute code  
✅ Different browsers have different engines  
✅ Node.js uses V8 engine (same as Chrome)  
✅ JavaScript engine has Call Stack and Heap Memory  
✅ Primitive types → Stack Memory  
✅ Non-primitive types → Heap Memory  
✅ Call Stack manages execution order (LIFO)  
✅ Modern engines use JIT compilation for performance  

---

## Interview Important Points

⭐ V8 is used by Chrome and Node.js  
⭐ Call Stack is LIFO (Last In, First Out)  
⭐ Heap stores objects, arrays, functions  
⭐ Stack stores primitive values  
⭐ JIT compilation makes JavaScript faster  
⭐ Browser has DOM access, Node.js has file system access  
⭐ Global object is `window` in browser, `global` in Node.js