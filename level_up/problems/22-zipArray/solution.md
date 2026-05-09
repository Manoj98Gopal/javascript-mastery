# zipArrays

[⬅ Back to problem list](../../index.md)

## Problem Statement

Write a function `zipArrays(arr1, arr2)` that combines two arrays into an array of pairs.

---

## Examples

```js
zipArrays([1, 2, 3], ["a", "b", "c"])   // → [[1,"a"], [2,"b"], [3,"c"]]
zipArrays([1, 2], ["a", "b", "c"])       // → [[1,"a"], [2,"b"]]
zipArrays([], [1, 2, 3])                 // → []
zipArrays([1, 2, 3], [])                 // → []
```

---

## Constraints

- If arrays have different lengths — stop at the shorter one
- Return array of pairs
- Do not use any library

---

## My Approach

1. Find the **shorter length** using `Math.min`
2. Loop up to that length
3. Push `[arr1[i], arr2[i]]` pair each iteration
4. Return result

---

## Solution 1 — Math.min + Loop (My Solution) ⭐

```js
function zipArrays(arr1, arr2) {
  const result = [];
  const minLength = Math.min(arr1.length, arr2.length);

  for (let i = 0; i < minLength; i++) {
    result.push([arr1[i], arr2[i]]);
  }

  return result;
}
```

---

## Solution 2 — slice + map (Most Concise)

```js
function zipArrays(arr1, arr2) {
  const minLength = Math.min(arr1.length, arr2.length);
  return arr1.slice(0, minLength).map((item, i) => [item, arr2[i]]);
}
```

---

## Approach Comparison

| Approach | Lines | Notes |
|---|---|---|
| Multiple if conditions | 12 lines | Correct but overcomplicated |
| Math.min + loop | 6 lines | Clean and simple ✅ |
| slice + map | 2 lines | Most concise ⭐ |

---

## Key Insight — Math.min Replaces All Conditions 💡

```js
// ❌ Overcomplicated — three conditions for one idea
if (arr1.length === arr2.length || arr1.length < arr2.length) {
  for (i = 0; i < arr1.length; i++) { ... }
}
if (arr1.length > arr2.length) {
  for (i = 0; i < arr2.length; i++) { ... }
}

// ✅ One formula covers all cases
const minLength = Math.min(arr1.length, arr2.length);
for (let i = 0; i < minLength; i++) { ... }
```

---

## No Empty Check Needed!

```js
// Empty check is unnecessary
if (arr1.length === 0 || arr2.length === 0) return [];

// Math.min handles it automatically
Math.min(0, 3) = 0 → loop never runs → returns [] ✅
```

---

## Key Concepts

| Concept | Detail |
|---|---|
| `Math.min(a, b)` | Returns smaller of two numbers |
| `for (let i...)` | Always use `let` — avoids creating global variable |
| `[arr1[i], arr2[i]]` | Creates a pair at same index |
| Pair | An array of two elements `[a, b]` |

---

## Common Mistake

```js
// ❌ Missing let — creates global variable!
for (i = 0; i < minLength; i++) { ... }

// ✅ Always use let inside for loop
for (let i = 0; i < minLength; i++) { ... }
```

---

## Edge Cases to Remember

| Input | Output | Reason |
|---|---|---|
| `([], [1,2,3])` | `[]` | Math.min(0,3)=0 → loop never runs |
| `([1,2], ["a","b","c"])` | `[[1,"a"],[2,"b"]]` | Stops at shorter array |
| `([1,2,3], [4,5,6])` | `[[1,4],[2,5],[3,6]]` | Equal length — all paired |

---

## Key Lesson 💡

> Before writing multiple `if` conditions — ask yourself:
> *"Is there one formula that covers all these cases?"*
>
> Instead of three conditions:
> ```js
> Math.min(arr1.length, arr2.length)
> ```
> One line replaces everything!

---

## Time & Space Complexity

| | Complexity |
|---|---|
| Time | O(n) — n is shorter array length |
| Space | O(n) — result array |