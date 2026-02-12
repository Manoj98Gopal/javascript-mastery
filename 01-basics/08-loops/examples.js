// ============================================
// LOOPS - Complete Examples
// ============================================

console.log("=== FOR LOOP ===\n");

// -------------------------------------------
// 1. BASIC FOR LOOP
// -------------------------------------------

console.log("--- Basic for loop ---");

for (let i = 0; i < 5; i++) {
    console.log("Iteration:", i);
}
// Output: 0, 1, 2, 3, 4


// -------------------------------------------
// 2. FOR LOOP - COUNT DOWN
// -------------------------------------------

console.log("\n--- Count down ---");

for (let i = 5; i >= 0; i--) {
    console.log(i);
}
// Output: 5, 4, 3, 2, 1, 0


// -------------------------------------------
// 3. FOR LOOP - STEP BY 2
// -------------------------------------------

console.log("\n--- Step by 2 ---");

for (let i = 0; i < 10; i += 2) {
    console.log(i);
}
// Output: 0, 2, 4, 6, 8


// -------------------------------------------
// 4. LOOP THROUGH ARRAY
// -------------------------------------------

console.log("\n--- Loop through array ---");

const fruits = ["apple", "banana", "mango", "orange"];

for (let i = 0; i < fruits.length; i++) {
    console.log(`${i}: ${fruits[i]}`);
}
// Output:
// 0: apple
// 1: banana
// 2: mango
// 3: orange


// -------------------------------------------
// 5. REVERSE LOOP THROUGH ARRAY
// -------------------------------------------

console.log("\n--- Reverse loop ---");

for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(fruits[i]);
}
// Output: orange, mango, banana, apple


// -------------------------------------------
// 6. NESTED FOR LOOP - MULTIPLICATION TABLE
// -------------------------------------------

console.log("\n--- Multiplication table (3x3) ---");

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`${i} × ${j} = ${i * j}`);
    }
    console.log("---");
}


// -------------------------------------------
// 7. NESTED LOOP - PATTERN
// -------------------------------------------

console.log("\n--- Triangle pattern ---");

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


// -------------------------------------------
// 8. 2D ARRAY (NESTED LOOP)
// -------------------------------------------

console.log("\n--- 2D Array ---");

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(`matrix[${i}][${j}] = ${matrix[i][j]}`);
    }
}


console.log("\n\n=== WHILE LOOP ===\n");

// -------------------------------------------
// 9. BASIC WHILE LOOP
// -------------------------------------------

console.log("--- Basic while loop ---");

let count = 0;

while (count < 5) {
    console.log("Count:", count);
    count++;
}
// Output: 0, 1, 2, 3, 4


// -------------------------------------------
// 10. WHILE LOOP - COUNTDOWN
// -------------------------------------------

console.log("\n--- Countdown ---");

let countdown = 5;

while (countdown >= 0) {
    console.log(countdown);
    countdown--;
}
console.log("Blast off!");


// -------------------------------------------
// 11. WHILE LOOP WITH ARRAY
// -------------------------------------------

console.log("\n--- While with array ---");

let i = 0;
const colors = ["red", "green", "blue"];

while (i < colors.length) {
    console.log(colors[i]);
    i++;
}


// -------------------------------------------
// 12. WHILE LOOP - SUM OF NUMBERS
// -------------------------------------------

console.log("\n--- Sum from 1 to 10 ---");

let num = 1;
let sum = 0;

while (num <= 10) {
    sum += num;
    num++;
}

console.log("Sum:", sum);  // 55


console.log("\n\n=== DO...WHILE LOOP ===\n");

// -------------------------------------------
// 13. BASIC DO...WHILE
// -------------------------------------------

console.log("--- Basic do...while ---");

let number = 0;

do {
    console.log("Number:", number);
    number++;
} while (number < 5);
// Output: 0, 1, 2, 3, 4


// -------------------------------------------
// 14. DO...WHILE - EXECUTES AT LEAST ONCE
// -------------------------------------------

console.log("\n--- Executes at least once ---");

let value = 10;

// This runs once even though condition is false
do {
    console.log("This prints once!");
    value++;
} while (value < 10);

console.log("Final value:", value);  // 11


// -------------------------------------------
// 15. DO...WHILE - MENU SIMULATION
// -------------------------------------------

console.log("\n--- Menu simulation ---");

let choice = 0;
let menuCount = 0;

do {
    console.log("Menu displayed");
    menuCount++;
    choice = menuCount;  // Simulate user input
} while (choice !== 3 && menuCount < 5);

console.log("Menu shown", menuCount, "times");


console.log("\n\n=== FOR...IN LOOP ===\n");

// -------------------------------------------
// 16. FOR...IN WITH OBJECT
// -------------------------------------------

console.log("--- for...in with object ---");

const person = {
    name: "Alice",
    age: 25,
    city: "NYC",
    occupation: "Developer"
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
// Output:
// name: Alice
// age: 25
// city: NYC
// occupation: Developer


// -------------------------------------------
// 17. FOR...IN WITH ARRAY (NOT RECOMMENDED)
// -------------------------------------------

console.log("\n--- for...in with array (not recommended) ---");

const numbers = [10, 20, 30];

for (let index in numbers) {
    console.log(`Index: ${index} (type: ${typeof index}), Value: ${numbers[index]}`);
}
// Note: index is a string!


console.log("\n\n=== FOR...OF LOOP ===\n");

// -------------------------------------------
// 18. FOR...OF WITH ARRAY
// -------------------------------------------

console.log("--- for...of with array ---");

const animals = ["cat", "dog", "bird", "fish"];

for (const animal of animals) {
    console.log(animal);
}
// Output: cat, dog, bird, fish


// -------------------------------------------
// 19. FOR...OF WITH STRING
// -------------------------------------------

console.log("\n--- for...of with string ---");

const word = "Hello";

for (const char of word) {
    console.log(char);
}
// Output: H, e, l, l, o


// -------------------------------------------
// 20. FOR...OF WITH INDEX
// -------------------------------------------

console.log("\n--- for...of with index ---");

const cities = ["Tokyo", "Paris", "London"];

for (const [index, city] of cities.entries()) {
    console.log(`${index}: ${city}`);
}
// Output:
// 0: Tokyo
// 1: Paris
// 2: London


console.log("\n\n=== BREAK STATEMENT ===\n");

// -------------------------------------------
// 21. BREAK IN FOR LOOP
// -------------------------------------------

console.log("--- Break when value found ---");

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("Found 5, stopping!");
        break;
    }
    console.log(i);
}
// Output: 0, 1, 2, 3, 4, Found 5, stopping!


// -------------------------------------------
// 22. BREAK - SEARCH IN ARRAY
// -------------------------------------------

console.log("\n--- Search in array ---");

const nums = [1, 3, 5, 7, 9, 11];
const searchFor = 7;
let found = false;
let foundIndex = -1;

for (let i = 0; i < nums.length; i++) {
    if (nums[i] === searchFor) {
        found = true;
        foundIndex = i;
        break;  // Stop searching
    }
}

console.log(found ? `Found ${searchFor} at index ${foundIndex}` : "Not found");


console.log("\n\n=== CONTINUE STATEMENT ===\n");

// -------------------------------------------
// 23. CONTINUE IN FOR LOOP
// -------------------------------------------

console.log("--- Skip even numbers ---");

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue;  // Skip even numbers
    }
    console.log(i);
}
// Output: 1, 3, 5, 7, 9


// -------------------------------------------
// 24. CONTINUE - FILTER ARRAY
// -------------------------------------------

console.log("\n--- Print only positive numbers ---");

const mixedNumbers = [-2, 3, -5, 7, -1, 9];

for (const num of mixedNumbers) {
    if (num < 0) {
        continue;  // Skip negative numbers
    }
    console.log(num);
}
// Output: 3, 7, 9


console.log("\n\n=== COMMON PATTERNS ===\n");

// -------------------------------------------
// 25. SUM OF ARRAY
// -------------------------------------------

console.log("--- Sum of array ---");

const numArray = [1, 2, 3, 4, 5];
let total = 0;

for (let i = 0; i < numArray.length; i++) {
    total += numArray[i];
}

console.log("Sum:", total);  // 15


// -------------------------------------------
// 26. FIND MAXIMUM
// -------------------------------------------

console.log("\n--- Find maximum ---");

const values = [5, 2, 8, 1, 9, 3];
let max = values[0];

for (let i = 1; i < values.length; i++) {
    if (values[i] > max) {
        max = values[i];
    }
}

console.log("Maximum:", max);  // 9


// -------------------------------------------
// 27. FIND MINIMUM
// -------------------------------------------

console.log("\n--- Find minimum ---");

let min = values[0];

for (const val of values) {
    if (val < min) {
        min = val;
    }
}

console.log("Minimum:", min);  // 1


// -------------------------------------------
// 28. REVERSE ARRAY
// -------------------------------------------

console.log("\n--- Reverse array ---");

const original = [1, 2, 3, 4, 5];
const reversed = [];

for (let i = original.length - 1; i >= 0; i--) {
    reversed.push(original[i]);
}

console.log("Original:", original);
console.log("Reversed:", reversed);


// -------------------------------------------
// 29. FILTER ARRAY
// -------------------------------------------

console.log("\n--- Filter even numbers ---");

const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = [];

for (const num of allNumbers) {
    if (num % 2 === 0) {
        evenNumbers.push(num);
    }
}

console.log("Even numbers:", evenNumbers);  // [2, 4, 6, 8, 10]


// -------------------------------------------
// 30. COUNT OCCURRENCES
// -------------------------------------------

console.log("\n--- Count occurrences ---");

const letters = ['a', 'b', 'a', 'c', 'a', 'b'];
const countA = {};

for (const letter of letters) {
    countA[letter] = (countA[letter] || 0) + 1;
}

console.log("Letter counts:", countA);
// { a: 3, b: 2, c: 1 }


// -------------------------------------------
// 31. FIBONACCI SEQUENCE
// -------------------------------------------

console.log("\n--- Fibonacci sequence (first 10) ---");

let fib = [0, 1];

for (let i = 2; i < 10; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}

console.log(fib);
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


// -------------------------------------------
// 32. FACTORIAL
// -------------------------------------------

console.log("\n--- Factorial of 5 ---");

let n = 5;
let factorial = 1;

for (let i = 1; i <= n; i++) {
    factorial *= i;
}

console.log(`${n}! = ${factorial}`);  // 120


// -------------------------------------------
// 33. PRIME NUMBER CHECK
// -------------------------------------------

console.log("\n--- Check if prime ---");

function isPrime(num) {
    if (num <= 1) return false;
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    
    return true;
}

console.log("7 is prime:", isPrime(7));    // true
console.log("8 is prime:", isPrime(8));    // false


// -------------------------------------------
// 34. FLATTEN 2D ARRAY
// -------------------------------------------

console.log("\n--- Flatten 2D array ---");

const matrix2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const flattened = [];

for (let i = 0; i < matrix2D.length; i++) {
    for (let j = 0; j < matrix2D[i].length; j++) {
        flattened.push(matrix2D[i][j]);
    }
}

console.log("Flattened:", flattened);
// [1, 2, 3, 4, 5, 6, 7, 8, 9]


// -------------------------------------------
// 35. REMOVE DUPLICATES
// -------------------------------------------

console.log("\n--- Remove duplicates ---");

const withDuplicates = [1, 2, 2, 3, 4, 4, 5];
const unique = [];

for (const num of withDuplicates) {
    if (!unique.includes(num)) {
        unique.push(num);
    }
}

console.log("Unique:", unique);
// [1, 2, 3, 4, 5]