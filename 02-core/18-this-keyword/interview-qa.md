# The `this` Keyword - Interview Q&A

## 📌 Conceptual Questions

### Q1. What is `this` in JavaScript?
**Answer:** `this` is a special keyword that refers to the **context** in which a function is executed. Its value depends on **HOW** the function is called, not **WHERE** it's defined.
```javascript
function show() {
  console.log(this);
}

show();        // Different 'this'
obj.show();    // Different 'this'
new show();    // Different 'this'
```

---

### Q2. What is `this` in global scope?
**Answer:** In global scope, `this` refers to the **global object**:
- **Browser:** `window` object
- **Node.js:** `global` object
```javascript
console.log(this);  // Window (browser) / global (Node.js)
```

---

### Q3. What is `this` in a regular function?
**Answer:**

**Non-strict mode:** `this` is the **global object** (window)
```javascript
function test() {
  console.log(this);  // Window
}
test();
```

**Strict mode:** `this` is **undefined**
```javascript
"use strict";
function test() {
  console.log(this);  // undefined
}
test();
```

---

### Q4. What is `this` in object methods?
**Answer:** When a function is called as an object method, `this` refers to the **object** that called the method (the object before the dot).
```javascript
const person = {
  name: "Manoj",
  greet() {
    console.log(this.name);  // "Manoj"
  }
};

person.greet();  // 'this' is person object
```

---

### Q5. What is `this` with the `new` keyword?
**Answer:** When a function is called with `new`, `this` refers to the **newly created object**.
```javascript
function Person(name) {
  this.name = name;  // 'this' is new empty object
}

const person = new Person("Manoj");
console.log(person.name);  // "Manoj"
```

**What `new` does:**
1. Creates new empty object
2. Sets `this` to that object
3. Executes constructor
4. Returns the object

---

### Q6. How does `this` work in arrow functions?
**Answer:** Arrow functions **DON'T have their own `this`**. They inherit `this` from the **parent scope** (lexical `this`).
```javascript
const obj = {
  name: "Manoj",
  arrow: () => {
    console.log(this.name);  // undefined (this = global)
  }
};

obj.arrow();
```

Arrow functions look up `this` in the enclosing scope, not the object.

---

### Q7. What is `this` in event handlers?
**Answer:** In DOM event handlers with **regular functions**, `this` refers to the **element** that triggered the event.
```javascript
button.addEventListener("click", function() {
  console.log(this);  // <button> element
});
```

With **arrow functions**, `this` is lexical (not the element):
```javascript
button.addEventListener("click", () => {
  console.log(this);  // Window (not button)
});
```

---

### Q8. What are the four rules of `this` binding?
**Answer:** (in priority order)

1. **new binding** - `this` is newly created object
2. **Explicit binding** - Using call/apply/bind (next chapter)
3. **Implicit binding** - `this` is object calling the method
4. **Default binding** - Global object (non-strict) or undefined (strict)

---

### Q9. Why use arrow functions for callbacks?
**Answer:** Arrow functions **preserve `this`** from the outer scope, avoiding the "lost context" problem.
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

Without arrow function, `this` in the callback would be global/undefined.

---

### Q10. Can arrow functions be used as constructors?
**Answer:** **NO**. Arrow functions cannot be used with `new` because they don't have their own `this`.
```javascript
const Person = (name) => {
  this.name = name;
};

new Person("Manoj");  // TypeError: Person is not a constructor
```

---

## 🔢 Output-Based Questions

### Q11. What will be the output?
```javascript
console.log(this);
```

**Answer:** `Window` object (in browser) or `global` object (in Node.js)

**Explanation:** Global scope `this` refers to global object.

---

### Q12. What will be the output?
```javascript
"use strict";

function test() {
  console.log(this);
}

test();
```

**Answer:** `undefined`

**Explanation:** In strict mode, regular function `this` is `undefined`.

---

### Q13. What will be the output?
```javascript
const person = {
  name: "Manoj",
  greet: function() {
    console.log(this.name);
  }
};

person.greet();
```

**Answer:** `Manoj`

**Explanation:** `this` in object method refers to the object (person).

---

### Q14. What will be the output?
```javascript
const person = {
  name: "Manoj",
  greet: function() {
    console.log(this.name);
  }
};

const greet = person.greet;
greet();
```

**Answer:** `undefined` (or error in strict mode)

**Explanation:** Method extracted from object loses context. `this` becomes global/undefined.

---

### Q15. What will be the output?
```javascript
const obj = {
  name: "Object",
  arrow: () => {
    console.log(this.name);
  }
};

obj.arrow();
```

**Answer:** `undefined`

**Explanation:** Arrow function as object method doesn't work. `this` is from parent scope (global), not the object.

---

### Q16. What will be the output?
```javascript
const obj = {
  name: "Outer",
  method: function() {
    const arrow = () => {
      console.log(this.name);
    };
    arrow();
  }
};

obj.method();
```

**Answer:** `Outer`

**Explanation:** Arrow function inside method inherits `this` from method. `this` = obj.

---

### Q17. What will be the output?
```javascript
function Person(name) {
  this.name = name;
}

const person = new Person("Manoj");
console.log(person.name);
```

**Answer:** `Manoj`

**Explanation:** `new` creates new object and sets `this` to it.

---

### Q18. What will be the output?
```javascript
const outer = {
  name: "Outer",
  inner: {
    name: "Inner",
    greet: function() {
      console.log(this.name);
    }
  }
};

outer.inner.greet();
```

**Answer:** `Inner`

**Explanation:** `this` refers to the immediate parent object (inner), not outer.

---

### Q19. What will be the output?
```javascript
"use strict";

function test() {
  console.log(this);
}

window.test();
```

**Answer:** `Window` object

**Explanation:** Even in strict mode, when explicitly called on window, `this` is window.

---

### Q20. What will be the output?
```javascript
class Counter {
  count = 0;
  
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

**Explanation:** Arrow function as class property permanently binds `this` to instance. Even when extracted, it still works.

---

## 🎯 Summary - Must Know Points

1. **`this`** = Execution context (HOW called, not WHERE defined)
2. **Global scope** = window (browser) / global (Node.js)
3. **Regular function** = window (non-strict) / undefined (strict)
4. **Object method** = object before the dot
5. **`new` keyword** = newly created object
6. **Arrow function** = inherited from parent (lexical)
7. **Event handler** = element (regular) / lexical (arrow)
8. **Four rules** = new > explicit > implicit > default
9. **Arrow functions** = No own `this`, can't be constructor
10. **Best practice** = Arrow for callbacks, regular for methods