# PairSum

[⬅ Back to problem list](../../index.md)


## Problem Statement

Write a function `pairSum(arr, target)` that returns all unique pairs whose sum equals the target. The array is already sorted.

---

## Examples

```js
pairSum([1, 2, 3, 4, 5], 6)        // → [[1,5], [2,4]]
pairSum([1, 1, 2, 3, 4, 5], 6)     // → [[1,5], [2,4]]
pairSum([1, 2, 3], 10)             // → []
pairSum([1, 3, 5, 7], 8)           // → [[1,7], [3,5]]
```

---

## Constraints

- Array is already sorted in ascending order
- Return array of pairs — each pair [smaller, larger]
- No duplicate pairs in result
- Do not use nested loops — use two pointers

---

## What is Two Pointers? 💡

A pointer is just a variable that holds an index position in an array.

Two pointers means using two index variables at the same time:
- One starting from the **left** (beginning)
- One starting from the **right** (end)
- They move **toward each other** until they meet

```
[1, 2, 3, 4, 5]
 ↑           ↑
left=0      right=4
```

---

## My Approach

1. Start `left` at index `0`, `right` at last index
2. Create empty `result` array
3. While `left < right`:
   - Calculate `sum = arr[left] + arr[right]`
   - If `sum === target` → push pair, move both pointers
   - If `sum < target` → move `left` right (need bigger number)
   - If `sum > target` → move `right` left (need smaller number)
4. Return result

---

## Solution — Two Pointers (My Solution) ⭐

```js
function pairSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  const result = [];

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      result.push([arr[left], arr[right]]);
      left++;
      right--;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return result;
}
```

---

## Step by Step Trace

```js
pairSum([1, 2, 3, 4, 5], 6)

left=0, right=4 → 1+5=6 ✅ push [1,5], left=1, right=3
left=1, right=3 → 2+4=6 ✅ push [2,4], left=2, right=2
left=2, right=2 → left < right? NO → stop

result = [[1,5],[2,4]] ✅
```

---

## Why Move Which Pointer?

```
[1, 2, 3, 4, 5]  target=6

left=0, right=4 → 1+5=6 ✅ equal — found pair!
left=0, right=3 → 1+4=5   too small → need bigger → left++
left=1, right=3 → 2+4=6 ✅ equal — found pair!
left=1, right=4 → 2+5=7   too big → need smaller → right--
```

> Sum too small → left++ (moves to bigger number since array is sorted)
> Sum too big → right-- (moves to smaller number since array is sorted)
> Sum equal → save pair, move both

---

## Brute Force vs Two Pointers

```js
// Brute Force — O(n²)
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === target) result.push([arr[i], arr[j]]);
  }
}

// Two Pointers — O(n) ⭐
while (left < right) {
  const sum = arr[left] + arr[right];
  if (sum === target) { result.push(...); left++; right--; }
  else if (sum < target) left++;
  else right--;
}
```

---

## Approach Comparison

| Approach | Time | Space | Notes |
|---|---|---|---|
| Brute force | O(n²) | O(1) | Check every pair |
| Two pointers | O(n) | O(n) | Optimal for sorted arrays ✅ |

---

## Key Concepts

| Concept | Detail |
|---|---|
| Two pointers | Two index variables moving toward each other |
| Sorted array | Required for two pointers to work correctly |
| `left < right` | Stop condition — pointers must not cross |
| Move left++ | Sum too small — need bigger left value |
| Move right-- | Sum too big — need smaller right value |

---

## Common Mistake

```js
// ❌ Using nested loops — O(n²)
for (let i...) for (let j...) { ... }

// ✅ Two pointers — O(n)
while (left < right) { ... }

// ❌ Leaving console.log in final solution
console.log(result)  // remove before interview submission!
```

---

## Edge Cases to Remember

| Input | Output | Reason |
|---|---|---|
| `([1,2,3], 10)` | `[]` | No pairs found — result stays empty |
| `([1,1,2,3,4,5], 6)` | `[[1,5],[2,4]]` | Duplicates handled naturally |
| `([5], 5)` | `[]` | Single element — left never < right |

---

## Time & Space Complexity

| | Complexity |
|---|---|
| Time | O(n) — left and right meet in middle |
| Space | O(n) — result array |

---

## Key Lesson 💡

> **Two pointers work on sorted arrays.**
> Instead of checking every pair O(n²) —
> move pointers smartly toward the answer O(n).
>
> The sorted property tells you which direction to move:
> - Need bigger sum → move left pointer right
> - Need smaller sum → move right pointer left