# MaxSumSubarray

[⬅ Back to problem list](../../index.md)


## Problem Statement

Write a function `maxSumSubarray(arr, k)` that finds the maximum sum of any contiguous subarray of size `k`.

---

## Examples

```js
maxSumSubarray([2, 1, 5, 1, 3, 2], 3)   // → 9  (5+1+3)
maxSumSubarray([1, 4, 2, 10, 2, 3], 4)  // → 19 (4+2+10+3)
maxSumSubarray([5, 5, 5, 5], 2)          // → 10
maxSumSubarray([1, 2, 3], 3)             // → 6
```

---

## Constraints

- `k` is always less than or equal to array length
- Array contains positive integers
- Do not use nested loops — O(n) required

---

## The Core Insight — Sliding Window

Instead of recalculating the sum from scratch every time:

```
[2, 1, 5, 1, 3, 2]  k=3

window 1: 2+1+5 = 8   ← calculate once
window 2: 1+5+1 = 8   ← reuse! just subtract 2, add 1
window 3: 5+1+3 = 9   ← reuse! just subtract 1, add 3
window 4: 1+3+2 = 6   ← reuse! just subtract 5, add 2
```

When window slides one step:
- One element **leaves** from the left → subtract it
- One element **enters** from the right → add it
- Everything in the middle stays the same!

---

## The Formula

```js
windowSum = windowSum - arr[i - k] + arr[i]
//                      ↑ leaving       ↑ entering
```

---

## My Approach

1. Calculate sum of **first k elements** → first window
2. Set `max = windowSum`
3. Loop from index `k` to end
4. Each step: subtract element leaving, add element entering
5. Update `max` if new `windowSum` is bigger
6. Return `max`

---

## Solution — Sliding Window (My Solution) ⭐

```js
function maxSumSubarray(arr, k) {
  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  let max = windowSum;

  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    max = Math.max(windowSum, max);
  }

  return max;
}
```

---

## Brute Force vs Sliding Window

```js
// Brute Force — O(n×k)
function maxSumSubarray(arr, k) {
  let max = 0;
  for (let i = 0; i <= arr.length - k; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += arr[j];
    }
    max = Math.max(max, sum);
  }
  return max;
}

// Sliding Window — O(n) ⭐
function maxSumSubarray(arr, k) {
  let windowSum = 0;
  for (let i = 0; i < k; i++) windowSum += arr[i];
  let max = windowSum;
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    max = Math.max(windowSum, max);
  }
  return max;
}
```

---

## Step by Step Trace

```js
maxSumSubarray([2, 1, 5, 1, 3, 2], 3)

First window: 2+1+5 = 8, max = 8

i=3: windowSum = 8 - arr[0] + arr[3] = 8 - 2 + 1 = 7, max = 8
i=4: windowSum = 7 - arr[1] + arr[4] = 7 - 1 + 3 = 9, max = 9 ← new max!
i=5: windowSum = 9 - arr[2] + arr[5] = 9 - 5 + 2 = 6, max = 9

Result: 9 ✅
```

---

## Approach Comparison

| Approach | Time | Space | Notes |
|---|---|---|---|
| Brute force | O(n×k) | O(1) | Recalculates from scratch |
| Sliding window | O(n) | O(1) | Reuses previous sum ✅ |

---

## Formula to Memorize 💡

```js
windowSum = windowSum - arr[i - k] + arr[i]
//          previous    element       element
//          sum         leaving       entering
```

---

## Real Life Analogy 🚂

Think of a 3-seat train moving through stations.
When it moves one station forward:
- One passenger leaves from the back
- One passenger boards at the front
- Everyone in the middle stays

You don't recount all passengers — just subtract one and add one!

---

## Time & Space Complexity

| | Complexity |
|---|---|
| Time | O(n) — one pass for first window + one pass to slide |
| Space | O(1) — only two variables |