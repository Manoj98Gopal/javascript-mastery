
## 1. What is an Object?

An object in JavaScript is a **collection of key-value pairs**.

- The **key** is always a string (or Symbol)
- The **value** can be anything: number, string, boolean, array, function, or even another object

```
Object = {
  key1: value1,
  key2: value2,
  key3: function    ← when value is a function, we call it a "method"
}
```

> 💡 **Interview Point:** When a function is inside an object, it is called a **method**.

---

## 2. ⚠️ "Everything in JavaScript is an Object" — Common Misconception

This is **NOT fully true**. Here is the real picture:

### JavaScript has 2 types:

| Type | Examples | Is Object? |
|------|----------|------------|
| **Primitives** | string, number, boolean, null, undefined, symbol, bigint | ❌ NO |
| **Objects** | {}, [], function, Date, RegExp | ✅ YES |

### Then why does `"hello".toUpperCase()` work?

Because JavaScript does **auto-boxing** — it temporarily wraps the primitive in an object so you can use methods on it. After the method runs, the wrapper is thrown away.

```javascript
"hello".toUpperCase()
// JS secretly does this temporarily:
// new String("hello").toUpperCase()
// Then throws the wrapper away
```

> ✅ **Correct statement:** "Almost everything in JS *behaves* like an object, but primitives are NOT objects."

---

## 3. Five Ways to Create Objects

### Way 1: Object Literal `{}` ⭐ Most Common

```javascript
const person = {
  name: "Alice",
  age: 30,
  greet() {
    console.log(`Hello, I am ${this.name}`);
  }
};
```

**When to use:** Almost always. Simple, fast, readable.

---

### Way 2: Constructor Function

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person = new Person("Bob", 25);
```

**When to use:** Before ES6. Creates multiple objects of same "type".

> ⚠️ Must use `new` keyword. Without `new`, `this` will point to global object!

---

### Way 3: `Object.create()`

```javascript
const proto = {
  greet() {
    console.log(`Hello, I am ${this.name}`);
  }
};

const person = Object.create(proto);
person.name = "Charlie";
```

**When to use:** When you want to set the prototype manually. Important for prototypal inheritance (covered in Topic 37).

---

### Way 4: ES6 Class ⭐ Modern Way

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, I am ${this.name}`);
  }
}

const person = new Person("Dave", 28);
```

**When to use:** Modern JavaScript projects. Clean and readable. (We will cover this in detail in Topic 38)

---

### Way 5: Factory Function

```javascript
function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(`Hello, I am ${this.name}`);
    }
  };
}

const person = createPerson("Eve", 22);
```

**When to use:** When you do NOT want to use `new`. Returns a plain object.

| Feature | Constructor Function | Factory Function |
|---------|---------------------|-----------------|
| Uses `new` | ✅ Yes | ❌ No |
| Returns object | Implicit | Explicit `return {}` |
| `instanceof` works | ✅ Yes | ❌ No |
| Prototype sharing | ✅ Yes | ❌ No (each object gets own copy) |

---

## 4. Property Operations

### Adding Properties

```javascript
const person = { name: "Alice" };

// Dot notation
person.age = 30;

// Bracket notation
person["city"] = "New York";
```

> 💡 Use **bracket notation** when the key has spaces or special characters, or when key is stored in a variable.

```javascript
const key = "name";
console.log(person[key]); // ✅ Works — reads value of variable 'key'
console.log(person.key);  // ❌ Wrong — looks for property literally named 'key'
```

---

### Updating Properties

```javascript
person.age = 31;         // update with dot
person["city"] = "LA";   // update with bracket
```

---

### Deleting Properties

```javascript
delete person.age;
console.log(person.age); // undefined

console.log(delete person.city); // true ← delete returns true if successful
```

> ⚠️ `delete` only removes **own** properties. It cannot delete variables or function arguments.

---

### Checking if Property Exists

```javascript
const person = { name: "Alice", age: 30 };

// Method 1: 'in' operator (checks own + inherited properties)
console.log("name" in person);    // true
console.log("height" in person);  // false

// Method 2: hasOwnProperty (checks ONLY own properties)
console.log(person.hasOwnProperty("name"));    // true
console.log(person.hasOwnProperty("toString")); // false (inherited, not own)
```

> 🎯 **Interview Tip:** `in` checks inherited properties too. `hasOwnProperty` checks only the object's own properties.

---

## 5. Property Shorthand (ES6)

When variable name and property name are the same, you can use shorthand:

```javascript
const name = "Alice";
const age = 30;

// Old way:
const person = { name: name, age: age };

// Shorthand (ES6):
const person = { name, age }; // ✅ Same result!
```

---

## 6. Computed Property Names (ES6)

You can use a variable or expression as a property key using `[]`:

```javascript
const key = "name";
const person = {
  [key]: "Alice"  // same as writing name: "Alice"
};

console.log(person.name); // "Alice"

// Dynamic keys:
const prefix = "user";
const obj = {
  [`${prefix}Name`]: "Alice",  // key becomes "userName"
  [`${prefix}Age`]: 30         // key becomes "userAge"
};
```

---

## 7. Object Property Descriptors (Advanced but Important)

Every property in an object has hidden settings called **descriptors**:

| Descriptor | Default | Meaning |
|------------|---------|---------|
| `value` | the value | The property's value |
| `writable` | `true` | Can you change the value? |
| `enumerable` | `true` | Does it show in loops? |
| `configurable` | `true` | Can you delete or redefine it? |

```javascript
const person = { name: "Alice" };

// See property descriptor
Object.getOwnPropertyDescriptor(person, "name");
// { value: "Alice", writable: true, enumerable: true, configurable: true }

// Define property with custom descriptor
Object.defineProperty(person, "id", {
  value: 123,
  writable: false,     // cannot change
  enumerable: false,   // will not show in for...in loop
  configurable: false  // cannot delete
});
```

> 🎯 **Interview Tip:** This is the foundation of `Object.freeze()` and `Object.seal()` (Topic 32).

---

## 8. Looping Over Object Properties

```javascript
const person = { name: "Alice", age: 30, city: "NY" };

// for...in loop (includes inherited properties too!)
for (let key in person) {
  console.log(key, person[key]);
}

// Object.keys() — only own keys (we'll cover this more in Topic 29)
Object.keys(person).forEach(key => {
  console.log(key, person[key]);
});
```

---

## 9. Nested Objects

Objects can contain other objects:

```javascript
const person = {
  name: "Alice",
  address: {
    city: "New York",
    zip: "10001"
  }
};

// Accessing nested properties
console.log(person.address.city);       // "New York"
console.log(person["address"]["city"]); // "New York"
```

---

## 10. Common Mistakes

### ❌ Mistake 1: Saying "everything is an object"
```javascript
typeof null        // "object" ← this is a famous JS BUG, null is NOT an object
typeof undefined   // "undefined"
typeof "hello"     // "string" ← primitive, not object
```

### ❌ Mistake 2: Using dot notation with variable key
```javascript
const key = "name";
person.key   // ❌ looks for property named "key"
person[key]  // ✅ looks for property named "name"
```

### ❌ Mistake 3: Forgetting `new` with Constructor Function
```javascript
function Person(name) { this.name = name; }
const p = Person("Alice"); // ❌ 'this' = global! p = undefined
const p = new Person("Alice"); // ✅ correct
```

---

## 🎯 Interview Key Points

1. **Object** = collection of key-value pairs. Keys are strings or Symbols.
2. **NOT everything is an object** — primitives are not objects. They can just *behave* like objects due to auto-boxing.
3. **`typeof null === "object"`** is a historical bug in JavaScript, NOT proof that null is an object.
4. **5 ways to create objects:** literal, constructor function, Object.create(), class, factory function.
5. **Dot vs Bracket notation:** Use bracket when key is in a variable or has special characters.
6. **`in` operator** checks own + inherited. **`hasOwnProperty`** checks only own properties.
7. **`delete` returns `true`** when successful.
8. **Property shorthand** `{ name }` is same as `{ name: name }`.
9. **Computed keys** `{ [variable]: value }` allow dynamic property names.
10. **Methods** are just functions stored as values in an object.