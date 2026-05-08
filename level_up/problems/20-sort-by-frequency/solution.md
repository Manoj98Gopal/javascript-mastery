# sortByFrequency

[⬅ Back to problem list](../../index.md)

## Problem Statement

Write a function `sortByFrequency(arr)` that sorts an array by the frequency of each element — most frequent first. If two elements have the same frequency, the one that appears first in the original array comes first.

---

## Examples

```js
sortByFrequency([1, 1, 2, 3, 3, 3, 2])   // → [3, 3, 3, 1, 1, 2, 2]
sortByFrequency([4, 4, 1, 2, 2, 3])       // → [4, 4, 2, 2, 1, 3]
sortByFrequency([1, 2, 3])                // → [1, 2, 3]
sortByFrequency([])                        // → []
```

---

## Constraints

- Most frequent elements come first
- Same frequency → preserve original order
- Return a new array

---

## My Approach

1. Build a **frequency map** — count occurrences of each element
2. **Sort** the array using frequency as sorting key
3. If frequencies are equal → preserve original order using `indexOf`
4. Return sorted array

---

## Solution 1 — Basic (My Solution)

```js
function sortByFrequency(arr) {
  const freq = {};

  for (let item of arr) {
    freq[item] = (freq[item] || 0) + 1;
  }

  return [...arr].sort((a, b) => freq[b] - freq[a]);
}
```

---

## Solution 2 — Handles Same Frequency (Improved) ⭐

```js
function sortByFrequency(arr) {
  if (!arr.length) return [];

  const freq = {};
  for (let item of arr) {
    freq[item] = (freq[item] || 0) + 1;
  }

  return [...arr].sort((a, b) => {
    if (freq[b] !== freq[a]) return freq[b] - freq[a];
    return arr.indexOf(a) - arr.indexOf(b);
  });
}
```

---

## How the Sort Comparator Works

```js
(a, b) => freq[b] - freq[a]
```

| Result | Meaning |
|---|---|
| Negative | a comes first |
| Positive | b comes first |
| Zero | same — keep order |

```js
// a=1(freq:2), b=3(freq:3)
freq[b] - freq[a] = 3 - 2 = 1  // positive → b(3) comes first ✅

// a=4(freq:2), b=2(freq:2)
freq[b] - freq[a] = 2 - 2 = 0  // equal → use indexOf to preserve order ✅
```

---

## Step by Step Trace

```js
sortByFrequency([1, 1, 2, 3, 3, 3, 2])

Step 1 — frequency map:
freq = { 1:2, 2:2, 3:3 }

Step 2 — sort by frequency:
3 → freq 3 (highest) → first
1 → freq 2 → second
2 → freq 2 → same as 1, but 1 appears first in original

Result → [3, 3, 3, 1, 1, 2, 2] ✅
```

---

## Key Concepts

| Concept | Detail |
|---|---|
| Frequency map | Count occurrences of each element |
| `[...arr].sort()` | Spread first — avoids mutating original array |
| Sort comparator | `freq[b] - freq[a]` sorts highest frequency first |
| `arr.indexOf(a)` | Finds first occurrence — used to preserve original order on tie |

---

## Common Mistake

```js
// ❌ Mutates original array
arr.sort((a, b) => freq[b] - freq[a])

// ✅ Spread first — safe copy
[...arr].sort((a, b) => freq[b] - freq[a])

// ❌ Doesn't handle same frequency order
(a, b) => freq[b] - freq[a]

// ✅ Handles tie correctly
(a, b) => {
  if (freq[b] !== freq[a]) return freq[b] - freq[a];
  return arr.indexOf(a) - arr.indexOf(b);
}
```

---

## Edge Cases to Remember

| Input | Output | Reason |
|---|---|---|
| `[]` | `[]` | Early return |
| `[1,2,3]` | `[1,2,3]` | All freq=1, original order preserved |
| `[4,4,1,2,2,3]` | `[4,4,2,2,1,3]` | 4 and 2 tied, 4 appears first |

---

## Time & Space Complexity

| | Complexity |
|---|---|
| Time | O(n log n) — sorting dominates |
| Space | O(n) — freq object + result array |