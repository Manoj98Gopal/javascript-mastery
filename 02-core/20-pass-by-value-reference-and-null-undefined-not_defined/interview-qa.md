# Pass by Value/Reference & null/undefined/not defined - Interview Q&A

## 📌 Pass by Value vs Reference

### Q1. What is pass by value?
**Answer:** Pass by value means a **copy** of the actual value is passed. Changes to the copy don't affect the original.

**Applies to:** All primitive types (number, string, boolean, undefined, null, symbol, bigint)
```javascript
let x = 10;
let y = x;  // Copy
y = 20;
console.log(x);  // 10 (unchanged)
```

---

### Q2. What is pass by reference?
**Answer:** Pass by reference (more accurately: pass by **value of reference**) means a **copy of the reference** (memory address) is passed. Changes to the object affect the original.

**Applies to:** Objects, arrays, functions
```javascript
let obj1 = { name: "Manoj" };
let obj2 = obj1;  // Copy of reference
obj2.name = "Kumar";
console.log(obj1.name);  // "Kumar" (affected)
```

---

### Q3. Is JavaScript pass by value or pass by reference?
**Answer:** JavaScript is **always pass by value**.

For primitives, the value itself is copied.
For objects, the **reference value** (memory address) is copied.

This is sometimes called **"pass by sharing"** or **"pass by value of reference"**.

---

### Q4. Why does changing object properties affect the original?
**Answer:** Because both the original variable and the copy hold references to the **same object in memory**. When you modify properties through either reference, the same object is changed.
```javascript
function change(obj) {
  obj.name = "Changed";  // Modifies same object
}

const person = { name: "Manoj" };
change(person);
console.log(person.name);  // "Changed"
```

---

### Q5. Why doesn't reassignment affect the original object?
**Answer:** Reassignment changes what the **local parameter** points to, but doesn't change what the original variable points to. They become separate references.
```javascript
function reassign(obj) {
  obj = { name: "New" };  // Local parameter now points elsewhere
}

const person = { name: "Manoj" };
reassign(person);
console.log(person.name);  // "Manoj" (unchanged)
```

---

### Q6. What's the difference between mutation and reassignment?
**Answer:**

**Mutation (modifying properties):** Affects original
```javascript
obj.name = "Changed";  // ✅ Affects original
```

**Reassignment (new object):** Doesn't affect original
```javascript
obj = { name: "New" };  // ❌ Doesn't affect original
```

---

### Q7. How do you create a copy that won't affect the original?
**Answer:**

**Shallow copy:** (first level only)
```javascript
const copy = { ...original };
// OR
const copy = Object.assign({}, original);
```

**Deep copy:** (all levels)
```javascript
const copy = structuredClone(original);  // Modern, best
// OR
const copy = JSON.parse(JSON.stringify(original));  // Limitations
```

---

### Q8. What are the limitations of JSON.parse(JSON.stringify())?
**Answer:**
- ❌ Loses functions
- ❌ Loses `undefined` values
- ❌ Loses `Symbol` keys
- ❌ Converts `Date` to string
- ❌ Can't handle circular references

**Use `structuredClone()` instead** (modern, no limitations)

---

### Q9. What's the difference between shallow copy and deep copy?
**Answer:**

**Shallow copy:** Copies first level only. Nested objects still share reference.
```javascript
const shallow = { ...original };
shallow.nested.value = "Changed";  // Affects original!
```

**Deep copy:** Copies all levels. Completely independent.
```javascript
const deep = structuredClone(original);
deep.nested.value = "Changed";  // Doesn't affect original
```

---

### Q10. Do arrays pass by value or reference?
**Answer:** Arrays are objects, so they pass by **reference** (copy of reference).
```javascript
function modify(arr) {
  arr.push(4);  // Affects original
}

const nums = [1, 2, 3];
modify(nums);
console.log(nums);  // [1, 2, 3, 4]
```

---

## 📌 null, undefined, not defined

### Q11. What is undefined?
**Answer:** `undefined` means a variable has been **declared** but **not assigned** a value. It's assigned automatically by JavaScript.
```javascript
let x;
console.log(x);  // undefined
```

---

### Q12. Where does undefined come from?
**Answer:** undefined comes from:
1. Uninitialized variables
2. Missing function parameters
3. Functions with no return statement
4. Accessing non-existent object properties
5. Array holes

---

### Q13. What is null?
**Answer:** `null` represents the **intentional absence** of any value. It's assigned manually by developers to indicate "no value" or "empty".
```javascript
let user = null;  // Intentionally empty
```

---

### Q14. What is not defined?
**Answer:** "not defined" means a variable was **never declared**. Accessing it throws a **ReferenceError**.
```javascript
console.log(nonExistent);  // ReferenceError: nonExistent is not defined
```

It's an **error**, not a value like `undefined` or `null`.

---

### Q15. What's the difference between null and undefined?
**Answer:**

| Feature | undefined | null |
|---------|-----------|------|
| **Meaning** | Not assigned | Intentionally empty |
| **Assignment** | Automatic (by JS) | Manual (by developer) |
| **typeof** | "undefined" | "object" (bug!) |
| **Use** | Default state | Explicit "no value" |

---

### Q16. Why does typeof null return "object"?
**Answer:** This is a **historic bug** in JavaScript from the beginning. `null` is NOT an object, but `typeof` says it is. The bug can't be fixed without breaking existing code.
```javascript
typeof null  // "object" (BUG!)
```

---

### Q17. How do you check for both null and undefined?
**Answer:** Use **loose equality** (`==`):
```javascript
if (value == null) {
  // Catches BOTH null AND undefined
}
```

**Why it works:** `null == undefined` is `true`

---

### Q18. What's the difference between == and === with null/undefined?
**Answer:**

**Loose equality (==):**
```javascript
null == undefined   // true
null == null        // true
undefined == undefined  // true
```

**Strict equality (===):**
```javascript
null === undefined  // false
null === null       // true
undefined === undefined  // true
```

---

### Q19. What is nullish coalescing (??)?
**Answer:** The nullish coalescing operator (`??`) returns the right side if the left is `null` or `undefined`.
```javascript
let x = null;
console.log(x ?? "default");  // "default"

let y = 0;
console.log(y ?? "default");  // 0 (not null/undefined)
```

**Difference from ||:**
- `??` only checks for `null`/`undefined`
- `||` treats `0`, `""`, `false` as falsy

---

### Q20. Can you use typeof to safely check for not defined variables?
**Answer:** **YES**. `typeof` with undeclared variables returns `"undefined"` without throwing an error.
```javascript
if (typeof maybeUndeclared === "undefined") {
  // Safe - doesn't throw ReferenceError
}
```

This is the only safe way to check if a variable exists without try-catch.

---

## 🔢 Output-Based Questions

### Q21. What will be the output?
```javascript
let x = 10;
let y = x;
y = 20;
console.log(x);
```

**Answer:** `10`

**Explanation:** Primitives pass by value. `y` is a copy. Changing `y` doesn't affect `x`.

---

### Q22. What will be the output?
```javascript
function change(obj) {
  obj.name = "Changed";
}

const person = { name: "Manoj" };
change(person);
console.log(person.name);
```

**Answer:** `Changed`

**Explanation:** Objects pass by reference. Modifying `obj.name` affects the original object.

---

### Q23. What will be the output?
```javascript
function reassign(obj) {
  obj = { name: "New" };
}

const person = { name: "Manoj" };
reassign(person);
console.log(person.name);
```

**Answer:** `Manoj`

**Explanation:** Reassignment doesn't affect original. Local parameter points to new object, but original remains unchanged.

---

### Q24. What will be the output?
```javascript
const original = {
  name: "Manoj",
  address: { city: "Bangalore" }
};

const copy = { ...original };
copy.address.city = "Mumbai";

console.log(original.address.city);
```

**Answer:** `Mumbai`

**Explanation:** Spread operator creates shallow copy. Nested objects still share reference.

---

### Q25. What will be the output?
```javascript
let a;
let b = null;

console.log(a);
console.log(b);
console.log(typeof a);
console.log(typeof b);
```

**Answer:**
```
undefined
null
undefined
object
```

**Explanation:** 
- `a` is undefined (not assigned)
- `b` is null (intentionally empty)
- `typeof null` returns "object" (bug)

---

### Q26. What will be the output?
```javascript
console.log(null == undefined);
console.log(null === undefined);
```

**Answer:**
```
true
false
```

**Explanation:**
- Loose equality: `null == undefined` is `true`
- Strict equality: `null === undefined` is `false`

---

### Q27. What will be the output?
```javascript
function test() {
  // No return
}

const result = test();
console.log(result);
```

**Answer:** `undefined`

**Explanation:** Functions without return statement return `undefined`.

---

### Q28. What will be the output?
```javascript
const obj = { name: "Manoj" };
console.log(obj.age);
```

**Answer:** `undefined`

**Explanation:** Accessing non-existent property returns `undefined`.

---

### Q29. What will be the output?
```javascript
let x = 0;
let y = null;

console.log(x ?? "default");
console.log(y ?? "default");
console.log(x || "default");
console.log(y || "default");
```

**Answer:**
```
0
default
default
default
```

**Explanation:**
- `??` only checks for `null`/`undefined`
- `||` treats `0` and `null` as falsy

---

### Q30. What will happen?
```javascript
console.log(typeof undeclaredVariable);
console.log(undeclaredVariable);
```

**Answer:**
```
undefined
ReferenceError: undeclaredVariable is not defined
```

**Explanation:**
- `typeof` with undeclared variable returns "undefined" (safe)
- Accessing undeclared variable throws ReferenceError

---

## 🎯 Summary - Must Know Points

**Pass by Value/Reference:**
1. Primitives pass by value (copy)
2. Objects pass by reference (copy of reference)
3. JavaScript is always pass by value (of reference for objects)
4. Mutation affects original, reassignment doesn't
5. Shallow copy: `{...obj}`, deep copy: `structuredClone()`

**null, undefined, not defined:**
6. undefined: declared but not assigned (automatic)
7. null: intentionally empty (manual)
8. not defined: never declared (ReferenceError)
9. `typeof null` is "object" (historic bug)
10. Use `== null` to check for both null and undefined