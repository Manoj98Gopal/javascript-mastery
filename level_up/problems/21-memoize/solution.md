# memoize

[⬅ Back to problem list](../../index.md)

## Problem Statement

Write a function `memoize(fn)` that takes any function and returns a memoized version of it. The memoized version should cache results and return cached results on subsequent calls with the same arguments.

---

## Examples

```js
const slowSquare = (n) => n * n;
const fastSquare = memoize(slowSquare);

fastSquare(4)   // → 16  (computed)
fastSquare(4)   // → 16  (from cache — fn not called again)
fastSquare(5)   // → 25  (computed)
fastSquare(5)   // → 25  (from cache)

// Works with multiple arguments
const add = memoize((a, b) => a + b);
add(2, 3)   // → 5  (computed)
add(2, 3)   // → 5  (from cache)
add(1, 2)   // → 3  (computed)
```

---

## Constraints

- Works with any number of arguments
- Do not use any library
- Use closures for the cache

---

## What is Memoization?

> Memoization = write the answer down the first time → next time just look it up!

```
First call:  99 × 99 → calculate → 9801 → save to cache
Second call: 99 × 99 → found in cache → 9801 ✅ instant!
```

---

## My Approach

1. Create a `cache` object inside `memoize` — this is the closure variable
2. Return a **new function** that accepts any number of arguments
3. Generate a unique `key` from the arguments using `JSON.stringify`
4. Check if key exists in cache → return cached value
5. If not → call original function, save result, return it

---

## Solution — Closure + Cache (My Solution) ⭐

```js
function memoize(fn) {
  const cache = {};

  return function(...args) {
    const key = JSON.stringify(args);

    if (cache[key] !== undefined) {
      return cache[key];
    }

    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}
```

---

## Step by Step Trace

```js
const add = memoize((a, b) => a + b);

add(2, 3):
  key = "[2,3]"
  cache = {} → not found
  result = 2+3 = 5
  cache = { "[2,3]": 5 }
  return 5

add(2, 3):
  key = "[2,3]"
  cache = { "[2,3]": 5 } → FOUND!
  return 5 ← no calculation ✅

add(1, 2):
  key = "[1,2]"
  cache = { "[2,3]": 5 } → not found
  result = 1+2 = 3
  cache = { "[2,3]": 5, "[1,2]": 3 }
  return 3
```

---

## How Closure Works Here

```
memoize(fn) is called
└── cache = {}  (lives in memory)
    └── returned function has access to cache
        even after memoize finishes executing!
```

---

## Key Concepts

| Concept | Detail |
|---|---|
| Closure | `cache` lives in outer scope, inner function remembers it |
| `...args` | Rest operator — collects all arguments into array |
| `fn(...args)` | Spread operator — passes array as individual arguments |
| `JSON.stringify(args)` | Creates unique key for any argument combination |
| `!== undefined` | Safe check — handles falsy results like `0` or `false` |

---

## Why `!== undefined` not just `if(cache[key])`?

```js
const fn = memoize(() => 0);
fn()

// ❌ if(cache[key]) → if(0) → falsy → recalculates every time!
// ✅ if(cache[key] !== undefined) → true → returns cached 0
```

---

## Why `JSON.stringify` not `args.join(",")`?

```js
// args.join(",") fails for objects
fn({ value: 1 })  // key = "[object Object]" ⚠️
fn({ value: 2 })  // key = "[object Object]" ← same key! wrong!

// JSON.stringify handles all types
fn({ value: 1 })  // key = '[{"value":1}]' ✅
fn({ value: 2 })  // key = '[{"value":2}]' ✅ different!
```

---

## Common Mistake

```js
// ❌ Just returning the same function — no caching!
function memoize(fn) {
  return fn;
}

// ✅ Return a NEW function that wraps the original
function memoize(fn) {
  const cache = {};
  return function(...args) { ... };
}
```

---

## Time & Space Complexity

| | Complexity |
|---|---|
| Time (cached) | O(1) — instant lookup |
| Time (new call) | O(n) — depends on original function |
| Space | O(n) — cache grows with unique calls |