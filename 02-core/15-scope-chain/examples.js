// ============================================
// LEXICAL ENVIRONMENT & SCOPE CHAIN
// Complete Examples
// ============================================

// --------------------------------------------
// EXAMPLE 1: BASIC LEXICAL ENVIRONMENT
// --------------------------------------------

console.log("=== EXAMPLE 1: Basic Lexical Environment ===");

let globalVar = "Global";

function outer() {
  let outerVar = "Outer";

  function inner() {
    let innerVar = "Inner";
    console.log(innerVar); // Found in inner LE
    console.log(outerVar); // Found in outer LE (via reference)
    console.log(globalVar); // Found in global LE (via chain)
  }

  inner();
}

outer();

/*
LEXICAL ENVIRONMENTS:

inner LE {
  innerVar: "Inner",
  outer reference → outer LE
}

outer LE {
  outerVar: "Outer",
  outer reference → global LE
}

global LE {
  globalVar: "Global",
  outer reference → null
}

SCOPE CHAIN: inner → outer → global → null
*/


// --------------------------------------------
// EXAMPLE 2: SCOPE CHAIN SEARCH
// --------------------------------------------

console.log("\n=== EXAMPLE 2: Scope Chain Search ===");

let a = 1; // Global LE

function first() {
  let b = 2; // first LE

  function second() {
    let c = 3; // second LE

    console.log("a:", a); // Search: second → first → global (FOUND)
    console.log("b:", b); // Search: second → first (FOUND)
    console.log("c:", c); // Search: second (FOUND)
  }

  second();
}

first();

/*
SEARCH PROCESS:

console.log(a):
1. Look in second LE → Not found
2. Follow outer reference to first LE → Not found
3. Follow outer reference to global LE → FOUND! (a = 1)

console.log(b):
1. Look in second LE → Not found
2. Follow outer reference to first LE → FOUND! (b = 2)

console.log(c):
1. Look in second LE → FOUND! (c = 3)
*/


// --------------------------------------------
// EXAMPLE 3: LEXICAL SCOPING (WHERE WRITTEN)
// --------------------------------------------

console.log("\n=== EXAMPLE 3: Lexical Scoping ===");

let x = "Global X";

function outer1() {
//   let x = "Outer X";
  inner1(); // Calling inner from outer
  console.log(x); // Uses global x (where it's WRITTEN)

}

function inner1() {
  // inner is WRITTEN in global scope
  console.log(x); // Uses global x (where it's WRITTEN)
}

outer1(); // Output: "Global X"

/*
EXPLANATION:
- inner() is WRITTEN in global scope (lexical position)
- So its outer reference points to global LE
- Even though called from outer(), it uses global x
- This is LEXICAL scoping (where written matters, not where called)
*/



// --------------------------------------------
// EXAMPLE 4: MULTIPLE EXECUTION CONTEXTS
// --------------------------------------------

console.log("\n=== EXAMPLE 6: Multiple Execution Contexts ===");

function test() {
  let count = 0;
  count++;
  console.log("Count:", count);
}

test(); // Creates LE1 with count = 1
test(); // Creates LE2 with count = 1 (NEW LE, separate)
test(); // Creates LE3 with count = 1 (NEW LE, separate)

/*
Each function call creates a NEW Lexical Environment
They don't share the same LE
*/


// --------------------------------------------
// EXAMPLE 5: WHY LEXICAL MATTERS
// --------------------------------------------

console.log("\n=== EXAMPLE 14: Why Lexical Matters ===");

let message = "Global Message";

function createLogger() {
  let message = "Logger Message";

  // This function is WRITTEN here (lexical position)
  return function log() {
    console.log(message); // Will use Logger Message
  };
}

const logger = createLogger();
logger(); // "Logger Message"

// Even if we change global message
message = "New Global Message";
logger(); // Still "Logger Message" (uses lexical scope)

/*
LEXICAL SCOPING:
- log function's outer reference set when WRITTEN
- Points to createLogger's LE
- Doesn't change based on where log is CALLED
*/