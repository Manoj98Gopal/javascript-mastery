# Longest Word

[⬅ Back to problem list](../../index.md)

## Problem Statement

Write a function `longestWord(str)` that finds the longest word in a sentence. If there are multiple words with the same length, return the first one.

---

## Examples

```js
longestWord("The quick brown fox")        // → "quick"
longestWord("I love JavaScript")          // → "JavaScript"
longestWord("cat bat hat")                // → "cat"
longestWord("Hello World")               // → "Hello"
longestWord("")                           // → ""
```

---

## Constraints

- Ignore punctuation (commas, dots, exclamation marks)
- Return the first longest word if tie
- Return empty string if input is empty

---

## My Approach

1. **Check** if sentence is empty — return `""` early
2. **Clean** punctuation using regex `/[^a-zA-Z\s]/g`
3. **Split** sentence into words array
4. **Track** index of longest word — start at `0`
5. **Loop** — if current word is longer, update index
6. **Return** word at largest index

---

## Solution 1 — Index Tracking (My Solution)

```js
function longestWord(sentence) {
  if (!sentence) return "";

  const words = sentence.replace(/[^a-zA-Z\s]/g, "").split(" ");

  let largestIndex = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > words[largestIndex].length) {
      largestIndex = i;
    }
  }

  return words[largestIndex];
}
```

---

## Solution 2 — Using reduce ⭐

```js
function longestWord(sentence) {
  if (!sentence) return "";

  const words = sentence.replace(/[^a-zA-Z\s]/g, "").split(" ");

  return words.reduce((longest, word) =>
    word.length > longest.length ? word : longest
  , "");
}
```

---

## Approach Comparison

| Approach | Time | Space | Notes |
|---|---|---|---|
| Index tracking | O(n) | O(n) | Clear, easy to explain |
| reduce | O(n) | O(n) | Functional, concise |

---

## Key Concepts

| Concept | Detail |
|---|---|
| `/[^a-zA-Z\s]/g` | Remove everything except letters and spaces |
| Track index | Smarter than storing the word — index gives you the word anyway |
| First longest | `>` not `>=` ensures first one wins on tie |

---

## Common Mistake

```js
// ❌ Doesn't handle punctuation
sentence.split(" ")
// "fox!" has length 4 — the ! is wrongly counted

// ✅ Clean first
sentence.replace(/[^a-zA-Z\s]/g, "").split(" ")
```

---

## Edge Cases to Remember

| Input | Output | Reason |
|---|---|---|
| `""` | `""` | Early return |
| `"cat bat hat"` | `"cat"` | Tie → first one wins |
| `"Hello World!"` | `"Hello"` | Punctuation removed from "World!" |

---

## Time & Space Complexity

| | Complexity |
|---|---|
| Time | O(n) — one pass through words |
| Space | O(n) — words array |