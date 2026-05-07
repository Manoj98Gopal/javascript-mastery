# RotateArray

[⬅ Back to problem list](../../index.md)

## Problem Statement

Write a function `rotateArray(arr, k)` that rotates an array to the right by `k` steps.

---

## Examples

```js
rotateArray([1, 2, 3, 4, 5], 2)    // → [4, 5, 1, 2, 3]
rotateArray([1, 2, 3, 4, 5], 1)    // → [5, 1, 2, 3, 4]
rotateArray([1, 2, 3], 3)          // → [1, 2, 3]
rotateArray([1, 2, 3], 5)          // → [2, 3, 1]
rotateArray([], 2)                  // → []
```

---

## Constraints

- `k` can be larger than array length — handle it!
- Return a new array
- Do not rotate one step at a time

---

## The Core Insight — Slice and Rejoin 💡

Instead of rotating one step at a time:

```
arr = [1, 2, 3, 4, 5]  k = 2

splitPoint = arr.length - k = 5 - 2 = 3

left  = arr.slice(0, 3) = [1, 2, 3]
right = arr.slice(3)    = [4, 5]

result = [...right, ...left] = [4, 5, 1, 2, 3] ✅
```

Just cut the array at the right point and rejoin — one operation!

---

## My Approach

1. Handle empty array → return `[]`
2. Handle `k > length` → use `k % arr.length`
3. Handle `k === 0` → return copy of array
4. Find `splitPoint = arr.length - k`
5. Slice right part and left part
6. Spread and combine → `[...right, ...left]`

---

## Solution 1 — While Loop (My First Solution)

```js
function rotateArray(array, k) {
  const result = [...array];
  let count = 1;

  while (count <= k) {
    const value = result.pop();
    result.unshift(value);
    count++;
  }

  return result;
}
// ⚠️ Works but O(n×k) — misses k > length case
```

---

## Solution 2 — Slice and Rejoin (Optimal) ⭐

```js
function rotateArray(arr, k) {
  if (!arr.length) return [];

  k = k % arr.length;        // handle k larger than length

  if (k === 0) return [...arr];  // no rotation needed

  const splitPoint = arr.length - k;

  return [...arr.slice(splitPoint), ...arr.slice(0, splitPoint)];
}
```

---

## Step by Step Trace

```js
rotateArray([1, 2, 3, 4, 5], 2)
k = 2 % 5 = 2
splitPoint = 5 - 2 = 3
right = arr.slice(3)    = [4, 5]
left  = arr.slice(0, 3) = [1, 2, 3]
result = [4, 5, 1, 2, 3] ✅

rotateArray([1, 2, 3], 5)
k = 5 % 3 = 2
splitPoint = 3 - 2 = 1
right = arr.slice(1)    = [2, 3]
left  = arr.slice(0, 1) = [1]
result = [2, 3, 1] ✅

rotateArray([1, 2, 3], 3)
k = 3 % 3 = 0 → return [...arr] = [1, 2, 3] ✅
```

---

## Approach Comparison

| Approach | Time | Space | Notes |
|---|---|---|---|
| While loop (one step at a time) | O(n×k) | O(n) | Misses k > length |
| Slice and rejoin | O(n) | O(n) | Optimal ✅ |

---

## Key Concepts

| Concept | Detail |
|---|---|
| `k % arr.length` | Handles k larger than array length |
| `splitPoint = arr.length - k` | Where to cut the array |
| `arr.slice(splitPoint)` | Right part — goes to front |
| `arr.slice(0, splitPoint)` | Left part — goes to back |
| Spread `...` | Combine two arrays cleanly |

---

## Common Mistake

```js
// ❌ Doesn't handle k > array length
rotateArray([1,2,3], 5)  // rotates 5 times instead of 2

// ✅ Always normalize k first
k = k % arr.length;

// ❌ Rotating one step at a time — O(n×k)
while (count <= k) { result.unshift(result.pop()); count++; }

// ✅ Slice and rejoin — O(n)
return [...arr.slice(arr.length - k), ...arr.slice(0, arr.length - k)];
```

---

## Edge Cases to Remember

| Input | Output | Reason |
|---|---|---|
| `([], 2)` | `[]` | Empty array — return early |
| `([1,2,3], 3)` | `[1,2,3]` | k % length = 0 — no rotation |
| `([1,2,3], 5)` | `[2,3,1]` | k = 5 % 3 = 2 |

---

## Time & Space Complexity

| | Complexity |
|---|---|
| Time | O(n) — slice is linear |
| Space | O(n) — new array returned |

---

## Key Lesson 💡

> Whenever you rotate or cycle through an array:
> 1. Always handle `k % arr.length` first
> 2. Look for a **slice and rejoin** instead of rotating one by one
>
> Cutting and rejoining is always faster than shifting elements one at a time.