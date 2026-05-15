# fetchSequentially

[⬅ Back to problem list](../../index.md)

## Problem Statement

Write a function `fetchSequentially(urls)` that fetches a list of URLs one by one and returns all responses in order.

---

## Examples

```js
const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

fetchSequentially(urls).then(responses => {
  console.log(responses);  // → [data1, data2, data3] in order
});
```

---

## Constraints

- Use `async/await`
- Fetch URLs one by one — do not use `Promise.all`
- Return an array of parsed JSON responses
- Handle empty array input

---

## My Approach

1. Check if `urls` is empty — return `[]` early
2. Create empty `result` array
3. Loop through urls using `for...of`
4. `await` each fetch and `await` the `.json()` parsing
5. Push each response to result
6. Return result

---

## Solution — async/await + for...of (My Solution) ⭐

```js
async function fetchSequentially(urls) {
  if (urls.length === 0) return [];

  const result = [];

  try {
    for (let url of urls) {
      const response = await fetch(url);
      result.push(await response.json());
    }
  } catch (error) {
    console.error("Fetch failed:", error);
    throw error;
  }

  return result;
}
```

---

## Why Two Awaits?

```js
const response = await fetch(url);        // Promise 1 — waits for response headers
result.push(await response.json());       // Promise 2 — waits for body to be parsed
```

Both `fetch()` and `.json()` return Promises — both need `await`!

---

## Sequential vs Parallel

```js
// ✅ Sequential — for...of + await (what was asked)
for (let url of urls) {
  await fetch(url)  // waits before moving to next url
}

// ❌ Parallel — fires all at once (NOT sequential)
urls.map(url => fetch(url))

// ✅ Parallel — Promise.all (faster but not sequential)
const results = await Promise.all(
  urls.map(url => fetch(url).then(r => r.json()))
);
```

---

## Know the Difference 💡

| Method | Behaviour | Use when |
|---|---|---|
| `for...of` + `await` | Sequential — one by one | Order matters, dependent requests |
| `Promise.all` | Parallel — all at once | Independent requests, need speed |
| `Promise.allSettled` | Parallel — handles failures | Want all results even if some fail |

---

## Key Concepts

| Concept | Detail |
|---|---|
| `async` function | Always returns a Promise |
| `await` | Pauses execution until Promise resolves |
| `for...of` + `await` | Guarantees sequential execution |
| `try/catch` | Required for async error handling |
| `.json()` | Parses response body — also returns a Promise |

---

## Common Mistakes

```js
// ❌ Missing await on .json() — returns Promise not data
result.push(data.json())

// ✅ Always await .json()
result.push(await data.json())

// ❌ No error handling — crashes silently
for (let url of urls) { await fetch(url) }

// ✅ Wrap in try/catch
try {
  for (let url of urls) { await fetch(url) }
} catch(error) { throw error }

// ❌ Unnecessary headers for GET request
headers: { "Content-Type": "application/json" }
// Content-Type is for sending data (POST) not receiving (GET)
```

---

## Edge Cases to Remember

| Input | Output | Reason |
|---|---|---|
| `[]` | `[]` | Early return |
| One URL | `[data]` | Single item array |
| Failed URL | throws error | try/catch re-throws |

---

## Time & Space Complexity

| | Complexity |
|---|---|
| Time | O(n) — fetches n urls one by one |
| Space | O(n) — result array holds n responses |