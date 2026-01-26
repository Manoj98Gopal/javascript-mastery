# Interview Questions - What is JavaScript?

## Q1: What is JavaScript?

**Answer:**  
JavaScript is a high-level, interpreted, dynamically-typed programming language used for both client-side (browser) and server-side (Node.js) development. It makes web pages interactive and is used to build web applications, servers, and APIs.

---

## Q2: Where does JavaScript run?

**Answer:**  
JavaScript runs in two environments:

1. **Browser (Client-side):** 
   - Uses JavaScript engines like V8 (Chrome), SpiderMonkey (Firefox)
   - Makes websites interactive
   
2. **Server (Node.js):**
   - Uses V8 engine
   - Handles backend logic, APIs, databases

---
s
## Q3: Is JavaScript single-threaded or multi-threaded?

**Answer:**  
JavaScript is **single-threaded**. It has only one call stack and executes code one line at a time. However, it can handle asynchronous operations using the Event Loop, Callback Queue, and Microtask Queue.

---

## Q4: Is JavaScript synchronous or asynchronous?

**Answer:**  
JavaScript is **synchronous by default**, meaning it executes code line by line in order. However, it can handle **asynchronous operations** using:
- Callbacks
- Promises
- Async/Await
- Event Loop

---

## Q5: What is the difference between client-side and server-side JavaScript?

**Answer:**

| Client-Side | Server-Side |
|-------------|-------------|
| Runs in browser | Runs in Node.js |
| Can access DOM | Cannot access DOM |
| Can't access file system | Can access file system |
| Handles UI interactions | Handles business logic |
| Example: Button clicks | Example: API creation |

---

## Q6: What can JavaScript do in a browser?

**Answer:**
- Manipulate HTML and CSS (DOM manipulation)
- Respond to user events (clicks, key presses)
- Validate forms
- Create animations
- Make HTTP requests (AJAX, Fetch)
- Store data (localStorage, sessionStorage)
- Create interactive elements

---

## Q7: What is a JavaScript Engine?

**Answer:**  
A JavaScript engine is a program that executes JavaScript code. It converts JavaScript code into machine code that the computer can understand.

**Examples:**
- V8 (Chrome, Node.js)
- SpiderMonkey (Firefox)
- JavaScriptCore (Safari)

---

## Q8: Why is JavaScript called a "high-level" language?

**Answer:**  
JavaScript is high-level because:
- You don't manage memory manually (automatic garbage collection)
- Syntax is closer to human language
- Abstracts away complex computer operations
- Easy to read and write

---

## Q9: What does "dynamically typed" mean?

**Answer:**  
In JavaScript, you don't need to declare variable types. JavaScript automatically determines the data type based on the value.
```javascript
let x = 5;        // Number
x = "Hello";      // Now String (type changed)
x = true;         // Now Boolean
```

---

## Q10: Output-based Question
```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");
```

**What will be the output?**

**Answer:**
```
A
C
B
```

**Reason:**  
- "A" - Executes immediately (synchronous)
- "C" - Executes immediately (synchronous)
- "B" - Executes after all synchronous code (asynchronous, goes to callback queue)

Even with `setTimeout(..., 0)`, it still goes through the event loop.

---

## Q11: Who created JavaScript and when?

**Answer:**  
- **Creator:** Brendan Eich
- **Year:** 1995
- **Time taken:** 10 days
- **Original name:** Mocha, then LiveScript, finally JavaScript

---

## Q12: Can JavaScript access your computer's files directly from the browser?

**Answer:**  
No (for security reasons). JavaScript in the browser cannot:
- Access file system directly
- Access other websites' data (CORS policy)
- Close windows it didn't open
- Access hardware directly

However, with user permission, it can:
- Upload files
- Download files
- Access camera/microphone (with permission)

---

## Q13: What is Node.js?

**Answer:**  
Node.js is a JavaScript runtime environment that allows JavaScript to run outside the browser (on servers). It uses Chrome's V8 engine and provides APIs to access:
- File system
- Network
- Operating system
- Databases

---

## Q14: Is JavaScript the same as Java?

**Answer:**  
No! JavaScript and Java are completely different languages.

| JavaScript | Java |
|------------|------|
| Scripting language | Programming language |
| Interpreted | Compiled |
| Dynamically typed | Statically typed |
| Runs in browser/Node.js | Runs on JVM |
| Lightweight | Heavy |

The similarity in names is just a marketing decision from 1995.

---

## Q15: What is the Event Loop?

**Answer:**  
The Event Loop is a mechanism that allows JavaScript to handle asynchronous operations even though it's single-threaded. It continuously checks:
1. Call Stack (if empty)
2. Microtask Queue (priority)
3. Callback Queue

And executes tasks accordingly.

*(This will be covered in detail in Phase 4)*
