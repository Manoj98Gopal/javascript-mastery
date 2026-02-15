# Function Basics - Interview Q&A

## 📌 Conceptual Questions

### Q1. What is a function in JavaScript?
**Answer:** A function is a reusable block of code designed to perform a specific task. It helps organize code, avoid repetition (DRY principle), and make programs more maintainable.

---

### Q2. Why do we use functions?
**Answer:** 
- **Reusability** - Write once, use multiple times
- **Organization** - Break complex problems into smaller pieces
- **DRY Principle** - Don't Repeat Yourself
- **Maintainability** - Fix bugs in one place
- **Readability** - Easier to understand code

---

### Q3. What is the difference between parameters and arguments?
**Answer:**
- **Parameters** are variables listed in the function definition
- **Arguments** are the actual values passed when calling the function
```javascript
function add(a, b) {  // a, b are parameters
  return a + b;
}

add(5, 3);  // 5, 3 are arguments
```

---

### Q4. What does a function return if there's no return statement?
**Answer:** `undefined`
```javascript
function test() {
  let x = 10;
}

console.log(test()); // undefined
```

---

### Q5. What are default parameters?
**Answer:** Default parameters allow you to set default values for parameters if no argument is passed or if `undefined` is passed.
```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet();        // Hello, Guest!
greet("Manoj"); // Hello, Manoj!
```

---

### Q6. What is the difference between function declaration and function expression?
**Answer:**

| Feature | Function Declaration | Function Expression |
|---------|---------------------|-------------------|
| Syntax | `function name() {}` | `const name = function() {}` |
| Hoisting | ✅ Hoisted | ❌ Not hoisted |
| When to use | Can call before definition | Must define before calling |

---

### Q7. What is function scope?
**Answer:** Variables declared inside a function are local to that function and cannot be accessed from outside.
```javascript
function test() {
  let x = 10;  // local variable
}

test();
console.log(x);  // Error: x is not defined
```

---

### Q8. Can you call a function before declaring it?
**Answer:** 
- **YES** - if it's a function declaration (hoisting)
- **NO** - if it's a function expression or arrow function
```javascript
// Works - function declaration
console.log(hello());
function hello() {
  return "Hi";
}

// Error - function expression
console.log(greet()); // Error
const greet = function() {
  return "Hello";
};
```

---

## 🔢 Output-Based Questions

### Q9. What will be the output?
```javascript
function test() {
  return 10;
  console.log("Hello");
}

console.log(test());
```

**Answer:** `10`  
**Explanation:** Code after `return` never executes. The function returns 10 immediately.

---

### Q10. What will be the output?
```javascript
function add(a, b) {
  a + b;
}

console.log(add(5, 3));
```

**Answer:** `undefined`  
**Explanation:** The function doesn't have a `return` statement, so it returns `undefined` by default.

---

### Q11. What will be the output?
```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet();
greet("Manoj");
greet(undefined);
```

**Answer:**
```
Hello, Guest!
Hello, Manoj!
Hello, Guest!
```
**Explanation:** When no argument or `undefined` is passed, default parameter is used.

---

### Q12. What will be the output?
```javascript
function multiply(a, b) {
  return a * b;
}

console.log(multiply(5));
```

**Answer:** `NaN`  
**Explanation:** `b` is `undefined`, and `5 * undefined` = `NaN`

---

### Q13. What will be the output?
```javascript
const result = function() {
  return 42;
}

console.log(result);
console.log(result());
```

**Answer:**
```
[Function: result]
42
```
**Explanation:** `result` without `()` returns the function itself. `result()` calls it and returns 42.

---

### Q14. What will be the output?
```javascript
function outer() {
  let x = 10;
  function inner() {
    console.log(x);
  }
  inner();
}

outer();
console.log(x);
```

**Answer:**
```
10
Error: x is not defined
```
**Explanation:** `x` is local to `outer()` function. `inner()` can access it, but outside code cannot.

---

### Q15. What will be the output?
```javascript
console.log(test());

function test() {
  return "Hoisted!";
}
```

**Answer:** `Hoisted!`  
**Explanation:** Function declarations are hoisted, so they can be called before their definition.

---

## ✅ True or False

### Q16. A function can return multiple values directly.
**Answer:** **FALSE**  
**Explanation:** A function can only return one value. However, you can return an array or object containing multiple values.
```javascript
// Return multiple values in an object
function getUser() {
  return { name: "Manoj", age: 25 };
}
```

---

### Q17. Arrow functions are hoisted.
**Answer:** **FALSE**  
**Explanation:** Arrow functions are not hoisted. They must be defined before use.

---

### Q18. Default parameters only work with `undefined`, not with `null`.
**Answer:** **TRUE**  
**Explanation:**
```javascript
function greet(name = "Guest") {
  console.log(name);
}

greet(undefined); // Guest (uses default)
greet(null);      // null (doesn't use default)
```

---

### Q19. You can have a function inside another function.
**Answer:** **TRUE**  
**Explanation:** This is called a nested function and is perfectly valid in JavaScript.

---

### Q20. Code after a return statement executes.
**Answer:** **FALSE**  
**Explanation:** The `return` statement exits the function immediately. Any code after it is unreachable.

---

## 🛠️ Code Fixing Challenges

### Q21. Fix this code:
```javascript
function calculate(a, b) {
  a + b;
}

const result = calculate(5, 3);
console.log(result); // Should print 8
```

**Fixed Code:**
```javascript
function calculate(a, b) {
  return a + b; // Added return
}

const result = calculate(5, 3);
console.log(result); // 8
```

---

### Q22. Fix this code:
```javascript
const greet = function(name = "Guest") {
  console.log("Hello, " + name);
}

greet; // Should print "Hello, Guest"
```

**Fixed Code:**
```javascript
const greet = function(name = "Guest") {
  console.log("Hello, " + name);
}

greet(); // Added () to call the function
```

---

### Q23. What's wrong here?
```javascript
console.log(sayHi());

const sayHi = function() {
  return "Hi!";
};
```

**Issue:** Function expression is not hoisted. You're trying to call it before definition.

**Fixed Code:**
```javascript
const sayHi = function() {
  return "Hi!";
};

console.log(sayHi()); // Define first, then call
```

---

## 🧠 Tricky Interview Questions

### Q24. What will be the output?
```javascript
function test(a, b, c) {
  console.log(a, b, c);
}

test(1, 2);
```

**Answer:** `1 2 undefined`  
**Explanation:** Missing arguments are `undefined`. JavaScript doesn't throw an error.

---

### Q25. What will be the output?
```javascript
function add(a, b) {
  return a + b;
}

console.log(add(2, 3, 4, 5));
```

**Answer:** `5`  
**Explanation:** Extra arguments are ignored. Only first two parameters (2 and 3) are used.

---

### Q26. What's the difference?
```javascript
// Version 1
function greet() {
  return "Hello";
}

// Version 2
const greet = () => "Hello";
```

**Answer:** Both do the same thing but:
- Version 1: Function declaration (hoisted)
- Version 2: Arrow function (not hoisted, implicit return, different `this` binding)

---

### Q27. What will be the output?
```javascript
function test() {
  return;
  42;
}

console.log(test());
```

**Answer:** `undefined`  
**Explanation:** `return;` with no value returns `undefined`. The `42` is unreachable code.

---

### Q28. What will be the output?
```javascript
let result = function sum(a, b) {
  return a + b;
};

console.log(result(5, 3));
console.log(sum(5, 3));
```

**Answer:**
```
8
Error: sum is not defined
```
**Explanation:** In a named function expression, the name (`sum`) is only available inside the function itself, not outside. Use `result` to call it.

---

### Q29. How do you make this function return an object?
```javascript
const getUser = () => { name: "Manoj", age: 25 };
console.log(getUser());
```

**Answer:** Wrap the object in parentheses:
```javascript
const getUser = () => ({ name: "Manoj", age: 25 });
console.log(getUser()); // { name: "Manoj", age: 25 }
```
**Explanation:** Without `()`, curly braces are treated as function body, not object literal.

---

### Q30. What will be the output?
```javascript
function outer() {
  return function inner() {
    return "Hello";
  };
}

console.log(outer());
console.log(outer()());
```

**Answer:**
```
[Function: inner]
Hello
```
**Explanation:** 
- `outer()` returns the `inner` function itself
- `outer()()` calls `outer`, then calls the returned `inner` function