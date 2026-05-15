# missingNumber

[⬅ Back to problem list](../../index.md)

## Problem Statement

Write a function `missingNumber(arr)` that finds the missing number in an array containing `n` distinct numbers from `0` to `n`.

---

## Examples

```js
missingNumber([3, 0, 1])              // → 2
missingNumber([0, 1])                 // → 2
missingNumber([9,6,4,2,3,5,7,0,1])   // → 8
missingNumber([0])                    // → 1
```

---

## Constraints

- Array contains `n` distinct numbers in range `[0, n]`
- Exactly one number is missing
- Do not sort the array
- O(n) time and O(1) space

---

## The Core Insight — Math Formula 🧠

**Question:** What should all numbers from 0 to n add up to?

```
n = 5 → 0+1+2+3+4+5 = 15

Pair from both ends:
0 + 5 = 5
1 + 4 = 5
2 + 3 = 5
→ 3 pairs × 5 = 15
```

General formula:
```
Sum of 0 to n = n × (n + 1) / 2
```

Verify:
```js
n=3 → 3×4/2 = 6  → 0+1+2+3 = 6 ✅
n=5 → 5×6/2 = 15 → 0+1+2+3+4+5 = 15 ✅
n=9 → 9×10/2 = 45 ✅
```

---

## My Approach

1. `n = arr.length` — the array has n numbers, range is 0 to n
2. `expectedSum = n × (n+1) / 2` — what sum should be
3. `actualSum = sum of all elements in array`
4. `missing = expectedSum - actualSum`

---

## Solution — Math Formula (My Solution) ⭐

```js
function missingNumber(arr) {
  const n = arr.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}
```

---

## Step by Step Trace

```js
missingNumber([3, 0, 1])

n = 3
expectedSum = 3×4/2 = 6   (0+1+2+3 should total 6)
actualSum   = 3+0+1 = 4   (what we actually have)
missing     = 6 - 4 = 2 ✅
```

---

## How to Remember the Formula 💡

> **"Sum of 0 to n = n times n+1 divided by 2"**

Think of it as:
```
(first + last) × count / 2
(0    + n    ) × (n+1) / 2
= n × (n+1) / 2
```

---

## Approach Comparison

| Approach | Time | Space | Notes |
|---|---|---|---|
| Sort and scan | O(n log n) | O(1) | Slower |
| HashSet lookup | O(n) | O(n) | Extra memory |
| Math formula ⭐ | O(n) | O(1) | Optimal! |

---

## Key Concepts

| Concept | Detail |
|---|---|
| `n = arr.length` | Array has n items, range is 0 to n |
| `n × (n+1) / 2` | Sum of all numbers from 0 to n |
| `reduce` | Sums all elements in one pass |
| `expectedSum - actualSum` | Difference = missing number |

---

## Common Mistake

```js
// ❌ Sorting — unnecessary and slower
arr.sort((a,b) => a-b)
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== i) return i;
}

// ✅ Math formula — no sorting needed
const expectedSum = (n * (n + 1)) / 2;
return expectedSum - arr.reduce((s, n) => s + n, 0);
```

---

## Edge Cases to Remember

| Input | Output | Reason |
|---|---|---|
| `[0]` | `1` | n=1, expected=1, actual=0 |
| `[0,1]` | `2` | n=2, expected=3, actual=1 |
| `[1]` | `0` | n=1, expected=1, actual=1, missing=0 |

---

## Time & Space Complexity

| | Complexity |
|---|---|
| Time | O(n) — one pass with reduce |
| Space | O(1) — no extra storage |

---

## Key Lesson 💡

> When a problem involves a **complete sequence with one item missing**
> — think math formula first!
>
> Expected total - Actual total = Missing item
>
> This pattern appears in many interview problems.

---

## Important Interview Advice ⚠️

> Turn off Copilot during practice sessions.
> In a real interview there's no Copilot — only your brain.
> Understanding **why** a solution works is more valuable than having the code.