# Problem 1 — Reverse Words in a Sentence

[⬅ Back to problem list](../../index.md)


## Problem Statement

Write a function `reverseWords(str)` that reverses the **order of words** in a sentence, but keeps each word's characters intact.

- Ignore leading, trailing, and extra spaces between words.
- Return the words joined by a single space.

---

## Examples

```js
reverseWords("hello world")        // → "world hello"
reverseWords("the sky is blue")    // → "blue is sky the"
reverseWords("  spaces  here  ")   // → "here spaces"
reverseWords("one")                // → "one"
```

---

## Constraints

- Input is a string (may have extra spaces)
- Return a single string with words in reversed order
- Words are separated by a single space in the output

---

## My Approach

1. **Trim** the string to remove leading and trailing spaces using `.trim()`
2. **Split** the sentence into words using `/\s+/` regex (handles multiple spaces)
3. **Reverse** the array using `.reverse()`
4. **Join** the words back using `.join(" ")`

---

## Solution

```js
function reverseWords(sentence) {
  return sentence.trim().split(/\s+/).reverse().join(" ");
}
```

---

## Key Concepts

| Concept | Detail |
|---|---|
| `.trim()` | Removes leading and trailing whitespace |
| `.split(/\s+/)` | Splits on one or more spaces (handles extra spaces) |
| `.split(" ")` | ❌ Splits on single space only — creates empty strings for extra spaces |
| `.reverse()` | Reverses array in place |
| `.join(" ")` | Joins array into string with space separator |

---

## Edge Cases to Remember

- Extra spaces between words → use `/\s+/` not `" "`
- Single word → returns the word as-is
- Only spaces → `.trim()` + `/\s+/` returns `[""]` → handle if needed

---

## Time & Space Complexity

| | Complexity |
|---|---|
| Time | O(n) |
| Space | O(n) |

---

## Common Mistake

```js
// ❌ Wrong — creates empty strings for extra spaces
sentence.trim().split(" ")

// ✅ Correct — handles multiple spaces
sentence.trim().split(/\s+/)
```