# MaxConsecutiveOnes

[⬅ Back to problem list](../../index.md)


## Problem Statement

Write a function `maxConsecutiveOnes(arr)` that finds the maximum number of consecutive `1`s in a binary array.

---

## Examples

```js
maxConsecutiveOnes([1,1,0,1,1,1])    // → 3
maxConsecutiveOnes([1,0,1,0,1])      // → 1
maxConsecutiveOnes([0,0,0])          // → 0
maxConsecutiveOnes([1,1,1,1])        // → 4
maxConsecutiveOnes([])               // → 0
```

---

## Constraints

- Array contains only `0`s and `1`s
- Return a number
- Do not use `.join()` or string tricks

---

## My Approach

1. Create two variables — `max` (highest streak seen) and `current` (current streak)
2. Loop through array
3. If item is `1` → increment `current`
4. If item is `0` → compare `current` with `max`, save the bigger one, reset `current` to `0`
5. After loop → do one final comparison (handles arrays ending with 1s)
6. Return `max`

---

## Solution

```js
function maxConsecutiveOnes(arr) {
  let max = 0;
  let current = 0;

  for (let item of arr) {
    if (item) {
      current++;
    } else {
      max = Math.max(max, current);
      current = 0;
    }
  }

  return Math.max(max, current);
}

module.exports = maxConsecutiveOnes;
```

---

## Why Two Variables? 💡

```js
// ❌ One variable — loses the highest streak when reset
let maxOnes = 0;
// When you hit 0, maxOnes resets and you lose previous streak

// ✅ Two variables — always remember the highest streak
let max = 0;      // highest streak seen so far
let current = 0;  // current ongoing streak
```

---

## The Critical Edge Case ⚠️

```js
maxConsecutiveOnes([1,1,1,1])  // array ends with 1s — never hits a 0!
```

The last streak never gets compared inside the loop because there's no `0` to trigger it.
That's why we do a **final comparison after the loop:**

```js
return Math.max(max, current);  // ← catches the last streak
```

---

## Step by Step Trace

```js
maxConsecutiveOnes([1,1,1,0,1])
```

| item | current | max |
|---|---|---|
| 1 | 1 | 0 |
| 1 | 2 | 0 |
| 1 | 3 | 0 |
| 0 | 0 | 3 ← saved! |
| 1 | 1 | 3 |

`Math.max(3, 1)` → returns `3` ✅

---

## Key Concepts

| Concept | Detail |
|---|---|
| `Math.max(a, b)` | Returns the larger of two numbers |
| Two variable pattern | One for current state, one for best seen so far |
| Final return comparison | Always handle the case where array ends without a reset trigger |

---

## Common Mistake

```js
// ❌ Resets without saving — loses previous streak
maxOne = item ? maxOne + 1 : 0;

// ✅ Save before resetting
max = Math.max(max, current);
current = 0;
```

---

## Edge Cases to Remember

| Input | Output | Reason |
|---|---|---|
| `[]` | `0` | Loop never runs, returns `Math.max(0,0)` = 0 |
| `[0,0,0]` | `0` | current never increments |
| `[1,1,1,1]` | `4` | Final return handles no-zero arrays |
| `[1,0,1,0,1]` | `1` | Each streak is only 1 |

---

## Time & Space Complexity

| | Complexity |
|---|---|
| Time | O(n) — one pass through array |
| Space | O(1) — only two variables, no extra storage |

---

## Key Lesson 💡

> **Two variable pattern** — use this whenever you need to track
> both the **current state** and the **best state** seen so far.
>
> You'll see this pattern in:
> - Max consecutive ones ✅
> - Longest streak problems
> - Maximum subarray problems
> - Sliding window problems (Phase 2)