# Problem 2 — Find Duplicates in an Array

[⬅ Back to problem list](../../index.md)


## Problem Statement

Write a function `findDuplicates(arr)` that returns an array of all elements that appear **more than once**.

- The result must not contain duplicates itself.
- Return an empty array if no duplicates exist.

---

## Examples

```js
findDuplicates([1, 2, 3, 2, 4, 3])   // → ["2", "3"]
findDuplicates([5, 5, 5, 1])          // → ["5"]
findDuplicates([1, 2, 3])             // → []
findDuplicates([])                    // → []
```

---

## Constraints

- Array can contain numbers or strings
- Input array may be empty
- Output should not contain the same element twice

---

## My Approach

1. Create an **empty object** to use as a frequency map
2. Loop through the array using `for...of`
3. For each item, **count how many times** it appears using the object
4. Loop through the object using `for...in`
5. **Push keys** where count is greater than 1 into a result array
6. Return the result array

---

## Solution

```js
function findDuplicates(arr) {
  const freq = {};

  for (let item of arr) {
    freq[item] = (freq[item] || 0) + 1;
  }

  const duplicates = [];

  for (let key in freq) {
    if (freq[key] > 1) {
      duplicates.push(key);
    }
  }

  return duplicates;
}
```

---

## Key Concepts

| Concept | Detail |
|---|---|
| Frequency map | Object used to count occurrences of each element |
| `for...of` | Loops over array values |
| `for...in` | Loops over object keys |
| `(freq[item] \|\| 0) + 1` | Safe increment — handles missing keys without if/else |
| Object keys are strings | `{ 1: 2 }` — the key `1` is stored as the string `"1"` |

---

## Edge Cases to Remember

- Object keys are **always strings** — `Number(key)` breaks for string inputs like `["a", "a"]`
- `if (obj[item])` is fragile — use `(obj[item] \|\| 0) + 1` instead
- Elements appearing 3+ times should still appear **only once** in output ✅ (handled by object keys being unique)

---

## Time & Space Complexity

| | Complexity |
|---|---|
| Time | O(n) |
| Space | O(n) |

---

## Common Mistakes

```js
// ❌ Fragile — fails for falsy values like 0 or false
if (obj[item]) {
  obj[item] += 1;
} else {
  obj[item] = 1;
}

// ✅ Correct — one-liner, always safe
freq[item] = (freq[item] || 0) + 1;

// ❌ Wrong — breaks for string arrays like ["a", "a"]
duplicates.push(Number(key));

// ✅ Correct — works for both numbers and strings
duplicates.push(key);
```

---

## Pattern to Remember

> **Frequency Map Pattern** — Use an object to count occurrences, then filter based on count.
> This pattern appears in dozens of interview problems.