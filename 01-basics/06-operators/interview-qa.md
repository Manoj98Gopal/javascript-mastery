# Interview Questions - Operators

## Q1: What is the difference between `==` and `===`?

**Answer:**

**`==` (Loose Equality):**
- Performs type coercion
- Compares values after converting types

**`===` (Strict Equality):**
- No type coercion
- Compares both value AND type
- **Always preferred**
```javascript
5 == "5"       // true (string converted to number)
5 === "5"      // false (different types)

0 == false     // true (both converted to 0)
0 === false    // false (number vs boolean)

null == undefined   // true (special rule)
null === undefined  // false (different types)
```

**Best Practice:** Always use `===` to avoid unexpected behavior.

---

## Q2: What's the output?
```javascript
let x = 5;
console.log(x++);
console.log(x);
console.log(++x);
console.log(x);
```

**Answer:**
```
5
6
7
7
```

**Reason:**
- `x++` (post-increment): returns 5, then increments to 6
- Second log: x is now 6
- `++x` (pre-increment): increments to 7, then returns 7
- Fourth log: x is still 7

---

## Q3: What do logical operators actually return?

**Answer:**  
Logical operators (`&&`, `||`) return **actual values**, not just true/false!

**`&&` (AND) - Returns first falsy OR last value:**
```javascript
"hello" && "world"    // "world" (no falsy, returns last)
"hello" && 0          // 0 (first falsy)
0 && "hello"          // 0 (first falsy, short-circuits)
```

**`||` (OR) - Returns first truthy value:**
```javascript
"hello" || "world"    // "hello" (first truthy)
0 || "world"          // "world" (first truthy)
"" || "default"       // "default" (first truthy)
```

**Practical use:**
```javascript
// Default values
let name = userName || "Guest";

// Conditional execution
user && user.greet();
```

---

## Q4: What's the difference between `??` and `||`?

**Answer:**

**`||` (OR):**
- Returns first truthy value
- Treats `0`, `""`, `false` as falsy

**`??` (Nullish Coalescing):**
- Returns first defined value (not null/undefined)
- Only treats `null` and `undefined` as "nullish"
```javascript
0 || 100              // 100 (0 is falsy)
0 ?? 100              // 0 (0 is defined)

"" || "default"       // "default" ("" is falsy)
"" ?? "default"       // "" ("" is defined)

false || "default"    // "default" (false is falsy)
false ?? "default"    // false (false is defined)

null || "default"     // "default"
null ?? "default"     // "default"
```

**Use `??` when `0`, `""`, or `false` are valid values!**

---

## Q5: What's the output?
```javascript
console.log(2 + 3 * 4);
console.log((2 + 3) * 4);
```

**Answer:**
```
14
20
```

**Reason:**  
Operator precedence: `*` has higher precedence than `+`
- First: `3 * 4 = 12`, then `2 + 12 = 14`
- Second: Parentheses have highest precedence: `(2 + 3) = 5`, then `5 * 4 = 20`

---

## Q6: What's the output?
```javascript
let a = 10;
let b = a++ + ++a;
console.log(b);
console.log(a);
```

**Answer:**
```
22
12
```

**Reason:**
1. `a++`: returns 10, then a becomes 11
2. `++a`: a becomes 12, returns 12
3. `b = 10 + 12 = 22`
4. `a = 12`

---

## Q7: What is optional chaining and when should you use it?

**Answer:**  
Optional chaining (`?.`) safely accesses nested object properties without throwing errors if a property doesn't exist.
```javascript
let user = {
    name: "Alice",
    address: {
        city: "NYC"
    }
};

// Without optional chaining
// let zip = user.contact.phone;  // ❌ TypeError

// With optional chaining
let phone = user.contact?.phone;  // undefined (no error!)
let city = user.address?.city;    // "NYC"
let zip = user.address?.zip;      // undefined
```

**Also works with:**
```javascript
// Methods
user.greet?.();  // Only calls if greet exists

// Arrays
let first = arr?.[0];  // Safe array access
```

**When to use:** When you're not sure if a property or method exists.

---

## Q8: What does the delete operator do?

**Answer:**  
The `delete` operator removes a property from an object.
```javascript
let obj = {
    name: "Alice",
    age: 25
};

delete obj.age;
console.log(obj);  // { name: "Alice" }

// Returns true if successful
console.log(delete obj.name);  // true
```

**Cannot delete:**
- Variables declared with `var`, `let`, `const`
- Function declarations
- Built-in object properties
```javascript
let x = 5;
delete x;  // false (doesn't work on variables)

delete Math.PI;  // false (cannot delete built-in properties)
```

---

## Q9: What's the output?
```javascript
console.log(10 - 5 - 2);
console.log(2 ** 3 ** 2);
```

**Answer:**
```
3
512
```

**Reason:**
- Subtraction is left-to-right: `(10 - 5) - 2 = 5 - 2 = 3`
- Exponentiation is right-to-left: `2 ** (3 ** 2) = 2 ** 9 = 512`

---

## Q10: What's the output?
```javascript
let x = 5;
console.log(x += 3);
console.log(x *= 2);
console.log(x);
```

**Answer:**
```
8
16
16
```

**Reason:**
- `x += 3` → `x = x + 3 = 5 + 3 = 8` (and returns 8)
- `x *= 2` → `x = x * 2 = 8 * 2 = 16` (and returns 16)
- Final x is 16

---

## Q11: True or False Questions

**Q1:** `typeof null` returns "null"  
**A:** False. Returns "object" (JavaScript bug)

**Q2:** `===` performs type coercion  
**A:** False. `===` does NOT perform type coercion

**Q3:** `&&` always returns true or false  
**A:** False. Returns the actual value of an operand

**Q4:** Pre-increment `++x` increments after returning value  
**A:** False. Increments BEFORE returning

**Q5:** `??` and `||` work exactly the same way  
**A:** False. `??` only checks null/undefined

**Q6:** Delete can remove variables declared with let  
**A:** False. Cannot delete let/const variables

**Q7:** Operator `**` is for multiplication  
**A:** False. `**` is for exponentiation (power)

**Q8:** `?.` throws an error if property doesn't exist  
**A:** False. Returns undefined (no error)

---

## Q12: What's the output?
```javascript
console.log(true && false || true);
console.log(true || false && false);
```

**Answer:**
```
true
true
```

**Reason:**  
`&&` has higher precedence than `||`
- First: `(true && false) || true` → `false || true` → `true`
- Second: `true || (false && false)` → `true || false` → `true`

---

## Q13: What will this return?
```javascript
function test() {
    return
        "Hello World";
}
console.log(test());
```

**Answer:** `undefined`

**Reason:**  
JavaScript automatically inserts a semicolon after `return`, so it becomes:
```javascript
return;
"Hello World";  // Never executed
```

**Fix:**
```javascript
return "Hello World";
// or
return (
    "Hello World"
);
```

---

## Q14: What's the output?
```javascript
let a = 1, b = 2, c = 3;
console.log(a = b = c);
console.log(a, b, c);
```

**Answer:**
```
3
3 3 3
```

**Reason:**  
Assignment is right-to-left:
- `c` is 3
- `b = c` → `b = 3`
- `a = b` → `a = 3`
- Expression returns rightmost value (3)

---

## Q15: What does this operator do: `%`?

**Answer:**  
Modulus operator returns the **remainder** of division.
```javascript
10 % 3   // 1 (10 ÷ 3 = 3 remainder 1)
15 % 4   // 3 (15 ÷ 4 = 3 remainder 3)
20 % 5   // 0 (20 ÷ 5 = 4 remainder 0)
```

**Common uses:**
```javascript
// Check if even or odd
num % 2 === 0  // Even
num % 2 !== 0  // Odd

// Circular/cyclical operations
index = (index + 1) % arrayLength;  // Wrap around
```

---

## Q16: What's the output?
```javascript
console.log(typeof (5 + "3"));
console.log(typeof ("5" - 3));
```

**Answer:**
```
string
number
```

**Reason:**
- `5 + "3"` → `"53"` (string concatenation) → type is "string"
- `"5" - 3` → `2` (numeric conversion) → type is "number"

---

## Q17: What's the output?
```javascript
let obj1 = { value: 10 };
let obj2 = { value: 10 };

console.log(obj1 == obj2);
console.log(obj1 === obj2);

let obj3 = obj1;
console.log(obj1 === obj3);
```

**Answer:**
```
false
false
true
```

**Reason:**  
Objects are compared by **reference**, not value.
- `obj1` and `obj2` are different objects (different references)
- `obj3 = obj1` copies the reference (same object)

---

## Q18: What's the output?
```javascript
console.log(5 ** 2);
console.log(2 ** 3);
console.log(3 ** 3);
```

**Answer:**
```
25
8
27
```

**Reason:**  
`**` is the exponentiation operator (power):
- `5 ** 2` = 5² = 25
- `2 ** 3` = 2³ = 8
- `3 ** 3` = 3³ = 27

---

## Q19: What's the output?
```javascript
let x = 10;
let y = ++x + x++ + x;
console.log(y);
console.log(x);
```

**Answer:**
```
34
12
```

**Reason:**
1. `++x`: x becomes 11, returns 11
2. `x++`: returns 11, x becomes 12
3. `x`: returns 12
4. `y = 11 + 11 + 12 = 34`
5. Final x is 12

---

## Q20: What's the ternary operator and when should you use it?

**Answer:**  
The ternary operator is a shorthand for simple `if-else` statements.

**Syntax:**
```javascript
condition ? valueIfTrue : valueIfFalse
```

**Examples:**
```javascript
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";  // "Yes"

let status = isLoggedIn ? "Welcome" : "Please login";
```

**When to use:**
- ✅ Simple conditions with simple results
- ✅ Assigning values based on condition
- ❌ Complex nested conditions (use if-else instead)

**Don't overuse:**
```javascript
// ❌ Hard to read
let result = a