// ============================================
// HOISTING & TEMPORAL DEAD ZONE (TDZ)
// Complete Examples
// ============================================

// --------------------------------------------
// EXAMPLE 1: FUNCTION DECLARATION HOISTING
// --------------------------------------------

console.log("=== EXAMPLE 1: Function Declaration Hoisting ===");

// ✅ This works - function fully hoisted
greet();

function greet() {
  console.log("Hello! Function declaration is hoisted.");
}

/*
MEMORY CREATION PHASE:
greet: <entire function code stored>

CODE EXECUTION PHASE:
greet() can be called - function already in memory
*/


console.log("\n=== EXAMPLE 2: var Hoisting ===");

console.log(x); // undefined (not error!)
var x = 10;
console.log(x); // 10

/*
MEMORY CREATION PHASE:
x: undefined

CODE EXECUTION PHASE:
Line 1: console.log(x) → undefined
Line 2: x = 10
Line 3: console.log(x) → 10
*/

// --------------------------------------------
// EXAMPLE 3: let HOISTING (TDZ)
// --------------------------------------------

console.log("\n=== EXAMPLE 3: let Hoisting & TDZ ===");

// console.log(y);  // ReferenceError: Cannot access 'y' before initialization
let y = 20;
console.log(y); // 20

/*
MEMORY CREATION PHASE:
y: <uninitialized> (in TDZ)

CODE EXECUTION PHASE:
Line 1: console.log(y) → ReferenceError (in TDZ)
Line 2: y = 20 → TDZ ends
Line 3: console.log(y) → 20 (now accessible)
*/


// --------------------------------------------
// EXAMPLE 4: const HOISTING (TDZ)
// --------------------------------------------

console.log("\n=== EXAMPLE 4: const Hoisting & TDZ ===");

// console.log(z);  // ReferenceError
const z = 30;
console.log(z); // 30

/*
Same as let - in TDZ until declaration
*/


console.log("\n=== EXAMPLE 5: Function Expression with var ===");

console.log(funcExp); // undefined
// funcExp();  // TypeError: funcExp is not a function

var funcExp = function () {
  console.log("Function expression");
};

funcExp(); // Now it works

/*
MEMORY CREATION PHASE:
funcExp: undefined (only variable hoisted)

CODE EXECUTION PHASE:
Line 1: console.log(funcExp) → undefined
Line 2: funcExp() → TypeError (trying to call undefined)
Line 3: funcExp = function → now it's a function
Line 4: funcExp() → works
*/

console.log("\n=== EXAMPLE 6: Function Expression with const ===");

// console.log(funcExp2);  // ReferenceError (TDZ)
// funcExp2();  // ReferenceError (TDZ)

const funcExp2 = function () {
  console.log("Function expression with const");
};

funcExp2(); // Works

/*
MEMORY CREATION PHASE:
funcExp2: <uninitialized> (TDZ)

CODE EXECUTION PHASE:
Before declaration: ReferenceError (in TDZ)
After declaration: works normally
*/


// --------------------------------------------
// EXAMPLE 7: ARROW FUNCTION HOISTING
// --------------------------------------------

console.log("\n=== EXAMPLE 7: Arrow Function Hoisting ===");

// console.log(arrow);  // ReferenceError (TDZ)
// arrow();  // ReferenceError (TDZ)

const arrow = () => {
  console.log("Arrow function");
};

arrow(); // Works

/*
Arrow functions follow same rules as function expressions
Variable hoisted based on var/let/const
*/

// --------------------------------------------
// EXAMPLE 8: TDZ TIMELINE
// --------------------------------------------

console.log("\n=== EXAMPLE 8: TDZ Timeline ===");

{
  // TDZ starts here for 'temp'
  // console.log(temp);  // ReferenceError

  // Still in TDZ
  // console.log(temp);  // ReferenceError

  let temp = "TDZ ends here"; // TDZ ends at this line

  console.log(temp); // "TDZ ends here" - now accessible
}

/*
TDZ Timeline:
Block start → let temp declaration
      ↓
    [TDZ]
      ↓
Declaration line → TDZ ends
*/

// --------------------------------------------
// EXAMPLE 9: TDZ IN FUNCTIONS
// --------------------------------------------

console.log("\n=== EXAMPLE 9: TDZ in Functions ===");

function testTDZ() {
  // TDZ starts for 'value'
  // console.log(value);  // ReferenceError

  let value = 100; // TDZ ends

  console.log(value); // 100
}

testTDZ();

/*
TDZ exists in function scope too
*/

// --------------------------------------------
// EXAMPLE 10: MULTIPLE VARIABLES HOISTING
// --------------------------------------------

console.log("\n=== EXAMPLE 10: Multiple Variables ===");

console.log(a); // undefined
// console.log(b);  // ReferenceError
// console.log(c);  // ReferenceError

var a = 1;
let b = 2;
const c = 3;

console.log(a, b, c); // 1 2 3

/*
var: hoisted as undefined
let/const: hoisted but in TDZ
*/

// --------------------------------------------
// EXAMPLE 11: FUNCTION VS VARIABLE NAME CONFLICT
// --------------------------------------------

console.log("\n=== EXAMPLE 11: Function vs Variable ===");

console.log(test); // [Function: test] (function wins during hoisting)

function test() {
  return "Function";
}

var test = "Variable";

console.log(test); // "Variable" (variable assignment overrides)

/*
MEMORY CREATION PHASE:
1. test: function (declaration hoisted)
2. test: undefined (var declaration, but function already exists)

CODE EXECUTION PHASE:
Line 1: console.log(test) → function
Line 2-4: function declaration (already hoisted)
Line 5: test = "Variable" (overwrites)
Line 6: console.log(test) → "Variable"
*/


// --------------------------------------------
// EXAMPLE 12: HOISTING IN NESTED SCOPES
// --------------------------------------------

console.log("\n=== EXAMPLE 12: Nested Scope Hoisting ===");

function outer() {
  console.log(innerVar); // undefined (var hoisted in function scope)

  if (true) {
    var innerVar = "Inside if"; // var ignores block scope
    let blockVar = "Block scoped";
  }

  console.log(innerVar); // "Inside if"
  // console.log(blockVar);  // ReferenceError (block scoped)
}

outer();

/*
var innerVar hoisted to function scope (as undefined)
let blockVar hoisted only to block scope
*/

// --------------------------------------------
// EXAMPLE 13: CLASS HOISTING (TDZ)
// --------------------------------------------

console.log("\n=== EXAMPLE 13: Class Hoisting ===");

// const obj = new MyClass();  // ReferenceError (TDZ)

class MyClass {
  constructor() {
    this.name = "Class";
  }
}

const obj = new MyClass();
console.log(obj.name); // "Class"

/*
Classes are hoisted but in TDZ (like let/const)
*/

// --------------------------------------------
// EXAMPLE 14: TDZ WITH SHADOWING
// --------------------------------------------

console.log("\n=== EXAMPLE 14: TDZ with Shadowing ===");

let x1 = "Outer";

{
  // console.log(x);  // ReferenceError (NOT "Outer"!)
  // Inner 'x' is hoisted and in TDZ, shadows outer 'x'

  let x1 = "Inner";
  console.log(x1); // "Inner"
}

console.log(x1); // "Outer"

/*
Inner 'x' is hoisted to block scope
Even though outer 'x' exists, inner 'x' shadows it
But inner 'x' is in TDZ before declaration
*/


console.log("\n=== EXAMPLE 15: typeof with TDZ ===");

console.log(typeof undeclaredVariable); // "undefined" (not declared at all)

// console.log(typeof declaredButInTDZ);  // ReferenceError (in TDZ!)
let declaredButInTDZ = 10;

/*
typeof with undeclared variable: "undefined"
typeof with TDZ variable: ReferenceError
*/


// --------------------------------------------
// EXAMPLE 16: HOISTING WITH PARAMETERS
// --------------------------------------------

console.log("\n=== EXAMPLE 16: Hoisting with Parameters ===");

function testParams(param) {
  console.log(param); // Parameter value
  console.log(localVar); // undefined (var hoisted)

  var localVar = "Local";
  console.log(localVar); // "Local"
}

testParams("Parameter");

/*
Parameters are like variables declared at function start
var hoisted within function scope
*/


// --------------------------------------------
// EXAMPLE 17: HOISTING IN LOOPS
// --------------------------------------------

console.log("\n=== EXAMPLE 17: Hoisting in Loops ===");

console.log(i); // undefined (var hoisted to function scope)

for (var i = 0; i < 3; i++) {
  console.log("Loop:", i);
}

console.log(i); // 3 (i leaked out of loop - var is function scoped)

// for (let j = 0; j < 3; j++) {
//   // j is block scoped
// }
// console.log(j);  // ReferenceError (j is block scoped)

/*
var: hoisted and function scoped (leaks out of loop)
let: block scoped (doesn't leak)
*/
