# Function Declaration vs Expression - Interview Q&A

## 📌 Conceptual Questions

### Q1. What is the main difference between function declaration and function expression?
**Answer:** 

**Function Declaration:**
- Uses `function` keyword with a name
- Fully hoisted (can call before definition)
- Always has a name
- Example: `function greet() {}`

**Function Expression:**
- Function assigned to a variable
- NOT hoisted (must define before calling)
- Can be anonymous
- Example: `const greet = function() {}`

---

### Q2. What is hoisting in the context of functions?
**Answer:** Hoisting is JavaScript's behavior of moving declarations to the top of the scope before code execution.

- **Function Declarations** are fully hoisted (entire function moves up)
- **Function Expressions** are NOT hoisted (only variable is hoisted, in TDZ)
```javascript
// Works - declaration hoisted
console.log(test()); 
function test() { return "Hi"; }

// Error - expression not hoisted
console.log(greet()); // ReferenceError
const greet = function() { return "Hello"; };
```

---

### Q3. Can you call a function expression before it's defined?
**Answer:** **NO**. Function expressions must be defined before calling, otherwise you get a `ReferenceError`.
```javascript
myFunc(); // ReferenceError

const myFunc = function() {
  return "Hi";
};
```

---

### Q4. What is a named function expression?
**Answer:** A function expression where the function has a name. The name is only available inside the function itself (useful for recursion and debugging).
```javascript
const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1); // 'fact' available inside
};

factorial(5); // Works
fact(5); // Error: fact is not defined outside
```

---

### Q5. What is Temporal Dead Zone (TDZ)?
**Answer:** TDZ is the time between when a variable is hoisted and when it's initialized. During TDZ, you cannot access the variable.
```javascript
// TDZ starts here for 'myFunc'
console.log(myFunc); // ReferenceError (in TDZ)

const myFunc = function() {}; // TDZ ends here
```

Applies to `let` and `const`, not `var`.

---

### Q6. When should you use function declaration vs expression?
**Answer:**

**Use Declaration when:**
- Function needed throughout the file
- Want clear hoisting behavior
- Writing utility/helper functions

**Use Expression when:**
- Creating functions conditionally
- Passing as callbacks
- Want to control when function is created
- Using IIFE
- Want to prevent hoisting

---

### Q7. Can function declarations be anonymous?
**Answer:** **NO**. Function declarations must always have a name.
```javascript
// ❌ Invalid
function() {
  return "Hi";
}

// ✅ Valid
function greet() {
  return "Hi";
}
```

Function expressions CAN be anonymous.

---

### Q8. What is an IIFE? Can it be a function declaration?
**Answer:** IIFE (Immediately Invoked Function Expression) is a function that runs immediately after creation.

**NO**, it CANNOT be a function declaration. It must be a function expression.
```javascript
// ✅ Correct - Function expression
(function() {
  console.log("IIFE!");
})();

// ❌ Wrong - Syntax error
function() {
  console.log("IIFE!");
}();
```

---

## 🔢 Output-Based Questions

### Q9. What will be the output?
```javascript
console.log(test());

function test() {
  return "Hello";
}
```

**Answer:** `Hello`  
**Explanation:** Function declaration is hoisted, so it can be called before definition.

---

### Q10. What will be the output?
```javascript
console.log(greet());

const greet = function() {
  return "Hi";
};
```

**Answer:** `ReferenceError: Cannot access 'greet' before initialization`  
**Explanation:** Function expression is NOT hoisted. Variable `greet` is in TDZ.

---

### Q11. What will be the output?
```javascript
console.log(typeof myFunc);
console.log(myFunc());

var myFunc = function() {
  return "Hello";
};
```

**Answer:**
```
undefined
TypeError: myFunc is not a function
```
**Explanation:** With `var`, variable is hoisted as `undefined`. When trying to call `undefined()`, you get TypeError.

---

### Q12. What will be the output?
```javascript
const sayHi = function greet() {
  return "Hi";
};

console.log(sayHi());
console.log(greet());
```

**Answer:**
```
Hi
ReferenceError: greet is not defined
```
**Explanation:** In named function expression, the name (`greet`) is only available inside the function, not outside.

---

### Q13. What will be the output?
```javascript
const result = (function(a, b) {
  return a + b;
})(5, 3);

console.log(result);
```

**Answer:** `8`  
**Explanation:** IIFE runs immediately and returns 8, which is stored in `result`.

---

### Q14. What will be the output?
```javascript
var x = function() {
  return "First";
};

function x() {
  return "Second";
}

console.log(x());
```

**Answer:** `First`  
**Explanation:** Function declaration is hoisted first, then the function expression assignment overwrites it.

---

### Q15. What will be the output?
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
- `outer()` returns the function itself
- `outer()()` calls outer, then calls the returned function

---

## ✅ True or False

### Q16. Function expressions are hoisted just like function declarations.
**Answer:** **FALSE**  
**Explanation:** Function expressions are NOT hoisted. Only the variable is hoisted (in TDZ for let/const, as undefined for var).

---

### Q17. You can use function declarations inside if blocks safely.
**Answer:** **FALSE** (not recommended)  
**Explanation:** While it may work in some cases, behavior is unpredictable across different JavaScript engines. Use function expressions instead.

---

### Q18. Anonymous functions can only be used as function expressions.
**Answer:** **TRUE**  
**Explanation:** Function declarations must have a name. Only expressions can be anonymous.

---

### Q19. The name of a named function expression is available globally.
**Answer:** **FALSE**  
**Explanation:** The name is only available inside the function itself, not in the outer scope.

---

### Q20. IIFE must be a function expression.
**Answer:** **TRUE**  
**Explanation:** IIFE syntax requires a function expression, not a declaration.

---

## 🛠️ Code Fixing Challenges

### Q21. Fix this code:
```javascript
greet();

const greet = function() {
  console.log("Hello!");
};
```

**Fixed Code:**
```javascript
const greet = function() {
  console.log("Hello!");
};

greet(); // Call after definition
```

---

### Q22. Fix this code to use IIFE correctly:
```javascript
function() {
  console.log("IIFE");
}();
```

**Fixed Code:**
```javascript
(function() {
  console.log("IIFE");
})();
// Wrap in parentheses to make it an expression
```

---

### Q23. Fix this code - make the function name accessible:
```javascript
const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
};

console.log(fact(5)); // Should work
```

**Fixed Code:**
```javascript
// Option 1: Use the variable name
const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
};

console.log(factorial(5)); // Use 'factorial' not 'fact'

// Option 2: Use function declaration
function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
}

console.log(fact(5)); // Now 'fact' is accessible
```

---

## 🧠 Tricky Interview Questions

### Q24. What will be the output?
```javascript
function test() {
  return "Declaration";
}

var test = function() {
  return "Expression";
};

console.log(test());
```

**Answer:** `Expression`  
**Explanation:** 
1. Function declaration is hoisted first
2. Then `var test` is hoisted (but doesn't overwrite since it's already declared)
3. Then the assignment happens, which overwrites the function
4. So `test` ends up being the function expression

---

### Q25. What will be the output?
```javascript
console.log(typeof a);
console.log(typeof b);

var a = function() {};
function b() {}
```

**Answer:**
```
undefined
function
```
**Explanation:**
- `a` is a variable (var), hoisted as `undefined`
- `b` is a function declaration, fully hoisted as a function

---

### Q26. What's the difference between these two?
```javascript
// Version 1
if (true) {
  function test() {
    return "A";
  }
}

// Version 2
let test;
if (true) {
  test = function() {
    return "B";
  };
}
```

**Answer:** 
- **Version 1:** Unpredictable behavior (function declaration in block)
- **Version 2:** Reliable behavior (function expression)

Version 2 is the correct way to conditionally create functions.

---

### Q27. What will be the output?
```javascript
const obj = {
  name: "Test",
  greet: function() {
    return `Hello from ${this.name}`;
  }
};

const greetFunc = obj.greet;
console.log(greetFunc());
```

**Answer:** `Hello from undefined`  
**Explanation:** When you extract the function from the object, it loses its `this` context. `this.name` becomes `undefined`.

---

### Q28. What will be the output?
```javascript
(function() {
  var a = b = 5;
})();

console.log(typeof a);
console.log(typeof b);
```

**Answer:**
```
undefined
number
```
**Explanation:**
- `var a = b = 5` is actually `b = 5; var a = b;`
- `b` is created in global scope (no var/let/const)
- `a` is local to IIFE
- After IIFE: `a` doesn't exist globally, but `b` does

---

### Q29. Which is better for recursion?
```javascript
// Option 1
const factorial = function(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};

// Option 2
const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
};
```

**Answer:** **Option 2** (named function expression)  
**Explanation:**
- If you reassign `factorial` variable, Option 1 breaks
- Option 2 uses internal name `fact`, which is always stable
- Named expressions are better for recursion

---

### Q30. What happens here?
```javascript
function test() {
  return "First";
}

function test() {
  return "Second";
}

console.log(test());
```

**Answer:** `Second`  
**Explanation:** When you have multiple function declarations with the same name, the last one wins. Both are hoisted, but the second one overwrites the first.

---

## 🎯 Advanced Challenge Questions

### Q31. Explain what happens step by step:
```javascript
var foo = function bar() {
  return "Hello";
};

console.log(typeof foo);
console.log(typeof bar);
console.log(foo());
```

**Answer:**
```
function
undefined
Hello
```
**Step by step:**
1. `foo` is assigned a named function expression
2. `foo` is accessible in outer scope (type: function)
3. `bar` is only accessible inside the function (type: undefined outside)
4. `foo()` calls the function and returns "Hello"

---

### Q32. What's the output and why?
```javascript
console.log(sum(5, 3));

function sum(a, b) {
  return a + b;
}

var sum = function(a, b) {
  return a * b;
};

console.log(sum(5, 3));
```

**Answer:**
```
8
15
```
**Explanation:**
1. Function declaration hoisted: `sum` is addition function
2. First call: `5 + 3 = 8`
3. Then function expression overwrites it: `sum` becomes multiplication
4. Second call: `5 * 3 = 15`

---

### Q33. Memory question - which uses less memory?
```javascript
// Option 1: Declaration
function greet(name) {
  return `Hello, ${name}`;
}

// Option 2: Expression
const greet = function(name) {
  return `Hello, ${name}`;
};
```

**Answer:** **Both use the same memory**  
**Explanation:** Both create a function object in memory. The difference is in hoisting behavior and how/when they're created, not memory usage.