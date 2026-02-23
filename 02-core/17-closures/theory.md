# Closures in JavaScript

## What is a Closure?

**Closure** is a function bundled together with references to its **lexical environment** (surrounding state).

**Simple Definition:** A closure gives you access to an outer function's scope from an inner function.
```javascript
function outer() {
  let count = 0;  // Outer variable
  
  function inner() {
    count++;  // Inner function accesses outer variable
    return count;
  }
  
  return inner;
}

const counter = outer();
console.log(counter());  // 1
console.log(counter());  // 2
// inner function "closes over" the count variable
```

---

## Closure Definition (Formal)

**A closure is created when:**
1. A function is defined inside another function
2. The inner function references variables from the outer function
3. The inner function is returned or used outside the outer function

**Key Point:** Inner function retains access to outer function's variables even after the outer function has finished executing.

---

## How Closures Work

### Behind the Scenes

When a function is created, it gets a hidden property `[[Environment]]` that references the Lexical Environment where it was created.
```javascript
function outer() {
  let x = 10;
  
  function inner() {  // inner's [[Environment]] → outer's LE
    console.log(x);
  }
  
  return inner;
}

const fn = outer();
// outer() finished executing
// But inner() still has reference to outer's Lexical Environment
fn();  // 10 (still works!)
```

**Why it works:**
1. `outer()` creates its Lexical Environment with `x = 10`
2. `inner()` is created inside `outer()` → references outer's LE
3. `outer()` returns `inner` and completes
4. Normally, outer's LE would be garbage collected
5. BUT `inner` still holds reference to outer's LE
6. So outer's LE stays in memory
7. `fn()` can still access `x` through the closure

---

## Lexical Environment and Closures
```
outer() Lexical Environment {
  Environment Record: { x: 10, inner: function },
  Outer Reference: → Global LE
}
                    ↑
                    |
                Reference maintained by inner function
                (This is the CLOSURE)
```

---

## Simple Closure Example
```javascript
function makeGreeter(greeting) {
  // greeting is in makeGreeter's Lexical Environment
  
  return function(name) {
    console.log(`${greeting}, ${name}!`);
  };
}

const sayHello = makeGreeter("Hello");
const sayHi = makeGreeter("Hi");

sayHello("Manoj");  // "Hello, Manoj!"
sayHi("Alice");     // "Hi, Alice!"

// Each function has its own closure with different 'greeting' value
```

---

## When Are Closures Created?

**Every function in JavaScript forms a closure!**

But closures become useful/noticeable when:
1. Inner function is **returned** from outer function
2. Inner function is passed as a **callback**
3. Inner function is used in **event handlers**
4. Inner function is stored in a **variable**
```javascript
// Example 1: Returned function
function outer() {
  let x = 10;
  return function inner() {
    console.log(x);
  };
}

// Example 2: Callback
function outer() {
  let x = 10;
  setTimeout(function() {
    console.log(x);  // Closure over x
  }, 1000);
}

// Example 3: Event handler
function setupButton() {
  let count = 0;
  document.getElementById('btn').addEventListener('click', function() {
    count++;  // Closure over count
    console.log(count);
  });
}
```

---

## Closure Use Cases

### 1. Data Privacy / Encapsulation

Create private variables that can't be accessed directly:
```javascript
function createCounter() {
  let count = 0;  // Private variable
  
  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getCount() {
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment());  // 1
console.log(counter.increment());  // 2
console.log(counter.getCount());   // 2
console.log(counter.count);        // undefined (private!)
```

---

### 2. Function Factories

Create customized functions:
```javascript
function multiplyBy(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15
```

---

### 3. Callbacks and Event Handlers
```javascript
function setupTimer(message, delay) {
  setTimeout(function() {
    console.log(message);  // Closure over message
  }, delay);
}

setupTimer("Hello after 1 second", 1000);
setupTimer("Hello after 2 seconds", 2000);
```

---

### 4. Module Pattern
```javascript
const calculator = (function() {
  // Private variables
  let result = 0;
  
  // Public methods
  return {
    add(num) {
      result += num;
      return this;
    },
    subtract(num) {
      result -= num;
      return this;
    },
    getResult() {
      return result;
    }
  };
})();

calculator.add(10).subtract(3);
console.log(calculator.getResult());  // 7
console.log(calculator.result);       // undefined (private)
```

---

### 5. Maintaining State
```javascript
function createPlayer(name) {
  let score = 0;
  
  return {
    getName() {
      return name;
    },
    addScore(points) {
      score += points;
    },
    getScore() {
      return score;
    }
  };
}

const player1 = createPlayer("Manoj");
const player2 = createPlayer("Alice");

player1.addScore(10);
player2.addScore(20);

console.log(player1.getScore());  // 10
console.log(player2.getScore());  // 20
// Each player has independent state (separate closures)
```

---

## Multiple Closures

Each function call creates a **new** closure with its own Lexical Environment:
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

console.log(counter1());  // 1
console.log(counter1());  // 2
console.log(counter2());  // 1 (separate closure!)
console.log(counter2());  // 2
console.log(counter1());  // 3
```

**Key Point:** `counter1` and `counter2` have **separate closures** - they don't share the `count` variable.

---

## Closure in Loops (Classic Problem)

### ❌ Problem with var
```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);  // 3, 3, 3 (all print 3!)
  }, 1000);
}
```

**Why:** All callbacks share the same `i` (var is function scoped), and by the time they run, `i = 3`.

---

### ✅ Solution 1: Use let
```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);  // 0, 1, 2 (correct!)
  }, 1000);
}
```

**Why:** `let` creates a new `i` for each iteration (block scoped).

---

### ✅ Solution 2: IIFE (with var)
```javascript
for (var i = 0; i < 3; i++) {
  (function(index) {
    setTimeout(function() {
      console.log(index);  // 0, 1, 2
    }, 1000);
  })(i);
}
```

**Why:** IIFE creates new scope with separate `index` for each iteration.

---

## Memory Implications

**Closures keep outer variables in memory!**
```javascript
function createHeavyObject() {
  const largeArray = new Array(1000000).fill('data');
  
  return function() {
    console.log(largeArray[0]);
  };
}

const fn = createHeavyObject();
// largeArray is NOT garbage collected (closure keeps it alive)
```

**Best Practice:** Only close over variables you need:
```javascript
// ❌ Bad - closes over unnecessary data
function createHeavyObject() {
  const largeArray = new Array(1000000).fill('data');
  const firstItem = largeArray[0];
  
  return function() {
    console.log(largeArray[0]);  // Keeps entire array in memory
  };
}

// ✅ Good - only closes over what's needed
function createHeavyObject() {
  const largeArray = new Array(1000000).fill('data');
  const firstItem = largeArray[0];
  
  return function() {
    console.log(firstItem);  // Only keeps firstItem in memory
  };
}
```

---

## Common Mistakes

### ❌ Mistake 1: Expecting different values but getting same
```javascript
function createFunctions() {
  const arr = [];
  
  for (var i = 0; i < 3; i++) {
    arr.push(function() {
      return i;
    });
  }
  
  return arr;
}

const funcs = createFunctions();
console.log(funcs[0]());  // 3 (expected 0)
console.log(funcs[1]());  // 3 (expected 1)
console.log(funcs[2]());  // 3 (expected 2)
```

**Fix:** Use `let` or create new scope with IIFE.

---

### ❌ Mistake 2: Modifying closed-over variable unexpectedly
```javascript
function outer() {
  let x = 0;
  
  function increment() {
    x++;
    return x;
  }
  
  function reset() {
    x = 0;
  }
  
  return { increment, reset };
}

const obj = outer();
console.log(obj.increment());  // 1
console.log(obj.increment());  // 2
obj.reset();
console.log(obj.increment());  // 1 (x was modified!)
```

**Note:** All functions share the same closure - modifying `x` affects all.

---

## Closures vs Scope

| Concept | Definition |
|---------|-----------|
| **Scope** | Rules about where variables are accessible |
| **Lexical Environment** | Data structure holding variables + reference to parent |
| **Closure** | Function + reference to its Lexical Environment |

**Relationship:**
- Scope defines the rules
- Lexical Environment implements scope
- Closure is the mechanism that lets functions access outer scope

---

## Interview Key Points

### Q1. What is a closure?
**Answer:** A closure is a function bundled with references to its lexical environment (outer scope). It allows a function to access variables from an outer function even after the outer function has finished executing.

---

### Q2. How do closures work?
**Answer:** When a function is created, it maintains a reference to its outer Lexical Environment. Even when the outer function completes, the inner function retains access to the outer variables through this reference.

---

### Q3. When are closures created?
**Answer:** Every function creates a closure. Closures become useful when:
- Inner function is returned from outer function
- Inner function is used as callback
- Inner function is stored in a variable or data structure

---

### Q4. What are practical uses of closures?
**Answer:**
1. Data privacy/encapsulation
2. Function factories
3. Callbacks and event handlers
4. Module pattern
5. Maintaining state between function calls

---

### Q5. Do closures affect memory?
**Answer:** Yes. Closures keep outer variables in memory (not garbage collected) as long as the inner function exists. Only close over variables you actually need.

---

### Q6. How do you fix the closure-in-loop problem?
**Answer:**
1. Use `let` instead of `var` (creates new binding per iteration)
2. Use IIFE to create new scope
3. Use `bind()` or arrow functions

---

### Q7. Can multiple functions share the same closure?
**Answer:** Yes, if they're created in the same outer function scope, they share the same Lexical Environment and can access/modify the same variables.

---

### Q8. What's the difference between closure and scope?
**Answer:**
- **Scope:** Rules about variable accessibility
- **Closure:** Function + its lexical environment reference (implementation of scope for inner functions)

---

## Summary
```
CLOSURE:
- Function + Lexical Environment reference
- Allows access to outer variables after outer function completes
- Created when function is defined (every function)
- Useful when inner function returned/stored/used as callback

HOW IT WORKS:
1. Inner function created → references outer's LE
2. Outer function completes
3. Inner function retains reference to outer's LE
4. Outer's LE NOT garbage collected
5. Inner function can still access outer variables

USE CASES:
✅ Data privacy (private variables)
✅ Function factories (customized functions)
✅ Callbacks and event handlers
✅ Module pattern
✅ Maintaining state

MEMORY:
⚠️ Closures keep variables in memory
⚠️ Only close over needed variables
⚠️ Can cause memory leaks if not careful

COMMON PATTERNS:
- Counter pattern
- Module pattern
- Function factory
- Callbacks with state

KEY POINTS:
✅ Every function creates closure
✅ Inner function accesses outer scope
✅ Outer variables stay alive
✅ Each call creates new closure
✅ Fundamental to JavaScript
```