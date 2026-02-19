# Lexical Environment & Scope Chain - Interview Q&A

## 📌 Conceptual Questions

### Q1. What is a Lexical Environment?
**Answer:** A Lexical Environment is a structure that holds:
1. **Environment Record** (local variables and functions)
2. **Outer Reference** (reference to parent's Lexical Environment)
3. **`this` binding**

It's created during Execution Context creation and implements scope.

---

### Q2. What does "Lexical" mean in Lexical Environment?
**Answer:** "Lexical" means determined by **where code is written** in the source file (lexical position), not where it's executed.
```javascript
function outer() {
  let x = 10;
  function inner() {  // inner is WRITTEN inside outer (lexical position)
    console.log(x);   // Can access x
  }
}
```

---

### Q3. What is a Scope Chain?
**Answer:** Scope Chain is the **chain of Lexical Environments** connected through outer references. JavaScript follows this chain to resolve variable access:
```
Inner LE → Parent LE → Grandparent LE → ... → Global LE → null
```

---

### Q4. How does JavaScript find variables using the Scope Chain?
**Answer:** JavaScript searches in this order:

1. Look in **current** Lexical Environment
2. If not found, follow **outer reference** to parent LE
3. Repeat until variable found or reach **global** LE (outer = null)
4. If still not found → **ReferenceError**

---

### Q5. What is at the end of the Scope Chain?
**Answer:** The **Global Lexical Environment** with outer reference = **`null`**. This marks the end of the chain.

---

### Q6. When is a Lexical Environment created?
**Answer:** A Lexical Environment is created during **Execution Context creation** (Memory Creation Phase), for each:
- Global Execution Context (once)
- Function Execution Context (each function call)

---

### Q7. What's the difference between Scope and Lexical Environment?
**Answer:**

| Concept | Definition |
|---------|-----------|
| **Scope** | The rules/concept of where variables are accessible |
| **Lexical Environment** | The actual data structure that implements scope |

- Scope = The concept
- Lexical Environment = The implementation

---

### Q8. Does JavaScript use lexical or dynamic scoping?
**Answer:** JavaScript uses **lexical (static) scoping**.

- **Lexical scoping:** Scope determined by where code is **written** (write time)
- **Dynamic scoping:** Scope determined by where code is **called** (run time) - NOT in JavaScript

---

### Q9. What happens when a variable is not found in the Scope Chain?
**Answer:** JavaScript throws a **ReferenceError**.
```javascript
function test() {
  console.log(nonExistent);
  // Search: test LE → global LE → null
  // ReferenceError: nonExistent is not defined
}
```

---

### Q10. How is Lexical Environment related to closures?
**Answer:** Lexical Environment is the **foundation of closures**. When a function is returned, it retains a reference to its parent's Lexical Environment, even after the parent function completes.
```javascript
function outer() {
  let x = 10;
  return function inner() {
    console.log(x);  // Retains reference to outer's LE
  };
}

const fn = outer();
fn();  // 10 (closure)
```

---

## 🔢 Output-Based Questions

### Q11. What will be the output?
```javascript
let a = 1;

function first() {
  let b = 2;
  
  function second() {
    let c = 3;
    console.log(a);
    console.log(b);
    console.log(c);
  }
  
  second();
}

first();
```

**Answer:**
```
1
2
3
```

**Explanation:** Scope chain: second LE → first LE → global LE
- `a` found in global LE
- `b` found in first LE
- `c` found in second LE

---

### Q12. What will be the output?
```javascript
let x = "Global";

function outer() {
  let x = "Outer";
  inner();
}

function inner() {
  console.log(x);
}

outer();
```

**Answer:** `Global`

**Explanation:** `inner()` is **written** in global scope (lexical position), so its outer reference points to global LE. Lexical scoping - where written matters, not where called.

---

### Q13. What will be the output?
```javascript
function test() {
  let x = 10;
  
  function inner() {
    console.log(x);
  }
  
  inner();
}

test();
console.log(x);
```

**Answer:**
```
10
ReferenceError: x is not defined
```

**Explanation:**
- `inner()` can access `x` via scope chain (inner LE → test LE)
- Outside `test()`, `x` doesn't exist (not in global LE)

---

### Q14. What will be the output?
```javascript
let name = "Global";

function outer() {
  let name = "Outer";
  
  function inner() {
    let name = "Inner";
    console.log(name);
  }
  
  inner();
  console.log(name);
}

outer();
console.log(name);
```

**Answer:**
```
Inner
Outer
Global
```

**Explanation:** Three different `name` variables in three different Lexical Environments (variable shadowing).

---

### Q15. What will be the output?
```javascript
function createCounter() {
  let count = 0;
  
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter());
console.log(counter());
```

**Answer:**
```
1
2
```

**Explanation:** Returned function retains reference to `createCounter`'s LE (closure). `count` persists even after `createCounter()` completes.

---

## ✅ True or False

### Q16. Lexical scoping means scope is determined by where code is called.
**Answer:** **FALSE**

**Explanation:** Lexical scoping means scope is determined by **where code is written**, not where it's called.

---

### Q17. Each Execution Context has its own Lexical Environment.
**Answer:** **TRUE**

**Explanation:** Every Execution Context (global or function) has its own unique Lexical Environment.

---

### Q18. The Global Lexical Environment's outer reference is null.
**Answer:** **TRUE**

**Explanation:** Global LE is at the end of the scope chain, so its outer reference is `null`.

---

### Q19. Lexical Environment is the same as Scope.
**Answer:** **FALSE**

**Explanation:** Scope is the concept/rules. Lexical Environment is the data structure that implements scope.

---

### Q20. Inner functions can access outer function variables through the Scope Chain.
**Answer:** **TRUE**

**Explanation:** Inner functions have outer reference to parent's LE, enabling access to parent variables via scope chain.

---

## 🎯 Summary - Must Know Points

1. **Lexical Environment** = Local memory + parent reference + `this`
2. **"Lexical"** = Where code is WRITTEN (not called)
3. **Scope Chain** = Chain of LEs (inner → outer → global → null)
4. **Variable lookup** = Search current LE → parent LE → ... → global LE → null
5. **Not found** = ReferenceError
6. **Created** = During Execution Context creation
7. **Global LE** = outer reference is `null`
8. **Each function call** = New LE
9. **Lexical scoping** = Static (write time), not dynamic (run time)
10. **Foundation for closures** = Inner function retains parent LE reference