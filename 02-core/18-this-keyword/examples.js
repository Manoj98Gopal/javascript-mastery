// ============================================
// THE 'this' KEYWORD IN JAVASCRIPT
// Complete Examples (WITHOUT call/apply/bind)
// ============================================

// --------------------------------------------
// EXAMPLE 1: GLOBAL CONTEXT
// --------------------------------------------

console.log("=== EXAMPLE 1: Global Context ===");

console.log("Global 'this':", this); // Window (browser) / global (Node.js)

// In browser, global variables become properties of window
var globalVar = "I'm global";
console.log(window.globalVar); // "I'm global" (browser only)

/*
Global 'this' refers to:
- Browser: window object
- Node.js: global object
*/

// --------------------------------------------
// EXAMPLE 2: REGULAR FUNCTION (NON-STRICT)
// --------------------------------------------

console.log("\n=== EXAMPLE 2: Regular Function (Non-Strict) ===");

function regularFunction() {
  console.log("'this' in regular function:", this);
}

regularFunction(); // Window (browser)

/*
In non-strict mode:
- Regular function 'this' = global object
*/

// --------------------------------------------
// EXAMPLE 3: REGULAR FUNCTION (STRICT MODE)
// --------------------------------------------

console.log("\n=== EXAMPLE 3: Regular Function (Strict Mode) ===");

("use strict");

function strictFunction() {
  console.log("'this' in strict mode:", this);
}

strictFunction(); // undefined

/*
In strict mode:
- Regular function 'this' = undefined
- Prevents accidental global access
*/

// --------------------------------------------
// EXAMPLE 4: EXPLICIT WINDOW CALL
// --------------------------------------------

console.log("\n=== EXAMPLE 4: Explicit Window Call ===");

("use strict");

function test() {
  console.log("'this' with window.test():", this);
}

window.test(); // Window (even in strict mode)

/*
When explicitly called on window:
- 'this' is window object
- Even in strict mode
*/

// --------------------------------------------
// EXAMPLE 5: OBJECT METHOD
// --------------------------------------------

console.log("\n=== EXAMPLE 5: Object Method ===");

const person = {
  name: "Manoj",
  age: 25,
  greet: function () {
    console.log(`Hello, I'm ${this.name}!`);
    console.log("'this' in method:", this);
  }
};

person.greet();
// "Hello, I'm Manoj!"
// 'this' is person object

/*
In object methods:
- 'this' = object before the dot
- person.greet() → 'this' is person
*/

// --------------------------------------------
// EXAMPLE 6: OBJECT METHOD SHORTHAND
// --------------------------------------------

console.log("\n=== EXAMPLE 6: Object Method Shorthand ===");

const user = {
  name: "Alice",
  greet() {
    // Shorthand method syntax
    console.log(`Hi, I'm ${this.name}!`);
  }
};

user.greet(); // "Hi, I'm Alice!"

/*
Method shorthand works same as regular method
'this' = object
*/

// --------------------------------------------
// EXAMPLE 7: LOST CONTEXT
// --------------------------------------------

console.log("\n=== EXAMPLE 7: Lost Context ===");

const student = {
  name: "Kumar",
  greet() {
    console.log(`Hello, ${this.name}!`);
  }
};

const greetFunc = student.greet;
greetFunc(); // Error or undefined (lost context!)

/*
When method is extracted:
- Loses connection to object
- 'this' becomes global/undefined
- Common mistake!
*/

// --------------------------------------------
// EXAMPLE 8: CONSTRUCTOR FUNCTION
// --------------------------------------------

console.log("\n=== EXAMPLE 8: Constructor Function ===");

function Person(name, age) {
  // this is the new empty object
  this.name = name;
  this.age = age;

  this.greet = function () {
    console.log(`Hi,I'm ${this.name}, ${this.age} years old.`);
  };
}

const person1 = new Person("Manoj", 25);
const person2 = new Person("Ravi", 48);

person1.greet();
person2.greet();

console.log("person1 name :", person1.name);

/*
With 'new' keyword:
1. Creates new empty object
2. Sets 'this' to that object
3. Executes constructor
4. Returns object
*/

// --------------------------------------------
// EXAMPLE 9: ARROW FUNCTION IN GLOBAL
// --------------------------------------------

console.log("\n=== EXAMPLE 9: Arrow Function in Global ===");

const arrowGlobal = () => {
  console.log("Arrow function 'this':", this);
};

arrowGlobal(); // Window (inherits from global)

/*
Arrow function in global:
- Inherits 'this' from global scope
- 'this' = window/global
*/

// --------------------------------------------
// EXAMPLE 10: ARROW FUNCTION IN OBJECT
// --------------------------------------------

console.log("\n=== EXAMPLE 10: Arrow Function as Method ===");

const obj = {
  name: "Object",
  regularMethod: function () {
    console.log("Regular method 'this':", this.name);
  },
  arrowMethod: () => {
    console.log("Arrow method 'this':", this.name);
  }
};

obj.regularMethod(); // "Object" (this = obj)
obj.arrowMethod(); // undefined (this = global, not obj)

/*
Arrow function as object method:
❌ DON'T use - doesn't work as expected
- 'this' is NOT the object
- 'this' is from parent scope (global)
*/

// --------------------------------------------
// EXAMPLE 11: NESTED ARROW FUNCTION
// --------------------------------------------

console.log("\n=== EXAMPLE 11: Nested Arrow Function ===");

const nestedObj = {
  name: "Nested Object",
  method: function () {
    console.log("Method 'this':", this.name);

    const arrow = () => {
      console.log("Nested arrow 'this':", this.name);
    };

    arrow();
  }
};

nestedObj.method();
// Method 'this': "Nested Object"
// Nested arrow 'this': "Nested Object"

/*
Arrow function inside method:
✅ Inherits 'this' from method
- Useful for preserving context
*/

// --------------------------------------------
// EXAMPLE 12: ARROW FUNCTION IN CALLBACK
// --------------------------------------------

console.log("\n=== EXAMPLE 12: Arrow Function in Callback ===");

const counter = {
  count: 0,
  start: function () {
    setInterval(() => {
      this.count++;
      console.log("Count:", this.count);
    }, 1000);
  }
};

// counter.start()
/*
Arrow function in callback:
✅ Perfect use case
- Preserves 'this' from outer scope
- Avoids lost context problem
*/

// --------------------------------------------
// EXAMPLE 13: REGULAR FUNCTION IN CALLBACK
// --------------------------------------------

console.log("\n=== EXAMPLE 13: Regular Function in Callback (Problem) ===");

const badCounter = {
  count: 0,
  start: function () {
    // ❌ Regular function loses 'this'
    setInterval(function () {
      // this.count++;  // Error! 'this' is not badCounter
      console.log("'this' in callback:", this); // global/undefined
    }, 1000);
  }
};

// badCounter.start();  // Uncomment to see problem

/*
Regular function in callback:
❌ Loses 'this' context
- 'this' becomes global/undefined
- Common mistake!
*/

console.log("\n=== EXAMPLE 14: Event Handler (Regular) ===");

// Simulating event handler
const button = {
  id: "myButton",
  addEventListener: function (event, callback) {
    callback.call(this); // Simulating browser behavior
  }
};

button.addEventListener("click", function () {
  console.log("Button 'this':", this.id); // "myButton"
});

/*
Event handler with regular function:
- 'this' = element that triggered event
- Browser sets 'this' to element
*/

// --------------------------------------------
// EXAMPLE 15: EVENT HANDLER (ARROW FUNCTION)
// --------------------------------------------

console.log("\n=== EXAMPLE 15: Event Handler (Arrow) ===");

const buttonArrow = {
  id: "myButton",
  addEventListener: function (event, callback) {
    callback.call(this);
  }
};

buttonArrow.addEventListener("click", () => {
  console.log("Arrow button 'this':", this); // Not button! (global)
});

/*
Event handler with arrow function:
❌ 'this' is NOT the element
- 'this' is from outer scope
- Use regular function if you need element
*/

// --------------------------------------------
// EXAMPLE 16: ES6 CLASS
// --------------------------------------------

console.log("\n=== EXAMPLE 16: ES6 Class ===");

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

const dog = new Animal("Dog");
const cat = new Animal("Cat");

dog.speak();
cat.speak();

/*
In classes:
- 'this' = instance of the class
- Similar to constructor functions
*/

console.log("\n=== EXAMPLE 17: Class Arrow Method ===");

class Counter {
  count = 0;

  // arrow function is class property
  increment = () => {
    this.count++;
    console.log("count :", this.count);
  };
}

const myCounter = new Counter();

myCounter.increment();
myCounter.increment();

const tempCount = myCounter.increment;
tempCount(); //3

/*
Arrow function as class property:
✅ 'this' permanently bound to instance
- Useful for callbacks and event handlers
- Can safely extract method
*/

// --------------------------------------------
// EXAMPLE 18: NESTED OBJECT
// --------------------------------------------

console.log("\n=== EXAMPLE 18: Nested Object ===");

const outer = {
  name: "Outer",
  inner: {
    name: "Inner",
    greet: function () {
      console.log("Inner 'this':", this.name);
    }
  }
};

outer.inner.greet(); // "Inner" (this = inner object, not outer)

/*
Nested objects:
- 'this' = immediate parent object
- Not the outermost object
*/

// --------------------------------------------
// EXAMPLE 19: MULTIPLE LEVELS
// --------------------------------------------

console.log("\n=== EXAMPLE 19: Multiple Levels ===");

const obj1 = {
  value: 10,
  method1: function () {
    console.log("Level 1 'this':", this.value); // 10

    const obj2 = {
      value: 20,
      method2: function () {
        console.log("Level 2 'this':", this.value); // 20
      }
    };

    obj2.method2();
  }
};

obj1.method1();

/*
Each method call sets its own 'this'
- 'this' = object calling the method
*/

// --------------------------------------------
// EXAMPLE 20: STORING 'this' (OLD WAY)
// --------------------------------------------

console.log("\n=== EXAMPLE 20: Storing 'this' (Old Pattern) ===");

const oldWay = {
  name: "Old Way",
  method: function () {
    const self = this; // Store reference

    function inner() {
      console.log("Using 'self':", self.name);
    }

    inner();
  }
};

oldWay.method(); // "Old Way"

/*
Old pattern before arrow functions:
- Store 'this' in variable (self, that, _this)
- Use stored reference in nested functions
- Now we use arrow functions instead
*/

// --------------------------------------------
// EXAMPLE 21: COMPARING ALL CONTEXTS
// --------------------------------------------

console.log("\n=== EXAMPLE 21: All Contexts Together ===");

const allContexts = {
  name: "AllContexts",

  regularMethod: function () {
    console.log("\n1. Regular method:", this.name);

    function nested() {
      console.log("2. Nested regular function:", this); // undefined/global
    }

    const arrow = () => {
      console.log("3. Nested arrow function:", this.name);
    };

    nested();
    arrow();
  },

  arrowMethod: () => {
    console.log("4. Arrow method:", this.name); // undefined
  }
};

allContexts.regularMethod();
allContexts.arrowMethod();

/*
Summary:
1. Regular method: 'this' = object
2. Nested regular function: 'this' = global/undefined
3. Nested arrow function: 'this' = inherited from method
4. Arrow method: 'this' = global (not object)
*/

// --------------------------------------------
// EXAMPLE 22: REAL-WORLD EXAMPLE - TIMER
// --------------------------------------------

console.log("\n=== EXAMPLE 22: Real-World - Timer Class ===");

class Timer {
  constructor() {
    this.seconds = 0;
  }

  start() {
    // ✅ Arrow function preserves 'this'
    setInterval(() => {
      this.seconds++;
      console.log(`Timer: ${this.seconds} seconds`);
    }, 1000);
  }
}

// const timer = new Timer();
// timer.start();  // Uncomment to see timer

/*
Real-world use:
- Arrow function in setInterval
- Preserves 'this' = Timer instance
- Common pattern in classes
*/
