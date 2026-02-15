# Function Declaration vs Function Expression

## Overview

JavaScript has different ways to create functions. The two main ways are **Function Declaration** and **Function Expression**. Understanding the difference is crucial for interviews!

---

## 1. Function Declaration

### Syntax
```javascript
function functionName(parameters) {
  // code
}
```

### Example
```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
```

### Key Features

✅ **Hoisted** - Can be called before it's defined in code  
✅ **Always has a name** - Must have a function name  
✅ **Creates a named function** - Function name is available in scope  
✅ **Statement** - Stands alone as a complete statement  

---

## 2. Function Expression

### Syntax
```javascript
const functionName = function(parameters) {
  // code
};
```

### Example
```javascript
const greet = function(name) {
  return `Hello, ${name}!`;
};
```

### Key Features

❌ **NOT Hoisted** - Cannot be called before definition  
✅ **Can be anonymous** - Function doesn't need a name  
✅ **Assigned to a variable** - Stored in a variable  
✅ **Part of an expression** - Can be used anywhere expressions are allowed  
⚠️ **Variable is hoisted but in TDZ** - Variable exists but can't be accessed  

---

## Side-by-Side Comparison

| Feature | Function Declaration | Function Expression |
|---------|---------------------|---------------------|
| **Syntax** | `function name() {}` | `const name = function() {}` |
| **Hoisting** | ✅ Fully hoisted | ❌ NOT hoisted |
| **Call before definition** | ✅ YES | ❌ NO (ReferenceError) |
| **Must have name** | ✅ YES | ❌ NO (can be anonymous) |
| **When available** | Throughout scope | Only after definition line |
| **Use in conditionals** | Not recommended | ✅ Recommended |
| **Common use** | Regular functions | Callbacks, IIFE, conditionals |

---

## Hoisting Explained

### Function Declaration - Fully Hoisted
```javascript
// This works!
console.log(sayHi());  // "Hi!"

function sayHi() {
  return "Hi!";
}
```

**Why?** The entire function is hoisted to the top of the scope before code runs.

**Behind the scenes:**
```javascript
// JavaScript does this internally:
function sayHi() {
  return "Hi!";
}

console.log(sayHi());  // "Hi!"
```

---

### Function Expression - NOT Hoisted
```javascript
// This FAILS!
console.log(greet());  // ReferenceError: Cannot access 'greet' before initialization

const greet = function() {
  return "Hello!";
};
```

**Why?** The variable `greet` is hoisted but in Temporal Dead Zone (TDZ). You can't access it before the line where it's assigned.

**Behind the scenes:**
```javascript
// JavaScript does this internally:
// greet is in TDZ here (hoisted but not initialized)

console.log(greet());  // Error!

const greet = function() {  // Assignment happens here
  return "Hello!";
};
```

---

## Named vs Anonymous Function Expressions

### Anonymous Function Expression
```javascript
const greet = function() {
  return "Hello!";
};
```
- No name after `function` keyword
- Most common form

---

### Named Function Expression
```javascript
const greet = function greetUser() {
  return "Hello!";
};

greet();  // Works
greetUser();  // Error: greetUser is not defined
```

**Important:** The name `greetUser` is only available **inside** the function (useful for recursion and debugging).

---

## When to Use Which?

### Use Function Declaration When:

✅ You need the function throughout the file  
✅ You want clearer hoisting behavior  
✅ Writing simple, straightforward functions  
✅ You want the function name in stack traces  

**Example:**
```javascript
function calculateTotal(price, tax) {
  return price + (price * tax);
}
```

---

### Use Function Expression When:

✅ You want to control when the function is created  
✅ Creating functions conditionally  
✅ Passing functions as arguments (callbacks)  
✅ Creating closures  
✅ Using IIFE (Immediately Invoked Function Expression)  
✅ You want to prevent hoisting  

**Example:**
```javascript
// Conditional creation
const greet = userLoggedIn 
  ? function() { return "Welcome back!"; }
  : function() { return "Please log in"; };

// Callback
setTimeout(function() {
  console.log("Delayed message");
}, 1000);
```

---

## Temporal Dead Zone (TDZ)

When using `const` or `let` with function expressions:
```javascript
// TDZ starts here for 'myFunc'
console.log(myFunc);  // ReferenceError
// Still in TDZ
// Still in TDZ
const myFunc = function() {};  // TDZ ends
```

**TDZ = Time between hoisting and initialization where variable cannot be accessed**

---

## Common Patterns

### 1. IIFE (Immediately Invoked Function Expression)
```javascript
(function() {
  console.log("I run immediately!");
})();
```
- Must be a function expression
- Cannot use function declaration for IIFE

---

### 2. Callbacks
```javascript
// Function expression as callback
setTimeout(function() {
  console.log("Done!");
}, 1000);

// Array methods
[1, 2, 3].map(function(num) {
  return num * 2;
});
```

---

### 3. Conditional Function Creation
```javascript
let operation;

if (userWantsAddition) {
  operation = function(a, b) { return a + b; };
} else {
  operation = function(a, b) { return a - b; };
}
```

---

## Best Practices

✅ **Be consistent** - Pick one style for your project  
✅ **Use declarations for utilities** - Helper functions used throughout  
✅ **Use expressions for callbacks** - Cleaner syntax  
✅ **Avoid function declarations in blocks** - Can be confusing  
✅ **Modern preference** - Arrow functions (next topic) for expressions  

---

## Common Mistakes

### ❌ Mistake 1: Calling expression before definition
```javascript
greet();  // Error!

const greet = function() {
  return "Hi";
};
```

### ❌ Mistake 2: Thinking var makes it hoisted like declarations
```javascript
greet();  // TypeError: greet is not a function

var greet = function() {
  return "Hi";
};
```
**Why?** Variable `greet` is hoisted as `undefined`, but the function isn't assigned yet.

---

### ❌ Mistake 3: Using function name outside expression
```javascript
const sayHi = function greet() {
  return "Hi";
};

greet();  // Error: greet is not defined
sayHi();  // Works!
```

---

## Interview Key Points

1. **Main difference?**
   - Declaration: Hoisted, can call before definition
   - Expression: NOT hoisted, must define before calling

2. **Can you use function expressions as callbacks?**
   - Yes! Very common use case

3. **What is TDZ?**
   - Temporal Dead Zone - time between hoisting and initialization where variable cannot be accessed

4. **Which is better?**
   - Neither is "better" - depends on use case
   - Declarations: clarity and hoisting
   - Expressions: control and flexibility

5. **Can function declarations be anonymous?**
   - No, must have a name
   - Expressions can be anonymous

6. **What happens with var?**
   - Variable hoisted as `undefined`
   - Function not available until assignment line