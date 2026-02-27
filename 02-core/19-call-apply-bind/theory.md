# call, apply, and bind Methods

## What Are call, apply, and bind?

**call**, **apply**, and **bind** are methods available on all JavaScript functions that allow you to **explicitly set the `this` value** when invoking a function.

**Key Point:** They let you control what `this` refers to, regardless of how the function is called.
```javascript
function greet() {
  console.log(`Hello, ${this.name}!`);
}

const person = { name: "Manoj" };

greet.call(person);  // Explicitly set 'this' to person
```

---

## Why Do We Need These Methods?

1. **Explicit `this` control** - Set `this` to any object you want
2. **Method borrowing** - Use methods from one object on another
3. **Function reusability** - Same function, different contexts
4. **Callback context** - Preserve `this` in callbacks
5. **Partial application** - Pre-fill function arguments (bind)

---

## The call() Method

### Syntax
```javascript
function.call(thisArg, arg1, arg2, arg3, ...)
```

**Parameters:**
- `thisArg` - The object to use as `this`
- `arg1, arg2, ...` - Arguments passed to the function (comma-separated)

**Returns:** The result of calling the function

---

### Basic Example
```javascript
function introduce(city, age) {
  console.log(`I'm ${this.name} from ${city}, age ${age}`);
}

const person = { name: "Manoj" };

introduce.call(person, "Bangalore", 25);
// "I'm Manoj from Bangalore, age 25"
```

**What happens:**
1. `introduce` function is called
2. `this` is set to `person` object
3. Arguments "Bangalore" and 25 are passed
4. Function executes with this context

---

### call() Features

✅ **Invokes immediately** - Function runs right away
✅ **Sets `this` explicitly** - You control the context
✅ **Comma-separated arguments** - Pass args individually
✅ **Returns function result** - Get the return value

---

## The apply() Method

### Syntax
```javascript
function.apply(thisArg, [arg1, arg2, arg3, ...])
```

**Parameters:**
- `thisArg` - The object to use as `this`
- `[args]` - Array (or array-like) of arguments

**Returns:** The result of calling the function

---

### Basic Example
```javascript
function introduce(city, age) {
  console.log(`I'm ${this.name} from ${city}, age ${age}`);
}

const person = { name: "Manoj" };

introduce.apply(person, ["Bangalore", 25]);
// "I'm Manoj from Bangalore, age 25"
```

**Key Difference:** Arguments passed as **array** instead of comma-separated.

---

### apply() Features

✅ **Invokes immediately** - Function runs right away
✅ **Sets `this` explicitly** - You control the context
✅ **Array arguments** - Pass args as array
✅ **Returns function result** - Get the return value

---

## The bind() Method

### Syntax
```javascript
function.bind(thisArg, arg1, arg2, ...)
```

**Parameters:**
- `thisArg` - The object to use as `this`
- `arg1, arg2, ...` - Optional pre-filled arguments

**Returns:** A **new function** with `this` bound

---

### Basic Example
```javascript
function introduce(city, age) {
  console.log(`I'm ${this.name} from ${city}, age ${age}`);
}

const person = { name: "Manoj" };

const boundFunc = introduce.bind(person);

boundFunc("Bangalore", 25);  // Call later
// "I'm Manoj from Bangalore, age 25"
```

**Key Difference:** Returns new function, doesn't invoke immediately.

---

### bind() Features

✅ **Returns new function** - Doesn't call immediately
✅ **Permanent binding** - `this` is fixed forever
✅ **Can be called multiple times** - Reusable
✅ **Partial application** - Can pre-fill arguments

---

## call vs apply vs bind

| Feature | call | apply | bind |
|---------|------|-------|------|
| **Invokes immediately** | ✅ Yes | ✅ Yes | ❌ No (returns function) |
| **Arguments** | Comma-separated | Array | Comma-separated |
| **Returns** | Function result | Function result | New function |
| **Use case** | Quick call with few args | Call with array of args | Call later or callbacks |

---

## Quick Comparison
```javascript
const person = { name: "Manoj" };

function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

// call - comma-separated arguments
greet.call(person, "Hello", "!");
// "Hello, Manoj!"

// apply - array of arguments
greet.apply(person, ["Hi", "."]);
// "Hi, Manoj."

// bind - returns new function
const boundGreet = greet.bind(person);
boundGreet("Hey", "!");
// "Hey, Manoj!"
```

---

## When to Use Each Method

### Use call() When:

✅ You want to **invoke immediately**
✅ You have **few arguments** (easier to write)
✅ Arguments are **already separate values**
```javascript
function.call(obj, arg1, arg2, arg3);
```

---

### Use apply() When:

✅ You want to **invoke immediately**
✅ You have **array of arguments**
✅ You don't know number of arguments beforehand
```javascript
const args = [1, 2, 3, 4, 5];
function.apply(obj, args);
```

---

### Use bind() When:

✅ You want to **call later**
✅ You need a **callback function** with fixed `this`
✅ You want **event handlers** with correct context
✅ You want **partial application** (pre-fill arguments)
```javascript
const boundFunc = function.bind(obj);
// Call later
boundFunc();
```

---

## Method Borrowing

One of the most powerful uses: borrowing methods from one object to use on another.
```javascript
const person1 = {
  name: "Manoj",
  introduce: function(city) {
    console.log(`I'm ${this.name} from ${city}`);
  }
};

const person2 = { name: "Alice" };

// Borrow person1's method for person2
person1.introduce.call(person2, "Mumbai");
// "I'm Alice from Mumbai"
```

---

### Common Method Borrowing Examples

**Example 1: Array methods on array-like objects**
```javascript
function showArgs() {
  // 'arguments' is array-like, not real array
  const args = Array.prototype.slice.call(arguments);
  console.log(args);
}

showArgs(1, 2, 3);  // [1, 2, 3]
```

**Example 2: Using Math.max with array**
```javascript
const numbers = [5, 6, 2, 3, 7];

// apply passes array elements as separate arguments
const max = Math.max.apply(null, numbers);
console.log(max);  // 7

// Modern way (spread operator)
const max2 = Math.max(...numbers);
```

---

## Partial Application with bind()

**Partial application** means pre-filling some arguments.
```javascript
function multiply(a, b) {
  return a * b;
}

// Pre-fill first argument
const double = multiply.bind(null, 2);
const triple = multiply.bind(null, 3);

console.log(double(5));  // 10 (2 * 5)
console.log(triple(5));  // 15 (3 * 5)
```

---

### Partial Application Example
```javascript
function greet(greeting, name) {
  console.log(`${greeting}, ${name}!`);
}

// Pre-fill 'greeting'
const sayHello = greet.bind(null, "Hello");
const sayHi = greet.bind(null, "Hi");

sayHello("Manoj");  // "Hello, Manoj!"
sayHi("Alice");     // "Hi, Alice!"
```

---

## bind() in Event Handlers

bind() is extremely useful for event handlers:
```javascript
class Counter {
  constructor() {
    this.count = 0;
  }
  
  increment() {
    this.count++;
    console.log(this.count);
  }
}

const counter = new Counter();

// ❌ Wrong - loses 'this'
button.addEventListener('click', counter.increment);

// ✅ Correct - bind preserves 'this'
button.addEventListener('click', counter.increment.bind(counter));
```

---

## Arrow Functions and call/apply/bind

**IMPORTANT:** Arrow functions **IGNORE** call, apply, and bind!

Arrow functions always use **lexical `this`** and cannot be changed.
```javascript
const obj = { name: "Object" };

const arrowFunc = () => {
  console.log(this.name);
};

arrowFunc.call(obj);   // Doesn't work! 'this' is still lexical
arrowFunc.apply(obj);  // Doesn't work!
arrowFunc.bind(obj)(); // Doesn't work!
```

**Why:** Arrow functions don't have their own `this`.

---

## Using null or undefined as thisArg

When you don't care about `this`, you can pass `null` or `undefined`:
```javascript
function add(a, b) {
  return a + b;  // Doesn't use 'this'
}

const result = add.call(null, 5, 3);
console.log(result);  // 8
```

**Note:** In non-strict mode, `null`/`undefined` becomes global object. In strict mode, stays `null`/`undefined`.

---

## Real-World Use Cases

### Use Case 1: Function Currying
```javascript
function multiply(a, b) {
  return a * b;
}

const multiplyByTwo = multiply.bind(null, 2);
const multiplyByFive = multiply.bind(null, 5);

console.log(multiplyByTwo(3));   // 6
console.log(multiplyByFive(3));  // 15
```

---

### Use Case 2: Event Handler Context
```javascript
class Button {
  constructor(label) {
    this.label = label;
    this.clicked = 0;
  }
  
  handleClick() {
    this.clicked++;
    console.log(`${this.label} clicked ${this.clicked} times`);
  }
}

const button = new Button("Submit");

// Bind to preserve 'this'
element.addEventListener('click', button.handleClick.bind(button));
```

---

### Use Case 3: Borrowing Array Methods
```javascript
function convertToArray() {
  // 'arguments' is not a real array
  return Array.prototype.slice.call(arguments);
}

const arr = convertToArray(1, 2, 3, 4);
console.log(arr);  // [1, 2, 3, 4]
console.log(Array.isArray(arr));  // true
```

---

### Use Case 4: Finding Max in Array
```javascript
const numbers = [5, 10, 2, 8, 15];

// apply passes array elements as individual arguments
const max = Math.max.apply(null, numbers);
console.log(max);  // 15

// Modern alternative (spread operator)
const max2 = Math.max(...numbers);
```

---

## Common Patterns

### Pattern 1: Reusable Logging Function
```javascript
function log(level, message) {
  console.log(`[${level}] ${this.name}: ${message}`);
}

const user = { name: "Manoj" };
const admin = { name: "Admin" };

log.call(user, "INFO", "User logged in");
// [INFO] Manoj: User logged in

log.call(admin, "ERROR", "Access denied");
// [ERROR] Admin: Access denied
```

---

### Pattern 2: Chaining with bind()
```javascript
function greet(greeting) {
  console.log(`${greeting}, ${this.name}!`);
}

const person = { name: "Manoj" };

const sayHello = greet.bind(person, "Hello");
const sayHi = greet.bind(person, "Hi");

sayHello();  // "Hello, Manoj!"
sayHi();     // "Hi, Manoj!"
```

---

### Pattern 3: Converting Arguments to Array
```javascript
function sum() {
  const args = Array.prototype.slice.call(arguments);
  return args.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5));  // 15
```

---

## Best Practices

### ✅ 1. Use call for Simple Cases
```javascript
function.call(obj, arg1, arg2);
```

---

### ✅ 2. Use apply for Arrays
```javascript
function.apply(obj, arrayOfArgs);
```

---

### ✅ 3. Use bind for Callbacks
```javascript
element.addEventListener('click', func.bind(obj));
```

---

### ✅ 4. Modern Alternative to apply
```javascript
// Old way
Math.max.apply(null, [1, 2, 3]);

// New way (spread operator)
Math.max(...[1, 2, 3]);
```

---

### ✅ 5. Don't Use with Arrow Functions
```javascript
// ❌ Doesn't work
const arrow = () => console.log(this);
arrow.call(obj);  // Ignores obj

// ✅ Use regular function
const regular = function() { console.log(this); };
regular.call(obj);  // Works
```

---

## Common Mistakes

### ❌ Mistake 1: Forgetting to call bound function
```javascript
const boundFunc = func.bind(obj);
// boundFunc;  // ❌ Forgot to call!
boundFunc();   // ✅ Correct
```

---

### ❌ Mistake 2: Using call/apply with arrow functions
```javascript
const arrow = () => console.log(this.name);
arrow.call({ name: "Test" });  // Doesn't work!
```

---

### ❌ Mistake 3: Confusing call and apply syntax
```javascript
// ❌ Wrong
func.call(obj, [arg1, arg2]);

// ✅ Correct
func.call(obj, arg1, arg2);   // call
func.apply(obj, [arg1, arg2]); // apply
```

---

## Interview Key Points

### Q1. What are call, apply, and bind?
**Answer:** Methods that allow explicit control over the `this` value when invoking a function. call and apply invoke immediately, bind returns a new function.

---

### Q2. What's the difference between call and apply?
**Answer:** 
- **call:** Arguments passed comma-separated: `func.call(obj, a, b, c)`
- **apply:** Arguments passed as array: `func.apply(obj, [a, b, c])`

Both invoke the function immediately.

---

### Q3. What does bind return?
**Answer:** bind returns a **new function** with `this` permanently bound. It doesn't invoke the function immediately.

---

### Q4. When would you use bind over call/apply?
**Answer:** Use bind when:
- You want to call the function later
- You need a callback with fixed `this`
- You want to create specialized functions (partial application)

---

### Q5. What is method borrowing?
**Answer:** Method borrowing is using a method from one object on a different object using call, apply, or bind.
```javascript
person1.method.call(person2);
```

---

### Q6. Do arrow functions work with call/apply/bind?
**Answer:** **NO**. Arrow functions always use lexical `this` and ignore call, apply, and bind.

---

### Q7. What is partial application?
**Answer:** Pre-filling some arguments of a function using bind, creating a specialized version.
```javascript
const double = multiply.bind(null, 2);
double(5);  // 10
```

---

### Q8. Can you change `this` of a bound function?
**Answer:** **NO**. Once a function is bound, its `this` is permanent and cannot be changed, even with call/apply/bind.

---

## Summary
```
call, apply, bind:
- Explicitly set 'this' value
- Enable method borrowing
- Control function context

call():
✅ Invokes immediately
✅ Comma-separated arguments
✅ func.call(obj, a, b, c)

apply():
✅ Invokes immediately
✅ Array of arguments
✅ func.apply(obj, [a, b, c])

bind():
✅ Returns new function
✅ Doesn't invoke immediately
✅ Permanent 'this' binding
✅ Supports partial application
✅ func.bind(obj, a, b)

USE CASES:
- Method borrowing
- Event handlers
- Callbacks
- Partial application
- Context preservation

IMPORTANT:
❌ Arrow functions ignore these methods
✅ Use regular functions
✅ Modern alternative: spread operator
✅ bind creates permanent binding
```