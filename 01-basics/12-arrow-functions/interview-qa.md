# Arrow Functions, Parameters & Arguments - Interview Q&A

## 📌 Conceptual Questions

### Q1. What are arrow functions and when were they introduced?
**Answer:** Arrow functions are a shorter syntax for writing functions, introduced in ES6 (2015). They use the `=>` (fat arrow) syntax.
```javascript
// Traditional
const add = function(a, b) { return a + b; };

// Arrow
const add = (a, b) => a + b;
```

---

### Q2. What are the main differences between arrow functions and regular functions?
**Answer:**

| Feature | Regular Function | Arrow Function |
|---------|-----------------|----------------|
| `this` binding | Dynamic (depends on call) | Lexical (inherits from parent) |
| `arguments` object | ✅ Yes | ❌ No |
| Can be constructor | ✅ Yes | ❌ No |
| Implicit return | ❌ No | ✅ Yes (single expression) |
| Hoisting | ✅ Yes (declaration) | ❌ No |

---

### Q3. How does `this` work in arrow functions?
**Answer:** Arrow functions **DON'T have their own `this`**. They inherit `this` from the parent/enclosing scope (lexical scoping).
```javascript
const obj = {
  name: "Manoj",
  regularFunc: function() {
    console.log(this.name); // "Manoj" (this = obj)
  },
  arrowFunc: () => {
    console.log(this.name); // undefined (this != obj)
  }
};
```

---

### Q4. Do arrow functions have an `arguments` object?
**Answer:** **NO**. Arrow functions don't have the `arguments` object.

**Solution:** Use **rest parameters** instead:
```javascript
// ❌ No arguments object
const test = () => {
  console.log(arguments); // ReferenceError
};

// ✅ Use rest parameters
const test = (...args) => {
  console.log(args); // Works! [1, 2, 3]
};

test(1, 2, 3);
```

---

### Q5. Can arrow functions be used as constructors?
**Answer:** **NO**. Arrow functions cannot be used with the `new` keyword.
```javascript
const Person = (name) => {
  this.name = name;
};

new Person("Manoj"); // TypeError: Person is not a constructor
```

---

### Q6. What is implicit return in arrow functions?
**Answer:** If an arrow function has a **single expression** without curly braces, it automatically returns that expression without the `return` keyword.
```javascript
// Implicit return
const add = (a, b) => a + b;

// Explicit return (same thing)
const add = (a, b) => {
  return a + b;
};
```

---

### Q7. How do you return an object from an arrow function with implicit return?
**Answer:** Wrap the object in **parentheses** `()`:
```javascript
// ❌ Wrong - JavaScript thinks {} is code block
const getUser = () => { name: "Manoj" }; // Returns undefined

// ✅ Correct - Wrap in parentheses
const getUser = () => ({ name: "Manoj" });
```

---

### Q8. What are rest parameters?
**Answer:** Rest parameters (`...`) collect all remaining arguments into a **real array**.

**Rules:**
- Must be the **last parameter**
- Only **one** rest parameter allowed
- Creates a **real array** (not array-like object)
```javascript
const sum = (...numbers) => {
  return numbers.reduce((total, num) => total + num, 0);
};

sum(1, 2, 3, 4, 5); // 15
```

---

### Q9. What's the difference between default parameters with `undefined` vs `null`?
**Answer:** Default parameters are used when the value is `undefined`, but **NOT** when it's `null`.
```javascript
const greet = (name = "Guest") => `Hello, ${name}`;

greet(undefined); // "Hello, Guest" (uses default)
greet(null);      // "Hello, null" (doesn't use default)
```

---

### Q10. When should you use arrow functions?
**Answer:**

**✅ Use arrow functions for:**
- Callbacks (array methods, setTimeout, etc.)
- Short, simple functions
- When you want lexical `this`
- Functional programming

**❌ Avoid arrow functions for:**
- Object methods (if you need `this`)
- Constructors
- When you need `arguments` object

---

## 🔢 Output-Based Questions

### Q11. What will be the output?
```javascript
const obj = {
  name: "Manoj",
  greet: () => {
    console.log(this.name);
  }
};

obj.greet();
```

**Answer:** `undefined`  
**Explanation:** Arrow functions don't have their own `this`. `this` refers to the parent scope (global), not `obj`.

---

### Q12. What will be the output?
```javascript
const getUser = () => { name: "Manoj", age: 25 };
console.log(getUser());
```

**Answer:** `undefined`  
**Explanation:** Without parentheses, `{}` is treated as a code block, not an object literal. The function returns nothing.

**Fix:** `const getUser = () => ({ name: "Manoj", age: 25 });`

---

### Q13. What will be the output?
```javascript
const add = (a, b) => {
  a + b;
};

console.log(add(5, 3));
```

**Answer:** `undefined`  
**Explanation:** No `return` statement. When using `{}`, you need explicit `return`.

---

### Q14. What will be the output?
```javascript
const greet = (name = "Guest") => `Hello, ${name}`;

console.log(greet());
console.log(greet(undefined));
console.log(greet(null));
```

**Answer:**
```
Hello, Guest
Hello, Guest
Hello, null
```
**Explanation:** Default parameter works with `undefined`, not with `null`.

---

### Q15. What will be the output?
```javascript
const sum = (...nums) => {
  console.log(nums);
  return nums.reduce((total, n) => total + n, 0);
};

console.log(sum(1, 2, 3, 4));
```

**Answer:**
```
[1, 2, 3, 4]
10
```
**Explanation:** Rest parameters collect all arguments into an array, then reduce sums them.

---

### Q16. What will be the output?
```javascript
const test = () => {
  console.log(arguments);
};

test(1, 2, 3);
```

**Answer:** `ReferenceError: arguments is not defined`  
**Explanation:** Arrow functions don't have the `arguments` object.

---

### Q17. What will be the output?
```javascript
const multiply = a => b => a * b;

console.log(multiply(5)(3));
console.log(multiply(5));
```

**Answer:**
```
15
[Function]
```
**Explanation:** 
- `multiply(5)(3)` returns `5 * 3 = 15`
- `multiply(5)` returns a function (not called yet)

---

### Q18. What will be the output?
```javascript
const Person = (name) => {
  this.name = name;
};

const person = new Person("Manoj");
```

**Answer:** `TypeError: Person is not a constructor`  
**Explanation:** Arrow functions cannot be used as constructors with `new`.

---

### Q19. What will be the output?
```javascript
const nums = [1, 2, 3];
const result = nums.map(num => num * 2);
console.log(result);
console.log(nums);
```

**Answer:**
```
[2, 4, 6]
[1, 2, 3]
```
**Explanation:** `map` creates a new array. Original array is unchanged.

---

### Q20. What will be the output?
```javascript
const test = (a, b, ...rest) => {
  console.log(a);
  console.log(b);
  console.log(rest);
};

test(1, 2, 3, 4, 5);
```

**Answer:**
```
1
2
[3, 4, 5]
```
**Explanation:** First two arguments go to `a` and `b`, rest are collected in the `rest` array.

---

## ✅ True or False

### Q21. Arrow functions are hoisted.
**Answer:** **FALSE**  
**Explanation:** Arrow functions are not hoisted. They must be defined before use (same as function expressions).

---

### Q22. Arrow functions can be used as object methods without issues.
**Answer:** **FALSE**  
**Explanation:** If the method needs `this` to refer to the object, arrow functions won't work correctly because they don't have their own `this`.

---

### Q23. Arrow functions always need parentheses around parameters.
**Answer:** **FALSE**  
**Explanation:** Single parameter doesn't need parentheses: `x => x * 2`. But zero or multiple parameters need them.

---

### Q24. Rest parameters must be the last parameter.
**Answer:** **TRUE**  
**Explanation:** Rest parameters collect all remaining arguments, so they must be last.

---

### Q25. You can have multiple rest parameters in one function.
**Answer:** **FALSE**  
**Explanation:** Only one rest parameter is allowed, and it must be last.

---

## 🛠️ Code Fixing Challenges

### Q26. Fix this code:
```javascript
const getUser = () => { name: "Manoj", age: 25 };
console.log(getUser());
```

**Fixed Code:**
```javascript
const getUser = () => ({ name: "Manoj", age: 25 });
console.log(getUser()); // { name: 'Manoj', age: 25 }
```

---

### Q27. Fix this code:
```javascript
const obj = {
  count: 0,
  increment: () => {
    this.count++;
  }
};

obj.increment();
console.log(obj.count);
```

**Fixed Code:**
```javascript
const obj = {
  count: 0,
  increment() { // Use regular function method shorthand
    this.count++;
  }
};

obj.increment();
console.log(obj.count); // 1
```

---

### Q28. Fix this code:
```javascript
const sum = (...nums) => {
  console.log(arguments);
};

sum(1, 2, 3);
```

**Fixed Code:**
```javascript
const sum = (...nums) => {
  console.log(nums); // Use nums instead of arguments
};

sum(1, 2, 3); // [1, 2, 3]
```

---

## 🧠 Tricky Interview Questions

### Q29. What's the output?
```javascript
const obj = {
  name: "Outer",
  inner: {
    name: "Inner",
    greet: () => console.log(this.name)
  }
};

obj.inner.greet();
```

**Answer:** `undefined`  
**Explanation:** Arrow function's `this` is NOT `inner` object. It inherits from the parent scope (global in this case).

---

### Q30. What's the output?
```javascript
class Counter {
  constructor() {
    this.count = 0;
  }
  
  increment = () => {
    this.count++;
  }
}

const counter = new Counter();
const inc = counter.increment;
inc();
console.log(counter.count);
```

**Answer:** `1`  
**Explanation:** Arrow function preserves `this` binding to the Counter instance, even when extracted. If it were a regular method, `this` would be lost.

---

### Q31. What will be the output?
```javascript
const fn = (a = 1, b) => {
  return a + b;
};

console.log(fn(undefined, 2));
console.log(fn(null, 2));
```

**Answer:**
```
3
2
```
**Explanation:**
- `fn(undefined, 2)`: `a` uses default (1), result is `1 + 2 = 3`
- `fn(null, 2)`: `null` is a value (not undefined), `a = null`, result is `null + 2 = 2`

---

### Q32. What's wrong here?
```javascript
const numbers = [1, 2, 3];
numbers.map(num => {
  num * 2
});
```

**Answer:** Returns `[undefined, undefined, undefined]`  
**Issue:** When using `{}`, you need explicit `return`

**Fix:**
```javascript
numbers.map(num => num * 2); // Implicit return
// OR
numbers.map(num => {
  return num * 2; // Explicit return
});
```

---

### Q33. What will be the output?
```javascript
const add = a => b => c => a + b + c;

console.log(add(1)(2)(3));
console.log(add(1, 2, 3));
```

**Answer:**
```
6
[Function]
```
**Explanation:**
- `add(1)(2)(3)` - Correct currying: `6`
- `add(1, 2, 3)` - Only `1` is used, returns a function (extra arguments ignored)

---

### Q34. What's the output?
```javascript
const greet = (name = getName()) => {
  return `Hello ${name}`;
};

function getName() {
  console.log("Getting name...");
  return "Guest";
}

greet("Manoj");
greet();
```

**Answer:**
```
Hello Manoj
Getting name...
Hello Guest
```
**Explanation:** Default parameter function (`getName()`) is only called when no argument is provided.

---

### Q35. What will be the output?
```javascript
const [a, b] = [1, 2];

const swap = () => {
  [a, b] = [b, a];
};

swap();
console.log(a, b);
```

**Answer:** `TypeError: Assignment to constant variable`  
**Explanation:** `a` and `b` are constants (from `const`), so they can't be reassigned.

**Fix:**
```javascript
let [a, b] = [1, 2]; // Use 'let' instead of 'const'

const swap = () => {
  [a, b] = [b, a];
};

swap();
console.log(a, b); // 2 1
```

---

### Q36. Compare these two:
```javascript
// Version 1
const fn1 = () => {
  return {
    name: "Test"
  };
};

// Version 2
const fn2 = () => ({
  name: "Test"
});
```

**Answer:** Both return the same object: `{ name: "Test" }`  
**Difference:** 
- Version 1: Explicit return with braces
- Version 2: Implicit return with parentheses (shorter)

---

### Q37. What's the output?
```javascript
const obj = {
  value: 10,
  getValue: function() {
    const inner = () => {
      console.log(this.value);
    };
    inner();
  }
};

obj.getValue();
```

**Answer:** `10`  
**Explanation:** Arrow function `inner` inherits `this` from `getValue`, which is `obj`. So `this.value = 10`.

---

### Q38. What will happen?
```javascript
const test = (...args, extra) => {
  console.log(args, extra);
};

test(1, 2, 3);
```

**Answer:** `SyntaxError: Rest parameter must be last formal parameter`  
**Explanation:** Rest parameters MUST be the last parameter. Can't have anything after it.

---

### Q39. What's the output?
```javascript
const nums = [1, 2, 3];

const [first, ...rest, last] = nums;
console.log(first, rest, last);
```

**Answer:** `SyntaxError: Rest element must be last element`  
**Explanation:** In destructuring, rest element must be last (same rule as rest parameters).

---

### Q40. What will be the output?
```javascript
const calculate = (a, b, operation = (x, y) => x + y) => {
  return operation(a, b);
};

console.log(calculate(5, 3));
console.log(calculate(5, 3, (x, y) => x * y));
```

**Answer:**
```
8
15
```
**Explanation:**
- First call: Uses default operation (addition): `5 + 3 = 8`
- Second call: Uses provided operation (multiplication): `5 * 3 = 15`