# Functions (Basics)

## What is a Function?

A **function** is a reusable block of code that performs a specific task. Think of it like a small program inside your main program.

### Why Do We Need Functions?

1. **Reusability** - Write once, use many times
2. **Organization** - Break big problems into smaller pieces
3. **DRY Principle** - Don't Repeat Yourself
4. **Maintainability** - Fix bugs in one place
5. **Readability** - Code is easier to understand

---

## Function Structure
```javascript
function functionName(parameters) {
  // code to execute
  return value; // optional
}
```

**Parts of a function:**
- `function` - keyword to create a function
- `functionName` - name of the function (use verbs like calculate, fetch, show)
- `parameters` - inputs the function accepts (optional)
- `return` - output the function gives back (optional)

---

## Types of Functions

### 1. Function Declaration
```javascript
function greet() {
  console.log("Hello!");
}
```

**Features:**
- ✅ Hoisted (can call before definition)
- ✅ Has a name
- ✅ Traditional way

---

### 2. Function Expression
```javascript
const greet = function() {
  console.log("Hello!");
};
```

**Features:**
- ❌ NOT hoisted (must define before calling)
- ✅ Can be anonymous
- ✅ Stored in a variable

---

### 3. Arrow Function (ES6)
```javascript
const greet = () => {
  console.log("Hello!");
};

// Shorter version for single expression
const add = (a, b) => a + b;
```

**Features:**
- ❌ NOT hoisted
- ✅ Shorter syntax
- ✅ Different `this` behavior (covered later)

---

## Parameters vs Arguments

**Parameters** = Variables in function definition
**Arguments** = Actual values passed when calling
```javascript
function add(a, b) {  // a, b are parameters
  return a + b;
}

add(5, 3);  // 5, 3 are arguments
```

---

## Default Parameters

Give parameters a default value if no argument is passed:
```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet();           // Hello, Guest!
greet("Manoj");    // Hello, Manoj!
```

---

## Return Statement

Functions can give back a value using `return`:
```javascript
function multiply(a, b) {
  return a * b;  // gives back result
}

const result = multiply(5, 3);
console.log(result);  // 15
```

**Important:**
- ✅ Code after `return` does NOT execute
- ✅ Without `return`, function returns `undefined`
- ✅ Can return any data type
```javascript
function example() {
  return 42;
  console.log("This never runs!");  // unreachable code
}
```

---

## Function Scope

Variables inside a function are **local** (can't be accessed outside):
```javascript
function test() {
  let x = 10;  // local variable
  console.log(x);  // 10
}

test();
console.log(x);  // Error: x is not defined
```

---

## Naming Conventions

✅ **Good Names:**
- `calculateTotal()`
- `fetchUserData()`
- `showMessage()`
- `isValid()`

❌ **Bad Names:**
- `func1()`
- `doStuff()`
- `x()`

**Rules:**
- Use verbs (action words)
- Be descriptive
- Use camelCase
- Make it clear what the function does

---

## Best Practices

1. ✅ **One task per function** - Keep functions small and focused
2. ✅ **Use return values** - Don't always use console.log
3. ✅ **Name clearly** - Name should explain what it does
4. ✅ **Avoid side effects** - Don't modify external variables unnecessarily
5. ✅ **Use default parameters** - Handle missing arguments gracefully

---

## Common Mistakes

❌ **Forgetting to call the function:**
```javascript
function greet() {
  console.log("Hello!");
}
// Nothing happens - forgot to call!
greet();  // Now it runs
```

❌ **Forgetting return:**
```javascript
function add(a, b) {
  a + b;  // Missing return!
}
console.log(add(2, 3));  // undefined
```

❌ **Using console.log instead of return:**
```javascript
// Bad
function add(a, b) {
  console.log(a + b);
}

// Good
function add(a, b) {
  return a + b;
}
```

---

## Interview Key Points

1. **What is a function?** 
   - Reusable block of code that performs a specific task

2. **Why use functions?**
   - Reusability, organization, DRY principle, maintainability

3. **Difference between parameters and arguments?**
   - Parameters: variables in definition
   - Arguments: actual values when calling

4. **What does a function return if no return statement?**
   - `undefined`

5. **Can you call a function before declaring it?**
   - Yes, if it's a function declaration (hoisting)
   - No, if it's a function expression or arrow function

6. **What are default parameters?**
   - Parameters with default values if no argument is passed

7. **What is function scope?**
   - Variables inside function are local and can't be accessed outside