# Group By

[⬅ Back to problem list](../../index.md)


## Problem Statement

Write a function `groupBy(arr, key)` that groups an array of objects by a given key.

---

## Examples

```js
const people = [
  { name: "Alice", city: "Delhi" },
  { name: "Bob", city: "Mumbai" },
  { name: "Charlie", city: "Delhi" },
  { name: "David", city: "Mumbai" },
  { name: "Eve", city: "Bangalore" },
];

groupBy(people, "city")
// → {
//     Delhi: [{ name: "Alice", city: "Delhi" }, { name: "Charlie", city: "Delhi" }],
//     Mumbai: [{ name: "Bob", city: "Mumbai" }, { name: "David", city: "Mumbai" }],
//     Bangalore: [{ name: "Eve", city: "Bangalore" }]
//   }
```

---

## Constraints

- Return an object where each key is a unique value of the given key
- Each key maps to an array of matching objects
- Do not use `lodash` or any library

---

## My Approach

1. Create an empty **result object**
2. Loop through the array using `for...of`
3. For each item — check if the key already exists in result
4. If **yes** → push the item into the existing array
5. If **no** → create a new array with the item
6. Return result

---

## Solution 1 — for...of (My Solution)

```js
function groupBy(arr, key) {
  const result = {};

  for (let item of arr) {
    result[item[key]] = result[item[key]] || [];
    result[item[key]].push(item);
  }

  return result;
}
```

---

## Solution 2 — Using reduce ⭐

```js
function groupBy(arr, key) {
  return arr.reduce((result, item) => {
    result[item[key]] = result[item[key]] || [];
    result[item[key]].push(item);
    return result;
  }, {});
}
```

---

## Approach Comparison

| | for...of | reduce |
|---|---|---|
| Readability | ✅ Easier to read | ⚠️ Slightly harder |
| Interview signal | Good | Strong — shows functional thinking |
| Debugging | Easier | Harder |
| Best for | General use | Transforming arrays into single value |

---

## Key Pattern to Memorize 💡

```js
// Check if key exists → push or create new array
result[item[key]] = result[item[key]] || [];
result[item[key]].push(item);
```

> This pattern appears in dozens of interview problems.
> Use it whenever you're grouping or counting with an object.

---

## Key Concepts

| Concept | Detail |
|---|---|
| `hasOwnProperty` | Safe way to check if key exists in object |
| `obj[key] \|\| []` | If exists use it, otherwise start with empty array |
| `reduce` | Best for transforming array into a single value (number, string, object) |
| Optional chaining `?.` | Only use when unsure if value exists — not needed after existence check |

---

## When to use reduce

> Use `reduce` when transforming an array into a single value:
> - Sum of array → `reduce`
> - Count occurrences → `reduce`
> - Group by key → `reduce` ✅

---

## Edge Cases to Remember

| Input | Output | Reason |
|---|---|---|
| `groupBy([], "city")` | `{}` | Empty array — loop never runs |
| `groupBy(people, "name")` | Each person in own group | Every name is unique |

---

## Time & Space Complexity

| | Complexity |
|---|---|
| Time | O(n) — one pass through array |
| Space | O(n) — all items stored in result |