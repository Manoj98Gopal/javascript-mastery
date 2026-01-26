// ============================================
// VARIABLES - var, let, const
// Complete Examples with Explanations
// ============================================

// -------------------------------------------
// 1. VAR - OLD WAY (AVOID)
// -------------------------------------------

// Re-declaration allowed
var name = "Manoj";
var name = "Kumar";  // ✅ No error (but problematic!)
console.log(name);   // "Kumar"

// Re-assignment allowed
var age = 25;
age = 30;
console.log(age);    // 30

// Function scoped
function varScopeTest() {
    var x = 10;
    
    if (true) {
        var x = 20;  // Same variable! (function scoped)
        console.log("Inside if:", x);  // 20
    }
    
    console.log("Outside if:", x);  // 20 (changed!)
}
varScopeTest();

// Hoisting with var
console.log(hoistedVar);  // undefined (not error!)
var hoistedVar = "I am hoisted";
console.log(hoistedVar);  // "I am hoisted"

// Behind the scenes:
// var hoistedVar;           // Declaration hoisted
// console.log(hoistedVar);  // undefined
// hoistedVar = "I am hoisted";

// Variable leaking in loops
for (var i = 0; i < 3; i++) {
    console.log("Loop:", i);  // 0, 1, 2
}
console.log("After loop:", i);  // 3 (leaked out!)


// -------------------------------------------
// 2. LET - MODERN WAY (USE FOR CHANGING VALUES)
// -------------------------------------------

// Cannot re-declare
let city = "Chennai";
// let city = "Mumbai";  // ❌ SyntaxError: Identifier 'city' has already been declared

// Can re-assign
city = "Mumbai";
console.log(city);  // "Mumbai"

// Block scoped
function letScopeTest() {
    let x = 10;
    
    if (true) {
        let x = 20;  // Different variable! (block scoped)
        console.log("Inside if:", x);  // 20
    }
    
    console.log("Outside if:", x);  // 10 (unchanged!)
}
letScopeTest();

// Block scope in loops
for (let j = 0; j < 3; j++) {
    console.log("Loop:", j);  // 0, 1, 2
}
// console.log("After loop:", j);  // ❌ ReferenceError: j is not defined

// Temporal Dead Zone (TDZ)
// console.log(letVar);  // ❌ ReferenceError: Cannot access 'letVar' before initialization
let letVar = "I have TDZ";
console.log(letVar);     // "I have TDZ"

// Block scope examples
if (true) {
    let blockVar = "I'm in a block";
    console.log(blockVar);  // "I'm in a block"
}
// console.log(blockVar);  // ❌ ReferenceError

{
    let justBlock = "Random block";
    console.log(justBlock);  // "Random block"
}
// console.log(justBlock);  // ❌ ReferenceError


// -------------------------------------------
// 3. CONST - MODERN WAY (DEFAULT CHOICE)
// -------------------------------------------

// Cannot re-declare
const country = "India";
// const country = "USA";  // ❌ SyntaxError: Identifier 'country' has already been declared

// Cannot re-assign
// country = "USA";  // ❌ TypeError: Assignment to constant variable

// Must be initialized
// const x;  // ❌ SyntaxError: Missing initializer in const declaration
const x = 10;  // ✅ Correct

// Block scoped (same as let)
if (true) {
    const blockConst = "I'm in a block";
    console.log(blockConst);  // "I'm in a block"
}
// console.log(blockConst);  // ❌ ReferenceError

// Temporal Dead Zone (same as let)
// console.log(constVar);  // ❌ ReferenceError
const constVar = "I have TDZ too";
console.log(constVar);     // "I have TDZ too"


// -------------------------------------------
// 4. CONST WITH OBJECTS (IMPORTANT!)
// -------------------------------------------

const person = {
    name: "Manoj",
    age: 25
};

// ✅ Can MODIFY properties
person.name = "Kumar";
person.age = 30;
person.city = "Chennai";  // Add new property
delete person.city;        // Remove property

console.log(person);  // { name: "Kumar", age: 30 }

// ❌ Cannot REASSIGN whole object
// person = { name: "Raj" };  // ❌ TypeError: Assignment to constant variable

// ✅ Can modify nested objects
const user = {
    profile: {
        name: "Manoj",
        email: "manoj@example.com"
    }
};

user.profile.name = "Kumar";  // ✅ Works
console.log(user.profile.name);  // "Kumar"


// -------------------------------------------
// 5. CONST WITH ARRAYS (IMPORTANT!)
// -------------------------------------------

const numbers = [1, 2, 3];

// ✅ Can MODIFY array contents
numbers.push(4);           // Add element
numbers[0] = 10;           // Modify element
numbers.pop();             // Remove last element
numbers.unshift(0);        // Add at start

console.log(numbers);  // [0, 10, 2, 3]

// ❌ Cannot REASSIGN whole array
// numbers = [5, 6, 7];  // ❌ TypeError: Assignment to constant variable

// ✅ Can use array methods
const fruits = ["apple", "banana"];
fruits.push("mango");
fruits.splice(1, 1);  // Remove "banana"
console.log(fruits);  // ["apple", "mango"]


// -------------------------------------------
// 6. SCOPE COMPARISON
// -------------------------------------------

function scopeComparison() {
    // var - function scoped
    if (true) {
        var funcScoped = "var is function scoped";
    }
    console.log(funcScoped);  // ✅ Accessible
    
    // let - block scoped
    if (true) {
        let blockScoped = "let is block scoped";
    }
    // console.log(blockScoped);  // ❌ ReferenceError
    
    // const - block scoped
    if (true) {
        const alsoBlockScoped = "const is block scoped";
    }
    // console.log(alsoBlockScoped);  // ❌ ReferenceError
}
scopeComparison();


// -------------------------------------------
// 7. HOISTING COMPARISON
// -------------------------------------------

// var hoisting
console.log(varHoist);  // undefined
var varHoist = "var";

// let hoisting (TDZ)
// console.log(letHoist);  // ❌ ReferenceError
let letHoist = "let";

// const hoisting (TDZ)
// console.log(constHoist);  // ❌ ReferenceError
const constHoist = "const";


// -------------------------------------------
// 8. LOOP EXAMPLES
// -------------------------------------------

// var in loop (problem)
console.log("--- var in setTimeout ---");
for (var k = 0; k < 3; k++) {
    setTimeout(function() {
        console.log("var:", k);  // 3, 3, 3 (all print 3!)
    }, 100);
}

// let in loop (correct)
console.log("--- let in setTimeout ---");
for (let m = 0; m < 3; m++) {
    setTimeout(function() {
        console.log("let:", m);  // 0, 1, 2 (correct!)
    }, 100);
}


// -------------------------------------------
// 9. REAL-WORLD EXAMPLES
// -------------------------------------------

// ✅ Good use of const
const MAX_LOGIN_ATTEMPTS = 3;
const API_URL = "https://api.example.com";
const config = {
    timeout: 5000,
    retries: 3
};

// ✅ Good use of let
let loginAttempts = 0;
let isAuthenticated = false;
let currentPage = 1;

// Update values
loginAttempts++;
isAuthenticated = true;
currentPage = 2;

// ❌ Bad - using let when const is enough
let PI = 3.14;  // Should be const!

// ✅ Good - using const
const PI_CORRECT = 3.14;


// -------------------------------------------
// 10. NESTED SCOPE
// -------------------------------------------

const outerVar = "I'm outer";

function outer() {
    const middleVar = "I'm middle";
    
    function inner() {
        const innerVar = "I'm inner";
        
        console.log(outerVar);   // ✅ Accessible
        console.log(middleVar);  // ✅ Accessible
        console.log(innerVar);   // ✅ Accessible
    }
    
    inner();
    console.log(outerVar);   // ✅ Accessible
    console.log(middleVar);  // ✅ Accessible
    // console.log(innerVar);   // ❌ ReferenceError
}

outer();
console.log(outerVar);   // ✅ Accessible
// console.log(middleVar);  // ❌ ReferenceError
// console.log(innerVar);   // ❌ ReferenceError


// -------------------------------------------
// 11. COMMON MISTAKES
// -------------------------------------------

// Mistake 1: Forgetting const with objects
const settings = { theme: "dark" };
settings.theme = "light";  // ✅ This works!
// settings = {};  // ❌ This doesn't!

// Mistake 2: Using let when const is enough
let MAX_SIZE = 100;  // ❌ Should be const
const MAX_SIZE_CORRECT = 100;  // ✅ Better

// Mistake 3: Declaring const without initialization
// const empty;  // ❌ Error
// empty = 10;

const initialized = 10;  // ✅ Correct

// Mistake 4: Thinking const makes objects immutable
const obj = { a: 1 };
obj.a = 2;  // ✅ Works! const ≠ immutable
console.log(obj.a);  // 2


// -------------------------------------------
// 12. BEST PRACTICES
// -------------------------------------------

// ✅ Use const by default
const userName = "Manoj";
const userEmail = "manoj@example.com";

// ✅ Use let only when needed
let counter = 0;
for (let i = 0; i < 5; i++) {
    counter += i;
}

// ❌ Never use var in modern code
// var oldWay = "Don't do this";

// ✅ Descriptive names
const MAX_RETRY_ATTEMPTS = 3;  // ✅ Good
// const x = 3;  // ❌ Not descriptive

// ✅ One declaration per line
const a = 1;
const b = 2;
const c = 3;

// ❌ Avoid multiple declarations in one line
// let x = 1, y = 2, z = 3;  // Hard to read


// -------------------------------------------
// 13. CONST WITH FUNCTIONS
// -------------------------------------------

// ✅ Use const for functions
const greet = function(name) {
    return `Hello, ${name}!`;
};

const add = (a, b) => a + b;

console.log(greet("Manoj"));  // "Hello, Manoj!"
console.log(add(5, 3));       // 8

// Cannot reassign
// greet = function() {};  // ❌ TypeError


// -------------------------------------------
// 14. TEMPORAL DEAD ZONE (TDZ) EXAMPLE
// -------------------------------------------

function tdzExample() {
    // ---- TDZ for myVar starts ----
    // console.log(myVar);  // ❌ ReferenceError
    // console.log(myVar);  // ❌ ReferenceError
    
    let myVar = "Now accessible";  // ---- TDZ ends ----
    
    console.log(myVar);  // ✅ "Now accessible"
}

tdzExample();


// -------------------------------------------
// 15. REDECLARATION EXAMPLES
// -------------------------------------------

// var allows redeclaration
var test1 = 1;
var test1 = 2;  // ✅ No error
console.log(test1);  // 2

// let doesn't allow redeclaration
let test2 = 1;
// let test2 = 2;  // ❌ SyntaxError

// const doesn't allow redeclaration
const test3 = 1;
// const test3 = 2;  // ❌ SyntaxError

// But can redeclare in different scope
let test4 = 1;
{
    let test4 = 2;  // ✅ Different scope, allowed
    console.log(test4);  // 2
}
console.log(test4);  // 1