# break and continue Statements

## What are break and continue?

**break** and **continue** are control flow statements that change the normal flow of loops.

- **break:** Exits the loop immediately
- **continue:** Skips the current iteration and moves to the next one

---

## 1. break Statement

The `break` statement **terminates the loop** completely and transfers control to the statement following the loop.

### Syntax
```javascript
break;
```

### How it Works
```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;  // Exit loop when i equals 5
    }
    console.log(i);
}
// Output: 0, 1, 2, 3, 4
```

**Flow:**
1. Loop starts, i = 0
2. Prints 0, 1, 2, 3, 4
3. When i = 5, `break` is executed
4. Loop exits immediately
5. No more iterations

### Common Use Cases

#### 1. Search and Stop
```javascript
const numbers = [1, 5, 3, 7, 9, 2];
const searchFor = 7;
let found = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === searchFor) {
        found = true;
        console.log(`Found ${searchFor} at index ${i}`);
        break;  // Stop searching once found
    }
}
```

#### 2. Error Condition
```javascript
const values = [10, 20, 0, 30, 40];

for (let i = 0; i < values.length; i++) {
    if (values[i] === 0) {
        console.log("Error: Division by zero!");
        break;  // Stop processing
    }
    console.log(100 / values[i]);
}
```

#### 3. Limit Iterations
```javascript
let count = 0;

while (true) {  // Infinite loop
    count++;
    console.log(count);
    
    if (count === 5) {
        break;  // Exit after 5 iterations
    }
}
```

---

## 2. break in Different Loops

### with for loop
```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i);
}
// Output: 0, 1, 2, 3, 4
```

### with while loop
```javascript
let i = 0;

while (i < 10) {
    if (i === 5) break;
    console.log(i);
    i++;
}
// Output: 0, 1, 2, 3, 4
```

### with do...while loop
```javascript
let j = 0;

do {
    if (j === 5) break;
    console.log(j);
    j++;
} while (j < 10);
// Output: 0, 1, 2, 3, 4
```

### with for...of loop
```javascript
const fruits = ["apple", "banana", "mango", "orange"];

for (const fruit of fruits) {
    if (fruit === "mango") break;
    console.log(fruit);
}
// Output: apple, banana
```

---

## 3. break in Nested Loops

`break` only exits the **innermost loop** by default.

### Example
```javascript
for (let i = 0; i < 3; i++) {
    console.log("Outer:", i);
    
    for (let j = 0; j < 3; j++) {
        if (j === 1) {
            break;  // Only exits inner loop
        }
        console.log("  Inner:", j);
    }
}
```

**Output:**
```
Outer: 0
  Inner: 0
Outer: 1
  Inner: 0
Outer: 2
  Inner: 0
```

**Explanation:** break exits the inner loop when j = 1, but the outer loop continues.

---

## 4. Labeled break (Exit Outer Loop)

Use **labels** to break out of outer loops.

### Syntax
```javascript
labelName: for (...) {
    for (...) {
        break labelName;  // Exits labeled loop
    }
}
```

### Example
```javascript
outerLoop: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`i=${i}, j=${j}`);
        
        if (i === 1 && j === 1) {
            break outerLoop;  // Exits both loops
        }
    }
}
```

**Output:**
```
i=0, j=0
i=0, j=1
i=0, j=2
i=1, j=0
i=1, j=1
```

### Practical Use Case
```javascript
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const searchFor = 5;
let foundRow = -1;
let foundCol = -1;

search: for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === searchFor) {
            foundRow = i;
            foundCol = j;
            break search;  // Exit both loops
        }
    }
}

console.log(`Found at [${foundRow}][${foundCol}]`);
```

---

## 5. continue Statement

The `continue` statement **skips the current iteration** and moves to the next iteration of the loop.

### Syntax
```javascript
continue;
```

### How it Works
```javascript
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;  // Skip when i equals 2
    }
    console.log(i);
}
// Output: 0, 1, 3, 4 (skips 2)
```

**Flow:**
1. i = 0: prints 0
2. i = 1: prints 1
3. i = 2: `continue` executed, skips console.log
4. i = 3: prints 3
5. i = 4: prints 4

### Common Use Cases

#### 1. Filter Values
```javascript
// Print only odd numbers
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue;  // Skip even numbers
    }
    console.log(i);
}
// Output: 1, 3, 5, 7, 9
```

#### 2. Skip Invalid Data
```javascript
const values = [10, -5, 20, -3, 30];

for (const value of values) {
    if (value < 0) {
        continue;  // Skip negative values
    }
    console.log("Processing:", value);
}
// Output:
// Processing: 10
// Processing: 20
// Processing: 30
```

#### 3. Skip Specific Conditions
```javascript
const users = [
    { name: "Alice", active: true },
    { name: "Bob", active: false },
    { name: "Charlie", active: true }
];

for (const user of users) {
    if (!user.active) {
        continue;  // Skip inactive users
    }
    console.log("Active user:", user.name);
}
// Output:
// Active user: Alice
// Active user: Charlie
```

---

## 6. continue in Different Loops

### with for loop
```javascript
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(i);
}
// Output: 0, 1, 3, 4
```

### with while loop
```javascript
let i = 0;

while (i < 5) {
    i++;  // Important: increment before continue!
    if (i === 3) continue;
    console.log(i);
}
// Output: 1, 2, 4, 5
```

**⚠️ Warning with while:**
```javascript
// ❌ Infinite loop - wrong placement of increment
let j = 0;

while (j < 5) {
    if (j === 3) continue;
    console.log(j);
    j++;  // Never reached when j = 3!
}

// ✅ Correct
let k = 0;

while (k < 5) {
    k++;  // Increment first
    if (k === 3) continue;
    console.log(k);
}
```

### with do...while loop
```javascript
let num = 0;

do {
    num++;
    if (num === 3) continue;
    console.log(num);
} while (num < 5);
// Output: 1, 2, 4, 5
```

### with for...of loop
```javascript
const words = ["hello", "world", "test", "code"];

for (const word of words) {
    if (word.length < 5) continue;
    console.log(word);
}
// Output: hello, world
```

---

## 7. continue in Nested Loops

`continue` only affects the **innermost loop**.

### Example
```javascript
for (let i = 0; i < 3; i++) {
    console.log("Outer:", i);
    
    for (let j = 0; j < 3; j++) {
        if (j === 1) {
            continue;  // Only skips in inner loop
        }
        console.log("  Inner:", j);
    }
}
```

**Output:**
```
Outer: 0
  Inner: 0
  Inner: 2
Outer: 1
  Inner: 0
  Inner: 2
Outer: 2
  Inner: 0
  Inner: 2
```

---

## 8. break vs continue

| Feature | break | continue |
|---------|-------|----------|
| **Action** | Exits loop completely | Skips current iteration |
| **After execution** | Control goes outside loop | Next iteration starts |
| **Loop ends?** | Yes | No |
| **Use when** | Found what you need | Filtering/skipping values |
| **Remaining iterations** | None | Continue |

### Visual Comparison
```javascript
// break - exits at 5
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i);
}
// Output: 0, 1, 2, 3, 4 (stops)

// continue - skips 5
for (let i = 0; i < 10; i++) {
    if (i === 5) continue;
    console.log(i);
}
// Output: 0, 1, 2, 3, 4, 6, 7, 8, 9 (continues)
```

---

## 9. Common Patterns

### Pattern 1: Find First Match
```javascript
const numbers = [1, 3, 5, 7, 9, 11];
let firstEven = null;

for (const num of numbers) {
    if (num % 2 === 0) {
        firstEven = num;
        break;  // Stop at first match
    }
}
```

### Pattern 2: Filter Array
```javascript
const values = [1, -2, 3, -4, 5, -6];
const positives = [];

for (const val of values) {
    if (val < 0) continue;  // Skip negatives
    positives.push(val);
}
// positives = [1, 3, 5]
```

### Pattern 3: Validation
```javascript
const inputs = ["valid", "", "valid", "valid"];
let allValid = true;

for (const input of inputs) {
    if (input === "") {
        allValid = false;
        break;  // Stop checking on first invalid
    }
}
```

### Pattern 4: Skip Empty or Null
```javascript
const data = ["hello", null, "world", "", "test"];

for (const item of data) {
    if (!item) continue;  // Skip null and empty
    console.log(item.toUpperCase());
}
// Output: HELLO, WORLD, TEST
```

---

## 10. Best Practices

### ✅ DO

1. **Use break for early exit**
```javascript
// ✅ Good - stop when found
for (let i = 0; i < 1000; i++) {
    if (arr[i] === target) {
        found = true;
        break;
    }
}
```

2. **Use continue to skip invalid data**
```javascript
// ✅ Good - skip invalid entries
for (const user of users) {
    if (!user.email) continue;
    sendEmail(user.email);
}
```

3. **Use labels for clarity in nested loops**
```javascript
// ✅ Good - clear intent
outerLoop: for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        if (condition) break outerLoop;
    }
}
```

4. **Increment before continue in while loops**
```javascript
// ✅ Good - avoid infinite loop
while (i < 10) {
    i++;
    if (condition) continue;
    process(i);
}
```

### ❌ DON'T

1. **Don't overuse break/continue**
```javascript
// ❌ Bad - too many breaks
for (let i = 0; i < 10; i++) {
    if (a) break;
    if (b) break;
    if (c) break;
    // confusing
}

// ✅ Better - use condition
for (let i = 0; i < 10 && !shouldStop; i++) {
    shouldStop = a || b || c;
}
```

2. **Don't forget increment with continue in while**
```javascript
// ❌ Infinite loop
while (i < 10) {
    if (i === 5) continue;
    i++;  // Never reached when i = 5!
}

// ✅ Correct
while (i < 10) {
    i++;
    if (i === 5) continue;
}
```

3. **Don't use in switch without intention**
```javascript
// ❌ Confusing
switch (value) {
    case 1:
        if (condition) break;  // Breaks switch, not loop
        console.log("Case 1");
        break;
}
```

---

## 11. Performance Considerations

### break - Performance Benefit
```javascript
// ✅ Efficient - stops at 500,000
for (let i = 0; i < 1000000; i++) {
    if (i === 500000) break;
    process(i);
}
// Processes 500,000 items instead of 1,000,000
```

### continue - May Impact Performance
```javascript
// ⚠️ Still loops 1,000,000 times
for (let i = 0; i < 1000000; i++) {
    if (i % 2 === 0) continue;
    process(i);
}
// Processes 500,000 items but loops 1,000,000 times

// ✅ Better - filter first (for large datasets)
const filtered = data.filter(item => item % 2 !== 0);
for (const item of filtered) {
    process(item);
}
```

---

## 12. Real-World Examples

### Example 1: Form Validation
```javascript
const formFields = [
    { name: "email", value: "test@example.com" },
    { name: "password", value: "" },
    { name: "username", value: "john" }
];

let isValid = true;

for (const field of formFields) {
    if (!field.value) {
        console.log(`${field.name} is required`);
        isValid = false;
        break;  // Stop at first error
    }
}
```

### Example 2: Data Processing
```javascript
const records = [
    { id: 1, status: "active", data: "..." },
    { id: 2, status: "inactive", data: "..." },
    { id: 3, status: "active", data: "..." }
];

for (const record of records) {
    if (record.status !== "active") {
        continue;  // Skip inactive records
    }
    
    processData(record.data);
}
```

### Example 3: Menu System
```javascript
while (true) {
    const choice = getUserInput();
    
    if (choice === "exit") {
        break;  // Exit menu
    }
    
    if (choice === "help") {
        showHelp();
        continue;  // Show menu again
    }
    
    processChoice(choice);
}
```

---

## Summary

### break Statement
- **Purpose:** Exit loop immediately
- **Effect:** No more iterations
- **Use when:** Found result, error occurred, limit reached
- **In nested loops:** Exits innermost loop (use labels for outer)

### continue Statement
- **Purpose:** Skip current iteration
- **Effect:** Move to next iteration
- **Use when:** Filtering data, skipping invalid values
- **In nested loops:** Skips in innermost loop only

### Key Differences
- break = **stop the loop**
- continue = **skip this iteration**

### Best Practices
✅ Use break for early exit (performance benefit)  
✅ Use continue for filtering  
✅ Use labels for nested loop control  
✅ Be careful with while loops and continue  
✅ Don't overuse - keep code readable  

### Interview Key Points

⭐ break exits the loop completely  
⭐ continue skips current iteration and moves to next  
⭐ break only exits innermost loop by default  
⭐ Use labeled break to exit outer loops  
⭐ continue can cause infinite loops in while if increment is after it  
⭐ Both work in all loop types (for, while, do...while, for...of, for...in)  
⭐ break in switch is different from break in loops  
⭐ continue doesn't work in switch statements