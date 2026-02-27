# call, apply, bind - Interview Q&A

## 📌 Conceptual Questions

### Q1. What are call, apply, and bind methods?
**Answer:** call, apply, and bind are methods available on all JavaScript functions that allow you to **explicitly set the `this` value** when calling a function.

- **call:** Invokes function immediately with comma-separated arguments
- **apply:** Invokes function immediately with array of arguments
- **bind:** Returns new function with `this` bound (doesn't invoke immediately)

---

### Q2. What is the difference between call and apply?
**Answer:**

| Feature | call | apply |
|---------|------|-------|
| **Arguments** | Comma-separated | Array |
| **Syntax** | `func.call(obj, a, b, c)` | `func.apply(obj, [a, b, c])` |
| **Invokes** | ✅ Immediately | ✅ Immediately |

**Example:**
```javascript
func.call(obj, 1, 2, 3);      // call
func.apply(obj, [1, 2, 3]);   // apply
```

---

### Q3. What does bind return?
**Answer:** bind returns a **new function** with `this` permanently bound to the specified object. It does NOT invoke the function immediately.
```javascript
const boundFunc = func.bind(obj);
// boundFunc is a new function
boundFunc();  // Call it later
```

---

### Q4. When would you use call over apply?
**Answer:** Use **call** when:
- You have **few arguments** (easier to write)
- Arguments are **separate values**
- You want to invoke immediately

Use **apply** when:
- You have **array of arguments**
- Number of arguments is **dynamic** or **unknown**

---

### Q5. When would you use bind over call/apply?
**Answer:** Use **bind** when:
- You want to **call the function later**
- You need a **callback** with fixed `this`
- You want to use in **event handlers**
- You want **partial application** (pre-fill arguments)
```javascript
button.addEventListener('click', func.bind(obj));
```

---

### Q6. What is method borrowing?
**Answer:** Method borrowing is the technique of using a method from one object on a different object using call, apply, or bind.
```javascript
const person1 = {
  name: "Manoj",
  greet() {
    console.log(`Hello, ${this.name}!`);
  }
};

const person2 = { name: "Alice" };

// Borrow person1's greet for person2
person1.greet.call(person2);  // "Hello, Alice!"
```

---

### Q7. Do arrow functions work with call, apply, and bind?
**Answer:** **NO**. Arrow functions **always use lexical `this`** and ignore call, apply, and bind.
```javascript
const arrow = () => console.log(this);

const obj = { name: "Test" };
arrow.call(obj);   // Doesn't work! Uses lexical 'this'
arrow.apply(obj);  // Doesn't work!
arrow.bind(obj)(); // Doesn't work!
```

**Why:** Arrow functions don't have their own `this`.

---

### Q8. What is partial application?
**Answer:** Partial application is the technique of **pre-filling some arguments** of a function using bind, creating a specialized version of that function.
```javascript
function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2);
const triple = multiply.bind(null, 3);

console.log(double(5));  // 10 (2 * 5)
console.log(triple(5));  // 15 (3 * 5)
```

---

### Q9. Can you rebind a bound function?
**Answer:** **NO**. Once a function is bound, its `this` is **permanent** and cannot be changed, even with another call/apply/bind.
```javascript
const boundOnce = func.bind(obj1);
const boundTwice = boundOnce.bind(obj2);

boundTwice();  // Still uses obj1, not obj2!
```

---

### Q10. What happens if you pass null or undefined as thisArg?
**Answer:**

**Non-strict mode:** `null` or `undefined` becomes **global object** (window)
**Strict mode:** `this` stays `null` or `undefined`
```javascript
function test() {
  console.log(this);
}

test.call(null);  // Window (non-strict) or null (strict)
```

---

## 🔢 Output-Based Questions

### Q11. What will be the output?
```javascript
function greet() {
  console.log(`Hello, ${this.name}!`);
}

const person = { name: "Manoj" };

greet.call(person);
```

**Answer:** `Hello, Manoj!`

**Explanation:** call sets `this` to `person` object and invokes immediately.

---

### Q12. What will be the output?
```javascript
function sum(a, b, c) {
  return a + b + c;
}

const result = sum.apply(null, [10, 20, 30]);
console.log(result);
```

**Answer:** `60`

**Explanation:** apply passes array elements as individual arguments. `10 + 20 + 30 = 60`.

---

### Q13. What will be the output?
```javascript
function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2);
console.log(double(5));
console.log(double(10));
```

**Answer:**
```
10
20
```

**Explanation:** bind pre-fills first argument as 2. `double(5)` = `2 * 5`, `double(10)` = `2 * 10`.

---

### Q14. What will be the output?
```javascript
const obj = { name: "Object" };

const arrow = () => {
  console.log(this.name);
};

arrow.call(obj);
```

**Answer:** `undefined` (or global name if exists)

**Explanation:** Arrow functions ignore call/apply/bind. They always use lexical `this`.

---

### Q15. What will be the output?
```javascript
const person1 = {
  name: "Manoj",
  greet() {
    console.log(this.name);
  }
};

const person2 = { name: "Alice" };

person1.greet.call(person2);
```

**Answer:** `Alice`

**Explanation:** call sets `this` to `person2`, so `this.name` is "Alice".

---

### Q16. What will be the output?
```javascript
function introduce(city, age) {
  console.log(`${this.name}, ${age}, ${city}`);
}

const person = { name: "Kumar" };

introduce.call(person, "Bangalore", 25);
introduce.apply(person, ["Mumbai", 30]);
```

**Answer:**
```
Kumar, 25, Bangalore
Kumar, 30, Mumbai
```

**Explanation:** 
- call: comma-separated arguments
- apply: array of arguments
Both set `this` to `person`.

---

### Q17. What will be the output?
```javascript
const numbers = [5, 10, 2, 8];
const max = Math.max.apply(null, numbers);
console.log(max);
```

**Answer:** `10`

**Explanation:** apply spreads array as individual arguments to Math.max.

---

### Q18. What will be the output?
```javascript
function test() {
  return this.value;
}

const obj = { value: 100 };

const bound = test.bind(obj);
console.log(bound());

const rebound = bound.bind({ value: 200 });
console.log(rebound());
```

**Answer:**
```
100
100
```

**Explanation:** Once bound, `this` is permanent. Second bind has no effect.

---

### Q19. What will be the output?
```javascript
function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: "Manoj" };

const sayHello = greet.bind(person, "Hello");
sayHello("!");
sayHello(".");
```

**Answer:**
```
Hello, Manoj!
Hello, Manoj.
```

**Explanation:** bind pre-fills `this` and first argument ("Hello"). Second argument passed when calling.

---

### Q20. What will be the output?
```javascript
function showArgs() {
  const args = Array.prototype.slice.call(arguments);
  console.log(args);
}

showArgs(1, 2, 3, 4);
```

**Answer:** `[1, 2, 3, 4]`

**Explanation:** Borrows `slice` method from Array to convert `arguments` (array-like) to real array.

---

## 🎯 Summary - Must Know Points

1. **call:** `func.call(obj, a, b, c)` - Invokes immediately, comma-separated args
2. **apply:** `func.apply(obj, [a, b, c])` - Invokes immediately, array args
3. **bind:** `func.bind(obj, a, b)` - Returns function, doesn't invoke
4. **Purpose:** Explicitly set `this` value
5. **Method borrowing:** Use methods from one object on another
6. **Partial application:** Pre-fill arguments with bind
7. **Arrow functions:** Ignore call/apply/bind (lexical `this`)
8. **Permanent binding:** Bound functions can't be rebound
9. **Use cases:** Callbacks, event handlers, method borrowing
10. **Modern alternative:** Spread operator replaces some apply use cases