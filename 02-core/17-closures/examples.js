// ============================================
// CLOSURES IN JAVASCRIPT
// Complete Examples
// ============================================

// --------------------------------------------
// EXAMPLE 1: BASIC CLOSURE
// --------------------------------------------

console.log("=== EXAMPLE 1: Basic Closure ===");

function outer() {
  let message = "Hello from outer!";

  function inner() {
    console.log(message); // Accesses outer's variable
  }

  return inner;
}

const myFunction = outer();
// outer() has finished executing
// But inner() still has access to 'message'

myFunction(); // "Hello from outer!"

/*
CLOSURE:
inner function + reference to outer's Lexical Environment

Even though outer() completed, inner() retains access to 'message'
*/

// --------------------------------------------
// EXAMPLE 2: CLOSURE WITH PARAMETER
// --------------------------------------------

console.log("\n=== EXAMPLE 2: Closure with Parameter ===");

function makeGreeter(greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}!`);
  };
}

const sayHello = makeGreeter("Hello");
const sayHi = makeGreeter("Hi");
const sayNamaste = makeGreeter("Namaste");

sayHello("Manoj"); // "Hello, Manoj!"
sayHi("Alice"); // "Hi, Alice!"
sayNamaste("Kumar"); // "Namaste, Kumar!"

/*
Each function has its own closure with different 'greeting' value:
- sayHello closes over greeting = "Hello"
- sayHi closes over greeting = "Hi"
- sayNamaste closes over greeting = "Namaste"
*/

function createCounter1() {
  let count = 0; // Private variable

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

const counter = createCounter1();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.increment()); // 3
console.log(counter.decrement()); // 2
console.log(counter.getCount()); // 2
console.log(counter.count); // undefined (private!)

/*
'count' is private - cannot be accessed directly
Can only be modified through increment/decrement methods
This is DATA ENCAPSULATION using closures
*/

// --------------------------------------------
// EXAMPLE 4: FUNCTION FACTORY
// --------------------------------------------

console.log("\n=== EXAMPLE 4: Function Factory ===");

function multiplyBy(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);
const quadruple = multiplyBy(4);

console.log(double(5)); // 10
console.log(triple(5)); // 15
console.log(quadruple(5)); // 20

/*
Function factory creates specialized functions
Each has its own 'multiplier' value in closure
*/

// --------------------------------------------
// EXAMPLE 5: MULTIPLE INDEPENDENT CLOSURES
// --------------------------------------------

console.log("\n=== EXAMPLE 5: Multiple Independent Closures ===");

function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 1 (separate closure!)
console.log(counter1()); // 3
console.log(counter2()); // 2

/*
counter1 and counter2 have SEPARATE closures
They don't share the 'count' variable
Each has its own independent state
*/

// --------------------------------------------
// EXAMPLE 6: CLOSURE IN CALLBACK
// --------------------------------------------

console.log("\n=== EXAMPLE 6: Closure in Callback ===");

function setupTimer(message, delay) {
  setTimeout(function () {
    console.log(message); // Closure over 'message'
  }, delay);
}

setupTimer("Message 1 after 100ms", 100);
setupTimer("Message 2 after 200ms", 200);

/*
Callback function closes over 'message' parameter
Even though setupTimer completes immediately,
callback still has access to 'message' when it runs
*/

// --------------------------------------------
// EXAMPLE 7: CLOSURE-IN-LOOP PROBLEM (var)
// --------------------------------------------

console.log("\n=== EXAMPLE 7: Closure-in-Loop Problem ===");

console.log("With var (WRONG):");
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log("i =", i); // 3, 3, 3 (all print 3!)
  }, 300);
}

/*
PROBLEM:
- var is function scoped (only one 'i')
- All callbacks share the same 'i'
- By the time callbacks run, loop finished and i = 3
*/

// --------------------------------------------
// EXAMPLE 8: CLOSURE-IN-LOOP SOLUTION (let)
// --------------------------------------------

console.log("\n=== EXAMPLE 8: Solution with let ===");

setTimeout(() => {
  console.log("With let (CORRECT):");
  for (let j = 0; j < 3; j++) {
    setTimeout(function () {
      console.log("j =", j); // 0, 1, 2 (correct!)
    }, 100);
  }
}, 500);

/*
SOLUTION:
- let is block scoped
- Each iteration creates NEW 'j'
- Each callback closes over its own 'j'
*/

// --------------------------------------------
// EXAMPLE 9: CLOSURE-IN-LOOP SOLUTION (IIFE)
// --------------------------------------------

console.log("\n=== EXAMPLE 9: Solution with IIFE ===");

setTimeout(() => {
  console.log("With IIFE:");
  for (var k = 0; k < 3; k++) {
    (function (index) {
      setTimeout(function () {
        console.log("index =", index); // 0, 1, 2
      }, 100);
    })(k);
  }
}, 700);

/*
SOLUTION:
- IIFE creates new scope for each iteration
- Each callback closes over its own 'index'
*/

console.log("\n=== EXAMPLE 10: Module Pattern ===");

const calculate = (function () {
  // private variable
  let result = 0;

  // private function
  function log(operation, values) {
    console.log(`${operation}: ${values}, Result: ${result}`);
  }

  // public methods
  return {
    add(num) {
      result += num;
      log("addition", num);
      return this;
    },

    subtract(num) {
      result -= num;
      log("subtract", num);
      return this;
    },

    multiply(num) {
      result *= num;
      log("multiply", num);
      return this;
    },

    getResult() {
      return result;
    },

    reSet() {
      result = 0;
      console.log("reset to 0");
      return this;
    }
  };
})();

calculate.add(5);
calculate.multiply(5);

console.log("get result:", calculate.getResult());

calculate.reSet();
console.log("result :", calculate.getResult());

/*
Module pattern using IIFE + closure
- result and log are private
- Only public methods are exposed
- Method chaining supported (return this)
*/

console.log("\n=== EXAMPLE 11: Maintaining State ===");

function createPlayer(name) {
  let score = 0;
  let level = 1;

  return {
    getName() {
      return name;
    },
    addScore(num) {
      score += num;
      if (score >= level * 100) {
        level++;
        console.log(`${name} leveled up to ${level}!`);
      }
    },
    getScore() {
      return score;
    },
    getLevel() {
      return level;
    },
    getInfo() {
      return `${name} - Level ${level}, Score: ${score}`;
    }
  };
}

const player1 = createPlayer("Manoj");
const player2 = createPlayer("Ramesh");

console.log("player 1 name :", player1.getName());
console.log("player 2 name :", player2.getName());

player1.addScore(4);
player2.addScore(5);

console.log("Manoj score is :", player1.getScore());
console.log("Ramesh score is :", player2.getScore());
player2.addScore(5);

console.log(player1.getInfo());
console.log(player2.getInfo());

/*
Each player has independent state (separate closures)
Private variables: score, level
Public methods to interact with state
*/


// --------------------------------------------
// EXAMPLE 12: SHARED CLOSURE
// --------------------------------------------

console.log("\n=== EXAMPLE 12: Shared Closure ===");


function createSharedCounter(){

    let count = 0

    function increment(){
        count ++;
        return count
    }

    function decrement(){
        count --;
        return count
    }

    function getCount(){
        return count
    }

    return {increment,decrement,getCount}
}

const sharedCount = createSharedCounter()

console.log("increment :",sharedCount.increment())
console.log("increment :",sharedCount.increment())
console.log("get count :",sharedCount.getCount())
console.log("decrement :",sharedCount.decrement())
console.log("get count :",sharedCount.getCount())

/*
All three functions share the same closure
They access and modify the SAME 'count' variable
Changes in one function affect others
*/


console.log("\n=== EXAMPLE 13: Closure with Class ===");

class Counter {
  constructor() {
    let count = 0; // Private variable using closure

    this.increment = function () {
      count++;
      return count;
    };

    this.decrement = function () {
      count--;
      return count;
    };

    this.getCount = function () {
      return count;
    };
  }
}

const classCounter = new Counter();
console.log(classCounter.increment()); // 1
console.log(classCounter.increment()); // 2
console.log(classCounter.getCount()); // 2
console.log(classCounter.count); // undefined (private)

/*
Closure can be used inside classes
Methods defined in constructor close over local variables
Creates truly private variables
*/


console.log("\n=== EXAMPLE 14: Memoization (Caching) ===");

function memoize(func){
    const cache = {}

    return function(...args){

        const key = JSON.stringify(args)

        if(key in cache){
            console.log("return from the cache :", key)
            return cache[key]
        }

        console.log("calculating:", key)
        const result = func(...args)
        cache[key] = result;
        return result
    }
}


function slowAdd(a,b){
    return a + b
}

const fastAdd = memoize(slowAdd)

console.log(fastAdd(5, 3)); // Calculating: [5,3], returns 8
console.log(fastAdd(5, 3)); // Returning from cache: [5,3], returns 8
console.log(fastAdd(10, 20)); // Calculating: [10,20], returns 30
console.log(fastAdd(10, 20)); // Returning from cache: [10,20], returns 30

/*
Closure maintains cache object
Results cached for repeated calls with same arguments
Performance optimization technique
*/


// --------------------------------------------
// EXAMPLE 15: REAL-WORLD - API CLIENT
// --------------------------------------------

console.log("\n=== EXAMPLE 15: Real-World - API Client ===");

function createAPIClient(baseURL, apiKey) {
  // Private configuration
  let requestCount = 0;

  // Private helper
  function log(method, endpoint) {
    requestCount++;
    console.log(`[Request #${requestCount}] ${method} ${baseURL}${endpoint}`);
  }

  // Public methods
  return {
    get(endpoint) {
      log("GET", endpoint);
      // Simulate API call
      return `Response from GET ${baseURL}${endpoint}`;
    },
    post(endpoint, data) {
      log("POST", endpoint);
      return `Response from POST ${baseURL}${endpoint}`;
    },
    getRequestCount() {
      return requestCount;
    },
    getConfig() {
      return { baseURL, apiKey: "***" + apiKey.slice(-4) };
    },
  };
}

const api = createAPIClient("https://api.example.com", "secret-key-12345");

api.get("/users");
api.post("/users", { name: "Manoj" });
api.get("/posts");

console.log("Total requests:", api.getRequestCount()); // 3
console.log("Config:", api.getConfig());

/*
Real-world use case of closures
- Private configuration (baseURL, apiKey)
- Private state (requestCount)
- Public interface for API calls
- Encapsulation and data privacy
*/

console.log("\n=== EXAMPLE 20: Real-World - API Client ===");



