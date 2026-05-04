# RemoveDuplicates

[⬅ Back to problem list](../../index.md)


## Problem Statement

Write a function `removeDuplicates(arr)` that removes all duplicate values from an array and returns only unique values without using `Set`.

---

## Examples

```js
removeDuplicates([1, 2, 2, 3, 4, 4, 5])   // → [1, 2, 3, 4, 5]
removeDuplicates(["a", "b", "a", "c"])     // → ["a", "b", "c"]
removeDuplicates([1, 1, 1, 1])             // → [1]
removeDuplicates([])                        // → []
```

---

## Constraints

- Do not use `Set`
- Do not use `filter + indexOf` shortcut
- Preserve original order of first appearances
- Return a new array

---

## My Approach

1. Create an empty **result array**
2. Loop through the array using `for...of`
3. Each iteration — check if item already exists in result using `.includes()`
4. If **not found** → push to result
5. Return result

---

## Solution 1 — includes (My Solution)

```js
function removeDuplicates(arr) {
  const result = [];

  for (let item of arr) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }

  return result;
}
```

---

## Solution 2 — Object lookup (Optimized) ⭐

```js
function removeDuplicates(arr) {
  const seen = {};
  const result = [];

  for (let item of arr) {
    if (!seen[item]) {
      seen[item] = true;
      result.push(item);
    }
  }

  return result;
}
```

---

## Approach Comparison

| Approach | Time | Space | Notes |
|---|---|---|---|
| includes | O(n²) | O(n) | Simple, readable |
| Object lookup | O(n) | O(n) | Optimal, interview-ready |
| Set (restricted) | O(n) | O(n) | Simplest but not allowed here |

---

## Key Concepts

| Concept | Detail |
|---|---|
| `.includes()` inside loop | O(n) per check → O(n²) total |
| Object lookup `seen[item]` | O(1) per check → O(n) total |
| `seen[item] = true` | Mark item as visited |

---

## Important Rule 💡

> Whenever you use `.includes()` or `.indexOf()` inside a loop — that's an O(n²) signal.
> Ask yourself: "Can I replace this with an object or Set lookup for O(1)?"

---

## Edge Cases to Remember

| Input | Output | Reason |
|---|---|---|
| `[]` | `[]` | Loop never runs |
| `[1,1,1,1]` | `[1]` | Only first occurrence kept |
| `["a","b","a"]` | `["a","b"]` | Order preserved |

---

## Time & Space Complexity

| Solution | Time | Space |
|---|---|---|
| includes | O(n²) | O(n) |
| Object lookup | O(n) | O(n) |