# Lexical Environment & Scope Chain

## What is Lexical Environment?

**Lexical Environment** is a structure that holds:
1. **Local Memory** (variables and functions in current scope)
2. **Reference to Parent's Lexical Environment**
3. **`this` binding**

Think of it as a combination of:
- What variables exist in current scope
- How to access parent scope variables

---

## What Does "Lexical" Mean?

**Lexical = Where code is written in the source**

"Lexical" refers to the **physical location** of code in your file, not where it runs.
```javascript
function outer() {
  let x = 10;
  
  function inner() {  // inner is WRITTEN inside outer
    console.log(x);   // Can access x (lexical scoping)
  }
  
  inner();
}
```

**Key Point:** Inner function's scope is determined by **where it's written**, not where it's called.

---

## Lexical Environment Structure

Every Execution Context has a Lexical Environment:
```
Lexical Environment = {
  Environment Record: {
    // Local variables and functions
    variable1: value1,
    variable2: value2,
    function1: <function>
  },
  Outer Reference: <Parent Lexical Environment>,
  this: <this binding>
}
```

---

## How Lexical Environment is Created

When an Execution Context is created (during Memory Creation Phase):

**Global Execution Context:**
```
Global Lexical Environment = {
  Environment Record: {
    // Global variables and functions
  },
  Outer Reference: null,  // Global has no parent
  this: window/global
}
```

**Function Execution Context:**
```
Function Lexical Environment = {
  Environment Record: {
    // Local variables, parameters, functions
  },
  Outer Reference: <Parent's Lexical Environment>,
  this: <depends on how function is called>
}
```

---

## What is Scope Chain?

**Scope Chain** is the chain of Lexical Environments linked through their outer references.

When JavaScript needs to find a variable:
1. Search in **current** Lexical Environment
2. If not found, follow **outer reference** to parent
3. Repeat until variable found or reach **global** (outer = null)
4. If still not found → **ReferenceError**
```
Inner LE → Outer LE → Global LE → null
```

---

## Scope Chain Example
```javascript
let global = "Global";

function outer() {
  let outerVar = "Outer";
  
  function inner() {
    let innerVar = "Inner";
    console.log(innerVar);   // Found in inner LE
    console.log(outerVar);   // Found in outer LE (via reference)
    console.log(global);     // Found in global LE (via reference chain)
  }
  
  inner();
}

outer();
```

**Scope Chain:**
```
inner LE {
  Environment Record: { innerVar: "Inner" },
  Outer Reference: → outer LE
}
  ↓
outer LE {
  Environment Record: { outerVar: "Outer" },
  Outer Reference: → global LE
}
  ↓
global LE {
  Environment Record: { global: "Global" },
  Outer Reference: null
}
```

---

## How Variable Lookup Works

When you access a variable, JavaScript follows this process:

**Step 1:** Look in current Lexical Environment
**Step 2:** If not found, use outer reference to check parent LE
**Step 3:** Repeat until variable found or reach global LE
**Step 4:** If not in global LE → ReferenceError
```javascript
let a = 1;

function first() {
  let b = 2;
  
  function second() {
    let c = 3;
    console.log(a);  // Search: second LE → first LE → global LE (FOUND!)
    console.log(b);  // Search: second LE → first LE (FOUND!)
    console.log(c);  // Search: second LE (FOUND!)
    console.log(d);  // Search: second → first → global → NOT FOUND → Error
  }
  
  second();
}

first();
```

---

## Lexical Scoping vs Dynamic Scoping

**Lexical Scoping (JavaScript uses this):**
- Scope determined by **where function is written**
- Decided at **write time** (when you code)

**Dynamic Scoping (NOT in JavaScript):**
- Scope determined by **where function is called**
- Decided at **run time**
```javascript
let x = 10;

function outer() {
  let x = 20;
  inner();
}

function inner() {
  console.log(x);  // 10 (lexical - uses where inner is WRITTEN, global scope)
}

outer();

// If JavaScript used dynamic scoping, it would print 20
// (where inner is CALLED from, outer's scope)
```

---

## Closure Preview

Lexical Environment is the foundation for **closures**.

When inner function is returned, it retains access to outer's Lexical Environment:
```javascript
function outer() {
  let count = 0;
  
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
console.log(counter());  // 1
console.log(counter());  // 2

// inner retains reference to outer's Lexical Environment
// Even after outer() completed!
```

---

## Key Differences: Scope vs Lexical Environment

| Concept | Definition |
|---------|-----------|
| **Scope** | Rules about where variables are accessible |
| **Lexical Environment** | Actual data structure that implements scope |

- **Scope** = The concept/rules
- **Lexical Environment** = The implementation

---

## Important Points

### 1. Lexical = Where Code is Written
```javascript
function a() {
  let x = 1;
  b();  // b is CALLED here
}

function b() {
  console.log(x);  // Error - b is WRITTEN in global scope
}

a();
```

### 2. Each Execution Context Has Its Own LE
```javascript
function test() {
  let x = 10;
}

test();  // Creates LE with x = 10
test();  // Creates NEW LE with x = 10 (separate)
```

### 3. Global LE Has Outer Reference = null
```javascript
// Global LE
{
  Environment Record: { ... },
  Outer Reference: null  // End of chain
}
```

### 4. Scope Chain Stops at Global
If variable not found in global LE → ReferenceError

---

## Real-World Analogy

**Lexical Environment = Your house address**

When you need something:
1. Check your room (current LE)
2. Check your house (parent LE via reference)
3. Check your neighborhood (grandparent LE via reference)
4. Check your city (global LE)
5. Not found anywhere? Error!

The "address chain" is determined by **where the room is built** (lexical), not where you're standing.

---

## Interview Key Points

### Q1. What is Lexical Environment?
**Answer:** A structure containing local memory (variables/functions), reference to parent's Lexical Environment, and `this` binding. Created during Execution Context creation.

---

### Q2. What does "Lexical" mean?
**Answer:** "Lexical" means determined by **where code is written** in the source file, not where it's executed.

---

### Q3. What is Scope Chain?
**Answer:** Chain of Lexical Environments linked through outer references. JavaScript follows this chain to resolve variable access.

---

### Q4. How does JavaScript find variables?
**Answer:** 
1. Search current Lexical Environment
2. If not found, follow outer reference to parent
3. Repeat until found or reach global (outer = null)
4. If still not found → ReferenceError

---

### Q5. What is at the end of the Scope Chain?
**Answer:** Global Lexical Environment with outer reference = `null`

---

### Q6. Does JavaScript use lexical or dynamic scoping?
**Answer:** **Lexical scoping** - scope determined by where code is written, not where it's called.

---

### Q7. When is Lexical Environment created?
**Answer:** During **Execution Context creation** (Memory Creation Phase)

---

### Q8. Difference between Scope and Lexical Environment?
**Answer:**
- **Scope** = The rules/concept of where variables are accessible
- **Lexical Environment** = The actual data structure implementing those rules

---

## Summary
```
LEXICAL ENVIRONMENT:
- Structure holding local memory + parent reference + this
- Created during Execution Context creation
- "Lexical" = where code is WRITTEN (not called)

SCOPE CHAIN:
- Chain of Lexical Environments (LE → Parent LE → ... → Global LE → null)
- Used for variable lookup
- Follows outer references

VARIABLE LOOKUP:
Current LE → Parent LE → Grandparent LE → ... → Global LE → null
If not found → ReferenceError

KEY CONCEPTS:
✅ Lexical = code position (write time)
✅ Each EC has its own LE
✅ Global LE outer reference = null
✅ Scope chain enables nested function access
✅ Foundation for closures
```