# makeCounter

[⬅ Back to problem list](../../index.md)

## Problem Statement

Write a function `makeCounter(start)` that returns a counter object with three methods — `increment`, `decrement` and `reset`.

---

## Examples

```js
const counter = makeCounter(2);

counter.increment()  // → 3
counter.increment()  // → 4
counter.decrement()  // → 3
counter.reset()      // → 2  (back to original start!)
counter.increment()  // → 3
```

---

## Constraints

- `start` defaults to `0` if not provided
- Each method returns the current value after operation
- `reset` always goes back to the original start value
- Use closures — do not use classes or `this`

---

## My Approach

1. Create outer function `makeCounter` with `startValue` parameter
2. Create `count` variable — this is the closure variable
3. Create three inner functions — `increment`, `decrement`, `reset`
4. Each function modifies `count` and returns it
5. Return all three functions inside an object

---

## Solution — Closure (My Solution) ⭐

```js
function makeCounter(startValue = 0) {
  let count = startValue;

  function increment() {
    count++;
    return count;
  }

  function decrement() {
    count--;
    return count;
  }

  function reset() {
    count = startValue;
    return count;
  }

  return { increment, decrement, reset };
}
```

---

## How Closure Works Here

```
makeCounter(2) is called
└── count = 2  (lives in memory)
    ├── increment() → count++ → returns count
    ├── decrement() → count-- → returns count
    └── reset()    → count = 2 → returns count

makeCounter finishes BUT count stays alive
because increment/decrement/reset still reference it!
```

---

## Key Concepts

| Concept | Detail |
|---|---|
| Closure | Inner function remembers outer scope variables |
| `startValue = 0` | Default parameter — works when no argument passed |
| Shorthand properties | `{ increment, decrement, reset }` = `{ increment: increment, ... }` |
| Shared state | All three methods share the same `count` variable |

---

## The Three Signs of Closure

> 1. Outer function has a variable → `let count`
> 2. Inner function uses it → `count++`
> 3. Inner function is returned/used outside → `counter.increment()`

---

## Edge Cases to Remember

| Input | Output | Reason |
|---|---|---|
| `makeCounter()` | starts at 0 | Default parameter handles it |
| `counter.reset()` | original start | `startValue` never changes |
| Multiple counters | independent | Each call creates its own `count` |

```js
const a = makeCounter(0);
const b = makeCounter(10);
a.increment();  // → 1
b.increment();  // → 11  (independent!) ✅
```

---

## Time & Space Complexity

| | Complexity |
|---|---|
| Time | O(1) — each method is one operation |
| Space | O(1) — only one variable stored |