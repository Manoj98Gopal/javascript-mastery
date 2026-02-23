# Closures - Interview Q&A

## 📌 Conceptual Questions

### Q1. What is a closure?
**Answer:** A closure is a function bundled together with references to its **lexical environment** (surrounding state). It allows an inner function to access variables from an outer function, even after the outer function has finished executing.
```javascript
function outer() {
  let x = 10;
  return function inner() {
    console.log(x);  // Closure over 'x'
  };
}

const fn = outer();
fn();  // 10 (outer finished, but x still accessible)
```

---

### Q2. How do closures work?
**Answer:** When a function is created, it gets a hidden `[[Environment]]` property that references the Lexical Environment where it was created.

**Steps:**
1. Outer function creates its Lexical Environment (with variables)
2. Inner function is created → references outer's LE
3. Outer function returns inner function and completes
4. Inner function retains reference to outer's LE
5. Outer's LE is NOT garbage collected (still referenced)
6. Inner function can still access outer's variables

---

### Q3. When are closures created?
**Answer:** **Every function creates a closure** when defined. Closures become useful when:
1. Inner function is **returned** from outer function
2. Inner function is used as a **callback**
3. Inner function is stored in a **variable** or data structure
4. Inner function is used in **event handlers**

---

### Q4. What are the practical uses of closures?
**Answer:**

1. **Data Privacy / Encapsulation** - Create private variables
2. **Function Factories** - Create customized functions
3. **Callbacks** - Maintain state in async operations
4. **Module Pattern** - Organize code with private/public members
5. **Maintaining State** - Keep data between function calls
6. **Memoization** - Cache function results
7. **Partial Application** - Pre-fill function arguments

---

### Q5. Do closures affect memory?
**Answer:** **YES**. Closures keep variables in memory because the inner function maintains a reference to the outer Lexical Environment.

**Impact:**
- Variables are NOT garbage collected while closure exists
- Can cause memory leaks if large data is unnecessarily closed over

**Best Practice:** Only close over variables you actually need.
```javascript
// ❌ Bad - keeps entire array
function bad() {
  const bigArray = new Array(1000000);
  return function() {
    console.log(bigArray[0]);  // Keeps whole array
  };
}

// ✅ Good - only keeps what's needed
function good() {
  const bigArray = new Array(1000000);
  const first = bigArray[0];
  return function() {
    console.log(first);  // Only keeps 'first'
  };
}
```

---

### Q6. What's the difference between closure and scope?
**Answer:**

| Concept | Definition |
|---------|-----------|
| **Scope** | Rules about where variables are accessible |
| **Closure** | Function + its Lexical Environment reference |

- **Scope** is the concept/rules
- **Closure** is the mechanism that implements scope for inner functions

---

### Q7. Can multiple functions share the same closure?
**Answer:** **YES**. If multiple functions are created in the same outer function, they share the same Lexical Environment and can access/modify the same variables.
```javascript
function outer() {
  let count = 0;
  
  function increment() { count++; }
  function decrement() { count--; }
  function getCount() { return count; }
  
  return { increment, decrement, getCount };
}

const obj = outer();
obj.increment();
obj.increment();
console.log(obj.getCount());  // 2 (all share same 'count')
```

---

### Q8. How do you fix the closure-in-loop problem?
**Answer:**

**Problem:**
```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);  // 3, 3, 3
}
```

**Solutions:**

1. **Use `let`** (creates new binding per iteration)
```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);  // 0, 1, 2
}
```

2. **Use IIFE** (creates new scope)
```javascript
for (var i = 0; i < 3; i++) {
  (function(j) {
    setTimeout(() => console.log(j), 100);  // 0, 1, 2
  })(i);
}
```

---

### Q9. What is the Module Pattern?
**Answer:** A design pattern using closures (typically with IIFE) to create private variables and public methods.
```javascript
const module = (function() {
  // Private
  let privateVar = 0;
  
  // Public
  return {
    increment() { privateVar++; },
    getValue() { return privateVar; }
  };
})();

module.increment();
console.log(module.getValue());  // 1
console.log(module.privateVar);  // undefined (private)
```

---

### Q10. Can closures cause memory leaks?
**Answer:** **YES**, if not used carefully.

**Common causes:**
- Closing over large data unnecessarily
- Event listeners with closures not removed
- Timers with closures not cleared

**Prevention:**
- Only close over needed variables
- Remove event listeners when done
- Clear timers when component unmounts
- Nullify references when no longer needed

---

## 🔢 Output-Based Questions

### Q11. What will be the output?
```javascript
function outer() {
  let x = 10;
  
  return function inner() {
    console.log(x);
  };
}

const fn = outer();
fn();
```

**Answer:** `10`

**Explanation:** `inner` function closes over `x` from `outer`. Even after `outer()` completes, `inner` retains access to `x`.

---

### Q12. What will be the output?
```javascript
function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1());
console.log(counter1());
console.log(counter2());
```

**Answer:**
```
1
2
1
```

**Explanation:** `counter1` and `counter2` have **separate closures** with independent `count` variables.

---

### Q13. What will be the output?
```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
```

**Answer:** `3 3 3`

**Explanation:** All callbacks share the same `i` (var is function scoped). By the time callbacks run, loop finished and `i = 3`.

---

### Q14. What will be the output?
```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
```

**Answer:** `0 1 2`

**Explanation:** `let` creates new `i` for each iteration (block scoped). Each callback closes over its own `i`.

---

### Q15. What will be the output?
```javascript
function outer() {
  let x = 0;
  
  function increment() { x++; }
  function decrement() { x--; }
  function getValue() { return x; }
  
  return { increment, decrement, getValue };
}

const obj = outer();
obj.increment();
obj.increment();
obj.decrement();
console.log(obj.getValue());
```

**Answer:** `1`

**Explanation:** All three methods share the same closure. They access and modify the SAME `x` variable.

---

### Q16. What will be the output?
```javascript
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2));
console.log(add10(2));
```

**Answer:**
```
7
12
```

**Explanation:** `add5` closes over `x = 5`, `add10` closes over `x = 10`. Separate closures with different values.

---

### Q17. What will be the output?
```javascript
let x = 10;

function outer() {
  let x = 20;
  
  return function inner() {
    console.log(x);
  };
}

const fn = outer();
fn();
```

**Answer:** `20`

**Explanation:** `inner` closes over `outer`'s `x` (lexical scoping). Uses the `x` from where it's defined, not global `x`.

---

### Q18. What will be the output?
```javascript
function test() {
  const arr = [];
  
  for (var i = 0; i < 3; i++) {
    arr.push(function() {
      return i;
    });
  }
  
  return arr;
}

const funcs = test();
console.log(funcs[0]());
console.log(funcs[1]());
console.log(funcs[2]());
```

**Answer:**
```
3
3
3
```

**Explanation:** All functions close over the same `i` (var is function scoped). After loop, `i = 3`.

---

### Q19. What will be the output?
```javascript
function createFunctions() {
  const arr = [];
  
  for (let i = 0; i < 3; i++) {
    arr.push(function() {
      return i;
    });
  }
  
  return arr;
}

const funcs = createFunctions();
console.log(funcs[0]());
console.log(funcs[1]());
console.log(funcs[2]());
```

**Answer:**
```
0
1
2
```

**Explanation:** `let` creates new `i` for each iteration. Each function closes over its own `i`.

---

### Q20. What will be the output?
```javascript
function outer() {
  var x = 10;
  
  return {
    increment() { x++; },
    double() { x *= 2; },
    getValue() { return x; }
  };
}

const obj = outer();
obj.increment();
obj.double();
console.log(obj.getValue());
```

**Answer:** `22`

**Explanation:**
- `x = 10` initially
- `increment()` → `x = 11`
- `double()` → `x = 22`
- All methods share same closure over `x`

---

## 🎯 Summary - Must Know Points

1. **Closure** = Function + Lexical Environment reference
2. **How it works** = Inner function retains reference to outer's LE
3. **When created** = Every function (useful when returned/stored/callback)
4. **Outer completes** = Variables still accessible via closure
5. **Memory** = Variables NOT garbage collected (stay alive)
6. **Use cases** = Privacy, factories, callbacks, modules, state
7. **Separate closures** = Each function call creates new closure
8. **Shared closure** = Functions from same outer share same LE
9. **Loop problem** = Use `let` or IIFE
10. **Best practice** = Only close over needed variables