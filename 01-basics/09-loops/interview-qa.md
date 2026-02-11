# Interview Questions - Loops

## Q1: What is the difference between for, while, and do...while loops?

**Answer:**

**for loop:**
- Use when you know the number of iterations
- Initialization, condition, and increment in one line
- Can be 0 iterations if condition is false initially

**while loop:**
- Use when you don't know the number of iterations
- Checks condition BEFORE executing
- Can be 0 iterations if condition is false initially

**do...while loop:**
- Executes at least ONCE
- Checks condition AFTER executing
- Always minimum 1 iteration
```javascript
// for loop
for (let i = 0; i < 5; i++) {
    console.log(i);  // 0, 1, 2, 3, 4
}

// while loop
let i = 0;
while (i < 5) {
    console.log(i);  // 0, 1, 2, 3, 4
    i++;
}

// do...while loop
let j = 0;
do {
    console.log(j);  // 0, 1, 2, 3, 4
    j++;
} while (j < 5);
```

---

## Q2: What will this output?
```javascript
let i = 10;

while (i < 10) {
    console.log("while:", i);
}

do {
    console.log("do...while:", i);
} while (i < 10);
```

**Answer:**
```
do...while: 10
```

**Reason:**
- `while` loop: Condition (`i < 10`) is false initially → 0 iterations
- `do...while` loop: Executes once BEFORE checking condition → 1 iteration

---

## Q3: What's the difference between for...in and for...of?

**Answer:**

**for...in:**
- Loops through **keys/properties**
- Use for **objects**
- Returns keys as **strings**

**for...of:**
- Loops through **values**
- Use for **arrays, strings, maps, sets**
- Returns actual values
```javascript
const arr = ["a", "b", "c"];
const obj = { x: 1, y: 2, z: 3 };

// for...in (keys)
for (let key in arr) {
    console.log(key);  // "0", "1", "2" (strings!)
}

for (let key in obj) {
    console.log(key);  // "x", "y", "z"
}

// for...of (values)
for (let value of arr) {
    console.log(value);  // "a", "b", "c"
}

// for...of doesn't work with plain objects
// for (let value of obj) { }  // ❌ TypeError
```

---

## Q4: What's the output?
```javascript
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}
```

**Answer:**
```
0
1
2
```

**Reason:**  
`break` exits the loop completely when `i` equals 3.

---

## Q5: What's the output?
```javascript
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}
```

**Answer:**
```
0
1
2
4
```

**Reason:**  
`continue` skips the current iteration when `i` equals 3, then continues with `i = 4`.

---

## Q6: What happens with this code?
```javascript
for (let i = 0; i < 10; i++) {
    console.log(i);
    i--;
}
```

**Answer:**  
**Infinite loop!** Prints 0 forever.

**Reason:**
1. `i` starts at 0
2. Prints 0
3. `i--` makes `i` = -1
4. Loop increment `i++` makes `i` = 0
5. Repeats forever

---

## Q7: What's the output?
```javascript
let arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
    arr.push(i);
    if (i > 5) break;
}

console.log(arr);
```

**Answer:**
```
[1, 2, 3, 0, 1, 2, 3, 4, 5, 6]
```

**Reason:**  
Modifying the array while looping changes `arr.length`, so the loop continues until `i > 5`.

---

## Q8: How do you loop through an array in reverse?

**Answer:**
```javascript
const arr = [1, 2, 3, 4, 5];

// Method 1: for loop (backwards)
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);  // 5, 4, 3, 2, 1
}

// Method 2: reverse() then for...of
for (const item of arr.reverse()) {
    console.log(item);  // 5, 4, 3, 2, 1
}
// Note: reverse() modifies original array!
```

---

## Q9: What's wrong with this code?
```javascript
const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        arr.splice(i, 1);
    }
}

console.log(arr);
```

**Answer:**  
This skips elements! After removing an element, the array shifts, but `i` increments.

**Problem:**
```
Initial: [1, 2, 3, 4, 5]
i=0: arr[0]=1 (odd, skip)
i=1: arr[1]=2 (even, remove) → [1, 3, 4, 5]
i=2: arr[2]=4 (even, remove) → [1, 3, 5]
    // Skipped 3!
```

**Fix:** Loop backwards
```javascript
for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 === 0) {
        arr.splice(i, 1);
    }
}
```

---

## Q10: True or False Questions

**Q1:** `for...of` works with objects  
**A:** False. Use `for...in` for objects

**Q2:** `do...while` executes at least once  
**A:** True

**Q3:** `break` skips the current iteration  
**A:** False. `continue` skips, `break` exits

**Q4:** `for...in` returns array values  
**A:** False. Returns keys/indices (as strings)

**Q5:** You can have multiple initialization statements in a for loop  
**A:** True. `for (let i = 0, j = 10; i < j; i++, j--) { }`

**Q6:** `while` and `for` loops are interchangeable  
**A:** True (technically), but each has preferred use cases

**Q7:** Infinite loops always crash the browser  
**A:** False. They hang/freeze it, but may be stopped

**Q8:** `for...of` is faster than a regular for loop  
**A:** False. Regular for loop is faster

---

## Q11: What's the output?
```javascript
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}
```

**Answer:**
```
3
3
3
```

**Reason:**  
`var` is function-scoped. By the time `setTimeout` executes, the loop has finished and `i = 3`.

**Fix with let:**
```javascript
for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);  // 0, 1, 2
    }, 1000);
}
```

---

## Q12: How do you find the sum of an array using a loop?

**Answer:**
```javascript
const numbers = [1, 2, 3, 4, 5];
let sum = 0;

// Method 1: for loop
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

// Method 2: for...of
for (const num of numbers) {
    sum += num;
}

// Method 3: while
let i = 0;
while (i < numbers.length) {
    sum += numbers[i];
    i++;
}

console.log(sum);  // 15
```

---

## Q13: What's the output?
```javascript
let i = 0;

for (; i < 3;) {
    console.log(i);
    i++;
}

console.log("Final i:", i);
```

**Answer:**
```
0
1
2
Final i: 3
```

**Reason:**  
All three parts of a for loop are optional! This behaves like a while loop.

---

## Q14: How do you loop through a 2D array?

**Answer:**
```javascript
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Nested loops
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}

// for...of
for (const row of matrix) {
    for (const value of row) {
        console.log(value);
    }
}
```

---

## Q15: What's the output?
```javascript
const arr = [1, 2, 3];

for (const item of arr) {
    item = item * 2;
}

console.log(arr);
```

**Answer:**
```
[1, 2, 3]
```

**Reason:**  
`item` is a copy of the value, not a reference. Modifying `item` doesn't change the array.

**To modify array:**
```javascript
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2;
}
// or
arr = arr.map(item => item * 2);
```

---

## Q16: How do you find the index in a for...of loop?

**Answer:**
```javascript
const fruits = ["apple", "banana", "mango"];

// Use .entries()
for (const [index, fruit] of fruits.entries()) {
    console.log(`${index}: ${fruit}`);
}
// Output:
// 0: apple
// 1: banana
// 2: mango
```

---

## Q17: What's the output?
```javascript
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (j === 1) break;
        console.log(`i=${i}, j=${j}`);
    }
}
```

**Answer:**
```
i=0, j=0
i=1, j=0
i=2, j=0
```

**Reason:**  
`break` only exits the **inner loop** (where `j` is). The outer loop continues.

---

## Q18: When should you use for...of vs a regular for loop?

**Answer:**

**Use for...of when:**
- You only need values, not indices
- Code readability is priority
- Working with iterables (arrays, strings, maps, sets)

**Use regular for when:**
- You need the index
- You need to modify the array
- Performance is critical (large arrays)
- You need to loop backwards
```javascript
// for...of: Clean, readable
for (const fruit of fruits) {
    console.log(fruit);
}

// for: Need index
for (let i = 0; i < fruits.length; i++) {
    console.log(`${i}: ${fruits[i]}`);
}
```

---

## Q19: What's the output?
```javascript
let x = 0;

while (x < 3) {
    console.log(x);
    if (x === 1) {
        x += 2;
        continue;
    }
    x++;
}
```

**Answer:**
```
0
1
```

**Reason:**
- x=0: prints 0, x becomes 1
- x=1: prints 1, x becomes 3 (x += 2), continue skips x++
- x=3: loop exits (3 < 3 is false)

---

## Q20: What's the output?
```javascript
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
}

for (var j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 0);
}
```

**Answer:**
```
0
1
2
3
3
3
```

**Reason:**
- `let` is block-scoped: Each iteration gets its own `i`
- `var` is function-scoped: All setTimeout callbacks share the same `j`, which is 3 after the loop

---

## Q21: How do you exit nested loops?

**Answer:**

**Method 1: Using labeled statements**
```javascript
outerLoop: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break outerLoop;  // Breaks outer loop
        }
        console.log(`i=${i}, j=${j}`);
    }
}
// Output: i=0,j=0, i=0,j=1, i=0,j=2, i=1,j=0
```

**Method 2: Using a flag**
```javascript
let found = false;

for (let i = 0; i < 3 && !found; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            found = true;
            break;
        }
        console.log(`i=${i}, j=${j}`);
    }
}
```

**Method 3: Using a function**
```javascript
function findValue() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (i === 1 && j === 1) {
                return;  // Exits function and all loops
            }
            console.log(`i=${i}, j=${j}`);
        }
    }
}
```

---

## Q22: What's the output?
```javascript
const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    if (i === 2) continue;
    if (i === 4) break;
    console.log(arr[i]);
}
```

**Answer:**
```
1
2
4
```

**Reason:**
- i=0: prints arr[0] = 1
- i=1: prints arr[1] = 2
- i=2: continue (skips)
- i=3: prints arr[3] = 4
- i=4: break (exits)

---

## Q23: How do you find the maximum value in an array using a loop?

**Answer:**
```javascript
const numbers = [5, 2, 8, 1, 9, 3];
let max = numbers[0];  // Start with first element

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log("Maximum:", max);  // 9

// Alternative: for...of
for (const num of numbers) {
    if (num > max) {
        max = num;
    }
}
```

---

## Q24: What's the output?
```javascript
let count = 0;

while (count < 5) {
    count++;
    if (count === 3) continue;
    console.log(count);
}
```

**Answer:**
```
1
2
4
5
```

**Reason:**  
When count is 3, `continue` skips the `console.log` and goes to next iteration.

---

## Q25: What's the output?
```javascript
for (let i = 0; i < 3; i++) {
    console.log("Start:", i);
    
    for (let j = 0; j < 2; j++) {
        if (j === 1) break;
        console.log("  Inner:", j);
    }
    
    console.log("End:", i);
}
```

**Answer:**
```
Start: 0
  Inner: 0
End: 0
Start: 1
  Inner: 0
End: 1
Start: 2
  Inner: 0
End: 2
```

**Reason:**  
Inner loop breaks when j=1, but outer loop continues normally.

---

## Q26: How do you remove duplicates from an array using loops?

**Answer:**
```javascript
const arr = [1, 2, 2, 3, 4, 4, 5];
const unique = [];

for (const num of arr) {
    if (!unique.includes(num)) {
        unique.push(num);
    }
}

console.log(unique);  // [1, 2, 3, 4, 5]

// Better performance: using object
const arr2 = [1, 2, 2, 3, 4, 4, 5];
const seen = {};
const unique2 = [];

for (const num of arr2) {
    if (!seen[num]) {
        seen[num] = true;
        unique2.push(num);
    }
}
```

---

## Q27: What's the output?
```javascript
let str = "Hello";

for (let char of str) {
    if (char === 'l') continue;
    console.log(char);
}
```

**Answer:**
```
H
e
o
```

**Reason:**  
`continue` skips both 'l' characters in "Hello".

---

## Q28: How do you flatten a 2D array using loops?

**Answer:**
```javascript
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const flattened = [];

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        flattened.push(matrix[i][j]);
    }
}

console.log(flattened);  // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Alternative: for...of
for (const row of matrix) {
    for (const value of row) {
        flattened.push(value);
    }
}
```

---

## Q29: What's the output?
```javascript
const obj = { a: 1, b: 2, c: 3 };
const result = [];

for (let key in obj) {
    result.push(obj[key]);
}

console.log(result);
```

**Answer:**
```
[1, 2, 3]
```

**Reason:**  
`for...in` loops through object keys, we access values using `obj[key]`.

---

## Q30: Final Challenge - What's the output?
```javascript
let i = 0;

while (i++ < 3) {
    console.log(i);
}

console.log("Final:", i);
```

**Answer:**
```
1
2
3
Final: 4
```

**Reason:**  
`i++` is post-increment:
- Loop 1: Check (0 < 3) true, then i becomes 1, prints 1
- Loop 2: Check (1 < 3) true, then i becomes 2, prints 2
- Loop 3: Check (2 < 3) true, then i becomes 3, prints 3
- Loop 4: Check (3 < 3) false, but i becomes 4 first
- Final i is 4