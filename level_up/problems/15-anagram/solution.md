# IsAnagram

[⬅ Back to problem list](../../index.md)


## Problem Statement

Write a function `isAnagram(str1, str2)` that returns `true` if two strings are anagrams of each other, and `false` otherwise.

Two strings are anagrams if they contain the same characters in the same frequency — just in different order.

---

## Examples

```js
isAnagram("listen", "silent")     // → true
isAnagram("hello", "world")       // → false
isAnagram("anagram", "nagaram")   // → true
isAnagram("rat", "car")           // → false
isAnagram("", "")                 // → true
```

---

## Constraints

- Ignore case (uppercase/lowercase)
- Ignore spaces
- Return a boolean

---

## My Approach

1. **Clean** both strings — lowercase and remove spaces
2. **Length check** — if lengths differ, return false immediately
3. **Compare** using sort or frequency map

---

## Solution 1 — Sort (My Solution)

```js
function isAnagram(str1, str2) {
  const clean1 = str1.toLowerCase().replace(/\s+/g, "");
  const clean2 = str2.toLowerCase().replace(/\s+/g, "");

  if (clean1.length !== clean2.length) return false;

  return clean1.split("").sort().join("") === clean2.split("").sort().join("");
}
```

---

## Solution 2 — Frequency Map (Optimal) ⭐

```js
function isAnagram(str1, str2) {
  const clean1 = str1.toLowerCase().replace(/\s+/g, "");
  const clean2 = str2.toLowerCase().replace(/\s+/g, "");
  const freq = {};

  for (let char of clean1) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let char of clean2) {
    freq[char] = (freq[char] || 0) - 1;
    if (freq[char] < 0) return false;
  }

  return true;
}
```

---

## How Frequency Map Works

```js
"listen" → freq = { l:1, i:1, s:1, t:1, e:1, n:1 }

loop "silent":
  s → freq[s] = 0
  i → freq[i] = 0
  l → freq[l] = 0
  e → freq[e] = 0
  n → freq[n] = 0
  t → freq[t] = 0

No negatives → return true ✅
```

```js
"aab" vs "abb":
freq after "aab" = { a:2, b:1 }

loop "abb":
  a → freq[a] = 1
  b → freq[b] = 0
  b → freq[b] = -1 → return false ✅
```

---

## Approach Comparison

| Approach | Time | Space | Notes |
|---|---|---|---|
| Sort | O(n log n) | O(n) | Simple, readable |
| Frequency map | O(n) | O(n) | Optimal ✅ |

---

## Common Mistakes

```js
// ❌ .join() without "" joins with commas
clean1.split("").sort().join()    // → "e,i,l,n,s,t"

// ✅ Always pass "" to join
clean1.split("").sort().join("")  // → "eilnst"

// ❌ Checking existence not frequency — fails for "aab" vs "abb"
if (str1.includes(str2[i])) { ... }

// ✅ Count frequency — catches duplicate characters
freq[char] = (freq[char] || 0) + 1;
```

---

## Key Concepts

| Concept | Detail |
|---|---|
| Anagram | Same characters, same frequency, different order |
| Length check | Quick O(1) early return — different lengths can't be anagrams |
| Sort approach | Sort both → compare → equal means anagram |
| Frequency map | Increment for str1, decrement for str2, negative means not anagram |

---

## Edge Cases to Remember

| Input | Output | Reason |
|---|---|---|
| `("", "")` | `true` | Both empty — same frequency |
| `("aab", "abb")` | `false` | Same letters, different frequency |
| `("Listen", "Silent")` | `true` | Lowercase handles case |
| `("ab", "abc")` | `false` | Length check catches it |

---

## Time & Space Complexity

| Solution | Time | Space |
|---|---|---|
| Sort | O(n log n) | O(n) |
| Frequency map | O(n) | O(n) |