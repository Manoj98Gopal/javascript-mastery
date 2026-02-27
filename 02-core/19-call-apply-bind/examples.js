// ============================================
// call, apply, and bind METHODS
// Complete Examples
// ============================================

// --------------------------------------------
// EXAMPLE 1: BASIC call() METHOD
// --------------------------------------------

console.log("=== EXAMPLE 1: Basic call() ===");

function introduce(city, age) {
  console.log(`I'm ${this.name} from ${city}, age ${age}`);
}

const person1 = { name: "Manoj" };
const person2 = { name: "Alice" };

introduce.call(person1, "Bangalore", 25);
// "I'm Manoj from Bangalore, age 25"

introduce.call(person2, "Mumbai", 30);
// "I'm Alice from Mumbai, age 30"

/*
call() syntax: function.call(thisArg, arg1, arg2, ...)
- Sets 'this' to specified object
- Invokes function immediately
- Arguments passed comma-separated
*/


// --------------------------------------------
// EXAMPLE 2: BASIC apply() METHOD
// --------------------------------------------

console.log("\n=== EXAMPLE 2: Basic apply() ===");

function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const user = { name: "Kumar" };

greet.apply(user, ["Hello", "!"]);
// "Hello, Kumar!"

greet.apply(user, ["Hi", "."]);
// "Hi, Kumar."

/*
apply() syntax: function.apply(thisArg, [args])
- Sets 'this' to specified object
- Invokes function immediately
- Arguments passed as array
*/


// --------------------------------------------
// EXAMPLE 3: BASIC bind() METHOD
// --------------------------------------------

console.log("\n=== EXAMPLE 3: Basic bind() ===");

function display(prefix) {
  console.log(`${prefix}: ${this.value}`);
}

const obj = { value: 100 };

const boundFunc = display.bind(obj);

boundFunc("Value");    // "Value: 100"
boundFunc("Number");   // "Number: 100"
boundFunc("Result");   // "Result: 100"

/*
bind() syntax: function.bind(thisArg, arg1, ...)
- Sets 'this' to specified object
- Returns NEW function (doesn't invoke)
- Can be called multiple times
*/


// --------------------------------------------
// EXAMPLE 4: call vs apply COMPARISON
// --------------------------------------------

console.log("\n=== EXAMPLE 4: call vs apply ===");

function sum(a, b, c) {
  console.log(`${this.name}: ${a + b + c}`);
}

const calculator = { name: "Calculator" };

// call - comma-separated
sum.call(calculator, 10, 20, 30);
// "Calculator: 60"

// apply - array
sum.apply(calculator, [10, 20, 30]);
// "Calculator: 60"

/*
Same result, different syntax:
- call: individual arguments
- apply: array of arguments
*/

// --------------------------------------------
// EXAMPLE 5: METHOD BORROWING
// --------------------------------------------

console.log("\n=== EXAMPLE 5: Method Borrowing ===");

const student1 = {
  name: "Manoj",
  marks: 85,
  display: function() {
    console.log(`${this.name}: ${this.marks} marks`);
  }
};

const student2 = {
  name: "Priya",
  marks: 92
};

// Borrow student1's display method for student2
student1.display.call(student2);
// "Priya: 92 marks"

/*
Method borrowing:
- Use methods from one object on another
- Very powerful feature
*/


// --------------------------------------------
// EXAMPLE 6: BORROWING ARRAY METHODS
// --------------------------------------------

console.log("\n=== EXAMPLE 6: Borrowing Array Methods ===");

function showArgs() {
  // 'arguments' is array-like, not real array
  console.log("arguments:", arguments);
  console.log("Is array?", Array.isArray(arguments));  // false
  
  // Borrow slice method to convert to array
  const argsArray = Array.prototype.slice.call(arguments);
  console.log("Converted:", argsArray);
  console.log("Is array?", Array.isArray(argsArray));  // true
  
  // Now can use array methods
  argsArray.forEach(arg => console.log("Arg:", arg));
}

showArgs(1, 2, 3, 4, 5);

/*
Converting arguments to array:
- arguments is array-like object
- Borrow Array.prototype.slice
- Get real array with array methods
*/


// --------------------------------------------
// EXAMPLE 7: Math.max WITH apply
// --------------------------------------------

console.log("\n=== EXAMPLE 7: Math.max with apply ===");

const numbers = [4,3,5,11,66,3,8]

// Math.max()  expect individual arguments
// console.log(Math.max(numbers))

// apply methods spreads array as individual arguments
const max = Math.max.apply(null,numbers)
console.log("max number :", max)

// Modern method spread operator
console.log("Modern method :",Math.max(...numbers))



// --------------------------------------------
// EXAMPLE 8: PARTIAL APPLICATION WITH bind
// --------------------------------------------

console.log("\n=== EXAMPLE 8: Partial Application ===");

function multiply(a, b) {
  return a * b;
}

// Pre-fill first argument
const double = multiply.bind(null, 2);
const triple = multiply.bind(null, 3);
const quadruple = multiply.bind(null, 4);

console.log("Double 5:", double(5));        // 10
console.log("Triple 5:", triple(5));        // 15
console.log("Quadruple 5:", quadruple(5));  // 20

/*
Partial application:
- Pre-fill some arguments
- Create specialized functions
- Very useful pattern
*/


// --------------------------------------------
// EXAMPLE 9: PARTIAL APPLICATION EXAMPLE 2
// --------------------------------------------

console.log("\n=== EXAMPLE 9: Partial Application - Greetings ===");

function greet(greeting, name) {
  console.log(`${greeting}, ${name}!`);
}

// Pre-fill greeting
const sayHello = greet.bind(null, "Hello");
const sayHi = greet.bind(null, "Hi");
const sayNamaste = greet.bind(null, "Namaste");

sayHello("Manoj");    // "Hello, Manoj!"
sayHi("Alice");       // "Hi, Alice!"
sayNamaste("Kumar");  // "Namaste, Kumar!"

/*
Specialized greeting functions:
- Same base function
- Different pre-filled values
- Clean and reusable
*/


// --------------------------------------------
// EXAMPLE 10: bind IN EVENT HANDLER (SIMULATED)
// --------------------------------------------

console.log("\n=== EXAMPLE 10: bind for Event Handlers ===");

class Counter {
  constructor(name) {
    this.name = name;
    this.count = 0;
  }
  
  increment() {
    this.count++;
    console.log(`${this.name}: ${this.count}`);
  }
}

const myCounter = new Counter("MyCounter");

// Simulate event listener
function simulateClick(callback) {
  callback();  // Call the callback
}

// ❌ Wrong - loses 'this'
// simulateClick(myCounter.increment);  // Error!

// ✅ Correct - bind preserves 'this'
simulateClick(myCounter.increment.bind(myCounter));
// "MyCounter: 1"

simulateClick(myCounter.increment.bind(myCounter));
// "MyCounter: 2"

/*
bind in callbacks:
- Preserves correct 'this' context
- Essential for event handlers
- Class methods as callbacks
*/


// --------------------------------------------
// EXAMPLE 11: ARROW FUNCTIONS IGNORE call/apply/bind
// --------------------------------------------

console.log("\n=== EXAMPLE 13: Arrow Functions ===");

const obj1 = { name: "Object" };

// Regular function
const regularFunc = function() {
  console.log("Regular:", this.name);
};

// Arrow function
const arrowFunc = () => {
  console.log("Arrow:", this);
};

regularFunc.call(obj1);  // "Regular: Object" (works!)
arrowFunc.call(obj1);    // Arrow: [global/window] (ignores!)

/*
IMPORTANT:
- Arrow functions IGNORE call/apply/bind
- Always use lexical 'this'
- Use regular functions for these methods
*/


// --------------------------------------------
// EXAMPLE 12: LOGGING UTILITY
// --------------------------------------------

console.log("\n=== EXAMPLE 14: Logging Utility ===");

function log(level, message) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] [${level}] ${this.name}: ${message}`);
}

const user1 = { name: "Admin" };
const user2 = { name: "User" };

log.call(user1, "INFO", "System started");
log.call(user2, "WARNING", "Low memory");
log.call(user1, "ERROR", "Database connection failed");

/*
Reusable logging:
- Same function
- Different contexts
- Clean and maintainable
*/


// --------------------------------------------
// EXAMPLE 13: CONVERTING NodeList TO ARRAY
// --------------------------------------------

console.log("\n=== EXAMPLE 15: NodeList to Array ===");

// Simulating NodeList (browser-specific)
const fakeNodeList = {
  0: "div",
  1: "span",
  2: "p",
  length: 3
};

// Convert to real array
const elementsArray = Array.prototype.slice.call(fakeNodeList);
console.log("Array:", elementsArray);
console.log("Is array?", Array.isArray(elementsArray));

/*
Converting array-like objects:
- NodeList, HTMLCollection, arguments
- Use Array.prototype.slice.call()
- Or modern: Array.from() or spread operator
*/


console.log("\n=== EXAMPLE 16: Function Currying ===");

function add(a, b, c) {
  return a + b + c;
}

// Curry with bind
const addFive = add.bind(null, 5);
const addFiveAndTen = addFive.bind(null, 10);

console.log("5 + 10 + 3:", addFiveAndTen(3));  // 18
console.log("5 + 7 + 2:", addFive(7, 2));      // 14

/*
Currying:
- Transform function with multiple args
- Into sequence of functions with single arg
- bind enables partial application
*/


// --------------------------------------------
// EXAMPLE 14: BIND WITH METHODS
// --------------------------------------------

console.log("\n=== EXAMPLE 17: Bind with Methods ===");

const calculator1 = {
  value: 0,
  add: function(n) {
    this.value += n;
    return this.value;
  },
  multiply: function(n) {
    this.value *= n;
    return this.value;
  }
};

// Create bound versions
const add = calculator1.add.bind(calculator1);
const multiply = calculator1.multiply.bind(calculator1);

console.log("Add 10:", add(10));       // 10
console.log("Multiply by 5:", multiply(5));  // 50
console.log("Add 20:", add(20));       // 70

/*
Bound methods:
- Extract methods safely
- Maintain correct 'this'
- Can be passed around as callbacks
*/


console.log("\n=== EXAMPLE 19: Real-World Timer ===");

class Timer {
  constructor(name) {
    this.name = name;
    this.seconds = 0;
  }
  
  tick() {
    this.seconds++;
    console.log(`${this.name}: ${this.seconds}s`);
  }
  
  start() {
    // bind preserves 'this' for setInterval callback
    setInterval(this.tick.bind(this), 1000);
  }
}

// const timer = new Timer("MyTimer");
// timer.start();  // Uncomment to see timer

/*
Real-world use:
- Callbacks need correct 'this'
- bind ensures context preserved
- Essential for async operations
*/


// --------------------------------------------
// EXAMPLE 15: COMPARISON OF ALL THREE
// --------------------------------------------

console.log("\n=== EXAMPLE 20: All Three Methods ===");

function introduce(city, age, country) {
  console.log(`${this.name}, ${age}, from ${city}, ${country}`);
}

const person3 = { name: "Manoj" };

// call - immediate, comma-separated
introduce.call(person3, "Bangalore", 25, "India");

// apply - immediate, array
introduce.apply(person3, ["Bangalore", 25, "India"]);

// bind - returns function
const boundIntroduce = introduce.bind(person3, "Bangalore");
boundIntroduce(25, "India");  // Call later

/*
SUMMARY:
call:   func.call(obj, a, b, c)     → Invokes immediately
apply:  func.apply(obj, [a, b, c])  → Invokes immediately
bind:   func.bind(obj, a, b)        → Returns function
*/

console.log("\n=== All call, apply, bind Examples Complete! ===");

