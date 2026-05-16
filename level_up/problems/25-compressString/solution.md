# compressString

[⬅ Back to problem list](../../index.md)

## Problem Statement

Write a function `compressString(str)` that performs basic string compression. Replace consecutive repeated characters with the character followed by the count.

---

## Examples

```js
compressString("aabcccdddd")    // → "a2b1c3d4"
compressString("abcd")          // → "a1b1c1d1"
compressString("aaabaa")        // → "a3b1a2"
compressString("a")             // → "a1"
compressString("")              // → ""
```

---

## Constraints

- Count consecutive characters only
- Return compressed string
- Handle empty string

---

## My Approach

1. Check if string is empty — return `""` early
2. Create `compressed` string and `count = 1`
3. Loop from index `1` — compare current with previous
4. If same → increment count
5. If different → append `char + count` to compressed, reset count to `1`
6. After loop → append last character and its count
7. Return compressed

---

## Solution 1 — Compare with Previous (My Solution) ⭐

```js
function compressString(string) {
  if (string.length === 0) return string;

  let compressed = "";
  let count = 1;

  for (let i = 1; i < string.length; i++) {
    if (string[i] === string[i - 1]) {
      count++;
    } else {
      compressed += string[i - 1] + count;
      count = 1;
    }
  }

  compressed += string[string.length - 1] + count;

  return compressed;
}
```

---

## Solution 2 — While Loop with Pointer

```js
function compressString(str) {
  if (!str.length) return "";

  let compressed = "";
  let i = 0;

  while (i < str.length) {
    let char = str[i];
    let count = 0;

    while (i < str.length && str[i] === char) {
      count++;
      i++;
    }

    compressed += char + count;
  }

  return compressed;
}
```

---

## Step by Step Trace

```js
compressString("aabcccdddd")

i=1: "a"==="a" → count=2
i=2: "b"!=="a" → compressed="a2", count=1
i=3: "c"!=="b" → compressed="a2b1", count=1
i=4: "c"==="c" → count=2
i=5: "c"==="c" → count=3
i=6: "d"!=="c" → compressed="a2b1c3", count=1
i=7: "d"==="d" → count=2
i=8: "d"==="d" → count=3
i=9: "d"==="d" → count=4

after loop → compressed += "d4" → "a2b1c3d4" ✅
```

---

## Key Concepts

| Concept | Detail |
|---|---|
| Loop from `i=1` | Compare `string[i]` with `string[i-1]` |
| `count = 1` reset | Current character counts as 1 — not 0 |
| Flush after loop | Last group never hits the `else` — must append manually |
| `char + count` | JS auto-converts number to string with `+` |

---

## The Most Common Mistake ⚠️

```js
// ❌ Forgetting to flush last character after loop
for (let i = 1; i < string.length; i++) { ... }
// "d4" never gets added!

// ✅ Always flush after loop
compressed += string[string.length - 1] + count;
```

---

## Edge Cases to Remember

| Input | Output | Reason |
|---|---|---|
| `""` | `""` | Early return |
| `"a"` | `"a1"` | Loop never runs, flush handles it |
| `"abcd"` | `"a1b1c1d1"` | Every character is unique |
| `"aaabaa"` | `"a3b1a2"` | Same char can appear in multiple groups |

---

## Key Lesson 💡

> Whenever you process **consecutive groups** in a string or array:
> - Loop comparing current with previous
> - Flush the group when character changes
> - Always handle the **last group after the loop**

---

## Time & Space Complexity

| | Complexity |
|---|---|
| Time | O(n) — one pass through string |
| Space | O(n) — compressed string |