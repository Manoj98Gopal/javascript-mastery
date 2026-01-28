# Interview Questions - Data Types

## Q1: How many data types are there in JavaScript?

**Answer:**  
JavaScript has **8 data types**:

**Primitive Types (7):**
1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Symbol (ES6)
7. BigInt (ES2020)

**Non-Primitive Types (1 category):**
8. Object (includes Array, Function, Date, etc.)

---

## Q2: What is the difference between primitive and non-primitive types?

**Answer:**

| Feature | Primitive | Non-Primitive |
|---------|-----------|---------------|
| **Mutability** | Immutable (cannot change) | Mutable (can change) |
| **Storage** | Stack Memory | Heap Memory |
| **Copying** | Copy by Value | Copy by Reference |
| **Comparison** | By Value | By Reference |
| **Examples** | Number, String, Boolean | Object, Array, Function |

**Example:**
```javascript
// Primitive (copy by value)
let a = 10;
let b = a;
b = 20;
console.log(a);  // 10 (unchanged)

// Non-primitive (copy by reference)
let obj1 = { value: 10 };
let obj2 = obj1;
obj2.value = 20;
console.log(obj1.value);  // 20 (changed!)
```

---

## Q3: Why does `typeof null` return "object"?

**Answer:**  
This is a **bug** in JavaScript from 1995. It's kept for backward compatibility.
```javascript
console.log(typeof null);  // "object" (incorrect!)
```

**Correct way to check for null:**
```javascript
let x = null;
console.log(x === null);  // true
```

**Historical Reason:**  
In the original JavaScript implementation, values were represented by a type tag and a value. The type tag for objects was 0, and `null` was represented as the NULL pointer (0x00), which had the same type tag as objects.

---

## Q4: What is the difference between `undefined` and `null`?

**Answer:**

| Feature | undefined | null |
|---------|-----------|------|
| **Meaning** | Variable declared but not initialized | Intentional absence of value |
| **Type** | undefined | object (bug) |
| **Assignment** | Automatic (by JavaScript) | Manual (by programmer) |
| **Usage** | Default value | Explicit "no value" |

**Example:**
```javascript
let a;           // undefined (not initialized)
let b = null;    // null (intentionally empty)

console.log(a);  // undefined
console.log(b);  // null

console.log(typeof a);  // "undefined"
console.log(typeof b);  // "object"

console.log(a == b);    // true (loose equality)
console.log(a === b);   // false (strict equality)
```

**When you get undefined:**
- Variable declared but not assigned
- Function with no return statement
- Accessing non-existent object property
- Function parameter not provided

---

## Q5: What is NaN? Why is NaN === NaN false?

**Answer:**  
**NaN** stands for "Not a Number". It's a special numeric value that represents an invalid number.
```javascript
console.log(typeof NaN);  // "number" (ironically!)
console.log(NaN === NaN); // false (NaN is not equal to itself)
```

**Why NaN === NaN is false:**  
According to IEEE 754 floating-point standard, NaN should not be equal to anything, including itself.

**Correct way to check for NaN:**
```javascript
console.log(Number.isNaN(NaN));  // true
console.log(isNaN(NaN));         // true
```

**How you get NaN:**
```javascript
console.log(0 / 0);              // NaN
console.log(parseInt("hello"));  // NaN
console.log(Math.sqrt(-1));      // NaN
console.log("text" * 2);         // NaN
```

---

## Q6: Are strings mutable in JavaScript?

**Answer:**  
No, strings are **immutable** in JavaScript.
```javascript
let str = "Hello";
str[0] = "h";  // Doesn't work (no error in non-strict mode)
console.log(str);  // Still "Hello"
```

**String methods create NEW strings:**
```javascript
let original = "hello";
let upper = original.toUpperCase();

console.log(original);  // "hello" (unchanged)
console.log(upper);     // "HELLO" (new string)
```

---

## Q7: Output-based Question - Copy by Value
```javascript
let x = 10;
let y = x;
y = 20;

console.log(x);
console.log(y);
```

**What will be the output?**

**Answer:**
```
10
20
```

**Reason:**  
- `y = x` copies the **value** (not reference)
- `x` and `y` are independent variables
- Changing `y` doesn't affect `x`

---

## Q8: Output-based Question - Copy by Reference
```javascript
let obj1 = { name: "Manoj" };
let obj2 = obj1;
obj2.name = "Kumar";

console.log(obj1.name);
console.log(obj2.name);
```

**What will be the output?**

**Answer:**
```
Kumar
Kumar
```

**Reason:**  
- `obj2 = obj1` copies the **reference** (not the object)
- Both variables point to the same object in memory
- Changing through either variable affects the same object

---

## Q9: How do you check if a variable is an array?

**Answer:**  
Use `Array.isArray()` method.
```javascript
let arr = [1, 2, 3];

// ❌ Wrong way
console.log(typeof arr);  // "object" (not helpful!)

// ✅ Correct way
console.log(Array.isArray(arr));  // true
```

**Why not typeof?**
```javascript
console.log(typeof []);    // "object"
console.log(typeof {});    // "object"
console.log(typeof null);  // "object"
// All return "object"!
```

---

## Q10: What will this output?
```javascript
console.log(typeof typeof 42);
```

**Answer:** `"string"`

**Reason:**
```javascript
typeof 42         // "number" (string)
typeof "number"   // "string"
```

The result of `typeof` is always a string, so `typeof` of any `typeof` is "string".

---

## Q11: What is the difference between `==` and `===` for comparing objects?

**Answer:**  
Both `==` and `===` compare **references** for objects, not values.
```javascript
let obj1 = { name: "Manoj" };
let obj2 = { name: "Manoj" };

console.log(obj1 == obj2);   // false (different references)
console.log(obj1 === obj2);  // false (different references)

let obj3 = obj1;
console.log(obj1 === obj3);  // true (same reference)
```

**To compare object contents:**
```javascript
// Convert to JSON string
JSON.stringify(obj1) === JSON.stringify(obj2);  // true

// Or compare properties manually
obj1.name === obj2.name;  // true
```

---

## Q12: What is the output?
```javascript
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];

console.log(arr1 == arr2);
console.log(arr1 === arr2);
```

**Answer:**
```
false
false
```

**Reason:**  
Arrays are compared by reference, not by content. `arr1` and `arr2` are different objects in memory.

---

## Q13: What is BigInt and when do you use it?

**Answer:**  
BigInt is used for integers larger than `Number.MAX_SAFE_INTEGER` (2^53 - 1).
```javascript
// Number limit
console.log(Number.MAX_SAFE_INTEGER);  // 9007199254740991

// BigInt for larger numbers
let bigNum = 9007199254740992n;  // Note the 'n'
let bigNum2 = BigInt(9007199254740992);

console.log(typeof bigNum);  // "bigint"
```

**Rules:**
```javascript
// Must use 'n' suffix or BigInt()
let big = 100n;

// Cannot mix with regular numbers
// big + 100;  // ❌ TypeError

// Must convert
big + BigInt(100);  // ✅ Works
```

---

## Q14: What is Symbol and when do you use it?

**Answer:**  
Symbol creates unique identifiers. Every Symbol is unique, even with the same description.
```javascript
let sym1 = Symbol("id");
let sym2 = Symbol("id");

console.log(sym1 === sym2);  // false (unique!)
```

**Use Case: Unique Object Keys**
```javascript
const ID = Symbol("id");
let user = {
    name: "Manoj",
    [ID]: 12345
};

console.log(user[ID]);  // 12345
console.log(user.ID);   // undefined (different!)

// Symbols are hidden in loops
for (let key in user) {
    console.log(key);  // Only "name"
}
```

---

## Q15: What's the difference between shallow copy and deep copy?

**Answer:**

**Shallow Copy:**  
Copies only the first level. Nested objects are still referenced.
```javascript
let original = {
    name: "Manoj",
    address: { city: "Chennai" }
};

let shallow = { ...original };
shallow.address.city = "Mumbai";

console.log(original.address.city);  // "Mumbai" (changed!)
```

**Deep Copy:**  
Copies all levels. Completely independent.
```javascript
let deep = JSON.parse(JSON.stringify(original));
deep.address.city = "Delhi";

console.log(original.address.city);  // "Chennai" (unchanged)
```

**Shallow Copy Methods:**
- Spread operator: `{ ...obj }`
- `Object.assign({}, obj)`
- `arr.slice()`

**Deep Copy Methods:**
- `JSON.parse(JSON.stringify(obj))` (limitations: no functions, undefined, Symbols)
- Libraries: lodash `_.cloneDeep()`
- Manual recursive copying

---

## Q16: What is the output?
```javascript
let a = [1, 2, 3];
let b = a;
let c = [...a];

b.push(4);
c.push(5);

console.log(a);
console.log(b);
console.log(c);
```

**Answer:**
```
[1, 2, 3, 4]
[1, 2, 3, 4]
[1, 2, 3, 5]
```

**Reason:**
- `b = a` → reference copy (same array)
- `c = [...a]` → value copy (new array)
- `b.push(4)` affects both `a` and `b`
- `c.push(5)` only affects `c`

---

## Q17: Are functions objects in JavaScript?

**Answer:**  
Yes, functions are special objects in JavaScript.
```javascript
function greet() {
    console.log("Hello");
}

// Functions can have properties
greet.language = "JavaScript";
console.log(greet.language);  // "JavaScript"

// typeof function
console.log(typeof greet);  // "function"

// But instanceof Object
console.log(greet instanceof Object);  // true
```

---

## Q18: What is stored in Stack vs Heap?

**Answer:**

**Stack Memory:**
- Primitive types (actual values)
- References to objects (not the objects themselves)
- Function calls
- Fast access, fixed size

**Heap Memory:**
- Objects
- Arrays
- Functions
- Dynamic size, slower access

**Visual:**
```
Stack Memory          Heap Memory
┌──────────────┐     ┌──────────────────┐
│ x = 10       │     │                  │
│ str = "Hi"   │     │ obj: {           │
│ obj = ref ───┼────→│   name: "Manoj"  │
│ arr = ref ───┼────→│ }                │
└──────────────┘     │                  │
                     │ arr: [1, 2, 3]   │
                     └──────────────────┘
```

---

## Q19: What happens here?
```javascript
function test(obj) {
    obj.name = "Changed";
    obj = { name: "New Object" };
}

let person = { name: "Original" };
test(person);
console.log(person.name);
```

**Answer:** `"Changed"`

**Reason:**
1. `obj.name = "Changed"` → Modifies the original object ✓
2. `obj = { name: "New Object" }` → Reassigns local variable only (doesn't affect `person`)
3. After function ends, `person` still points to the original object with `name: "Changed"`

---

## Q20: True or False Questions

**Q1:** `typeof NaN` returns "NaN"  
**A:** False. Returns "number"

**Q2:** Strings are mutable in JavaScript  
**A:** False. Strings are immutable

**Q3:** `typeof []` returns "array"  
**A:** False. Returns "object"

**Q4:** `null == undefined` is true  
**A:** True (loose equality)

**Q5:** `null === undefined` is true  
**A:** False (strict equality)

**Q6:** Objects are stored in Stack memory  
**A:** False. Stored in Heap, references in Stack

**Q7:** Primitive types are immutable  
**A:** True

**Q8:** `Symbol("id") === Symbol("id")` is true  
**A:** False. Each Symbol is unique

---

## Q21: What's the difference between `Number()` and `parseInt()`?

**Answer:**

**Number():**
- Converts entire string to number
- Stricter conversion
- Returns NaN if any non-numeric character
```javascript
Number("123");      // 123
Number("123abc");   // NaN
Number("12.5");     // 12.5
Number("");         // 0
Number("   ");      // 0
```

**parseInt():**
- Parses string until it finds non-numeric
- Returns the number before non-numeric
- Takes optional radix (base) parameter
```javascript
parseInt("123");      // 123
parseInt("123abc");   // 123 (parses until 'a')
parseInt("12.5");     // 12 (stops at '.')
parseInt("abc123");   // NaN (starts with letter)
parseInt("FF", 16);   // 255 (hexadecimal)
```

---

## Q22: What will this code output?
```javascript
let x = "5" + 3;
let y = "5" - 3;
let z = "5" * "2";

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
```

**Answer:**
```
"53" string
2 number
10 number
```

**Reason:**
- `+` with string → concatenation
- `-`, `*`, `/` → always convert to number

---

## Q23: How do you create a truly immutable object?

**Answer:**  
Use `Object.freeze()`:
```javascript
const obj = {
    name: "Manoj",
    age: 25
};

Object.freeze(obj);

obj.name = "Kumar";  // Doesn't work (silent fail)
obj.city = "Chennai"; // Doesn't work
delete obj.age;      // Doesn't work

console.log(obj);  // { name: "Manoj", age: 25 } (unchanged)
```

**Note:**  
`Object.freeze()` is shallow. Nested objects can still be modified:
```javascript
const obj = {
    person: { name: "Manoj" }
};

Object.freeze(obj);
obj.person.name = "Kumar";  // ✅ Works! (nested object not frozen)
```

**For deep freeze, use recursion or libraries.**

---

## Q24: Memory Question - What's wrong here?
```javascript
function createObjects() {
    for (let i = 0; i < 1000000; i++) {
        let obj = { data: new Array(1000) };
    }
}

createObjects();
```

**Answer:**  
This creates 1 million objects in the heap. However, since they're in a local scope and no longer referenced after the loop, they'll be **garbage collected**. This is fine.

**Actual Problem (Memory Leak):**
```javascript
let globalArray = [];

function createObjects() {
    for (let i = 0; i < 1000000; i++) {
        globalArray.push({ data: new Array(1000) });
    }
}

createObjects();
// Objects are still referenced by globalArray - memory leak!
```

---

## Q25: Advanced - What's the output?
```javascript
let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };

let merged = { ...obj1, ...obj2 };
console.log(merged);
```

**Answer:**
```
{ a: 1, b: 3, c: 4 }
```

**Reason:**  
- Spread operator creates shallow copy
- Later properties overwrite earlier ones
- `b: 3` from `obj2` overwrites `b: 2` from `obj1`

---

## Q26: What is the result?
```javascript
console.log(0.1 + 0.2 === 0.3);
```

**Answer:** `false`

**Reason:**  
Floating-point precision issue in JavaScript (and most programming languages).
```javascript
console.log(0.1 + 0.2);  // 0.30000000000000004
```

**Solution:**
```javascript
console.log((0.1 + 0.2).toFixed(2) === "0.30");  // true
// or
console.log(Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON);  // true
```

---

## Q27: What's the difference between these?
```javascript
// Option A
let arr = new Array(3);

// Option B
let arr = [3];
```

**Answer:**

**Option A:**  
Creates an array with 3 **empty slots** (length = 3, but no elements)
```javascript
console.log(arr);         // [empty × 3]
console.log(arr.length);  // 3
console.log(arr[0]);      // undefined
```

**Option B:**  
Creates an array with **one element**: the number 3
```javascript
console.log(arr);         // [3]
console.log(arr.length);  // 1
console.log(arr[0]);      // 3
```

---

## Q28: Can you change the type of a variable?

**Answer:**  
Yes! JavaScript is **dynamically typed**. Variables can hold any type.
```javascript
let x = 5;           // Number
console.log(typeof x);  // "number"

x = "Hello";         // String
console.log(typeof x);  // "string"

x = true;            // Boolean
console.log(typeof x);  // "boolean"

x = { name: "Manoj" }; // Object
console.log(typeof x);  // "object"
```

This is one of JavaScript's key features (and sometimes a source of bugs!).

---

## Q29: What's the difference between `String` and `string`?

**Answer:**

**`String` (capital S):**  
Constructor function/object wrapper
```javascript
let str1 = new String("hello");
console.log(typeof str1);  // "object"
console.log(str1 instanceof String);  // true
```

**`string` (lowercase s):**  
Primitive type
```javascript
let str2 = "hello";
console.log(typeof str2);  // "string"
console.log(str2 instanceof String);  // false
```

**Best Practice:** Always use primitive (lowercase) unless you specifically need an object.

---

## Q30: Final Challenge
```javascript
function mystery(value) {
    console.log(typeof value);
    console.log(value instanceof Object);
    console.log(Array.isArray(value));
}

mystery([1, 2, 3]);
```

**What will be the output?**

**Answer:**
```
object
true
true
```

**Reason:**
- `typeof [1, 2, 3]` → "object" (arrays are objects)
- `[] instanceof Object` → true (arrays inherit from Object)
- `Array.isArray([1, 2, 3])` → true (correct array check)