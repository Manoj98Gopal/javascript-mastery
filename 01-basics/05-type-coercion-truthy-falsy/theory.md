# Type Coercion in JavaScript

## What is Type Coercion?

Type coercion is the automatic or manual conversion of values from one data type to another (e.g., string to number, number to boolean).

JavaScript is a **loosely typed** language, meaning variables can hold any type, and types can be converted automatically or manually.

---

## Types of Type Coercion

### 1. Explicit Coercion (Manual)
The programmer manually converts one type to another.

### 2. Implicit Coercion (Automatic)
JavaScript automatically converts types during operations.

---

## 1. Explicit Type Coercion (Type Conversion)

### A. Converting to Number

#### Method 1: Number()
```javascript
Number("123");       // 123
Number("123.45");    // 123.45
Number("123abc");    // NaN
Number("");          // 0
Number("   ");       // 0
Number(true);        // 1
Number(false);       // 0
Number(null);        // 0
Number(undefined);   // NaN
```

#### Method 2: parseInt()
Parses a string and returns an integer.
```javascript
parseInt("123");        // 123
parseInt("123abc");     // 123 (stops at non-numeric)
parseInt("abc123");     // NaN (starts with letter)
parseInt("12.5");       // 12 (ignores decimal)
parseInt("FF", 16);     // 255 (hexadecimal)
parseInt("1010", 2);    // 10 (binary)
```

**Always specify radix (base):**
```javascript
parseInt("08");         // 8 (but could be 0 in old browsers)
parseInt("08", 10);     // 8 (safer)
```

#### Method 3: parseFloat()
Parses a string and returns a floating-point number.
```javascript
parseFloat("12.5");     // 12.5
parseFloat("12.5abc");  // 12.5
parseFloat("abc12.5");  // NaN
```

#### Method 4: Unary Plus (+)
```javascript
+"123";        // 123
+"123.45";     // 123.45
+"123abc";     // NaN
+true;         // 1
+false;        // 0
```

**Comparison:**
```javascript
Number("123abc");      // NaN
parseInt("123abc");    // 123
parseFloat("123abc");  // 123
+"123abc";             // NaN
```

---

### B. Converting to String

#### Method 1: String()
```javascript
String(123);           // "123"
String(true);          // "true"
String(false);         // "false"
String(null);          // "null"
String(undefined);     // "undefined"
String([1, 2, 3]);     // "1,2,3"
String({ a: 1 });      // "[object Object]"
```

#### Method 2: toString()
```javascript
(123).toString();      // "123"
true.toString();       // "true"
[1, 2, 3].toString();  // "1,2,3"

// With radix
(255).toString(16);    // "ff" (hexadecimal)
(10).toString(2);      // "1010" (binary)
```

**Note:** `null` and `undefined` don't have `.toString()` method
```javascript
// null.toString();    // ❌ TypeError
// undefined.toString(); // ❌ TypeError

String(null);          // ✅ "null"
String(undefined);     // ✅ "undefined"
```

#### Method 3: Template Literals / Concatenation
```javascript
123 + "";              // "123"
`${123}`;              // "123"
true + "";             // "true"
```

---

### C. Converting to Boolean

#### Method 1: Boolean()
```javascript
Boolean(1);            // true
Boolean(0);            // false
Boolean("hello");      // true
Boolean("");           // false
Boolean([]);           // true (empty array is truthy!)
Boolean({});           // true (empty object is truthy!)
Boolean(null);         // false
Boolean(undefined);    // false
Boolean(NaN);          // false
```

#### Method 2: Double Negation (!!)
```javascript
!!"hello";             // true
!!"";                  // false
!!1;                   // true
!!0;                   // false
!![];                  // true
!!{};                  // true
```

**How it works:**
```javascript
!"hello"    // false (first negation)
!!"hello"   // true (second negation)
```

---

## 2. Implicit Type Coercion (Automatic)

JavaScript automatically converts types in certain operations.

### A. String Coercion (+ operator)

When one operand is a string, `+` performs **concatenation**.
```javascript
"5" + 3;               // "53"
5 + "3";               // "53"
"Hello" + true;        // "Hellotrue"
"5" + null;            // "5null"
"5" + undefined;       // "5undefined"
```

**Order matters:**
```javascript
5 + 3 + "2";           // "82" (5+3=8, then "8"+"2"="82")
"2" + 5 + 3;           // "253" (all strings)
5 + 3;                 // 8 (both numbers)
```

---

### B. Numeric Coercion (-, *, /, %)

These operators **always convert to numbers**.
```javascript
"10" - 5;              // 5
"10" * "2";            // 20
"10" / "2";            // 5
"10" % "3";            // 1

"hello" - 5;           // NaN
"10" - "abc";          // NaN
```

**Unary + and - operators:**
```javascript
+"5";                  // 5
-"5";                  // -5
+"hello";              // NaN
```

---

### C. Boolean Coercion (Logical Context)

In `if`, `while`, `for`, ternary, and logical operators, values are converted to boolean.
```javascript
if ("hello") {
    console.log("Truthy");  // Executes
}

if ("") {
    console.log("Won't execute");
}

let result = value || "default";  // Uses truthy/falsy
```

---

### D. Comparison Coercion (== vs ===)

#### == (Loose Equality) - Performs Type Coercion
```javascript
5 == "5";              // true (string converted to number)
0 == false;            // true
"" == false;           // true
null == undefined;     // true
```

**How it works:**
```javascript
5 == "5"
// Step 1: Convert "5" to number → 5
// Step 2: Compare 5 == 5 → true
```

#### === (Strict Equality) - NO Type Coercion
```javascript
5 === "5";             // false (different types)
0 === false;           // false
null === undefined;    // false
```

**Always prefer ===** (strict equality) to avoid unexpected behavior.

---

### E. Special Cases

#### Arrays and Objects
```javascript
[1] + [2];             // "12" (both converted to strings "1" + "2")
[1] - [2];             // -1 (both converted to numbers 1 - 2)

{} + [];               // "[object Object]"
[] + {};               // "[object Object]"

[1, 2, 3] + 5;         // "1,2,35" (array to string "1,2,3" + "5")
```

#### null and undefined
```javascript
null + 5;              // 5 (null → 0)
undefined + 5;         // NaN (undefined → NaN)

null == undefined;     // true (special rule)
null === undefined;    // false
```

---

## 3. Truthy and Falsy Values

In JavaScript, every value has an inherent boolean value (truthy or falsy).

### Falsy Values (Only 8!)

**All values are truthy EXCEPT these 8:**

1. `false`
2. `0`
3. `-0`
4. `0n` (BigInt zero)
5. `""` (empty string)
6. `null`
7. `undefined`
8. `NaN`
```javascript
// All falsy
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

### Truthy Values

**Everything else is truthy**, including:
```javascript
// Numbers (except 0, -0, 0n)
Boolean(1);            // true
Boolean(-1);           // true
Boolean(3.14);         // true
Boolean(Infinity);     // true

// Strings (except "")
Boolean("0");          // true (string "0" is truthy!)
Boolean("false");      // true (string "false" is truthy!)
Boolean(" ");          // true (space is a character)

// Objects and Arrays (even empty ones!)
Boolean([]);           // true (empty array is truthy!)
Boolean({});           // true (empty object is truthy!)
Boolean(function(){}); // true

// Other
Boolean(new Date());   // true
Boolean(/regex/);      // true
```

---

### Common Pitfalls

#### Pitfall 1: Empty array/object are truthy
```javascript
if ([]) {
    console.log("Empty array is truthy!");  // Executes
}

if ({}) {
    console.log("Empty object is truthy!");  // Executes
}

// But array length can be falsy
let arr = [];
if (arr.length) {
    console.log("Won't execute");  // arr.length = 0 (falsy)
}
```

#### Pitfall 2: String "0" and "false" are truthy
```javascript
if ("0") {
    console.log("String '0' is truthy!");  // Executes
}

if ("false") {
    console.log("String 'false' is truthy!");  // Executes
}

// Correct check:
let value = "0";
if (Number(value)) {
    console.log("Won't execute");  // Number("0") = 0 (falsy)
}
```

#### Pitfall 3: Logical operators return actual values
```javascript
let result = "hello" || "world";
console.log(result);  // "hello" (not true!)

let result2 = "" || "default";
console.log(result2);  // "default"

let result3 = "hello" && "world";
console.log(result3);  // "world" (not true!)
```

---

## 4. Logical Operators with Truthy/Falsy

### || (OR) - Returns first truthy value
```javascript
"hello" || "world";    // "hello"
"" || "world";         // "world"
0 || 100;              // 100
false || true;         // true

// Common pattern: default values
let name = userName || "Guest";
```

### && (AND) - Returns first falsy value or last value
```javascript
"hello" && "world";    // "world"
"" && "world";         // ""
0 && 100;              // 0
true && false;         // false

// Common pattern: conditional execution
user && user.name;     // Only access .name if user exists
```

### ! (NOT) - Converts to boolean and negates
```javascript
!"hello";              // false
!"";                   // true
!0;                    // true
!1;                    // false
```

---

## 5. Type Coercion Rules Summary

### + Operator
- **String + anything** → String (concatenation)
- **Number + Number** → Number (addition)

### -, *, /, %
- Always converts to Number

### == (loose equality)
- Performs type coercion
- Special rules for `null == undefined`

### === (strict equality)
- No type coercion
- **Always prefer this**

### Logical Context (if, while, &&, ||)
- Converts to Boolean
- Uses truthy/falsy rules

---

## 6. Common Interview Patterns

### Pattern 1: Coercion with +
```javascript
console.log(1 + 2);           // 3
console.log(1 + "2");         // "12"
console.log("1" + 2);         // "12"
console.log("1" + "2");       // "12"
console.log(1 + 2 + "3");     // "33"
console.log("1" + 2 + 3);     // "123"
```

### Pattern 2: Coercion with -
```javascript
console.log(5 - 2);           // 3
console.log("5" - 2);         // 3
console.log("5" - "2");       // 3
console.log("hello" - 2);     // NaN
```

### Pattern 3: Equality comparisons
```javascript
console.log(0 == false);      // true
console.log(0 === false);     // false
console.log("" == false);     // true
console.log("" === false);    // false
console.log(null == undefined); // true
console.log(null === undefined); // false
```

### Pattern 4: Truthy/Falsy checks
```javascript
let value = "";
if (value) {
    console.log("Truthy");
} else {
    console.log("Falsy");  // Executes
}

// Better: explicit check
if (value !== "") {
    console.log("Has value");
}
```

---

## 7. Best Practices

### ✅ DO

1. **Use strict equality (===)**
```javascript
if (value === 5) { }  // ✅ Good
```

2. **Be explicit with type conversion**
```javascript
Number(userInput);    // ✅ Clear intent
```

3. **Check for specific values, not just truthy/falsy**
```javascript
if (arr.length > 0) { }  // ✅ Better than if (arr.length)
```

4. **Use parseInt with radix**
```javascript
parseInt("08", 10);   // ✅ Always specify base
```

### ❌ DON'T

1. **Don't rely on == (loose equality)**
```javascript
if (value == 5) { }   // ❌ Avoid
```

2. **Don't use implicit coercion in unclear ways**
```javascript
if (value) { }        // ❌ Unclear what you're checking
```

3. **Don't mix types unnecessarily**
```javascript
"5" + 3;              // ❌ Confusing
```

---

## 8. Type Conversion Table

| From | To Number | To String | To Boolean |
|------|-----------|-----------|------------|
| `undefined` | `NaN` | `"undefined"` | `false` |
| `null` | `0` | `"null"` | `false` |
| `true` | `1` | `"true"` | `true` |
| `false` | `0` | `"false"` | `false` |
| `0` | `0` | `"0"` | `false` |
| `1` | `1` | `"1"` | `true` |
| `"0"` | `0` | `"0"` | `true` |
| `"1"` | `1` | `"1"` | `true` |
| `""` | `0` | `""` | `false` |
| `"hello"` | `NaN` | `"hello"` | `true` |
| `[]` | `0` | `""` | `true` |
| `[10]` | `10` | `"10"` | `true` |
| `[1,2]` | `NaN` | `"1,2"` | `true` |
| `{}` | `NaN` | `"[object Object]"` | `true` |
| `function(){}` | `NaN` | `"function(){}"` | `true` |

---

## 9. Summary

### Type Coercion
- **Explicit:** Manual conversion using `Number()`, `String()`, `Boolean()`
- **Implicit:** Automatic conversion by JavaScript

### Key Rules
- `+` with string → concatenation
- `-`, `*`, `/` → numeric conversion
- `==` → type coercion, `===` → no coercion
- Logical context → boolean conversion

### Truthy/Falsy
- **Falsy (8):** `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`
- **Truthy:** Everything else

### Best Practice
- Use `===` instead of `==`
- Be explicit with type conversions
- Understand truthy/falsy but check explicitly when possible

---

## Interview Key Points

⭐ JavaScript has both explicit and implicit type coercion  
⭐ Only 8 falsy values exist in JavaScript  
⭐ Empty arrays and objects are truthy  
⭐ String "0" and "false" are truthy  
⭐ `+` operator with string performs concatenation  
⭐ Other arithmetic operators convert to numbers  
⭐ `==` performs type coercion, `===` doesn't  
⭐ Always prefer `===` over `==`  
⭐ `null == undefined` is `true`, but `null === undefined` is `false`  
⭐ NaN is never equal to anything, including itself