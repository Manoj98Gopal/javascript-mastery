# Operators in JavaScript

## What are Operators?

Operators are symbols that perform operations on operands (values and variables).
```javascript
let result = 5 + 3;  // '+' is an operator, 5 and 3 are operands
```

---

## Types of Operators

JavaScript has the following types of operators:

1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators
4. Logical Operators
5. Bitwise Operators
6. String Operators
7. Conditional (Ternary) Operator
8. Type Operators
9. Special Operators

---

## 1. Arithmetic Operators

Used to perform mathematical operations.

### Basic Arithmetic

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `+` | Addition | `5 + 3` | `8` |
| `-` | Subtraction | `5 - 3` | `2` |
| `*` | Multiplication | `5 * 3` | `15` |
| `/` | Division | `6 / 3` | `2` |
| `%` | Modulus (Remainder) | `5 % 3` | `2` |
| `**` | Exponentiation (Power) | `2 ** 3` | `8` |

### Examples
```javascript
let a = 10;
let b = 3;

console.log(a + b);   // 13 (Addition)
console.log(a - b);   // 7 (Subtraction)
console.log(a * b);   // 30 (Multiplication)
console.log(a / b);   // 3.333... (Division)
console.log(a % b);   // 1 (Remainder)
console.log(a ** b);  // 1000 (10^3)
```

### Special Cases
```javascript
// Division by zero
console.log(5 / 0);    // Infinity
console.log(-5 / 0);   // -Infinity
console.log(0 / 0);    // NaN

// Modulus with negative numbers
console.log(10 % 3);   // 1
console.log(-10 % 3);  // -1
console.log(10 % -3);  // 1
```

---

## 2. Assignment Operators

Used to assign values to variables.

### Basic Assignment

| Operator | Example | Equivalent To | Result |
|----------|---------|---------------|--------|
| `=` | `x = 5` | `x = 5` | `x = 5` |
| `+=` | `x += 3` | `x = x + 3` | Adds and assigns |
| `-=` | `x -= 3` | `x = x - 3` | Subtracts and assigns |
| `*=` | `x *= 3` | `x = x * 3` | Multiplies and assigns |
| `/=` | `x /= 3` | `x = x / 3` | Divides and assigns |
| `%=` | `x %= 3` | `x = x % 3` | Modulus and assigns |
| `**=` | `x **= 3` | `x = x ** 3` | Exponentiation and assigns |

### Examples
```javascript
let x = 5;

x += 3;   // x = x + 3  → x = 8
x -= 2;   // x = x - 2  → x = 6
x *= 4;   // x = x * 4  → x = 24
x /= 3;   // x = x / 3  → x = 8
x %= 5;   // x = x % 5  → x = 3
x **= 2;  // x = x ** 2 → x = 9
```

---

## 3. Comparison Operators

Used to compare two values. Returns `true` or `false`.

### Comparison Table

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `==` | Equal to (loose) | `5 == "5"` | `true` |
| `===` | Equal to (strict) | `5 === "5"` | `false` |
| `!=` | Not equal to (loose) | `5 != "5"` | `false` |
| `!==` | Not equal to (strict) | `5 !== "5"` | `true` |
| `>` | Greater than | `5 > 3` | `true` |
| `<` | Less than | `5 < 3` | `false` |
| `>=` | Greater than or equal | `5 >= 5` | `true` |
| `<=` | Less than or equal | `5 <= 3` | `false` |

### == vs ===

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

0 == false     // true
0 === false    // false

null == undefined   // true (special rule)
null === undefined  // false
```

---

## 4. Logical Operators

Used to combine or invert boolean values.

### Logical Table

| Operator | Name | Description |
|----------|------|-------------|
| `&&` | AND | Returns true if both operands are true |
| `\|\|` | OR | Returns true if at least one operand is true |
| `!` | NOT | Inverts the boolean value |

### Truth Tables

**AND (&&):**
```
true  && true   → true
true  && false  → false
false && true   → false
false && false  → false
```

**OR (||):**
```
true  || true   → true
true  || false  → true
false || true   → true
false || false  → false
```

**NOT (!):**
```
!true   → false
!false  → true
```

### Important: Logical Operators Return Values

Logical operators don't always return `true` or `false`. They return the actual value of one of the operands.

**`&&` (AND) - Returns first falsy or last value:**
```javascript
"hello" && "world"    // "world" (no falsy, returns last)
"hello" && 0          // 0 (first falsy)
0 && "hello"          // 0 (first falsy)
false && "anything"   // false (first falsy)
```

**`||` (OR) - Returns first truthy value:**
```javascript
"hello" || "world"    // "hello" (first truthy)
0 || "world"          // "world" (first truthy)
"" || "default"       // "default" (first truthy)
false || 0 || "yes"   // "yes" (first truthy)
```

### Practical Usage
```javascript
// Default values with ||
let userName = userInput || "Guest";

// Conditional execution with &&
user && user.greet();  // Only calls greet if user exists

// Guard clauses
isValid && saveData();
```

---

## 5. Increment and Decrement Operators

Used to increase or decrease a value by 1.

### Pre vs Post

| Operator | Name | Description |
|----------|------|-------------|
| `++x` | Pre-increment | Increment first, then return |
| `x++` | Post-increment | Return first, then increment |
| `--x` | Pre-decrement | Decrement first, then return |
| `x--` | Post-decrement | Return first, then decrement |

### Examples
```javascript
let count = 0;

// Post-increment
console.log(count++);  // 0 (returns 0, then increments)
console.log(count);    // 1

// Pre-increment
console.log(++count);  // 2 (increments, then returns 2)
console.log(count);    // 2

// Post-decrement
console.log(count--);  // 2 (returns 2, then decrements)
console.log(count);    // 1

// Pre-decrement
console.log(--count);  // 0 (decrements, then returns 0)
console.log(count);    // 0
```

### Common Use in Loops
```javascript
for (let i = 0; i < 5; i++) {  // Post-increment
    console.log(i);  // 0, 1, 2, 3, 4
}
```

---

## 6. Ternary (Conditional) Operator

A shorthand for `if-else` statements.

### Syntax
```javascript
condition ? valueIfTrue : valueIfFalse
```

### Examples
```javascript
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote);  // "Yes"

// Nested ternary (not recommended - hard to read)
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";

// Better: use if-else for complex conditions
if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else {
    grade = "F";
}
```

---

## 7. Type Operators

### typeof Operator

Returns a string indicating the type of the operand.
```javascript
typeof 42              // "number"
typeof "hello"         // "string"
typeof true            // "boolean"
typeof undefined       // "undefined"
typeof null            // "object" (JavaScript bug!)
typeof {}              // "object"
typeof []              // "object"
typeof function(){}    // "function"
typeof Symbol("id")    // "symbol"
typeof 10n             // "bigint"
```

### instanceof Operator

Checks if an object is an instance of a specific class or constructor.
```javascript
let arr = [1, 2, 3];
console.log(arr instanceof Array);   // true
console.log(arr instanceof Object);  // true

let date = new Date();
console.log(date instanceof Date);   // true

function Person(name) {
    this.name = name;
}
let person = new Person("Alice");
console.log(person instanceof Person);  // true
```

---

## 8. Special Operators

### Nullish Coalescing Operator (??)

Returns the right operand when the left is `null` or `undefined`.
```javascript
let value;

value = null ?? "default";       // "default"
value = undefined ?? "default";  // "default"
value = 0 ?? "default";          // 0 (0 is not null/undefined)
value = "" ?? "default";         // "" (empty string is not null/undefined)
value = false ?? "default";      // false
```

**Difference from ||:**
```javascript
// || treats 0, "", false as falsy
0 || "default"       // "default"
"" || "default"      // "default"
false || "default"   // "default"

// ?? only treats null/undefined as nullish
0 ?? "default"       // 0
"" ?? "default"      // ""
false ?? "default"   // false
```

**Use `??` when `0`, `""`, or `false` are valid values!**

---

### Optional Chaining Operator (?.)

Safely access nested object properties without throwing errors.
```javascript
let user = {
    name: "Alice",
    address: {
        city: "Wonderland"
    }
};

// Old way (risky)
let city = user.address.city;  // Works

// But this throws error:
// let zip = user.contact.phone;  // ❌ TypeError: Cannot read property 'phone' of undefined

// With optional chaining:
let phone = user.contact?.phone;  // undefined (no error!)
let city2 = user.address?.city;   // "Wonderland"
let zip = user.address?.zip;      // undefined

// Chaining multiple levels
let street = user?.address?.street?.name;  // undefined (safe)
```

**Also works with methods and arrays:**
```javascript
// Methods
user.greet?.();  // Only calls if greet exists

// Arrays
let firstItem = arr?.[0];  // Safe array access
```

---

### delete Operator

Removes a property from an object.
```javascript
let obj = {
    name: "Alice",
    age: 25,
    city: "NYC"
};

delete obj.age;
console.log(obj);  // { name: "Alice", city: "NYC" }

// Returns true if successful
console.log(delete obj.city);  // true
console.log(obj);  // { name: "Alice" }

// Cannot delete variables
let x = 5;
delete x;  // false (doesn't work)
```

**Cannot delete:**
- Variables declared with `var`, `let`, `const`
- Function declarations
- Built-in object properties

---

### Comma Operator (,)

Evaluates multiple expressions and returns the last one.
```javascript
let x = (1, 2, 3);
console.log(x);  // 3 (returns last expression)

// Common in for loops
for (let i = 0, j = 10; i < j; i++, j--) {
    console.log(i, j);
}
```

---

### void Operator

Evaluates an expression and returns `undefined`.
```javascript
void 0           // undefined
void (2 + 2)     // undefined (expression evaluated but returns undefined)

// Common use: prevent default link behavior
// <a href="javascript:void(0)">Click</a>
```

---

## 9. String Operators

### Concatenation (+)
```javascript
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;  // "John Doe"

// With numbers and strings
"Score: " + 100  // "Score: 100"
```

### Template Literals (Modern)
```javascript
let name = "Alice";
let age = 25;
let message = `Hello, ${name}! You are ${age} years old.`;
// "Hello, Alice! You are 25 years old."
```

---

## 10. Operator Precedence

Determines the order in which operators are evaluated.

### Precedence Table (Highest to Lowest)

| Precedence | Operator | Description |
|------------|----------|-------------|
| 20 | `()` | Grouping |
| 19 | `.` `[]` | Member access |
| 17 | `!` `++` `--` `typeof` | Unary operators |
| 16 | `**` | Exponentiation |
| 15 | `*` `/` `%` | Multiplication, Division, Modulus |
| 14 | `+` `-` | Addition, Subtraction |
| 12 | `<` `<=` `>` `>=` | Comparison |
| 11 | `==` `===` `!=` `!==` | Equality |
| 6 | `&&` | Logical AND |
| 5 | `\|\|` | Logical OR |
| 4 | `??` | Nullish coalescing |
| 3 | `? :` | Ternary |
| 2 | `=` `+=` `-=` etc. | Assignment |

### Examples
```javascript
// Precedence matters
2 + 3 * 4        // 14 (not 20) - * before +
(2 + 3) * 4      // 20 - () has highest precedence

// Comparison before logical
5 > 3 && 10 < 20  // true && true → true

// Assignment has lowest precedence
let x = 5 + 3     // x = 8 (addition first, then assignment)
```

---

## 11. Associativity

Determines the order when operators have the same precedence.

### Left-to-Right (Most operators)
```javascript
10 - 5 - 2     // (10 - 5) - 2 = 3 (left to right)
100 / 10 / 2   // (100 / 10) / 2 = 5
```

### Right-to-Left (Assignment, Exponentiation)
```javascript
let a = b = c = 5;  // c = 5, b = 5, a = 5 (right to left)

2 ** 3 ** 2         // 2 ** (3 ** 2) = 2 ** 9 = 512 (not (2 ** 3) ** 2 = 64)
```

---

## 12. Best Practices

### ✅ DO

1. **Use `===` instead of `==`**
```javascript
if (value === 5) { }  // ✅ Strict equality
```

2. **Use parentheses for clarity**
```javascript
(a + b) * c  // ✅ Clear intent
```

3. **Use `??` for null/undefined checks**
```javascript
let value = userInput ?? "default";  // ✅ When 0, "", false are valid
```

4. **Use `?.` for safe property access**
```javascript
let city = user?.address?.city;  // ✅ Safe
```

### ❌ DON'T

1. **Don't use `==` (loose equality)**
```javascript
if (value == 5) { }  // ❌ Type coercion
```

2. **Don't chain too many ternary operators**
```javascript
// ❌ Hard to read
let result = a ? b ? c : d : e ? f : g;

// ✅ Use if-else
if (a) {
    result = b ? c : d;
} else {
    result = e ? f : g;
}
```

3. **Don't abuse comma operator**
```javascript
let x = (y = 5, z = 10);  // ❌ Confusing
```

---

## Summary

### Most Common Operators

**Arithmetic:** `+`, `-`, `*`, `/`, `%`, `**`  
**Assignment:** `=`, `+=`, `-=`, `*=`, `/=`  
**Comparison:** `===`, `!==`, `>`, `<`, `>=`, `<=`  
**Logical:** `&&`, `||`, `!`  
**Special:** `??`, `?.`, `? :`  

### Key Points for Interviews

⭐ Always use `===` instead of `==`  
⭐ `&&` and `||` return actual values, not just true/false  
⭐ `??` only checks for null/undefined, not all falsy values  
⭐ `?.` prevents errors when accessing nested properties  
⭐ Pre-increment `++i` increments first, post-increment `i++` returns first  
⭐ Operator precedence: `()` > `**` > `*/%` > `+-` > comparison > `&&` > `||` > `??` > `? :` > assignment  
⭐ `typeof null` returns "object" (bug)  
⭐ Delete operator removes object properties, not variables