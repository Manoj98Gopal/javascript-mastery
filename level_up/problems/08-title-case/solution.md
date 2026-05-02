# TitleCase

[⬅ Back to problem list](../../index.md)


## Problem Statement

Write a function `titleCase(str)` that converts a sentence to title case — first letter of every word capitalized, rest lowercase.

---

## Examples

```js
titleCase("hello world")            // → "Hello World"
titleCase("the quick brown fox")    // → "The Quick Brown Fox"
titleCase("javaScript is GREAT")    // → "Javascript Is Great"
titleCase("")                       // → ""
```

---

## Constraints

- Every word's first letter should be uppercase
- Rest of the letters should be lowercase
- Handle extra spaces between words

---

## My Approach

1. **Check** if string is empty — return `""` early
2. **Lowercase** the entire string using `.toLowerCase()`
3. **Split** into words using `/\s+/` (handles extra spaces)
4. **Map** over each word — uppercase first letter + slice rest
5. **Join** words back with a single space

---

## Solution 1 — My Solution

```js
function titleCase(str) {
  if (!str) return "";

  const smaller = str.toLowerCase().split(/\s+/);

  const result = smaller.map(word => {
    const firstLetter = word[0].toUpperCase();
    return firstLetter + word.slice(1);
  }).join(" ");

  return result;
}
```

---

## Solution 2 — Chained One-liner ⭐

```js
function titleCase(str) {
  if (!str) return "";

  return str
    .toLowerCase()
    .split(/\s+/)
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
```

---

## Key Concepts

| Concept | Detail |
|---|---|
| `.toLowerCase()` | Normalize entire string first |
| `.split(/\s+/)` | Split on one or more spaces — handles extra spaces |
| `word[0].toUpperCase()` | Capitalize first letter |
| `word.slice(1)` | Get rest of word from index 1 onwards |
| `.join(" ")` | Join words with single space |
| Method chaining | Chain multiple methods for cleaner code |

---

## Common Mistake

```js
// ❌ Redundant — assigning back to data[0] but never using it
const firstLetter = data[0].toUpperCase()
data[0] = firstLetter   // unnecessary
return firstLetter + data.slice(1)

// ✅ Clean — use firstLetter directly
const firstLetter = word[0].toUpperCase();
return firstLetter + word.slice(1);

// ✅ Even cleaner — one liner
word[0].toUpperCase() + word.slice(1)
```

---

## Edge Cases to Remember

| Input | Output | Reason |
|---|---|---|
| `""` | `""` | Early return handles it |
| `"  extra  spaces  "` | `"Extra Spaces"` | `/\s+/` + trim handles it |
| `"javaScript is GREAT"` | `"Javascript Is Great"` | `.toLowerCase()` first normalizes everything |

---

## Time & Space Complexity

| | Complexity |
|---|---|
| Time | O(n) — every character touched once |
| Space | O(n) — result string |

---

## Key Lesson 💡

> **Method chaining** — when each method returns a value you immediately call another method on,
> you can chain them all together cleanly.
>
> Instead of:
> ```js
> const a = str.toLowerCase();
> const b = a.split(/\s+/);
> const c = b.map(...);
> return c.join(" ");
> ```
> Write:
> ```js
> return str.toLowerCase().split(/\s+/).map(...).join(" ");
> ```