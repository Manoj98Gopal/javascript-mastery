// ============================================
// FUNCTION DECLARATION VS EXPRESSION
// Complete Examples
// ============================================

// --------------------------------------------
// 1. FUNCTION DECLARATION - Basic
// --------------------------------------------

function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Manoj")); // Output: Hello, Manoj!

// --------------------------------------------
// 2. FUNCTION EXPRESSION - Basic
// --------------------------------------------

const greetExpression = function (name) {
  return `Hi, ${name}!`;
};

console.log(greetExpression("Alice")); // Output: Hi, Alice!

// --------------------------------------------
// 3. HOISTING - Function Declaration
// --------------------------------------------

// ✅ This WORKS - Declaration is hoisted
console.log(add(5, 3)); // Output: 8

function add(a, b) {
  return a + b;
}

// --------------------------------------------
// 4. HOISTING - Function Expression (const/let)
// --------------------------------------------

// ❌ This FAILS - Expression is NOT hoisted
// console.log(subtract(10, 3)); // ReferenceError: Cannot access 'subtract' before initialization

const subtract = function (a, b) {
  return a - b;
};

console.log(subtract(10, 3)); // Output: 7 (works after definition)

// --------------------------------------------
// 5. HOISTING - Function Expression (var)
// --------------------------------------------

// ❌ This also FAILS but with different error
console.log(typeof multiply); // Output: undefined (variable is hoisted)
// console.log(multiply(2, 3)); // TypeError: multiply is not a function

var multiply = function (a, b) {
  return a * b;
};

console.log(multiply(2, 3)); // Output: 6 (works after assignment)

// --------------------------------------------
// 6. ANONYMOUS FUNCTION EXPRESSION
// --------------------------------------------

const divide = function (a, b) {
  // No name after 'function' keyword
  return a / b;
};

console.log(divide(10, 2)); // Output: 5

// --------------------------------------------
// 7. NAMED FUNCTION EXPRESSION
// --------------------------------------------

const calculate = function calculator(a, b) {
  // 'calculator' is the function name
  return a + b;
};

console.log(calculate(5, 3)); // Output: 8
// console.log(calculator(5, 3)); // Error: calculator is not defined

// The name is only available inside the function (useful for recursion)

// --------------------------------------------
// 8. NAMED FUNCTION EXPRESSION - Recursion Example
// --------------------------------------------

const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1); // Can use 'fact' inside
};

console.log(factorial(5)); // Output: 120
// console.log(fact(5)); // Error: fact is not defined outside

// --------------------------------------------
// 9. FUNCTION EXPRESSION AS CALLBACK
// --------------------------------------------

// Anonymous function as callback
setTimeout(function () {
  console.log("This runs after 1 second");
}, 1000);

// Array method with function expression
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(function (num) {
  return num * 2;
});

console.log(doubled); // Output: [2, 4, 6, 8, 10]

// --------------------------------------------
// 10. CONDITIONAL FUNCTION CREATION
// --------------------------------------------

let userRole = "admin";
let greetUser;

if (userRole === "admin") {
  greetUser = function (name) {
    return `Welcome Admin ${name}!`;
  };
} else {
  greetUser = function (name) {
    return `Welcome ${name}!`;
  };
}

console.log(greetUser("Manoj")); // Output: Welcome Admin Manoj!

// --------------------------------------------
// 11. IIFE - Immediately Invoked Function Expression
// --------------------------------------------

// MUST be a function expression, not declaration
(function () {
  console.log("I run immediately!");
})();

// IIFE with parameters
(function (name) {
  console.log(`Hello, ${name}!`);
})("Manoj");

// IIFE with return value
const result = (function (a, b) {
  return a + b;
})(5, 3);

console.log(result); // Output: 8

// --------------------------------------------
// 12. STORING FUNCTIONS IN OBJECTS
// --------------------------------------------

const calculator = {
  // Function expression as object method
  add: function (a, b) {
    return a + b;
  },

  subtract: function (a, b) {
    return a - b;
  },
};

console.log(calculator.add(10, 5)); // Output: 15
console.log(calculator.subtract(10, 5)); // Output: 5

// --------------------------------------------
// 13. STORING FUNCTIONS IN ARRAYS
// --------------------------------------------

const operations = [
  function (a, b) {
    return a + b;
  },
  function (a, b) {
    return a - b;
  },
  function (a, b) {
    return a * b;
  },
];

console.log(operations[0](5, 3)); // Output: 8 (addition)
console.log(operations[1](5, 3)); // Output: 2 (subtraction)
console.log(operations[2](5, 3)); // Output: 15 (multiplication)

// --------------------------------------------
// 14. FUNCTION DECLARATION IN BLOCK - Avoid This!
// --------------------------------------------

if (true) {
  // ⚠️ Not recommended - behavior can be unpredictable
  function blockFunc() {
    return "In block";
  }
}

// May or may not work depending on JavaScript engine
console.log(typeof blockFunc); // Varies by environment

// Better approach - use function expression
if (true) {
  var betterBlockFunc = function () {
    return "Better approach";
  };
}

console.log(betterBlockFunc()); // Works reliably

// --------------------------------------------
// 15. REAL-WORLD EXAMPLE - Event Handlers
// --------------------------------------------

// Simulating button click handler
const button = {
  addEventListener: function (event, callback) {
    console.log(`Event '${event}' registered`);
    callback(); // Simulate click
  },
};

// Function expression as event handler
button.addEventListener("click", function () {
  console.log("Button was clicked!");
});

// --------------------------------------------
// 16. REAL-WORLD EXAMPLE - API Callbacks
// --------------------------------------------

// Simulating API call
function fetchData(successCallback, errorCallback) {
  const success = true; // Simulate success

  if (success) {
    successCallback({ name: "Manoj", age: 25 });
  } else {
    errorCallback("Failed to fetch data");
  }
}

// Using function expressions as callbacks
fetchData(
  function (data) {
    // Success callback
    console.log("Data received:", data);
  },
  function (error) {
    // Error callback
    console.log("Error:", error);
  }
);

// --------------------------------------------
// 17. FUNCTION RETURNING FUNCTION (Expression)
// --------------------------------------------

const createMultiplier = function (multiplier) {
  return function (number) {
    return number * multiplier;
  };
};

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15

// --------------------------------------------
// 18. COMPARING BOTH SIDE BY SIDE
// --------------------------------------------

// Declaration
function declarationFunc() {
  return "I'm a declaration";
}

// Expression
const expressionFunc = function () {
  return "I'm an expression";
};

console.log(declarationFunc()); // Output: I'm a declaration
console.log(expressionFunc()); // Output: I'm an expression

// --------------------------------------------
// 19. TEMPORAL DEAD ZONE (TDZ) Demo
// --------------------------------------------

console.log("Before TDZ");

// This area is TDZ for 'myFunc'
// console.log(myFunc); // ReferenceError

const myFunc = function () {
  return "TDZ ended";
};

console.log(myFunc()); // Now it works

// --------------------------------------------
// 20. PRACTICAL EXAMPLE - Dynamic Function Selection
// --------------------------------------------

function getOperation(operationType) {
  if (operationType === "add") {
    return function (a, b) {
      return a + b;
    };
  } else if (operationType === "multiply") {
    return function (a, b) {
      return a * b;
    };
  }
}

const addOperation = getOperation("add");
const multiplyOperation = getOperation("multiply");

console.log(addOperation(5, 3)); // Output: 8
console.log(multiplyOperation(5, 3)); // Output: 15

// --------------------------------------------
// 21. COMMON MISTAKE - Calling Before Definition
// --------------------------------------------

// ❌ WRONG - This will fail
// console.log(wrongFunc()); // ReferenceError

const wrongFunc = function () {
  return "Defined too late!";
};

console.log(wrongFunc()); // ✅ CORRECT - Call after definition

// --------------------------------------------
// 22. USE CASE - Private Variables (Closure)
// --------------------------------------------

const counter = (function () {
  let count = 0; // Private variable

  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
    getCount: function () {
      return count;
    },
  };
})();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount()); // 2
console.log(counter.decrement()); // 1
// console.log(count); // Error: count is private