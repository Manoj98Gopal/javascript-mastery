# InvertObject

[⬅ Back to problem list](../../index.md)


## Problem Statement

Write a function `invertObject(obj)` that swaps the keys and values of an object.

---

## Examples

```js
invertObject({ a: 1, b: 2, c: 3 })
// → { 1: "a", 2: "b", 3: "c" }

invertObject({ name: "Alice", city: "Delhi" })
// → { Alice: "name", Delhi: "city" }

invertObject({})
// → {}
```

---

## Constraints

- Assume all values are unique
- Assume all values can be used as valid keys (strings or numbers)
- Do not use any library

---

## My Approach

1. Create an empty **result object**
2. Loop through the object using `Object.entries()` to get both key and value
3. For each entry — assign `result[value] = key` (swap them)
4. Return result

---

## Solution 1 — forEach (My Solution) ⭐

```js
function invertObject(obj) {
  const result = {};

  Object.entries(obj).forEach(([key, value]) => {
    result[value] = key;
  });

  return result;
}
```

---

## Solution 2 — for...in loop

```js
function invertObject(obj) {
  const result = {};

  for (let key in obj) {
    result[obj[key]] = key;
  }

  return result;
}
```

---

## Solution 3 — reduce

```js
function invertObject(obj) {
  return Object.entries(obj).reduce((result, [key, value]) => {
    result[value] = key;
    return result;
  }, {});
}
```

---

## Approach Comparison

| Approach | Readability | Notes |
|---|---|---|
| `forEach` | ✅ Very clear | Best for readability |
| `for...in` | ✅ Simple | Classic, easy to explain |
| `reduce` | ⚠️ Compact | Shows functional thinking |

---

## Key Concepts

| Concept | Detail |
|---|---|
| `Object.entries(obj)` | Returns array of `[key, value]` pairs |
| `Object.keys(obj)` | Returns array of keys only |
| `Object.values(obj)` | Returns array of values only |
| Destructuring `[key, value]` | Extract key and value from each entry |

---

## map vs forEach — Important Rule 💡

```js
// ❌ Wrong tool — map returns new array but you ignore it
Object.entries(obj).map(([key, value]) => {
  result[value] = key;
});

// ✅ Correct tool — forEach is for side effects
Object.entries(obj).forEach(([key, value]) => {
  result[value] = key;
});
```

> **Rule:**
> - Need a new transformed array? → `map`
> - Just looping for side effects? → `forEach`
> - Building a single value? → `reduce`

---

## Edge Cases to Remember

| Input | Output | Reason |
|---|---|---|
| `{}` | `{}` | Loop never runs |
| `{ a: 1 }` | `{ 1: "a" }` | Single entry swapped |

---

## Time & Space Complexity

| | Complexity |
|---|---|
| Time | O(n) — one pass through object |
| Space | O(n) — new result object |