# SumDigits

[⬅ Back to problem list](../../index.md)


## Problem Statement

Write a function `sumDigits(n)` that returns the sum of all digits of a given number using recursion.

---

## Examples

```js
sumDigits(123)    // → 6   (1+2+3)
sumDigits(456)    // → 15  (4+5+6)
sumDigits(9)      // → 9
sumDigits(0)      // → 0
sumDigits(9999)   // → 36  (9+9+9+9)
```

---

## Constraints

- Must use recursion
- Input is always a non-negative integer
- Do not convert to string to split digits

---

## Key Math Operations

```js
123 % 10              // → 3   (extracts last digit)
Math.floor(123 / 10)  // → 12  (removes last digit)
```

---

## My Approach

1. Extract the **last digit** using `n % 10`
2. Get the **remaining number** using `Math.floor(n / 10)`
3. Add last digit to the result of recursively calling on remaining
4. **Base case** — when `n < 10` just return `n`

---

## Solution 1 — Inner Function (My Solution)

```js
function sumDigits(num) {
  let result = 0;

  function add(n) {
    const lastNum = n % 10;
    const remaining = Math.floor(n / 10);
    result += lastNum;
    if (remaining) {
      add(remaining);
    }
  }

  add(num);
  return result;
}
```

---

## Solution 2 — Pure Recursion (Optimal) ⭐

```js
function sumDigits(n) {
  if (n < 10) return n;                              // base case
  return (n % 10) + sumDigits(Math.floor(n / 10));  // recursive case
}
```

---

## Why Pure Recursion is Cleaner

| | Inner function | Pure recursion |
|---|---|---|
| Extra variable | needs `result` | not needed |
| Inner function | needs `add` | not needed |
| Lines of code | 10 lines | 3 lines |
| Readability | Good | Excellent |

> The return value **carries the result up** through each recursive call.
> No need to store anything externally.

---

## Visualized

```js
sumDigits(123)
→ (3) + sumDigits(12)
→ (3) + (2) + sumDigits(1)
→ (3) + (2) + (1)   ← base case
→ 6
```

---

## The Two Recursion Questions

> 1. **Base case** — when do I stop?
>    - When `n < 10` → it's a single digit, just return it
>
> 2. **Recursive case** — how do I make the problem smaller?
>    - Extract last digit + recurse on remaining number

---

## Key Concepts

| Concept | Detail |
|---|---|
| `n % 10` | Extracts the last digit |
| `Math.floor(n / 10)` | Removes the last digit |
| Base case `n < 10` | Single digit — return as is |
| Pure recursion | Result passed up via return statements |

---

## Edge Cases to Remember

| Input | Output | Reason |
|---|---|---|
| `0` | `0` | Base case returns 0 |
| `9` | `9` | Single digit — base case |
| `10` | `1` | `0 + sumDigits(1)` = 1 |

---

## Time & Space Complexity

| | Complexity |
|---|---|
| Time | O(d) — d is number of digits |
| Space | O(d) — recursion call stack depth |

---

## Key Lesson 💡

> **Pure recursion** — when the function returns a value, pass results
> up through return statements instead of storing in external variables.
>
> Ask: "Do I really need an external variable, or can I just return the result directly?"