# Loops in JavaScript

## What are Loops?

Loops allow you to execute a block of code repeatedly until a condition is met. They help avoid writing the same code multiple times.

---

## Types of Loops

1. **for loop** - When you know how many times to loop
2. **while loop** - When you don't know the number of iterations
3. **do...while loop** - Execute at least once, then check condition
4. **for...in loop** - Loop through object properties
5. **for...of loop** - Loop through iterable values (arrays, strings)

---

## 1. for Loop

Executes code a specific number of times.

### Syntax
```javascript
for (initialization; condition; increment/decrement) {
    // Code to execute
}
```

### Components

1. **Initialization:** Executed once before loop starts (`let i = 0`)
2. **Condition:** Checked before each iteration (`i < 5`)
3. **Increment/Decrement:** Executed after each iteration (`i++`)

### Example
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);  // 0, 1, 2, 3, 4
}
```

**Flow:**
```
1. let i = 0 (initialization)
2. Check i < 5 (true)
3. Execute console.log(i)
4. i++ (i becomes 1)
5. Check i < 5 (true)
6. Execute console.log(i)
... repeats until i < 5 is false
```

### Common Patterns

**Count up:**
```javascript
for (let i = 0; i < 10; i++) {
    console.log(i);  // 0 to 9
}
```

**Count down:**
```javascript
for (let i = 10; i >= 0; i--) {
    console.log(i);  // 10 to 0
}
```

**Step by 2:**
```javascript
for (let i = 0; i < 10; i += 2) {
    console.log(i);  // 0, 2, 4, 6, 8
}
```

**Loop through array:**
```javascript
let fruits = ["apple", "banana", "mango"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

**Reverse loop through array:**
```javascript
let fruits = ["apple", "banana", "mango"];

for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(fruits[i]);  // mango, banana, apple
}
```

---

## 2. Nested for Loops

A loop inside another loop.

### Example
```javascript
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i = ${i}, j = ${j}`);
    }
}
```

**Output:**
```
i = 1, j = 1
i = 1, j = 2
i = 1, j = 3
i = 2, j = 1
i = 2, j = 2
i = 2, j = 3
i = 3, j = 1
i = 3, j = 2
i = 3, j = 3
```

### Multiplication Table
```javascript
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} × ${j} = ${i * j}`);
    }
}
```

### Pattern Printing
```javascript
// Print triangle
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}
// Output:
// *
// * *
// * * *
// * * * *
// * * * * *
```

---

## 3. while Loop

Executes code as long as condition is true.

### Syntax
```javascript
while (condition) {
    // Code to execute
}
```

### Example
```javascript
let count = 0;

while (count < 5) {
    console.log(count);  // 0, 1, 2, 3, 4
    count++;
}
```

### Use Cases

**Unknown number of iterations:**
```javascript
let userInput;

while (userInput !== "quit") {
    // userInput = prompt("Enter command (or 'quit' to exit):");
    console.log("Processing:", userInput);
}
```

**Reading until end:**
```javascript
let i = 0;
let arr = [1, 2, 3, 4, 5];

while (i < arr.length) {
    console.log(arr[i]);
    i++;
}
```

### ⚠️ Infinite Loop Warning
```javascript
// ❌ Infinite loop - never stops!
let i = 0;
while (i < 5) {
    console.log(i);
    // Forgot to increment i!
}

// ✅ Correct
let i = 0;
while (i < 5) {
    console.log(i);
    i++;  // Don't forget this!
}
```

---

## 4. do...while Loop

Executes code at least once, then checks condition.

### Syntax
```javascript
do {
    // Code to execute (runs at least once)
} while (condition);
```

### Key Difference

**while:** Checks condition BEFORE executing
**do...while:** Executes ONCE, then checks condition

### Example
```javascript
let num = 10;

// while loop - won't execute
while (num < 10) {
    console.log("This won't print");
}

// do...while - executes once
do {
    console.log("This prints once");  // Executes
} while (num < 10);
```

### Use Cases

**Menu systems:**
```javascript
let choice;

do {
    console.log("1. Start");
    console.log("2. Settings");
    console.log("3. Exit");
    // choice = prompt("Choose option:");
} while (choice !== "3");
```

**Input validation:**
```javascript
let password;

do {
    // password = prompt("Enter password (min 8 characters):");
} while (password.length < 8);
```

---

## 5. for...in Loop

Loops through **properties** of an object.

### Syntax
```javascript
for (let key in object) {
    // Code to execute
}
```

### Example with Object
```javascript
let person = {
    name: "Alice",
    age: 25,
    city: "NYC"
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
// Output:
// name: Alice
// age: 25
// city: NYC
```

### ⚠️ With Arrays (Not Recommended)
```javascript
let arr = ["a", "b", "c"];

for (let index in arr) {
    console.log(arr[index]);  // Works but not recommended
}

// Better: use for...of
for (let value of arr) {
    console.log(value);
}
```

**Why not for arrays?**
- Returns **index as string** ("0", "1", "2")
- May include inherited properties
- Slower than for...of

---

## 6. for...of Loop

Loops through **values** of iterables (arrays, strings, maps, sets).

### Syntax
```javascript
for (let value of iterable) {
    // Code to execute
}
```

### Example with Array
```javascript
let fruits = ["apple", "banana", "mango"];

for (let fruit of fruits) {
    console.log(fruit);
}
// Output:
// apple
// banana
// mango
```

### Example with String
```javascript
let str = "Hello";

for (let char of str) {
    console.log(char);
}
// Output: H, e, l, l, o
```

### With Index
```javascript
let fruits = ["apple", "banana", "mango"];

for (let [index, fruit] of fruits.entries()) {
    console.log(`${index}: ${fruit}`);
}
// Output:
// 0: apple
// 1: banana
// 2: mango
```

---

## 7. break Statement

Exits the loop immediately.

### Example
```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;  // Exit loop when i is 5
    }
    console.log(i);
}
// Output: 0, 1, 2, 3, 4
```

### Search Example
```javascript
let numbers = [1, 3, 5, 7, 9];
let searchFor = 5;
let found = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === searchFor) {
        found = true;
        break;  // Stop searching once found
    }
}

console.log(found ? "Found!" : "Not found");
```

---

## 8. continue Statement

Skips current iteration and moves to next.

### Example
```javascript
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;  // Skip when i is 2
    }
    console.log(i);
}
// Output: 0, 1, 3, 4 (skips 2)
```

### Skip Even Numbers
```javascript
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue;  // Skip even numbers
    }
    console.log(i);
}
// Output: 1, 3, 5, 7, 9
```

---

## 9. Loop Comparison

### for vs while vs do...while

| Feature | for | while | do...while |
|---------|-----|-------|------------|
| **Use when** | Know iteration count | Unknown iterations | Need at least 1 execution |
| **Condition check** | Before each iteration | Before each iteration | After first iteration |
| **Minimum executions** | 0 | 0 | 1 |
| **Best for** | Arrays, counters | Waiting for condition | Menus, validation |

### for vs for...of vs for...in

| Feature | for | for...of | for...in |
|---------|-----|----------|----------|
| **Iterates over** | Index/counter | Values | Keys/properties |
| **Best for** | Arrays (need index) | Arrays (just values) | Objects |
| **Returns** | Number | Value | Key (as string) |
| **Speed** | Fastest | Fast | Slower |

---

## 10. Common Patterns

### Sum of Array
```javascript
let numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);  // 15
```

### Find Maximum
```javascript
let numbers = [5, 2, 8, 1, 9];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log(max);  // 9
```

### Reverse Array
```javascript
let arr = [1, 2, 3, 4, 5];
let reversed = [];

for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
}

console.log(reversed);  // [5, 4, 3, 2, 1]
```

### Filter Array
```javascript
let numbers = [1, 2, 3, 4, 5, 6];
let evens = [];

for (let num of numbers) {
    if (num % 2 === 0) {
        evens.push(num);
    }
}

console.log(evens);  // [2, 4, 6]
```

---

## 11. Best Practices

### ✅ DO

1. **Use const in for...of when not reassigning**
```javascript
for (const item of items) {  // ✅ const (value not reassigned)
    console.log(item);
}
```

2. **Cache array length for performance**
```javascript
// ✅ Good for large arrays
for (let i = 0, len = arr.length; i < len; i++) {
    console.log(arr[i]);
}
```

3. **Use descriptive variable names**
```javascript
// ✅ Good
for (let user of users) { }

// ❌ Bad
for (let u of users) { }
```

4. **Use for...of for simple array iteration**
```javascript
// ✅ Clean and readable
for (const fruit of fruits) {
    console.log(fruit);
}

// ❌ Unnecessarily complex
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

5. **Break early when possible**
```javascript
// ✅ Stop when found
for (let item of items) {
    if (item === searchValue) {
        found = true;
        break;
    }
}
```

### ❌ DON'T

1. **Don't modify array while looping**
```javascript
// ❌ Dangerous
for (let i = 0; i < arr.length; i++) {
    arr.splice(i, 1);  // Changes array length!
}

// ✅ Better: loop backwards
for (let i = arr.length - 1; i >= 0; i--) {
    arr.splice(i, 1);
}
```

2. **Don't create infinite loops**
```javascript
// ❌ Infinite loop
while (true) {
    console.log("Forever!");
    // No break statement!
}
```

3. **Don't use for...in for arrays**
```javascript
// ❌ Avoid
for (let i in arr) { }

// ✅ Use for...of
for (let item of arr) { }
```

4. **Don't declare variables inside loop unnecessarily**
```javascript
// ❌ Bad (creates new variable each iteration)
for (let i = 0; i < 100; i++) {
    let result = someCalculation();  // Declared 100 times
}

// ✅ Better (if value is reused)
let result;
for (let i = 0; i < 100; i++) {
    result = someCalculation();
}
```

---

## 12. Performance Tips

### Fastest to Slowest

1. **for loop** (classic) - Fastest
2. **for...of** - Fast
3. **forEach** - Moderate
4. **for...in** - Slowest

### When Performance Matters
```javascript
// Fastest for large arrays
for (let i = 0; i < arr.length; i++) {
    // process arr[i]
}

// Slightly slower but more readable
for (const item of arr) {
    // process item
}
```

---

## Summary

### Loop Types

**for:** Known iterations, array indexing
**while:** Unknown iterations, condition-based
**do...while:** Execute at least once
**for...in:** Object properties (keys)
**for...of:** Iterable values (arrays, strings)

### Control Flow

**break:** Exit loop immediately
**continue:** Skip current iteration

### Key Points for Interviews

⭐ for loop has 3 parts: initialization, condition, increment  
⭐ while checks condition BEFORE executing  
⭐ do...while executes AT LEAST ONCE  
⭐ for...in loops through keys (use for objects)  
⭐ for...of loops through values (use for arrays)  
⭐ break exits loop completely  
⭐ continue skips current iteration  
⭐ Avoid infinite loops (always ensure condition becomes false)  
⭐ for...of is preferred for simple array iteration  
⭐ Classic for loop is fastest for large arrays