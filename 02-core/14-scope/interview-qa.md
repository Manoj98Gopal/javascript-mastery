# Scope - Interview Q&A

## 📌 Conceptual Questions

### Q1. What is scope in JavaScript?
**Answer:** Scope determines **where variables can be accessed** in code. It defines the visibility and lifetime of variables. Scope controls which parts of code can "see" and use specific variables.

---

### Q2. What are the types of scope in JavaScript?
**Answer:** JavaScript has **three types of scope**:

1. **Global Scope** - Variables accessible everywhere in the code
2. **Function Scope** - Variables accessible only inside the function
3. **Block Scope** - Variables accessible only inside `{}` blocks

---

### Q3. What is global scope?
**Answer:** Global scope contains variables declared **outside any function or block**. These variables are accessible **everywhere** in the code.
```javascript
var name = "Manoj";  // Global scope

function test() {
  console.log(name);  // Can access global variable
}

console.log(name);  // Can access anywhere
```

---

### Q4. What is function scope?
**Answer:** Function scope contains variables declared **inside a function**. These variables are accessible **only inside that function** and are destroyed when the function completes.
```javascript
function test() {
  var x = 10;  // Function scoped
  console.log(x);  // Works
}

test();
console.log(x);  // Error: x is not defined
```

---

### Q5. What is block scope?
**Answer:** Block scope contains variables declared **inside a block** `{}`. Variables declared with `let` and `const` are block scoped, meaning they're only accessible within that block.
```javascript
if (true) {
  let x = 10;  // Block scoped
  console.log(x);  // Works
}

console.log(x);  // Error: x is not defined
```

---

### Q6. What is the difference between var, let, and const in terms of scope?
**Answer:**

| Feature | var | let | const |
|---------|-----|-----|-------|
| **Global Scope** | ✅ Yes | ✅ Yes | ✅ Yes |
| **Function Scope** | ✅ Yes | ✅ Yes | ✅ Yes |
| **Block Scope** | ❌ No | ✅ Yes | ✅ Yes |

**Key difference:**
- `var` ignores block scope (only respects function and global scope)
- `let` and `const` respect block scope
```javascript
if (true) {
  var x = 10;    // NOT block scoped
  let y = 20;    // Block scoped
  const z = 30;  // Block scoped
}

console.log(x);  // 10 (var leaks out)
console.log(y);  // Error
console.log(z);  // Error
```

---

### Q7. Why doesn't var respect block scope?
**Answer:** `var` was designed in early JavaScript (ES5) before block scope existed. It only recognizes **function scope** and **global scope**. This causes variables to "leak" out of blocks like `if`, `for`, and `while`.

ES6 introduced `let` and `const` to fix this problem.

---

### Q8. What is variable shadowing?
**Answer:** Variable shadowing occurs when a variable in an **inner scope** has the **same name** as a variable in an **outer scope**. The inner variable "shadows" (hides) the outer variable within its scope.
```javascript
var x = 10;  // Outer scope

function test() {
  var x = 20;  // Shadows outer x
  console.log(x);  // 20 (inner x)
}

test();
console.log(x);  // 10 (outer x unchanged)
```

---

### Q9. Can you access function variables from outside the function?
**Answer:** **NO**. Function scope variables are **private** to that function and cannot be accessed from outside.
```javascript
function test() {
  var x = 10;
}

test();
console.log(x);  // Error: x is not defined
```

---

### Q10. What happens if you declare a variable without var/let/const?
**Answer:** The variable becomes **global**, even if declared inside a function. This is a **mistake** and should be avoided.
```javascript
function test() {
  x = 10;  // No var/let/const - becomes global!
}

test();
console.log(x);  // 10 (accidentally global)
```

**Always use `var`, `let`, or `const`!**

---

## 🔢 Output-Based Questions

### Q11. What will be the output?
```javascript
var x = 10;

function test() {
  console.log(x);
}

test();
```

**Answer:** `10`

**Explanation:** Function can access global variable `x`.

---

### Q12. What will be the output?
```javascript
function test() {
  var x = 10;
}

test();
console.log(x);
```

**Answer:** `ReferenceError: x is not defined`

**Explanation:** `x` is function scoped and cannot be accessed outside the function.

---

### Q13. What will be the output?
```javascript
if (true) {
  var x = 10;
  let y = 20;
}

console.log(x);
console.log(y);
```

**Answer:**
```
10
ReferenceError: y is not defined
```

**Explanation:**
- `var` ignores block scope → `x` leaks out
- `let` respects block scope → `y` is not accessible outside

---

### Q14. What will be the output?
```javascript
var name = "Global";

function test() {
  var name = "Local";
  console.log(name);
}

test();
console.log(name);
```

**Answer:**
```
Local
Global
```

**Explanation:** Variable shadowing - function has its own `name` variable that shadows the global one.

---

### Q15. What will be the output?
```javascript
for (var i = 0; i < 3; i++) {
  console.log(i);
}

console.log(i);
```

**Answer:**
```
0
1
2
3
```

**Explanation:** `var` is not block scoped, so `i` leaks out of the loop and is accessible after.

---

### Q16. What will be the output?
```javascript
for (let i = 0; i < 3; i++) {
  console.log(i);
}

console.log(i);
```

**Answer:**
```
0
1
2
ReferenceError: i is not defined
```

**Explanation:** `let` is block scoped, so `i` is only accessible inside the loop.

---

### Q17. What will be the output?
```javascript
function outer() {
  var x = 10;
  
  function inner() {
    console.log(x);
  }
  
  inner();
}

outer();
```

**Answer:** `10`

**Explanation:** Inner function can access outer function's variables.

---

### Q18. What will be the output?
```javascript
let x = 1;

function test() {
  let x = 2;
  
  if (true) {
    let x = 3;
    console.log(x);
  }
  
  console.log(x);
}

test();
console.log(x);
```

**Answer:**
```
3
2
1
```

**Explanation:** Three different `x` variables in three different scopes (block, function, global).

---

### Q19. What will be the output?
```javascript
function test() {
  x = 10;
}

test();
console.log(x);
```

**Answer:** `10`

**Explanation:** No `var`/`let`/`const` means `x` becomes global (mistake!).

---

### Q20. What will be the output?
```javascript
const person = {
  name: "Manoj"
};

person.name = "Kumar";
console.log(person.name);

person = { name: "Alice" };
```

**Answer:**
```
Kumar
TypeError: Assignment to constant variable
```

**Explanation:**
- `const` prevents **reassignment** of the variable
- But object **properties** can be modified
- Trying to reassign `person` causes error

---

## ✅ True or False

### Q21. var is block scoped.
**Answer:** **FALSE**

**Explanation:** `var` is **function scoped** and **global scoped**, but NOT block scoped.

---

### Q22. let and const are block scoped.
**Answer:** **TRUE**

**Explanation:** Both `let` and `const` respect block scope.

---

### Q23. Global variables can be accessed from inside functions.
**Answer:** **TRUE**

**Explanation:** Functions can access variables from outer scopes, including global scope.

---

### Q24. Function variables can be accessed from outside the function.
**Answer:** **FALSE**

**Explanation:** Function scope variables are private to the function.

---

### Q25. Variables declared without var/let/const become global.
**Answer:** **TRUE**

**Explanation:** Omitting `var`/`let`/`const` creates a global variable (even inside functions) - this is a mistake!

---

### Q26. const variables cannot be changed at all.
**Answer:** **FALSE**

**Explanation:** `const` prevents **reassignment**, but object **properties** and array **elements** can be modified.
```javascript
const obj = { x: 1 };
obj.x = 2;  // ✅ Allowed
obj = {};   // ❌ Error
```

---

### Q27. Variables in different functions with the same name conflict.
**Answer:** **FALSE**

**Explanation:** Each function has its own scope. Same variable names in different functions are independent.

---

## 🛠️ Code Fixing Challenges

### Q28. Fix this code to prevent variable leak:
```javascript
if (true) {
  var x = 10;
}

console.log(x);  // Should error
```

**Fixed Code:**
```javascript
if (true) {
  let x = 10;  // Use let instead of var
}

console.log(x);  // Error: x is not defined
```

---

### Q29. Fix this code to make count private:
```javascript
var count = 0;

function increment() {
  count++;
}

increment();
console.log(count);  // Should not be accessible
```

**Fixed Code:**
```javascript
function createCounter() {
  let count = 0;  // Private to function
  
  return function increment() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter());  // 1
// console.log(count);  // Error: not accessible
```

---

### Q30. Fix this loop issue:
```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);  // Should print 0, 1, 2
  }, 100);
}
// Currently prints: 3, 3, 3
```

**Fixed Code:**
```javascript
for (let i = 0; i < 3; i++) {  // Use let instead of var
  setTimeout(() => {
    console.log(i);  // 0, 1, 2
  }, 100);
}
```

---

## 🧠 Tricky Interview Questions

### Q31. What's the output?
```javascript
var a = 1;

function test() {
  console.log(a);
  var a = 2;
  console.log(a);
}

test();
```

**Answer:**
```
undefined
2
```

**Explanation:**
- Function has its own `a` variable (hoisted as `undefined`)
- First log: `undefined` (local `a` shadows global, but not assigned yet)
- Then `a = 2`
- Second log: `2`

---

### Q32. What's the output?
```javascript
let x = 10;

{
  console.log(x);
  let x = 20;
}
```

**Answer:** `ReferenceError: Cannot access 'x' before initialization`

**Explanation:** Block has its own `x` (shadows outer), but it's in TDZ before declaration line.

---

### Q33. What's the output?
```javascript
function first() {
  var x = 1;
  
  function second() {
    var x = 2;
    
    function third() {
      console.log(x);
    }
    
    third();
  }
  
  second();
}

first();
```

**Answer:** `2`

**Explanation:** `third()` looks for `x` in nearest scope → finds it in `second()` (value is 2).

---

### Q34. What's the output?
```javascript
var x = 10;

function test() {
  if (false) {
    var x = 20;
  }
  console.log(x);
}

test();
```

**Answer:** `undefined`

**Explanation:**
- `var x = 20` is hoisted to function scope (as `undefined`)
- Even though `if (false)` never runs, hoisting happens
- Local `x` shadows global `x` → prints `undefined`

---

### Q35. What happens here?
```javascript
function test() {
  let a = 1;
  let a = 2;
}

test();
```

**Answer:** `SyntaxError: Identifier 'a' has already been declared`

**Explanation:** `let` and `const` cannot be re-declared in the same scope.

---

### Q36. What's the output?
```javascript
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);

arr = [5, 6, 7];
```

**Answer:**
```
[1, 2, 3, 4]
TypeError: Assignment to constant variable
```

**Explanation:**
- `const` allows array modification (push, pop, etc.)
- But prevents reassignment of the array variable

---

### Q37. What's the output?
```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
```

**Answer:** `3 3 3`

**Explanation:** `var` is not block scoped. By the time timeouts run, loop finished and `i = 3`.

---

### Q38. What's the output?
```javascript
let x = 1;

{
  let x = 2;
  {
    let x = 3;
    console.log(x);
  }
  console.log(x);
}

console.log(x);
```

**Answer:**
```
3
2
1
```

**Explanation:** Three separate `x` variables in three different block scopes.

---

### Q39. What's the output?
```javascript
function outer() {
  var x = 10;
  
  return function inner() {
    console.log(x);
  };
}

const fn = outer();
fn();
```

**Answer:** `10`

**Explanation:** `inner` function retains access to `outer`'s variable `x` (closure - covered in next topic).

---

### Q40. What's wrong with this?
```javascript
{
  const x = 1;
}

{
  const x = 2;
}

console.log(x);
```

**Answer:** `ReferenceError: x is not defined`

**Explanation:** Both `x` variables are block scoped and destroyed after their blocks. Neither exists at the console.log line.

---

## 🎯 Summary - Must Know Points

1. **Scope** = Where variables can be accessed
2. **Three types:** Global, Function, Block
3. **var** = Function + Global scope (NO block scope)
4. **let/const** = Function + Global + Block scope
5. **Global scope** = Accessible everywhere
6. **Function scope** = Private to function
7. **Block scope** = Inside `{}` blocks
8. **Shadowing** = Inner variable hides outer variable with same name
9. **No var/let/const** = Accidentally creates global variable
10. **Best practice:** Use `const` by default, `let` when needed, avoid `var`