# Arrow Functions, Parameters & Arguments

## What are Arrow Functions?

Arrow functions are a **shorter syntax** for writing functions, introduced in **ES6 (2015)**. They use the `=>` (fat arrow) syntax.
```javascript
// Traditional function
const add = function(a, b) {
  return a + b;
};

// Arrow function
const add = (a, b) => {
  return a + b;
};

// Shorter arrow function (implicit return)
const add = (a, b) => a + b;
```

---

## Arrow Function Syntax

### Basic Syntax
```javascript
const functionName = (parameters) => {
  // code
  return value;
};
```

### Syntax Variations

#### 1. Multiple Parameters
```javascript
const add = (a, b) => {
  return a + b;
};
```

---

#### 2. Single Parameter (parentheses optional)
```javascript
const square = x => {
  return x * x;
};

// Or shorter
const square = x => x * x;
```

---

#### 3. No Parameters (parentheses required)
```javascript
const greet = () => {
  return "Hello!";
};

// Or shorter
const greet = () => "Hello!";
```

---

#### 4. Implicit Return (single expression)
```javascript
// If only one expression, you can omit braces and return
const add = (a, b) => a + b;
const square = x => x * x;
const getNumber = () => 42;
```

---

#### 5. Explicit Return (multiple statements)
```javascript
const calculate = (a, b) => {
  const sum = a + b;
  const product = a * b;
  return { sum, product };
};
```

---

#### 6. Returning Objects (wrap in parentheses)
```javascript
// ❌ Wrong - JavaScript thinks {} is a code block
const getUser = () => { name: "Manoj", age: 25 };

// ✅ Correct - wrap object in parentheses
const getUser = () => ({ name: "Manoj", age: 25 });
```

---

## Arrow Functions vs Regular Functions

| Feature | Regular Function | Arrow Function |
|---------|-----------------|----------------|
| **Syntax** | `function() {}` | `() => {}` |
| **`this` binding** | Has its own `this` | Inherits `this` from parent |
| **`arguments` object** | ✅ Has `arguments` | ❌ No `arguments` object |
| **Can be constructor** | ✅ Yes (can use `new`) | ❌ No (cannot use `new`) |
| **Hoisting** | ✅ Yes (if declaration) | ❌ No |
| **Implicit return** | ❌ No | ✅ Yes (single expression) |
| **Best for** | Methods, constructors | Callbacks, short functions |

---

## Key Differences Explained

### 1. `this` Keyword

**Regular Function** - `this` depends on how function is called:
```javascript
const obj = {
  name: "Manoj",
  greet: function() {
    console.log(this.name); // 'this' refers to obj
  }
};

obj.greet(); // "Manoj"
```

**Arrow Function** - `this` is inherited from parent scope:
```javascript
const obj = {
  name: "Manoj",
  greet: () => {
    console.log(this.name); // 'this' refers to parent scope (not obj)
  }
};

obj.greet(); // undefined (this is not obj)
```

**Important:** Arrow functions DON'T have their own `this`. They inherit it.

---

### 2. `arguments` Object

**Regular Function** - Has `arguments` object:
```javascript
function test() {
  console.log(arguments); // [1, 2, 3]
}

test(1, 2, 3);
```

**Arrow Function** - No `arguments` object:
```javascript
const test = () => {
  console.log(arguments); // ReferenceError: arguments is not defined
};

test(1, 2, 3);
```

**Solution:** Use rest parameters instead:
```javascript
const test = (...args) => {
  console.log(args); // [1, 2, 3]
};

test(1, 2, 3);
```

---

### 3. Constructor Usage

**Regular Function** - Can be used as constructor:
```javascript
function Person(name) {
  this.name = name;
}

const person = new Person("Manoj"); // Works
```

**Arrow Function** - CANNOT be used as constructor:
```javascript
const Person = (name) => {
  this.name = name;
};

const person = new Person("Manoj"); // TypeError: Person is not a constructor
```

---

## Parameters & Arguments

### What's the Difference?

**Parameters** = Variables in function definition  
**Arguments** = Actual values passed when calling
```javascript
const greet = (name, age) => {  // name, age are PARAMETERS
  console.log(`${name} is ${age} years old`);
};

greet("Manoj", 25);  // "Manoj", 25 are ARGUMENTS
```

---

## Types of Parameters

### 1. Default Parameters

Set default values if no argument is passed:
```javascript
const greet = (name = "Guest", greeting = "Hello") => {
  return `${greeting}, ${name}!`;
};

greet();                    // "Hello, Guest!"
greet("Manoj");            // "Hello, Manoj!"
greet("Manoj", "Hi");      // "Hi, Manoj!"
```

**Important:** Default parameters work with `undefined`, not `null`:
```javascript
greet(undefined, "Hi");  // "Hi, Guest!" (uses default)
greet(null, "Hi");       // "Hi, null" (doesn't use default)
```

---

### 2. Rest Parameters (`...`)

Collect remaining arguments into an array:
```javascript
const sum = (...numbers) => {
  return numbers.reduce((total, num) => total + num, 0);
};

sum(1, 2, 3);           // 6
sum(1, 2, 3, 4, 5);     // 15
```

**Rules:**
- Must be the **last parameter**
- Only **one rest parameter** allowed
- Creates a **real array** (not array-like)
```javascript
const example = (a, b, ...rest) => {
  console.log(a);      // First argument
  console.log(b);      // Second argument
  console.log(rest);   // Array of remaining arguments
};

example(1, 2, 3, 4, 5);
// a = 1
// b = 2
// rest = [3, 4, 5]
```

---

### 3. Destructuring Parameters

Extract values from objects or arrays in parameters:

**Object Destructuring:**
```javascript
const greetUser = ({ name, age }) => {
  return `${name} is ${age} years old`;
};

const user = { name: "Manoj", age: 25 };
greetUser(user);  // "Manoj is 25 years old"
```

**With Default Values:**
```javascript
const greetUser = ({ name = "Guest", age = 18 } = {}) => {
  return `${name} is ${age} years old`;
};

greetUser();                           // "Guest is 18 years old"
greetUser({ name: "Manoj" });         // "Manoj is 18 years old"
greetUser({ name: "Manoj", age: 25 }); // "Manoj is 25 years old"
```

**Array Destructuring:**
```javascript
const getFirst = ([first, second]) => {
  return { first, second };
};

getFirst([1, 2, 3, 4]);  // { first: 1, second: 2 }
```

---

## When to Use Arrow Functions

### ✅ Good Use Cases

1. **Callbacks**
```javascript
// Array methods
[1, 2, 3].map(num => num * 2);

// Event handlers (be careful with 'this')
setTimeout(() => console.log("Done"), 1000);
```

2. **Short, simple functions**
```javascript
const double = x => x * 2;
const isEven = num => num % 2 === 0;
```

3. **Functional programming**
```javascript
const numbers = [1, 2, 3, 4, 5];
numbers
  .filter(num => num > 2)
  .map(num => num * 2)
  .reduce((sum, num) => sum + num, 0);
```

4. **When you want to inherit `this`**
```javascript
class Counter {
  constructor() {
    this.count = 0;
    
    // Arrow function inherits 'this' from Counter
    setInterval(() => {
      this.count++;
      console.log(this.count);
    }, 1000);
  }
}
```

---

### ❌ Avoid Arrow Functions For

1. **Object methods** (if you need `this`)
```javascript
// ❌ Bad
const obj = {
  name: "Manoj",
  greet: () => {
    console.log(this.name); // undefined (this is not obj)
  }
};

// ✅ Good
const obj = {
  name: "Manoj",
  greet() {
    console.log(this.name); // "Manoj"
  }
};
```

2. **When you need `arguments` object**
```javascript
// ❌ Bad
const test = () => {
  console.log(arguments); // Error
};

// ✅ Good - use rest parameters
const test = (...args) => {
  console.log(args);
};
```

3. **Constructors**
```javascript
// ❌ Bad
const Person = (name) => {
  this.name = name;
};
new Person("Manoj"); // Error

// ✅ Good
function Person(name) {
  this.name = name;
}
new Person("Manoj"); // Works
```

---

## Common Patterns

### 1. Returning Objects (Don't Forget Parentheses!)
```javascript
// ❌ Wrong
const getUser = () => { name: "Manoj" }; // Returns undefined

// ✅ Correct
const getUser = () => ({ name: "Manoj" });
```

---

### 2. Multiple Statements
```javascript
const calculate = (a, b) => {
  const sum = a + b;
  const product = a * b;
  console.log("Calculating...");
  return { sum, product };
};
```

---

### 3. Conditional Return
```javascript
const getDiscount = (price) => {
  if (price > 1000) return price * 0.2;
  if (price > 500) return price * 0.1;
  return 0;
};

// Or using ternary
const getDiscount = (price) => 
  price > 1000 ? price * 0.2 :
  price > 500 ? price * 0.1 : 0;
```

---

### 4. Higher-Order Functions
```javascript
const multiplyBy = (multiplier) => (number) => number * multiplier;

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15
```

---

## Best Practices

✅ **Use arrow functions for:**
- Callbacks
- Array methods (map, filter, reduce)
- Short utility functions
- When you want lexical `this`

✅ **Use regular functions for:**
- Object methods
- Constructors
- When you need `arguments` object
- When you need dynamic `this`

✅ **Be consistent** - Choose one style for similar functions

✅ **Keep it readable** - If arrow function gets too long, use regular function

---

## Common Mistakes

### ❌ Mistake 1: Forgetting parentheses for objects
```javascript
const getUser = () => { name: "Manoj" }; // Returns undefined
const getUser = () => ({ name: "Manoj" }); // ✅ Correct
```

---

### ❌ Mistake 2: Using arrow functions as methods
```javascript
const obj = {
  name: "Manoj",
  greet: () => console.log(this.name) // 'this' is not obj
};
```

---

### ❌ Mistake 3: Forgetting parentheses with no parameters
```javascript
const greet = => "Hello"; // ❌ Syntax error
const greet = () => "Hello"; // ✅ Correct
```

---

### ❌ Mistake 4: Confusing implicit return
```javascript
const test = () => {
  1 + 1  // Returns undefined (needs explicit return)
};

const test = () => 1 + 1; // ✅ Returns 2 (implicit return)
```

---

## Interview Key Points

1. **What are arrow functions?**
   - Shorter syntax for functions using `=>`
   - Introduced in ES6
   - Doesn't have own `this`, `arguments`, or `super`

2. **Main differences from regular functions?**
   - Lexical `this` (inherits from parent)
   - No `arguments` object
   - Cannot be used as constructor
   - Implicit return for single expressions

3. **When to use arrow functions?**
   - Callbacks, array methods, short functions
   - When you want to inherit `this`

4. **When NOT to use arrow functions?**
   - Object methods (if you need `this`)
   - Constructors
   - When you need `arguments` object

5. **What are rest parameters?**
   - Collect remaining arguments into array using `...`
   - Must be last parameter
   - Creates real array

6. **Default parameters vs undefined?**
   - Default used when argument is `undefined`
   - NOT used when argument is `null`

7. **How to return object from arrow function?**
   - Wrap in parentheses: `() => ({ key: value })`