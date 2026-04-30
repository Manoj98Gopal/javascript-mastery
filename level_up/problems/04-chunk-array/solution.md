# chunkArray

## Problem Statement

Write a function `chunkArray(arr, size)` that splits an array into groups of the given `size`. The last chunk may be smaller if elements don't divide evenly.

---

## Examples

```js
chunkArray([1, 2, 3, 4, 5], 2)     // → [[1,2], [3,4], [5]]
chunkArray([1, 2, 3, 4, 5, 6], 3)  // → [[1,2,3], [4,5,6]]
chunkArray([1, 2, 3], 5)           // → [[1,2,3]]
chunkArray([], 3)                  // → []
```

---

## Constraints

- `size` is a positive integer
- Return an array of arrays
- Do not use `.splice()`

---

## My Approach

1. Create an empty **result array**
2. Loop through the array jumping **`size` steps at a time** using `i += size`
3. At each step, **slice** `size` elements using `array.slice(i, i + size)`
4. **Push** each chunk into the result array
5. Return the result array

---

## Solution

```js
function chunkArray(array, size) {
  const chunkedArray = [];

  for (let i = 0; i < array.length; i += size) {
    const chunk = array.slice(i, i + size);
    chunkedArray.push(chunk);
  }

  return chunkedArray;
}
```

---

## Key Concepts

| Concept | Detail |
|---|---|
| `i += size` | Jump the loop by `size` steps each iteration |
| `.slice(start, end)` | Extracts elements from `start` up to (not including) `end` |
| Last chunk | `slice` automatically handles going beyond array length — returns remaining elements |

---

## How slice handles the last chunk

```js
[1, 2, 3, 4, 5].slice(4, 6)  // → [5]  (index 6 doesn't exist — no error)
```

No extra code needed for the last smaller chunk. `slice` handles it automatically. ✅

---

## Edge Cases to Remember

| Input | Output | Reason |
|---|---|---|
| `chunkArray([], 3)` | `[]` | Loop never runs |
| `chunkArray([1,2,3], 5)` | `[[1,2,3]]` | size > length, one chunk returned |
| `chunkArray([1,2,3,4], 2)` | `[[1,2],[3,4]]` | Divides evenly |
| `chunkArray([1,2,3,4,5], 2)` | `[[1,2],[3,4],[5]]` | Last chunk is smaller |

---

## Time & Space Complexity

| | Complexity |
|---|---|
| Time | O(n) — every element touched once |
| Space | O(n) — result array holds all elements |

---

## Key Lesson 💡

> When stuck, forget the code. Solve it by hand first.
> Then translate each manual step into code.
>
> Manual steps here:
> - Pick first 2 elements → chunk
> - Pick next 2 elements → chunk
> - Pick whatever is left → chunk
>
> That thinking directly becomes: **loop jumping by size + slice**.