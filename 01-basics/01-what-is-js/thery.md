# What is JavaScript?

## Definition
JavaScript is a programming language used on both client-side and server-side to make websites interactive and build server applications.

## Where JavaScript Runs

### 1. Client-Side (Browser)
JavaScript runs in web browsers to make websites interactive and dynamic.

**Examples:**
- Click buttons and see responses
- Fill and validate forms
- Create animations
- Update content without page reload
- Handle user interactions

**JavaScript Engine in Browsers:**
- Chrome → V8
- Firefox → SpiderMonkey
- Safari → JavaScriptCore
- Edge → V8

### 2. Server-Side (Node.js)
JavaScript runs on servers using Node.js runtime environment.

**Examples:**
- Create REST APIs
- Handle HTTP requests
- Implement business logic
- Database operations
- File system operations

**JavaScript Engine in Node.js:**
- Node.js → V8 (same as Chrome)

## Key Characteristics

### 1. Single-Threaded
JavaScript executes code one line at a time. It has only one call stack.
```
Line 1 executes → Line 2 executes → Line 3 executes
```

### 2. Synchronous by Default
JavaScript runs code in order, line by line. Each line waits for the previous line to complete.
```javascript
console.log("First");   // Executes first
console.log("Second");  // Executes second
console.log("Third");   // Executes third
```

### 3. Asynchronous Capability
Even though JavaScript is single-threaded, it can handle asynchronous operations using:
- **Event Loop** - Manages execution
- **Callback Queue** - Stores callback functions
- **Microtask Queue** - Stores promises

**Example of Async:**
```javascript
console.log("First");

setTimeout(() => {
    console.log("Second");
}, 1000);

console.log("Third");

// Output:
// First
// Third
// Second (after 1 second)
```

## Brief History
- **Created:** 1995
- **Creator:** Brendan Eich
- **Original Name:** Mocha, then LiveScript, finally JavaScript
- **Time to create:** 10 days
- **Why created:** To make web pages interactive

## What JavaScript Can Do

### In Browser:
✅ Manipulate HTML and CSS  
✅ Respond to user events (clicks, typing, etc.)  
✅ Validate form data  
✅ Create animations  
✅ Make API calls  
✅ Store data locally  

### In Server (Node.js):
✅ Create web servers  
✅ Build REST APIs  
✅ Access databases  
✅ Read/write files  
✅ Handle authentication  
✅ Process data  

## What JavaScript Cannot Do (in Browser)

❌ Direct access to file system (security reasons)  
❌ Access hardware directly  
❌ Close windows not opened by it  
❌ Access data from other websites (CORS)  

## Important Terms

**High-Level Language:**  
You don't manage memory manually. JavaScript handles it automatically.

**Interpreted Language:**  
Code is executed line by line, not compiled beforehand.

**Dynamically Typed:**  
You don't need to specify data types. JavaScript figures it out automatically.
```javascript
let name = "Ravi";    // String (automatically detected)
let age = 25;         // Number (automatically detected)
```

## Real-World Example

**Without JavaScript (Static):**
```html
<button>Click Me</button>
<!-- Nothing happens when clicked -->
```

**With JavaScript (Interactive):**
```html
<button onclick="alert('Hello!')">Click Me</button>
<!-- Shows popup when clicked -->
```

## Interview Points

⭐ JavaScript is a single-threaded, synchronous language by default  
⭐ It can handle async operations using Event Loop  
⭐ Runs in browser (client-side) and Node.js (server-side)  
⭐ JavaScript Engine executes JavaScript code  
⭐ Created in 1995 by Brendan Eich in just 10 days  

## Summary

JavaScript is a versatile programming language that:
- Runs on both client (browser) and server (Node.js)
- Makes websites interactive (client-side)
- Builds APIs and handles server logic (server-side)
- Is single-threaded but can handle async operations
- Executes synchronously by default
- Uses Event Loop, Callback Queue, and Microtask Queue for async operations