# TwoSum

[⬅ Back to problem list](../../index.md)


## Problem Statement

Write a function `twoSum(arr, target)` that returns the indices of two numbers that add up to the target.

---

## Examples

```js
twoSum([2, 7, 11, 15], 9)   // → [0, 1]  (2+7=9)
twoSum([3, 2, 4], 6)        // → [1, 2]  (2+4=6)
twoSum([3, 3], 6)           // → [0, 1]
```

---

## Constraints

- Exactly one solution always exists
- Cannot use the same element twice
- Return indices as `[i, j]` where `i < j`
- Do not use nested loops — O(n) solution required

---

## My Approach

1. Create an empty **seen object** (hashmap)
2. Loop through the array
3. For each element — calculate `complement = target - arr[i]`
4. Check if complement already exists in seen
5. If **yes** → return `[seen[complement], i]`
6. If **no** → store `seen[arr[i]] = i`
7. Return `[]` if no pair found

---

## Solution — Hashmap (My Solution) ⭐

```js
function twoSum(arr, target) {
  const seen = {};

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];

    if (seen.hasOwnProperty(complement)) {
      return [seen[complement], i];
    }

    seen[arr[i]] = i;
  }

  return [];
}
```

---

## Brute Force vs Optimized

```js
// Brute Force — O(n²)
function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) return [i, j];
    }
  }
  return [];
}

// Optimized — O(n) ⭐
function twoSum(arr, target) {
  const seen = {};
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (seen.hasOwnProperty(complement)) return [seen[complement], i];
    seen[arr[i]] = i;
  }
  return [];
}
```

---

## Step by Step Trace

```js
twoSum([2, 7, 11, 15], 9)

i=0: arr[0]=2, complement=9-2=7, seen={} → not found, seen={2:0}
i=1: arr[1]=7, complement=9-7=2, seen={2:0} → found! return [0,1] ✅
```

---

## Approach Comparison

| Approach | Time | Space | Notes |
|---|---|---|---|
| Brute force (nested loop) | O(n²) | O(1) | Simple but slow |
| Hashmap | O(n) | O(n) | Optimal ✅ |

---

## Key Concepts

| Concept | Detail |
|---|---|
| `complement = target - arr[i]` | "What number do I need?" |
| `seen[arr[i]] = i` | Store number → index mapping |
| `hasOwnProperty` | Safe existence check |
| Hashmap lookup | O(1) — instant check |

---

## The Hashmap Pattern 💡

> Whenever a problem asks you to **find a pair** or **check if something exists**
> — reach for a hashmap.
>
> Store what you've seen → check if what you need is already there.
> This turns O(n²) → O(n) instantly.

---

## Formula to Memorize

```js
complement = target - arr[i]
// "What do I need?" instead of "What do I have?"
```

---

## Time & Space Complexity

| | Complexity |
|---|---|
| Time | O(n) — one pass through array |
| Space | O(n) — seen object stores up to n items |