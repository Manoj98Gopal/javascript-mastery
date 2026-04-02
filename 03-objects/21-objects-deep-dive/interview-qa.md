# 🎯 Topic 28: Objects Deep Dive — Interview Q&A

---

## 📌 Section 1: Conceptual Questions

---

**Q1. What is an object in JavaScript?**

An object is a collection of **key-value pairs**. Keys are always strings (or Symbols), and values can be anything — numbers, strings, arrays, functions, or other objects.

```javascript
const person = {
  name: "Alice",   // key: "name", value: "Alice"
  age: 30,         // key: "age", value: 30
  greet() {}       // key: "greet", value: a function (called a "method")
};
```

---

**Q2. Is everything in JavaScript an object?**

**No, this is a common misconception.** JavaScript has two main categories:

- **Primitives** (NOT objects): `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`
- **Objects**: plain objects `{}`, arrays `[]`, functions, Date, etc.

However, primitives can *temporarily behave* like objects because JavaScript does **auto-boxing** (wraps them in an object temporarily when you call methods like `"hello".toUpperCase()`).

> ✅ Correct statement: "Almost everything in JS *behaves* like an object due to auto-boxing, but primitives are NOT objects."

---

**Q3. What is `typeof null === "object"` in JavaScript? Is null an object?**

This is a **famous historical bug** in JavaScript. `null` is NOT an object — it is a primitive. But `typeof null` returns `"object"` because of an error in JavaScript's original implementation that was never fixed to avoid breaking existing code.

```javascript
typeof null // "object" ← bug, not reality
null instanceof Object // false ← proves null is NOT an object
```

---

**Q4. What is the difference between dot notation and bracket notation?**

| Dot Notation | Bracket Notation |
|--------------|-----------------|
| `person.name` | `person["name"]` |
| Simple property names only | Any string as key |
| Cannot use variables | Can use variables |
| Cannot use special chars | Can use special chars |

```javascript
const key = "name";
person.key    // ❌ undefined — looks for property named "key"
person[key]   // ✅ "Alice" — uses variable value "name"

person["user-age"]  // ✅ works
person.user-age     // ❌ SyntaxError
```

---

**Q5. What are the 5 ways to create objects in JavaScript?**

1. **Object literal** `{}` — most common, simple syntax
2. **Constructor function** — use `new`, old way before ES6
3. **`Object.create(proto)`** — set prototype manually
4. **ES6 Class** — modern, clean syntax
5. **Factory function** — regular function that returns an object, no `new` needed

---

**Q6. What is the difference between a factory function and a constructor function?**

| Feature | Constructor Function | Factory Function |
|---------|---------------------|-----------------|
| Uses `new` | ✅ Required | ❌ Not needed |
| `instanceof` works | ✅ Yes | ❌ No |
| Prototype sharing | ✅ Yes | ❌ Each copy is separate |
| Return value | Implicit | Explicit `return {}` |

```javascript
// Constructor
function PersonC(name) { this.name = name; }
const p1 = new PersonC("Alice");

// Factory
function createPerson(name) { return { name }; }
const p2 = createPerson("Alice");
```

---

**Q7. What does the `delete` operator do? What does it return?**

The `delete` operator **removes a property** from an object. It returns `true` if deletion was successful, `false` if not.

```javascript
const obj = { name: "Alice", age: 30 };
console.log(delete obj.age);  // true
console.log(obj.age);         // undefined

// delete cannot remove variables
const x = 10;
console.log(delete x); // false
```

---

**Q8. What is the difference between `in` operator and `hasOwnProperty`?**

- **`in`** — checks **own AND inherited** properties
- **`hasOwnProperty`** — checks **ONLY own** properties

```javascript
const obj = { name: "Alice" };

"name" in obj               // true (own property)
"toString" in obj           // true (inherited from Object.prototype)

obj.hasOwnProperty("name")      // true (own)
obj.hasOwnProperty("toString")  // false (not own, inherited)
```

> 🎯 **Interview Tip:** Always prefer `hasOwnProperty` when you want to check only the object's own properties.

---

## 📌 Section 2: Output-Based Questions

---

**Q9. What is the output?**

```javascript
const person = { name: "Alice" };
const key = "name";

console.log(person.key);
console.log(person[key]);
```

**Answer:**
```
undefined   ← looks for property literally named "key"
"Alice"     ← uses variable value "name"
```

---

**Q10. What is the output?**

```javascript
const obj = { a: 1, b: 2 };
delete obj.a;
console.log(obj.a);
console.log("a" in obj);
console.log(obj.hasOwnProperty("b"));
```

**Answer:**
```
undefined
false
true
```

---

**Q11. What is the output?**

```javascript
const a = { name: "Alice" };
const b = a;
b.name = "Bob";
console.log(a.name);
```

**Answer:**
```
"Bob"
```
**Reason:** `b = a` does NOT copy the object. Both `a` and `b` point to the **same object in memory**. Changing through `b` also changes `a`.

---

**Q12. What is the output?**

```javascript
const obj1 = { x: 1 };
const obj2 = { x: 1 };
console.log(obj1 == obj2);
console.log(obj1 === obj2);
console.log(obj1 === obj1);
```

**Answer:**
```
false
false
true
```
**Reason:** Objects are compared by **reference** (memory address), not by value. `obj1` and `obj2` have the same content but are stored at different places in memory.

---

**Q13. What is the output?**

```javascript
function Person(name) {
  this.name = name;
}

const p = Person("Alice"); // Missing 'new'!
console.log(p);
console.log(typeof p);
```

**Answer:**
```
undefined
"undefined"
```
**Reason:** Without `new`, `Person` is just a regular function that returns nothing (no `return` statement = `undefined`). Also `this` inside points to global scope, so `global.name = "Alice"` gets set — which is a bug!

---

**Q14. What is the output?**

```javascript
const name = "Alice";
const age = 30;
const person = { name, age };
console.log(person);
```

**Answer:**
```javascript
{ name: "Alice", age: 30 }
```
**Reason:** Property shorthand — when variable name matches property name, you can write just `{ name }` instead of `{ name: name }`.

---

**Q15. What is the output?**

```javascript
const key = "score";
const obj = {
  [key]: 100,
  [`${key}2`]: 200
};
console.log(obj.score);
console.log(obj.score2);
console.log(obj.key);
```

**Answer:**
```
100
200
undefined
```
**Reason:** `[key]` is a computed property name — uses the variable's value. `obj.key` looks for a property literally named `"key"`, which doesn't exist.

---

**Q16. What is the output?**

```javascript
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);
console.log(null instanceof Object);
```

**Answer:**
```
"object"   ← famous JS bug
"object"
"object"   ← arrays are objects!
false      ← null is NOT an Object despite typeof showing "object"
```

---

## 📌 Section 3: True / False Questions

---

**Q17. True or False: `typeof null === "object"` means null is an object.**

❌ **False.** This is a historical bug in JavaScript. `null` is a primitive. `null instanceof Object` returns `false`.

---

**Q18. True or False: You can use dot notation when the property key is stored in a variable.**

❌ **False.** You must use bracket notation: `obj[variable]`. Dot notation always looks for a literal property name.

---

**Q19. True or False: `delete` returns `true` when a property is successfully removed.**

✅ **True.**

---

**Q20. True or False: `"toString" in {}` returns false because toString is not in the object.**

❌ **False.** `in` checks inherited properties too. `toString` is inherited from `Object.prototype`, so `"toString" in {}` returns `true`.

---

**Q21. True or False: Two objects with the same content are equal when compared with `===`.**

❌ **False.** Objects are compared by reference. `{ a: 1 } === { a: 1 }` is `false` because they are different objects in memory.

---

**Q22. True or False: `{ name }` and `{ name: name }` are exactly the same thing.**

✅ **True.** This is called property shorthand (ES6 feature).

---

## 📌 Section 4: Code Fixing Challenges

---

**Q23. Fix the bug in this code:**

```javascript
const key = "username";
const user = { username: "Alice" };
console.log(user.key); // supposed to print "Alice"
```

**Fix:**
```javascript
const key = "username";
const user = { username: "Alice" };
console.log(user[key]); // ✅ "Alice" — use bracket notation with variable
```

---

**Q24. Fix the bug:**

```javascript
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

const myCar = Car("Toyota", "Camry");
console.log(myCar.brand); // TypeError!
```

**Fix:**
```javascript
const myCar = new Car("Toyota", "Camry"); // ✅ add 'new'
console.log(myCar.brand); // "Toyota"
```

---

**Q25. Fix the bug:**

```javascript
const person = { "first-name": "Alice", age: 30 };
console.log(person.first-name); // SyntaxError!
```

**Fix:**
```javascript
console.log(person["first-name"]); // ✅ use bracket notation for special chars
```

---

## 📌 Section 5: Tricky Interview Questions

---

**Q26. Can you add a property to a primitive string like a string variable?**

```javascript
let str = "hello";
str.newProp = "world";
console.log(str.newProp); // What is the output?
```

**Answer:** `undefined`

**Reason:** When you do `str.newProp = "world"`, JS temporarily wraps `str` in a String object (auto-boxing), adds the property to that temporary object, then throws it away. The next line creates a NEW temporary object which doesn't have `newProp`. So you get `undefined`.

---

**Q27. What is the difference between `Object.create(null)` and `{}`?**

```javascript
const obj1 = {};
const obj2 = Object.create(null);
```

- `{}` has `Object.prototype` in its prototype chain. It inherits methods like `toString`, `hasOwnProperty`, etc.
- `Object.create(null)` has **NO prototype**. It's a completely empty object with no inherited methods.

`Object.create(null)` is useful for creating **pure dictionaries/maps** with no prototype pollution.

---

**Q28. Why is checking `if (obj.key)` to see if a property exists sometimes wrong?**

```javascript
const settings = { darkMode: false, count: 0, name: "" };

if (settings.darkMode) { console.log("has darkMode"); }  // ❌ won't run (false is falsy)
if (settings.count) { console.log("has count"); }        // ❌ won't run (0 is falsy)
if (settings.name) { console.log("has name"); }          // ❌ won't run ("" is falsy)

// ✅ Correct way:
if ("darkMode" in settings) { console.log("has darkMode"); }  // runs!
if (settings.hasOwnProperty("count")) { console.log("has count"); }  // runs!
```

The property **exists** in all cases, but its values (`false`, `0`, `""`) are **falsy**, so the `if` check fails. Always use `in` or `hasOwnProperty` to check existence.

---

**Q29. What is the output and why?**

```javascript
const obj = {};
Object.defineProperty(obj, "secret", {
  value: 42,
  enumerable: false
});

console.log(obj.secret);          // ?
console.log(Object.keys(obj));    // ?
console.log("secret" in obj);     // ?
```

**Answer:**
```
42        ← can still read the value directly
[]        ← enumerable: false means it won't show in Object.keys()
true      ← 'in' operator still finds it
```

**Reason:** `enumerable: false` only hides the property from loops and `Object.keys()`, but you can still access it directly.

---

**Q30. What is the output?**

```javascript
const person = { name: "Alice" };
const copy = person;
const spread = { ...person };

person.name = "Bob";

console.log(copy.name);    // ?
console.log(spread.name);  // ?
```

**Answer:**
```
"Bob"    ← copy is same reference, changes with person
"Alice"  ← spread creates a new object, not affected
```

This is the difference between **reference copy** and **shallow copy** — which we'll cover deeply in Topic 31!

---

## 🚀 Quick Summary Cheatsheet

| Concept | Key Point |
|---------|-----------|
| Object | Collection of key-value pairs |
| Primitives | NOT objects (string, number, boolean, null, undefined, symbol, bigint) |
| typeof null | "object" — famous JS bug |
| Dot vs Bracket | Bracket for variables and special keys |
| `in` | Checks own + inherited properties |
| `hasOwnProperty` | Checks only own properties |
| `delete` | Returns true on success |
| Shorthand `{name}` | Same as `{name: name}` |
| Computed keys `{[key]: val}` | Dynamic property names |
| Objects compared by | Reference, not value |
| Auto-boxing | Primitives temporarily act as objects |