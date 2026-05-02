# FlattenArray

[⬅ Back to problem list](../../index.md)


## Problem Statement

Write a function `flattenArray(arr)` that takes a **nested array** and returns a single flat array with all values.

---

## Examples

```js
flattenArray([1, [2, 3], [4, [5, 6]]])     // → [1, 2, 3, 4, 5, 6]
flattenArray([[1, 2], [3, 4], [5]])         // → [1, 2, 3, 4, 5]
flattenArray([1, [2, [3, [4, [5]]]]])       // → [1, 2, 3, 4, 5]
flattenArray([])                            // → []
```

---

## Constraints

- Arrays can be nested to **any depth**
- Do not use `.flat()` or `.flatMap()`
- Return a new array

---

## My Approach

1. Create an empty **result array**
2. Create an inner **flatten function** that loops the array
3. For each item — check if it is an array using `Array.isArray()`
4. If it **is an array** → call `flatten` again recursively (go deeper)
5. If it **is a value** → push it to result
6. Call flatten with the original array and return result

---

## Solution 1 — Recursion with Inner Function (My Solution) ⭐

```js
function flattenArray(arr) {
  const result = [];

  function flatten(arr) {
    for (let item of arr) {
      if (Array.isArray(item)) {
        flatten(item);   // recursive call — go deeper
      } else {
        result.push(item);  // base case — collect the value
      }
    }
  }

  flatten(arr);
  return result;
}
```

---

## Solution 2 — Recursion with Reduce

```js
function flattenArray(arr) {
  return arr.reduce((result, item) => {
    if (Array.isArray(item)) {
      return result.concat(flattenArray(item));
    } else {
      result.push(item);
      return result;
    }
  }, []);
}
```

---

## Key Concepts

| Concept | Detail |
|---|---|
| Recursion | Function calls itself on a smaller version of the problem |
| Base case | Item is not an array → push to result and stop |
| Recursive case | Item is an array → call flatten again on it |
| `Array.isArray()` | Checks if a value is an array |
| Closure | Inner `flatten` function has access to outer `result` variable |

---

## The Two Recursion Questions to Always Ask

> 1. **What is the base case?** → When do I stop?
>    - Item is not an array → push it and stop
>
> 2. **What is the recursive case?** → How do I make the problem smaller?
>    - Item is an array → call flatten on it (go one level deeper)

---

## Edge Cases to Remember

| Input | Output | Reason |
|---|---|---|
| `[]` | `[]` | Loop never runs |
| `[1, 2, 3]` | `[1, 2, 3]` | No nesting — all values pushed directly |
| `[1, [2, [3, [4]]]]` | `[1, 2, 3, 4]` | Deep nesting — recursion handles any depth |

---

## Time & Space Complexity

| | Complexity |
|---|---|
| Time | O(n) — every element visited once |
| Space | O(d) — d is the depth of nesting (recursion call stack) |