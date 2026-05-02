# Day 3 — CountVowels

[⬅ Back to problem list](../../index.md)


## Problem Statement

Write a function `countVowels(str)` that returns the number of vowels in a string.

---

## Examples

```js
countVowels("hello")           // → 2
countVowels("javascript")      // → 3
countVowels("why")             // → 0
countVowels("AEIOUaeiou")      // → 10
countVowels("")                // → 0
```

---

## Constraints

- Vowels are `a, e, i, o, u` (both uppercase and lowercase)
- Return a number

---

## My Approach

1. Create a **vowels array** `["a", "e", "i", "o", "u"]`
2. **Lowercase** the string using `.toLowerCase()`
3. Create a **count variable** set to `0`
4. Loop through each character
5. Check if the character is in the vowels array using `.includes()`
6. If yes → increment count
7. Return count

---

## Solution 1 — Array + for...of (My Solution)

```js
function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) count++;
  }

  return count;
}
```

---

## Solution 2 — Set + has() (Optimized)

```js
function countVowels(str) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.has(char)) count++;
  }

  return count;
}
```

---

## Solution 3 — Regex (Shortest)

```js
function countVowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
```

---

## Approach Comparison

| Approach | Time | Space | Notes |
|---|---|---|---|
| Array + includes | O(n) | O(1) | Clean, readable |
| Set + has | O(n) | O(1) | Faster lookup — better habit |
| Regex match | O(n) | O(n) | Shortest code, good to know |

---

## Key Concepts

| Concept | Detail |
|---|---|
| `Array.includes()` | O(n) lookup — checks every item |
| `Set.has()` | O(1) lookup — direct access, faster |
| `for...of` on string | No need to split string into array first |
| `/[aeiou]/gi` | `g` = find all matches, `i` = case insensitive |
| `matches ? matches.length : 0` | `.match()` returns `null` if no match — must handle it |

---

## Common Mistake

```js
// ❌ Unnecessary — creates extra array
const smallCase = str.toLowerCase().split("");
for (let i = 0; i < smallCase.length; i++) { ... }

// ✅ Cleaner — loop string directly
for (let char of str.toLowerCase()) { ... }
```

---

## Edge Cases to Remember

| Input | Output | Reason |
|---|---|---|
| `""` | `0` | Loop never runs |
| `"why"` | `0` | No vowels |
| `"AEIOUaeiou"` | `10` | `.toLowerCase()` handles uppercase |

---

## Key Lesson 💡

> **Array vs Set for lookups:**
> - Small fixed list (like 5 vowels) → difference is negligible
> - Large list → always prefer `Set` for O(1) lookup
> - Build the habit of reaching for `Set` when you're checking membership