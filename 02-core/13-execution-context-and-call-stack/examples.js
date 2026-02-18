// ============================================
// EXECUTION CONTEXT & CALL STACK
// Complete Examples with Detailed Explanations
// ============================================

// --------------------------------------------
// EXAMPLE 1: BASIC EXECUTION CONTEXT
// --------------------------------------------


console.log("=== EXAMPLE 1: Basic Execution Context ===");

var name = "Manoj";

function greet() {
    console.log("Hello, "+ name)
}

greet()

/*
EXECUTION FLOW:

1. GLOBAL EC - Memory Creation:
   name: undefined
   greet: function code

2. GLOBAL EC - Code Execution:
   name: "Manoj"
   greet() called → creates new Function EC

3. FUNCTION EC (greet) - Memory Creation:
   (no local variables)

4. FUNCTION EC (greet) - Code Execution:
   console.log("Hello, Manoj")
   Function completes → Function EC destroyed

5. Back to GLOBAL EC
   Program ends
*/


// --------------------------------------------
// EXAMPLE 2: HOISTING DEMONSTRATION
// --------------------------------------------

console.log("\n=== EXAMPLE 2: Hoisting ===");

console.log("before declaration =",x);
var x = 10;
console.log("after declaration =", x);

test();  // THis works because function hoisted

function test(){
  console.log("This works!");
}


/*
WHY THIS WORKS:

Memory Creation Phase (before any code runs):
x: undefined
test: function code stored

Code Execution Phase:
console.log(x) → undefined (already in memory)
x = 10 → assigned value
console.log(x) → 10
test() → executes (already in memory)
*/


// --------------------------------------------
// EXAMPLE 3: let/const and TDZ
// --------------------------------------------

console.log("\n=== EXAMPLE 3: TDZ with let/const ===");

// console.log(y)  // ReferenceError: Cannot access 'y' before initialization
let y = 20;
console.log(y); // 20


// console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 30;
console.log(z); // 30


/*
Memory Creation Phase:
y: allocated but in TDZ (not accessible)
z: allocated but in TDZ (not accessible)

Code Execution Phase:
console.log(y) → ERROR (accessing before initialization)
y = 20 → NOW initialized
console.log(y) → works
*/



// --------------------------------------------
// EXAMPLE 4: FUNCTION EXECUTION CONTEXT
// --------------------------------------------

console.log("\n=== EXAMPLE 4: Function Execution Context ===");


function add(a,b){
    var result = a + b;
    console.log("Result :", result)
    return result
}

var sum = add(5,3)
console.log("sum =", sum)

/*
STEP BY STEP:

1. GLOBAL EC - Memory Creation:
   add: function code
   sum: undefined

2. GLOBAL EC - Code Execution:
   sum = add(5, 3) → Function called!

3. FUNCTION EC (add) - Memory Creation:
   a: undefined
   b: undefined
   result: undefined

4. FUNCTION EC (add) - Code Execution:
   a: 5 (parameter)
   b: 3 (parameter)
   result: 8
   console.log("Result: 8")
   return 8 → Function EC destroyed

5. Back to GLOBAL EC:
   sum: 8 (received from return)
   console.log("Sum: 8")
*/


// --------------------------------------------
// EXAMPLE 5: CALL STACK VISUALIZATION
// --------------------------------------------

console.log("\n=== EXAMPLE 5: Call Stack ===");

function first() {
  console.log("Inside first - START");
  second();
  console.log("Inside first - END");
}

function second() {
  console.log("Inside second - START");
  third();
  console.log("Inside second - END");
}

function third() {
  console.log("Inside third");
}

first();

/*
CALL STACK STEP BY STEP:

Initial:
[Global EC]

After first() called:
[first() EC]
[Global EC]

After second() called (inside first):
[second() EC]
[first() EC]
[Global EC]

After third() called (inside second):
[third() EC]
[second() EC]
[first() EC]
[Global EC]

After third() completes:
[second() EC]
[first() EC]
[Global EC]

After second() completes:
[first() EC]
[Global EC]

After first() completes:
[Global EC]

OUTPUT:
Inside first - START
Inside second - START
Inside third
Inside second - END
Inside first - END
*/


// --------------------------------------------
// EXAMPLE 6: NESTED FUNCTION CALLS
// --------------------------------------------

console.log("\n=== EXAMPLE 6: Nested Function Calls ===");

function outer() {
  var x = 10;
  console.log("Outer x:", x);

  function inner() {
    var y = 20;
    console.log("Inner y:", y);
    console.log("Can access outer x:", x);
  }

  inner();
  console.log("Back in outer");
}

outer();


/*
EXECUTION:

1. Global EC created
2. outer() called → outer EC created
   - Memory: x = undefined, inner = function code
   - Execution: x = 10, inner() called
3. inner() called → inner EC created
   - Memory: y = undefined
   - Execution: y = 20, console.logs
4. inner() completes → inner EC destroyed
5. Back to outer EC → console.log
6. outer() completes → outer EC destroyed
7. Back to Global EC
*/


// --------------------------------------------
// EXAMPLE 7: MULTIPLE INDEPENDENT FUNCTION CALLS
// --------------------------------------------

console.log("\n=== EXAMPLE 7: Independent Function Calls ===");

function multiply(a, b) {
  var result = a * b;
  return result;
}

var result1 = multiply(3, 4);
var result2 = multiply(5, 6);
console.log("Results:", result1, result2);


/*
EACH FUNCTION CALL CREATES NEW EC:

Call 1: multiply(3, 4)
- New Function EC created
- a = 3, b = 4, result = 12
- Returns 12
- Function EC destroyed

Call 2: multiply(5, 6)
- NEW Function EC created (fresh context)
- a = 5, b = 6, result = 30
- Returns 30
- Function EC destroyed

They don't interfere with each other!
*/


// --------------------------------------------
// EXAMPLE 8: DEMONSTRATING SCOPE IN EC
// --------------------------------------------

console.log("\n=== EXAMPLE 8: Scope in Execution Context ===");

var globalVar = "Global";

function testScope() {
  var localVar = "Local";
  console.log(globalVar); // Can access global
  console.log(localVar); // Can access local
}

testScope();
console.log(globalVar); // Can access global
// console.log(localVar); // Error: localVar is not defined (not in global EC)


/*
EXECUTION CONTEXTS:

Global EC:
- globalVar: "Global"
- testScope: function code

Function EC (testScope):
- localVar: "Local"
- Can access parent scope (Global EC)

After function completes:
- Function EC destroyed
- localVar no longer exists
- Only Global EC remains with globalVar
*/


// --------------------------------------------
// EXAMPLE 9: FUNCTION EXPRESSIONS VS DECLARATIONS
// --------------------------------------------

console.log("\n=== EXAMPLE 9: Hoisting Differences ===");

// Function declaration - hoisted
greet1(); // Works!

function greet1() {
  console.log("Greet1 - Declaration");
}

// Function expression - NOT fully hoisted
// greet2(); // TypeError: greet2 is not a function

var greet2 = function () {
  console.log("Greet2 - Expression");
};

greet2(); // Now it works


/*
Memory Creation Phase:

greet1: function code (FULL FUNCTION)
greet2: undefined (ONLY VARIABLE, not function yet)

Code Execution Phase:

greet1() → Works (already a function)
greet2() → Error (greet2 is still undefined)
greet2 = function → NOW it becomes a function
greet2() → Works
*/


// --------------------------------------------
// EXAMPLE 10: STACK OVERFLOW EXAMPLE
// --------------------------------------------

console.log("\n=== EXAMPLE 10: Stack Overflow (commented out) ===");

/*
function infiniteRecursion() {
  console.log("Calling again...");
  infiniteRecursion(); // Calls itself forever
}

// infiniteRecursion(); // RangeError: Maximum call stack size exceeded

WHAT HAPPENS:
1. infiniteRecursion() EC pushed to stack
2. Calls itself → another EC pushed
3. Calls itself → another EC pushed
4. ... continues forever
5. Stack runs out of space
6. Browser throws error

CALL STACK:
[infiniteRecursion EC 1000+]
[infiniteRecursion EC 999]
[infiniteRecursion EC 998]
...
[infiniteRecursion EC 2]
[infiniteRecursion EC 1]
[Global EC]
← Stack overflow!
*/




// --------------------------------------------
// EXAMPLE 11: REALISTIC EXAMPLE - CALCULATOR
// --------------------------------------------

console.log("\n=== EXAMPLE 11: Realistic Calculator ===");


function calculate(operation, a, b) {
  function add(x, y) {
    return x + y;
  }

  function subtract(x, y) {
    return x - y;
  }

  function multiply(x, y) {
    return x * y;
  }

  var result;

  if (operation === "add") {
    result = add(a, b);
  } else if (operation === "subtract") {
    result = subtract(a, b);
  } else if (operation === "multiply") {
    result = multiply(a, b);
  }

  return result;
}


console.log("10 + 5 =", calculate("add", 10, 5));
console.log("10 - 5 =", calculate("subtract", 10, 5));
console.log("10 * 5 =", calculate("multiply", 10, 5));

/*
CALL STACK for calculate("add", 10, 5):

1. [Global EC]
2. [calculate EC]  ← operation="add", a=10, b=5
   [Global EC]
3. [add EC]        ← x=10, y=5
   [calculate EC]
   [Global EC]
4. add returns 15  → add EC destroyed
5. calculate returns 15 → calculate EC destroyed
6. [Global EC]     ← back to global
*/


// --------------------------------------------
// EXAMPLE 12: VARIABLE SHADOWING IN EC
// --------------------------------------------

console.log("\n=== EXAMPLE 12: Variable Shadowing ===");

var x = 100;

function test() {
  var x = 200; // Different x (local to function EC)
  console.log("Inside function x:", x); // 200
}

test();
console.log("Outside function x:", x); // 100

/*
EXECUTION CONTEXTS:

Global EC:
- x: 100

Function EC (test):
- x: 200 (shadows global x)
- This is a DIFFERENT variable in a different context

After function completes:
- Function EC destroyed (local x gone)
- Global EC still has x: 100
*/


// --------------------------------------------
// EXAMPLE 13: PARAMETERS IN FUNCTION EC
// --------------------------------------------

console.log("\n=== EXAMPLE 13: Parameters in Function EC ===");

function greetPerson(name, age) {
  var greeting = "Hello";
  console.log(greeting + ", " + name + "! You are " + age + " years old.");
}

greetPerson("Manoj", 25);

/*
Function EC (greetPerson) - Memory Creation:
name: undefined
age: undefined
greeting: undefined

Function EC (greetPerson) - Code Execution:
name: "Manoj" (parameter)
age: 25 (parameter)
greeting: "Hello"
console.log executes
Function returns → EC destroyed
*/



// --------------------------------------------
// EXAMPLE 14: RETURN STATEMENT AND EC
// --------------------------------------------

console.log("\n=== EXAMPLE 14: Return Statement ===");

function getSquare(num) {
  var square = num * num;
  return square;
  console.log("This never runs"); // Unreachable code
}

var result = getSquare(7);
console.log("Square of 7 is:", result);

/*
Function EC (getSquare):

Memory Creation:
num: undefined
square: undefined

Code Execution:
num: 7 (parameter)
square: 49
return 49 → Function EC IMMEDIATELY destroyed
Code after return never executes
*/


console.log("\n=== EXAMPLE 15: Complete Flow ===");

var a = 10;
var b = 20;

function sum() {
  var total = a + b;
  return total;
}

function multiply() {
  var product = a * b;
  return product;
}

var sumResult = sum();
var multiplyResult = multiply();

console.log("Sum:", sumResult);
console.log("Product:", multiplyResult);

/*
COMPLETE EXECUTION TRACE:

1. Global EC - Memory Creation:
   a: undefined
   b: undefined
   sum: function code
   multiply: function code
   sumResult: undefined
   multiplyResult: undefined

2. Global EC - Code Execution:
   a = 10
   b = 20
   sumResult = sum() → Function EC created

3. Function EC (sum) - Memory Creation:
   total: undefined

4. Function EC (sum) - Code Execution:
   total = 30
   return 30 → EC destroyed

5. Back to Global EC:
   sumResult = 30
   multiplyResult = multiply() → Function EC created

6. Function EC (multiply) - Memory Creation:
   product: undefined

7. Function EC (multiply) - Code Execution:
   product = 200
   return 200 → EC destroyed

8. Back to Global EC:
   multiplyResult = 200
   console.log("Sum: 30")
   console.log("Product: 200")
   Program ends → Global EC destroyed
*/