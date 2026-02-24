# The `this` Keyword in JavaScript

## What is `this`?

**`this`** is a special keyword in JavaScript that refers to the **context** in which a function is executed.

**Key Point:** The value of `this` depends on **HOW** the function is called, not **WHERE** it's defined.
```javascript
function showThis() {
  console.log(this);
}

showThis();           // Different 'this'
obj.showThis();       // Different 'this'
new showThis();       // Different 'this'
```

---

## Why `this` Exists

`this` allows functions to work with different objects:
```javascript
const user1 = {
  name: "Manoj",
  greet() {
    console.log(`Hello, ${this.name}!`);
  }
};

const user2 = {
  name: "Alice",
  greet() {
    console.log(`Hello, ${this.name}!`);
  }
};

user1.greet();  // "Hello, Manoj!"
user2.greet();  // "Hello, Alice!"
```

Without `this`, we'd need separate functions for each object.

---

## `this` in Different Contexts

### 1. Global Context

In the global scope, `this` refers to the **global object**.

**Browser:**
```javascript
console.log(this);  // Window object
```

**Node.js:**
```javascript
console.log(this);  // global object
```

---

### 2. Regular Function (Non-Strict Mode)

In a regular function, `this` refers to the **global object**.
```javascript
function test() {
  console.log(this);  // Window (browser)
}

test();
```

---

### 3. Regular Function (Strict Mode)

In strict mode, `this` is **undefined**.
```javascript
"use strict";

function test() {
  console.log(this);  // undefined
}

test();
```

**Why:** Strict mode prevents accidental global object access.

---

### 4. Object Method

When a function is called as an **object method**, `this` refers to the **object**.
```javascript
const person = {
  name: "Manoj",
  greet() {
    console.log(this.name);  // 'this' is person
  }
};

person.greet();  // "Manoj"
```

**Rule:** The object **before the dot** becomes `this`.

---

### 5. Constructor Function with `new`

When a function is called with `new`, `this` refers to the **newly created object**.
```javascript
function Person(name) {
  this.name = name;  // 'this' is new empty object
}

const person1 = new Person("Manoj");
console.log(person1.name);  // "Manoj"
```

**What `new` does:**
1. Creates new empty object
2. Sets `this` to that object
3. Executes constructor function
4. Returns the object (implicit return)

---

### 6. Arrow Functions

Arrow functions **DON'T have their own `this`**. They inherit `this` from the **parent scope** (lexical `this`).
```javascript
const obj = {
  name: "Manoj",
  regularFunc: function() {
    console.log(this.name);  // "Manoj" (this = obj)
  },
  arrowFunc: () => {
    console.log(this.name);  // undefined (this = global/window)
  }
};

obj.regularFunc();  // "Manoj"
obj.arrowFunc();    // undefined
```

**Why:** Arrow functions don't have `this` - they look up to parent scope.

---

### 7. Arrow Function in Nested Context

Arrow functions in nested contexts inherit `this` from enclosing scope:
```javascript
const obj = {
  name: "Manoj",
  method: function() {
    const arrow = () => {
      console.log(this.name);  // 'this' from method (obj)
    };
    arrow();
  }
};

obj.method();  // "Manoj"
```

**Use case:** Useful for callbacks and preserving `this`.

---

### 8. Event Handlers

In DOM event handlers, `this` refers to the **element** that triggered the event.
```javascript
const button = document.getElementById("btn");

button.addEventListener("click", function() {
  console.log(this);  // <button id="btn">
  console.log(this.tagName);  // "BUTTON"
});
```

**Note:** Arrow functions in event handlers use lexical `this` (not the element).
```javascript
button.addEventListener("click", () => {
  console.log(this);  // Window (not button!)
});
```

---

### 9. Class Methods

In ES6 classes, `this` in regular methods refers to the **instance**.
```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
  
  greet() {
    console.log(`Hello, ${this.name}!`);
  }
}

const person = new Person("Manoj");
person.greet();  // "Hello, Manoj!"
```

---

### 10. Class Arrow Methods

Arrow functions as class properties bind `this` permanently to the instance:
```javascript
class Counter {
  count = 0;
  
  // Arrow function - 'this' permanently bound
  increment = () => {
    this.count++;
  }
}

const counter = new Counter();
const inc = counter.increment;
inc();  // Works! 'this' is still counter instance
```

---

## Four Rules of `this` Binding

Understanding `this` requires knowing these **four rules** (in priority order):

### Rule 1: `new` Binding (Highest Priority)

When called with `new`, `this` is the newly created object.
```javascript
function Person(name) {
  this.name = name;
}

const p = new Person("Manoj");
// 'this' inside Person = new object
```

---

### Rule 2: Explicit Binding

*(Covered in next chapter: call, apply, bind)*

---

### Rule 3: Implicit Binding

When called as object method, `this` is the object.
```javascript
const obj = {
  name: "Manoj",
  greet() {
    console.log(this.name);
  }
};

obj.greet();  // 'this' is obj
```

---

### Rule 4: Default Binding (Lowest Priority)

Default: global object (non-strict) or undefined (strict).
```javascript
function test() {
  console.log(this);
}

test();  // Window (non-strict) or undefined (strict)
```

---

## Common `this` Scenarios

### Scenario 1: Lost `this` Context
```javascript
const person = {
  name: "Manoj",
  greet() {
    console.log(this.name);
  }
};

const greet = person.greet;
greet();  // undefined (lost context!)
```

**Why:** Function is no longer called as method, so `this` becomes global/undefined.

---

### Scenario 2: `this` in Callback
```javascript
const person = {
  name: "Manoj",
  greet() {
    console.log(this.name);
  }
};

setTimeout(person.greet, 1000);  // undefined (lost context!)
```

**Solution:** Use arrow function:
```javascript
setTimeout(() => person.greet(), 1000);  // Works!
```

---

### Scenario 3: Nested Functions
```javascript
const obj = {
  name: "Manoj",
  method() {
    function inner() {
      console.log(this.name);  // undefined!
    }
    inner();
  }
};

obj.method();
```

**Why:** `inner()` is called as regular function, not method.

**Solution:** Use arrow function:
```javascript
const obj = {
  name: "Manoj",
  method() {
    const inner = () => {
      console.log(this.name);  // "Manoj" (inherits from method)
    };
    inner();
  }
};
```

---

## Arrow Functions and `this`

### Arrow Functions DON'T Have `this`

Arrow functions **inherit `this`** from the enclosing scope (lexical scoping).
```javascript
const obj = {
  value: 10,
  arrow: () => {
    console.log(this.value);  // undefined
    // 'this' is from global scope, not obj
  }
};

obj.arrow();
```

---

### When to Use Arrow Functions

✅ **Use arrow functions:**
- Callbacks that need to preserve `this`
- Inside methods to maintain context
- When you want lexical `this`
```javascript
class Counter {
  count = 0;
  
  start() {
    setInterval(() => {
      this.count++;  // 'this' is Counter instance
      console.log(this.count);
    }, 1000);
  }
}
```

---

❌ **Don't use arrow functions:**
- Object methods (need dynamic `this`)
- Constructor functions (arrow functions can't be constructors)
- Event handlers (if you need element as `this`)
```javascript
// ❌ Bad
const obj = {
  name: "Manoj",
  greet: () => {
    console.log(this.name);  // Won't work as expected
  }
};
```

---

## Strict Mode vs Non-Strict Mode

### Non-Strict Mode
```javascript
function test() {
  console.log(this);  // Window
}

test();
```

---

### Strict Mode
```javascript
"use strict";

function test() {
  console.log(this);  // undefined
}

test();
```

**But:** If called as method, still works:
```javascript
"use strict";

function test() {
  console.log(this);
}

window.test();  // Window
```

---

## `this` in Different Environments

### Browser
```javascript
console.log(this);  // Window
```

---

### Node.js (Global)
```javascript
console.log(this);  // {} (module.exports)
```

---

### Node.js (Inside Function)
```javascript
function test() {
  console.log(this);  // global object
}
```

---

## Common Mistakes

### ❌ Mistake 1: Arrow Function as Object Method
```javascript
const obj = {
  name: "Manoj",
  greet: () => {
    console.log(this.name);  // undefined
  }
};

obj.greet();
```

**Why:** Arrow function doesn't have `this`, uses global `this`.

---

### ❌ Mistake 2: Lost Context in Callback
```javascript
const person = {
  name: "Manoj",
  greet() {
    console.log(this.name);
  }
};

setTimeout(person.greet, 1000);  // undefined
```

**Fix:**
```javascript
setTimeout(() => person.greet(), 1000);
```

---

### ❌ Mistake 3: Nested Function Loses `this`
```javascript
const obj = {
  value: 10,
  method() {
    function inner() {
      console.log(this.value);  // undefined
    }
    inner();
  }
};
```

**Fix:**
```javascript
method() {
  const inner = () => {
    console.log(this.value);  // 10
  };
  inner();
}
```

---

## Best Practices

### ✅ 1. Use Arrow Functions for Callbacks
```javascript
class Timer {
  seconds = 0;
  
  start() {
    setInterval(() => {
      this.seconds++;  // 'this' is Timer instance
    }, 1000);
  }
}
```

---

### ✅ 2. Use Regular Functions for Methods
```javascript
const obj = {
  name: "Manoj",
  greet() {  // Regular function
    console.log(this.name);  // Works correctly
  }
};
```

---

### ✅ 3. Store `this` in Variable (Old Way)
```javascript
const obj = {
  name: "Manoj",
  method() {
    const self = this;  // Store reference
    
    function inner() {
      console.log(self.name);  // Use stored reference
    }
    
    inner();
  }
};
```

**Note:** Modern way is arrow functions.

---

### ✅ 4. Be Careful with Event Handlers
```javascript
// ✅ Need element as 'this'
button.addEventListener("click", function() {
  console.log(this);  // button element
});

// ✅ Need outer 'this'
button.addEventListener("click", () => {
  console.log(this);  // outer scope
});
```

---

## Interview Key Points

### Q1. What is `this` in JavaScript?
**Answer:** `this` is a special keyword that refers to the context in which a function is executed. Its value depends on HOW the function is called, not WHERE it's defined.

---

### Q2. What is `this` in global scope?
**Answer:** In global scope, `this` refers to the global object:
- Browser: `window`
- Node.js: `global`

---

### Q3. What is `this` in a regular function?
**Answer:**
- **Non-strict mode:** Global object (window)
- **Strict mode:** `undefined`

---

### Q4. What is `this` in object methods?
**Answer:** In object methods, `this` refers to the object the method is called on (the object before the dot).
```javascript
obj.method();  // 'this' is obj
```

---

### Q5. What is `this` with `new` keyword?
**Answer:** When a function is called with `new`, `this` refers to the newly created object.

---

### Q6. How does `this` work in arrow functions?
**Answer:** Arrow functions DON'T have their own `this`. They inherit `this` from the parent scope (lexical `this`).

---

### Q7. What is `this` in event handlers?
**Answer:** In DOM event handlers (regular functions), `this` refers to the element that triggered the event. Arrow functions use lexical `this`.

---

### Q8. What are the four rules of `this` binding?
**Answer:** (in priority order)
1. **new binding** - `this` is newly created object
2. **Explicit binding** - call/apply/bind (next chapter)
3. **Implicit binding** - `this` is object calling the method
4. **Default binding** - global object or undefined

---

### Q9. Why use arrow functions for callbacks?
**Answer:** Arrow functions preserve `this` from the outer scope, avoiding the "lost context" problem common with regular function callbacks.

---

### Q10. Can arrow functions be constructors?
**Answer:** **NO**. Arrow functions cannot be used with `new` keyword because they don't have their own `this`.

---

## Summary
```
'this' KEYWORD:
- Special keyword referring to execution context
- Value depends on HOW function is called
- NOT WHERE function is defined

CONTEXTS:
1. Global: window (browser) / global (Node.js)
2. Regular function: window (non-strict) / undefined (strict)
3. Object method: object before the dot
4. Constructor (new): newly created object
5. Arrow function: inherited from parent (lexical)
6. Event handler: element that triggered event

ARROW FUNCTIONS:
- DON'T have their own 'this'
- Inherit from parent scope (lexical)
- Can't be used as constructors
- Can't change 'this' with call/apply/bind
- Perfect for callbacks preserving context

FOUR RULES (Priority):
1. new binding (highest)
2. Explicit binding (call/apply/bind)
3. Implicit binding (method call)
4. Default binding (global/undefined)

COMMON ISSUES:
❌ Lost context in callbacks
❌ Arrow functions as object methods
❌ Nested functions losing 'this'

BEST PRACTICES:
✅ Arrow functions for callbacks
✅ Regular functions for methods
✅ Understand binding rules
✅ Use arrow functions to preserve context
```