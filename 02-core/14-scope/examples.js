// ============================================
// SCOPE IN JAVASCRIPT
// Complete Examples
// ============================================

// --------------------------------------------
// 1. GLOBAL SCOPE
// --------------------------------------------

console.log("=== EXAMPLE 1: Global Scope ===");

var globalVar = "I'm global with var";
let globalLet = "I'm global with let";
const globalConst = "I'm global with const";

function accessGlobal() {
  console.log(globalVar); // Accessible
  console.log(globalLet); // Accessible
  console.log(globalConst); // Accessible
}

accessGlobal();

if (true) {
  console.log(globalVar); // Accessible
  console.log(globalLet); // Accessible
  console.log(globalConst); // Accessible
}

// Global variables accessible everywhere

// --------------------------------------------
// 2. FUNCTION SCOPE
// --------------------------------------------

console.log("\n=== EXAMPLE 2: Function Scope ===");

function testFunctionScope() {
  var funcVar = "Function scoped var";
  let funcLet = "Function scoped let";
  const funcConst = "Function scoped const";

  console.log(funcVar); // Works
  console.log(funcLet); // Works
  console.log(funcConst); // Works
}

testFunctionScope();

// console.log(funcVar);   // Error: funcVar is not defined
// console.log(funcLet);   // Error: funcLet is not defined
// console.log(funcConst); // Error: funcConst is not defined

// Function scope variables are private to the function


console.log("\n=== EXAMPLE 3: Block Scope with if ===");

if (true) {
  var varInBlock = "var ignores block";
  let letInBlock = "let respects block";
  const constInBlock = "const respects block";

  console.log(varInBlock); // Works
  console.log(letInBlock); // Works
  console.log(constInBlock); // Works
}

console.log(varInBlock); // Works (var leaks out!)
// console.log(letInBlock);    // Error: not defined
// console.log(constInBlock);  // Error: not defined

// var does NOT respect block scope!


// --------------------------------------------
// 4. BLOCK SCOPE - for loop
// --------------------------------------------

console.log("\n=== EXAMPLE 4: Block Scope with for loop ===");

for (var i = 0; i < 3; i++) {
  console.log("var i:", i);
}
console.log("After loop, i =", i); // 3 (i leaked out!)

for (let j = 0; j < 3; j++) {
  console.log("let j:", j);
}
// console.log(j);  // Error: j is not defined (block scoped)


// --------------------------------------------
// 5. BLOCK SCOPE - Standalone block
// --------------------------------------------

console.log("\n=== EXAMPLE 5: Standalone Block ===");

{
  let blockScoped = "Inside block";
  const alsoBlockScoped = "Also inside";
  console.log(blockScoped); // Works
  console.log(alsoBlockScoped); // Works
}

// console.log(blockScoped);     // Error: not defined
// console.log(alsoBlockScoped); // Error: not defined


// --------------------------------------------
// 6. VARIABLE SHADOWING - Global vs Function
// --------------------------------------------

console.log("\n=== EXAMPLE 6: Variable Shadowing ===");

var name = "Global Name";

function test() {
  var name = "Local Name"; // Shadows global
  console.log("Inside function:", name); // "Local Name"
}

test();
console.log("Outside function:", name); // "Global Name"

// Two different 'name' variables!


// --------------------------------------------
// 7. VARIABLE SHADOWING - Nested scopes
// --------------------------------------------

console.log("\n=== EXAMPLE 7: Nested Shadowing ===");

let x = 1; // Global

function outer() {
  let x = 2; // Shadows global x
  console.log("Outer x:", x); // 2

  function inner() {
    let x = 3; // Shadows outer x
    console.log("Inner x:", x); // 3
  }

  inner();
  console.log("After inner, outer x:", x); // 2 (unchanged)
}

outer();
console.log("Global x:", x); // 1 (unchanged)


// --------------------------------------------
// 8. var vs let vs const in FUNCTION SCOPE
// --------------------------------------------

console.log("\n=== EXAMPLE 8: var vs let vs const in Function ===");

function scopeTest() {
  var a = 10;
  let b = 20;
  const c = 30;

  console.log(a, b, c); // All accessible inside function

  if (true) {
    var a = 100; // Same 'a' (function scoped)
    let b = 200; // Different 'b' (block scoped)
    const c = 300; // Different 'c' (block scoped)

    console.log("Inside if:", a, b, c); // 100, 200, 300
  }

  console.log("After if:", a, b, c); // 100, 20, 30
  // a changed (var is function scoped)
  // b, c unchanged (let/const are block scoped)
}

scopeTest();


