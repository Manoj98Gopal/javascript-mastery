# Interview Questions - Type Coercion & Truthy/Falsy

## Q1: What is type coercion in JavaScript?

**Answer:**  
Type coercion is the automatic or manual conversion of values from one data type to another.

**Two types:**
1. **Explicit (Manual):** Programmer manually converts types
2. **Implicit (Automatic):** JavaScript automatically converts types

**Example:**
```javascript
// Explicit
Number("123");     // 123 (manual conversion)

// Implicit
"5" + 3;           // "53" (automatic conversion to string)
"5" - 3;           // 2 (automatic conversion to number)
```

---

## Q2: What's the difference between explicit and implicit coercion?

**Answer:**

| Feature | Explicit | Implicit |
|---------|----------|----------|
| **Definition** | Manual conversion | Automatic conversion |
| **Control** | Programmer controls | JavaScript decides |
| **Methods** | Number(), String(), Boolean() | Operators (+, -, ==, etc.) |
| **Clarity** | Clear intent | Can be confusing |

**Examples:**
```javascript
// Explicit
let num = Number("123");    // Clear: converting string to number

// Implicit
let result = "5" + 3;       // Less clear: JavaScript decides to concatenate
```

---

## Q3: How many falsy values exist in JavaScript?

**Answer:**  
There are **exactly 8 falsy values**:

1. `false`
2. `0`
3. `-0`
4. `0n` (BigInt zero)
5. `""` (empty string)
6. `null`
7. `undefined`
8. `NaN`

**Everything else is truthy!**
```javascript
Boolean(false);        // false
Boolean(0);            // false
Boolean(-0);           // false
Boolean(0n);           // false
Boolean("");           // false
Boolean(null);         // false
Boolean(undefined);    // false
Boolean(NaN);          // false
```

---

## Q4: Are empty arrays and objects truthy or falsy?

**Answer:**  
**Truthy!** This is a common interview trap.
```javascript
Boolean([]);           // true (truthy!)
Boolean({});           // true (truthy!)
```

**Why it's confusing:**
```javascript
if ([]) {
    console.log("Empty array is truthy!");  // Executes
}

// But array length can be falsy
let arr = [];
if (arr.length) {
    console.log("Won't execute");  // arr.length = 0 (falsy)
}
```

---

## Q5: What will this output?
```javascript
console.log("5" + 3);
console.log("5" - 3);
console.log("5" * "2");
```

**Answer:**
```
"53"
2
10
```

**Reason:**
- `+` with string → concatenation → `"5" + "3" = "53"`
- `-`, `*`, `/` → numeric conversion → `5 - 3 = 2`, `5 * 2 = 10`

---

## Q6: What's the output?
```javascript
console.log(1 + 2 + "3");
console.log("1" + 2 + 3);
```

**Answer:**
```
"33"
"123"
```

**Reason:**
- First: `1 + 2 = 3`, then `3 + "3" = "33"`
- Second: `"1" + 2 = "12"`, then `"12" + 3 = "123"`

**Order matters!**

---

## Q7: What's the difference between `==` and `===`?

**Answer:**

**`==` (Loose Equality):**
- Performs type coercion
- Compares values after converting types

**`===` (Strict Equality):**
- No type coercion
- Compares both value AND type
```javascript
5 == "5";              // true (string converted to number)
5 === "5";             // false (different types)

0 == false;            // true (both converted to same type)
0 === false;           // false (number vs boolean)

null == undefined;     // true (special rule)
null === undefined;    // false (different types)
```

**Always prefer `===`** to avoid unexpected behavior!

---

## Q8: Why is `null == undefined` true but `null === undefined` false?

**Answer:**  
This is a **special rule** in JavaScript's `==` operator.
```javascript
null == undefined;     // true (special case in spec)
null === undefined;    // false (different types)
```

**Reason:**
- `==` has a special rule: `null` and `undefined` are equal to each other
- They are NOT equal to anything else
- `===` checks types strictly, so it's false

**Practical use:**
```javascript
if (value == null) {
    // Checks for both null AND undefined
}

// Equivalent to:
if (value === null || value === undefined) {
    // More explicit
}
```

---

## Q9: What will this output?
```javascript
console.log(Boolean("0"));
console.log(Boolean("false"));
console.log(Boolean(" "));
```

**Answer:**
```
true
true
true
```

**Reason:**  
**All non-empty strings are truthy!** Even `"0"`, `"false"`, and strings with just spaces.

**Common trap:**
```javascript
let value = "0";
if (value) {
    console.log("This executes!");  // String "0" is truthy
}

// If you want to check the number value:
if (Number(value)) {
    console.log("Won't execute");  // Number("0") = 0 (falsy)
}
```

---

## Q10: What's the output?
```javascript
console.log([] + []);
console.log([] + {});
console.log({} + []);
```

**Answer:**
```
""
"[object Object]"
"[object Object]"
```

**Reason:**
- `[] + []` → both convert to empty strings → `"" + "" = ""`
- `[] + {}` → `"" + "[object Object]" = "[object Object]"`
- `{} + []` → `"[object Object]" + "" = "[object Object]"`

---

## Q11: What's the difference between `Number()` and `parseInt()`?

**Answer:**

**Number():**
- Converts entire string
- Returns NaN if ANY non-numeric character

**parseInt():**
- Parses until non-numeric
- Returns number before non-numeric character
```javascript
Number("123");         // 123
Number("123abc");      // NaN

parseInt("123");       // 123
parseInt("123abc");    // 123 (stops at 'a')
parseInt("abc123");    // NaN (starts with letter)
```

**Always specify radix with parseInt:**
```javascript
parseInt("08", 10);    // 8 (base 10)
parseInt("FF", 16);    // 255 (base 16/hexadecimal)
```

---

## Q12: What do logical operators actually return?

**Answer:**  
Logical operators (`||`, `&&`) return **actual values**, not just true/false!

**`||` (OR) - Returns first truthy value:**
```javascript
"hello" || "world";    // "hello" (first truthy)
"" || "world";         // "world" (first truthy)
0 || 100;              // 100 (first truthy)

// Common pattern: default values
let name = userName || "Guest";
```

**`&&` (AND) - Returns first falsy OR last value:**
```javascript
"hello" && "world";    // "world" (no falsy, returns last)
"" && "world";         // "" (first falsy)
0 && 100;              // 0 (first falsy)

// Common pattern: conditional access
user && user.name;     // Only access .name if user exists
```

---

## Q13: What's the output?
```javascript
console.log(null + 5);
console.log(undefined + 5);
```

**Answer:**
```
5
NaN
```

**Reason:**
- `null` converts to `0` → `0 + 5 = 5`
- `undefined` converts to `NaN` → `NaN + 5 = NaN`

---

## Q14: True or False Questions

**Q1:** Empty string `""` is falsy  
**A:** True

**Q2:** Empty array `[]` is falsy  
**A:** False (it's truthy!)

**Q3:** String `"0"` is falsy  
**A:** False (it's truthy!)

**Q4:** `NaN == NaN` is true  
**A:** False (NaN is never equal to itself)

**Q5:** `0 == false` is true  
**A:** True (with `==`, not `===`)

**Q6:** `null` converts to 0 when coerced to number  
**A:** True

**Q7:** `undefined` converts to 0 when coerced to number  
**A:** False (converts to NaN)

**Q8:** `+` operator always performs addition  
**A:** False (performs concatenation with strings)

---

## Q15: What's the output?
```javascript
console.log(!!"");
console.log(!!" ");
console.log(!!"false");
```

**Answer:**
```
false
true
true
```

**Reason:**
- `!!""` → `false` (empty string is falsy)
- `!!" "` → `true` (string with space is truthy)
- `!!"false"` → `true` (string "false" is truthy)

---

## Q16: How do you convert a value to boolean?

**Answer:**  
Three common ways:

**1. Boolean() function:**
```javascript
Boolean(1);            // true
Boolean(0);            // false
```

**2. Double negation (!!):**
```javascript
!!1;                   // true
!!0;                   // false
```

**3. Implicit coercion in logical context:**
```javascript
if (value) { }         // Converts value to boolean
value ? a : b;         // Ternary converts to boolean
```

**Best practice:** Be explicit with `Boolean()` for clarity.

---

## Q17: What's wrong with this code?
```javascript
let value = "0";

if (value) {
    console.log("Has value");
}
```

**Answer:**  
The string `"0"` is truthy, so this always executes even though you might want to check if the numeric value is non-zero.

**Better:**
```javascript
// If checking for non-empty string:
if (value !== "") { }

// If checking for non-zero number:
if (Number(value) !== 0) { }

// If checking for any truthy number:
if (Number(value)) { }
```

---

## Q18: What's the output?
```javascript
console.log([1] - [2]);
console.log([1, 2] - [3, 4]);
```

**Answer:**
```
-1
NaN
```

**Reason:**
- `[1] - [2]` → `"1" - "2"` → `1 - 2 = -1`
- `[1, 2] - [3, 4]` → `"1,2" - "3,4"` → `NaN - NaN = NaN`

---

## Q19: Best Practices Question

**Which is better and why?**
```javascript
// Option A
if (value == true) { }

// Option B
if (value === true) { }

// Option C
if (value) { }
```

**Answer:** **It depends on what you're checking!**

**Option A (❌ Avoid):**
```javascript
if (value == true) { }
// Problem: type coercion
// "1" == true → true (unexpected!)
```

**Option B (✅ Good for explicit true check):**
```javascript
if (value === true) { }
// Only true if value is exactly boolean true
```

**Option C (✅ Best for truthy check):**
```javascript
if (value) { }
// Checks if value is truthy
// Most common and idiomatic
```

---

## Q20: What's the output?
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
- `5 + "3"` → `"53"` (concatenation) → type is `"string"`
- `"5" - 3` → `2` (numeric conversion) → type is `"number"`

---

## Q21: Fix this code to check if array is empty
```javascript
// Buggy code
let arr = [];

if (arr) {
    console.log("Array has items");  // Always executes!
}
```

**Answer:**
```javascript
let arr = [];

// ✅ Correct way 1: Check length
if (arr.length > 0) {
    console.log("Array has items");
}

// ✅ Correct way 2: Check length is truthy
if (arr.length) {
    console.log("Array has items");
}
```

**Reason:**  
Empty arrays `[]` are truthy, but `arr.length` is `0` (falsy).

---

## Q22: What's the output?
```javascript
console.log(0 || 1 && 2);
console.log((0 || 1) && 2);
```

**Answer:**
```
2
2
```

**Reason:**
- First: `&&` has higher precedence → `1 && 2 = 2`, then `0 || 2 = 2`
- Second: `(0 || 1) = 1`, then `1 && 2 = 2`

---

## Q23: Nullish Coalescing (??) vs OR (||)

**What's the difference?**

**Answer:**

**|| (OR):**
- Returns first truthy value
- Treats `0`, `""`, `false` as falsy

**?? (Nullish Coalescing):**
- Returns first defined value (not null/undefined)
- Only treats `null` and `undefined` as "nullish"
```javascript
0 || 100;              // 100 (0 is falsy)
0 ?? 100;              // 0 (0 is defined)

"" || "default";       // "default" ("" is falsy)
"" ?? "default";       // "" ("" is defined)

null || "default";     // "default"
null ?? "default";     // "default"

undefined || "default"; // "default"
undefined ?? "default"; // "default"
```

**Use `??` when `0`, `""`, or `false` are valid values!**

---

## Q24: Advanced - What's the output?
```javascript
let a = [1, 2, 3];
let b = [1, 2, 3];

console.log(a == b);
console.log(a === b);
console.log(a == a);
```

**Answer:**
```
false
false
true
```

**Reason:**
- Arrays are compared by **reference**, not value
- `a` and `b` are different objects
- `a == a` compares same reference

---

## Q25: Final Challenge
```javascript
console.log([] == ![]);
```

**What will be the output? Explain why.**

**Answer:** `true`

**Explanation:**
1. `![]` → `!true` → `false` (empty array is truthy)
2. `[] == false`
3. `[] → ""` (array to string)
4. `"" == false`
5. `"" → 0` and `false → 0`
6. `0 == 0` → `true`

**This is why you should always use `===`!**
```javascript
console.log([] === ![]);  // false (makes more sense!)
```

---

## Q26: What's the output?
```javascript
console.log("5" + + "5");
```

**Answer:** `"55"`

**Reason:**
- `+ "5"` → unary plus converts to number `5`
- `"5" + 5` → string concatenation `"55"`

---

## Q27: Comparison operators with different types
```javascript
console.log("2" > "12");
console.log("2" > 12);
console.log(2 > "12");
```

**Answer:**
```
true
false
false
```

**Reason:**
- `"2" > "12"` → string comparison (lexicographic) → `"2" > "1"` → true
- `"2" > 12` → converts to number → `2 > 12` → false
- `2 > "12"` → converts to number → `2 > 12` → false

---

## Q28: What happens here?
```javascript
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
```

**Answer:**
```
true
false
```

**Reason:**
- `1 < 2 < 3` → `true < 3` → `1 < 3` → true
- `3 > 2 > 1` → `true > 1` → `1 > 1` → false

**Comparison operators are left-to-right associative!**

---

## Q29: Type coercion in template literals
```javascript
let num = 10;
console.log(`Value: ${num}`);
console.log(`Value: ${num + 5}`);
console.log(`Value: ${"5" + num}`);
```

**Answer:**
```
Value: 10
Value: 15
Value: 510
```

**Reason:**  
Template literals convert to string, but expressions inside `${}` evaluate first.

---

## Q30: Extreme Challenge
```javascript
console.log(!+[]+!![]);
```

**What will be the output?**

**Answer:** `"truefalse"`

**Explanation:**
1. `+[]` → `0` (unary plus on empty array)
2. `!+[]` → `!0` → `true`
3. `![]` → `false` (negation of truthy array)
4. `!![]` → `true` (double negation of truthy array)
5. `true + true` → In this context becomes string concatenation
6. Result: `"truefalse"`

Actually, let me recalculate more carefully:
1. `+[]` → `0`
2. `!0` → `true`
3. `![]` → `false`
4. `!![]` → `true`
5. `true + true` → `2`

**Correct Answer:** `2`

**Proper Explanation:**
- `!+[]` → `!0` → `true` → `1` (in numeric context)
- `!![]` → `true` → `1` (in numeric context)
- `1 + 1` → `2`