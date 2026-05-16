# intersectArrays

[⬅ Back to problem list](../../index.md)

## Problem Statement

Write a function `intersectArrays(arr1, arr2)` that returns the intersection of two arrays — elements that appear in both arrays. Each element appears as many times as it appears in both.

---

## Examples

```js
intersectArrays([1, 2, 2, 3], [2, 2, 4])       // → [2, 2]
intersectArrays([1, 2, 3], [4, 5, 6])           // → []
intersectArrays([1, 1, 1], [1, 1])              // → [1, 1]
intersectArrays([3, 1, 2], [2, 3])              // → [2, 3]
```

---

## Constraints

- Result order doesn't matter
- Each element appears min(count in arr1, count in arr2) times
- Do not use `filter + includes`

---

## My Approach

1. Build **frequency map** of arr1
2. Create empty `result` array
3. Loop through arr2
4. If item exists in freqMap and count > 0 → push to result, decrement count
5. Return result

---

## Solution — Frequency Map + Ticket Counter (My Solution) ⭐

```js
function intersectArrays(arr1, arr2) {
  const freqMap = {};

  for (let num of arr1) {
    freqMap[num] = (freqMap[num] || 0) + 1;
  }

  const result = [];

  for (let num of arr2) {
    if (freqMap[num] > 0) {
      result.push(num);
      freqMap[num]--;
    }
  }

  return result;
}
```

---

## Step by Step Trace

```js
intersectArrays([1, 2, 2, 3], [2, 2, 4])

Step 1 — freqMap of arr1:
freqMap = { 1:1, 2:2, 3:1 }

Step 2 — loop arr2:
  num=2 → freqMap[2]=2 > 0 → push 2, freqMap[2]=1
  num=2 → freqMap[2]=1 > 0 → push 2, freqMap[2]=0
  num=4 → freqMap[4]=undefined → 0 > 0 false → skip

result = [2, 2] ✅
```

---

## The Ticket Counter Pattern 🎫

```js
freqMap[num]--  // use one ticket each time
```

```
arr1 = [1]       → freqMap = { 1:1 }  (1 ticket)
arr2 = [1, 1, 1]

  see 1 → ticket=1 > 0 → push 1, ticket=0 ✅
  see 1 → ticket=0 → skip ✅
  see 1 → ticket=0 → skip ✅

result = [1] ✅  (minimum of 1 and 3)
```

> Without `freqMap[num]--` → would push 1 three times ❌

---

## Why `freqMap[num] > 0` not `freqMap[num] && freqMap[num] > 0`?

```js
// ⚠️ Redundant double check
if (freqMap[num] && freqMap[num] > 0)

// ✅ Cleaner — undefined > 0 is false in JS
if (freqMap[num] > 0)
```

`undefined > 0` evaluates to `false` — so missing keys are handled safely!

---

## Key Concepts

| Concept | Detail |
|---|---|
| Frequency map | Count occurrences of arr1 |
| Ticket counter | `freqMap[num]--` limits usage to available count |
| `undefined > 0` | Returns `false` — safe for missing keys |
| Intersection | Elements in BOTH arrays, min occurrences |

---

## Common Mistake

```js
// ❌ filter + includes — doesn't handle duplicates correctly
arr1.filter(item => arr2.includes(item))
// [1,1,1] ∩ [1,1] → [1,1,1] ❌ (should be [1,1])

// ✅ Frequency map + ticket counter
// Handles duplicates correctly every time
```

---

## Edge Cases to Remember

| Input | Output | Reason |
|---|---|---|
| `([1,2,3], [4,5,6])` | `[]` | No common elements |
| `([1,1,1], [1,1])` | `[1,1]` | Min(3,2) = 2 |
| `([1], [1,1,1])` | `[1]` | Min(1,3) = 1 |
| `([], [1,2])` | `[]` | freqMap empty — nothing matches |

---

## Time & Space Complexity

| | Complexity |
|---|---|
| Time | O(n + m) — one pass each array |
| Space | O(n) — frequency map of arr1 |

---

## Key Lesson 💡

> **Ticket counter pattern** — when you need to limit how many times
> an element can be matched, decrement its count after each use.
>
> `freqMap[num]--` ensures you never use more occurrences
> than actually exist in arr1.