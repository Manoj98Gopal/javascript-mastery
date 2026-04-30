# isPalindrome

## Problem Statement

Write a function `isPalindrome(str)` that returns `true` if the given string is a palindrome, and `false` otherwise.

A palindrome reads the same forwards and backwards. Ignore spaces, punctuation and capitalization.

---

## Examples

```js
isPalindrome("racecar")                      // → true
isPalindrome("hello")                        // → false
isPalindrome("A man a plan a canal Panama")  // → true
isPalindrome("Never odd or even")            // → true
isPalindrome("")                             // → true
```

---

## Constraints

- Ignore spaces, punctuation and case
- Only consider letters and numbers
- Return a boolean

---

## My Approach

1. **Lowercase** the string using `.toLowerCase()`
2. **Remove** all non-letter characters using regex `/[^a-z0-9]/g`
3. **Reverse** the cleaned string
4. **Compare** original cleaned string with reversed string

---

## Solution 1 — Using Built-in Methods

```js
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}
```

---

## Solution 2 — Using a For Loop

```js
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  let reversed = "";
  for (let i = cleaned.length - 1; i >= 0; i--) {
    reversed += cleaned[i];
  }

  return cleaned === reversed;
}
```

---

## Solution 3 — Two Pointers (Most Optimal) ⭐

```js
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  let left = 0;
  let right = cleaned.length - 1;

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) return false;
    left++;
    right--;
  }
  return true;
}
```

---

## Approach Comparison

| Approach | Time | Space | Notes |
|---|---|---|---|
| Built-in methods | O(n) | O(n) | Clean and readable |
| For loop | O(n) | O(n) | Shows manual understanding |
| Two pointers | O(n) | O(1) | Best — no extra string created |

---

## Key Concepts

| Concept | Detail |
|---|---|
| `.toLowerCase()` | Normalizes case |
| `.replace(/\s/g, "")` | ❌ Removes spaces only |
| `.replace(/[^a-z0-9]/g, "")` | ✅ Removes everything except letters and numbers |
| Two pointers | Left and right pointers meeting in the middle |

---

## Common Mistake

```js
// ❌ Only removes spaces — breaks for punctuation
str.replace(/\s/g, "")

// ✅ Removes all non-alphanumeric characters
str.toLowerCase().replace(/[^a-z0-9]/g, "")
```

---

## Edge Cases to Remember

- Spaces and punctuation → use `/[^a-z0-9]/g`
- Empty string → returns `true` (valid palindrome)
- Single character → returns `true`
- Mixed case → `.toLowerCase()` handles it