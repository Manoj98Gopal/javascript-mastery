# Interview Questions - break and continue

## Q1: What's the difference between break and continue?

**Answer:**

**break:**
- Exits the loop completely
- No more iterations happen
- Control goes to the statement after the loop

**continue:**
- Skips the current iteration
- Moves to the next iteration
- Loop continues until condition is false
```javascript
// break - exits completely
for (let i = 0; i < 5; i++) {
    if (i === 3) break;
    console.log(i);
}
// Output: 0, 1, 2

// continue - skips one iteration
for (let i = 0; i < 5; i++) {
    if (i === 3) continue;
    console.log(i);
}
// Output: 0, 1, 2, 4
```

---

## Q2: What's the output?
```javascript
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) continue;
    if (i > 5) break;
    console.log(i);
}
```

**Answer:**
```
1
3
5
```

**Reason:**
- i=0: even, continue (skip)
- i=1: odd, not > 5, prints 1
- i=2: even, continue (skip)
- i=3: odd, not > 5, prints 3
- i=4: even, continue (skip)
- i=5: odd, not > 5, prints 5
- i=6: even, continue (skip)
- i=7: odd, > 5, break (exit)

---

## Q3: Does break exit all nested loops?

**Answer:**  
No, `break` only exits the **innermost loop** by default.
```javascript
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (j === 1) break;  // Only exits inner loop
        console.log(`i=${i}, j=${j}`);
    }
}
// Output:
// i=0, j=0
// i=1, j=0
// i=2, j=0
```

**To exit outer loop, use labeled break:**
```javascript
outerLoop: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (j === 1) break outerLoop;  // Exits both loops
        console.log(`i=${i}, j=${j}`);
    }
}
// Output: i=0, j=0
```

---

## Q4: What's the output?
```javascript
let i = 0;

while (i < 5) {
    i++;
    if (i === 3) continue;
    console.log(i);
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
When i=3, `continue` skips the console.log, but loop continues.

---

## Q5: What's wrong with this code?
```javascript
let i = 0;

while (i < 5) {
    if (i === 3) continue;
    console.log(i);
    i++;
}
```

**Answer:**  
**Infinite loop!** When i=3, `continue` is executed, but `i++` is never reached, so i stays 3 forever.

**Fix:**
```javascript
let i = 0;

while (i < 5) {
    i++;  // Increment BEFORE continue
    if (i === 3) continue;
    console.log(i);
}
```

---

## Q6: Can you use break in a switch statement?

**Answer:**  
Yes, but `break` in switch works **differently** than in loops.

**In switch:**
```javascript
switch (value) {
    case 1:
        console.log("One");
        break;  // Prevents fall-through to next case
    case 2:
        console.log("Two");
        break;
}
```

**In loop:**
```javascript
for (let i = 0; i < 5; i++) {
    switch (i) {
        case 2:
            break;  // Only exits switch, NOT the loop
    }
    console.log(i);  // Still prints all values
}
```

---

## Q7: What's the output?
```javascript
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === j) continue;
        console.log(`${i}, ${j}`);
    }
}
```

**Answer:**
```
0, 1
0, 2
1, 0
1, 2
2, 0
2, 1
```

**Reason:**  
Skips when i equals j (0,0), (1,1), (2,2).

---

## Q8: How do you exit multiple nested loops?

**Answer:**  
Use **labeled break**.
```javascript
outerLoop: for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (i * j > 10) {
            break outerLoop;  // Exits both loops
        }
        console.log(`${i} * ${j} = ${i * j}`);
    }
}
```

**Alternative: Use a flag**
```javascript
let shouldExit = false;

for (let i = 0; i < 5 && !shouldExit; i++) {
    for (let j = 0; j < 5; j++) {
        if (i * j > 10) {
            shouldExit = true;
            break;
        }
        console.log(`${i} * ${j} = ${i * j}`);
    }
}
```

**Alternative: Use a function**
```javascript
function findValue() {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (i * j > 10) {
                return;  // Exits function and all loops
            }
            console.log(`${i} * ${j} = ${i * j}`);
        }
    }
}
```

---

## Q9: True or False Questions

**Q1:** `break` can be used outside a loop  
**A:** False (SyntaxError - only in loops and switch)

**Q2:** `continue` skips all remaining iterations  
**A:** False (only skips current iteration)

**Q3:** `break` in nested loops exits all loops  
**A:** False (only innermost, unless using labels)

**Q4:** `continue` works in switch statements  
**A:** False (SyntaxError - only in loops)

**Q5:** You can label any statement for break  
**A:** False (only loops and blocks)

**Q6:** `break` improves performance by avoiding unnecessary iterations  
**A:** True (exits early)

**Q7:** `continue` in while loop can cause infinite loops  
**A:** True (if increment is after continue)

**Q8:** Both break and continue work in all loop types  
**A:** True (for, while, do...while, for...of, for...in)

---

## Q10: What's the output?
```javascript
const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    if (num === 3) break;
    console.log(num);
}

console.log("Done");
```

**Answer:**
```
1
2
Done
```

**Reason:**  
Loop breaks when num=3, then "Done" is printed.

---

## Q11: What's the output?
```javascript
for (let i = 0; i < 5; i++) {
    if (i === 0) continue;
    if (i === 3) break;
    console.log(i);
}
```

**Answer:**
```
1
2
```

**Reason:**
- i=0: continue (skip)
- i=1: prints 1
- i=2: prints 2
- i=3: break (exit)

---

## Q12: How do you find the first even number in an array?

**Answer:**
```javascript
const numbers = [1, 3, 5, 8, 9, 10];
let firstEven = null;

for (const num of numbers) {
    if (num % 2 === 0) {
        firstEven = num;
        break;  // Stop at first match
    }
}

console.log(firstEven);  // 8
```

---

## Q13: What's the output?
```javascript
let count = 0;

while (true) {
    count++;
    if (count === 3) continue;
    if (count > 5) break;
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
- count=1: prints 1
- count=2: prints 2
- count=3: continue (skip)
- count=4: prints 4
- count=5: prints 5
- count=6: break (exit)

---

## Q14: How do you skip null or undefined values in an array?

**Answer:**
```javascript
const data = [1, null, 2, undefined, 3, null, 4];

for (const value of data) {
    if (value == null) continue;  // Skips null and undefined
    console.log(value);
}
// Output: 1, 2, 3, 4
```

---

## Q15: What's the output?
```javascript
for (let i = 0; i < 3; i++) {
    console.log("Start:", i);
    
    if (i === 1) {
        console.log("Skipping");
        continue;
    }
    
    console.log("End:", i);
}
```

**Answer:**
```
Start: 0
End: 0
Start: 1
Skipping
Start: 2
End: 2
```

**Reason:**  
When i=1, continue skips "End: 1" but loop continues.

---

## Q16: Can you use break with for...of loop?

**Answer:**  
Yes, break works with all loop types.
```javascript
const fruits = ["apple", "banana", "mango", "orange"];

for (const fruit of fruits) {
    if (fruit === "mango") break;
    console.log(fruit);
}
// Output: apple, banana
```

---

## Q17: What's the output?
```javascript
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

search: for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === 5) {
            console.log(`Found at [${i}][${j}]`);
            break search;
        }
    }
}
```

**Answer:**
```
Found at [1][1]
```

**Reason:**  
Labeled break exits both loops when 5 is found.

---

## Q18: What happens here?
```javascript
for (let i = 0; i < 5; i++) {
    continue;
    console.log(i);
}
```

**Answer:**  
Nothing is printed. `continue` is executed every iteration, so console.log is never reached.

**Note:** This code is pointless - the loop does nothing.

---

## Q19: How do you remove even numbers from an array?

**Answer:**
```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Loop backwards to avoid index issues
for (let i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] % 2 === 0) {
        numbers.splice(i, 1);
    }
}

console.log(numbers);  // [1, 3, 5, 7, 9]

// Alternative: Using filter (better)
const filtered = numbers.filter(num => num % 2 !== 0);
```

---

## Q20: What's the output?
```javascript
let i = 0;

do {
    i++;
    if (i === 3) continue;
    console.log(i);
} while (i < 5);
```

**Answer:**
```
1
2
4
5
```

**Reason:**  
do...while executes at least once. When i=3, continue skips console.log.

---

## Q21: Can you break out of a forEach loop?

**Answer:**  
No! `break` and `continue` don't work in `forEach`.
```javascript
// ❌ This will cause SyntaxError
[1, 2, 3, 4, 5].forEach(num => {
    if (num === 3) break;  // SyntaxError!
    console.log(num);
});

// ✅ Use regular for loop or for...of
for (const num of [1, 2, 3, 4, 5]) {
    if (num === 3) break;
    console.log(num);
}
```

---

## Q22: What's the output?
```javascript
for (let i = 1; i <= 5; i++) {
    if (i % 2) continue;
    console.log(i);
}
```

**Answer:**
```
2
4
```

**Reason:**  
`i % 2` is truthy for odd numbers (returns 1), so odd numbers are skipped.

---

