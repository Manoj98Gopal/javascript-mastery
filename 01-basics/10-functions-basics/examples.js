// basic function

function sayHello() {
  console.log("Hello!");
}

sayHello(); // calling the function

// function with parameters
function greetPerson(name) {
  console.log(`Hello, ${name}!`);
}

greetPerson("Alice"); // calling the function with an argument
greetPerson("Bob");

// function with multiple parameters
function introduce(name, age, city) {
  console.log(
    `My name is ${name}, I am ${age} years old, and I live in ${city}.`
  );
}

introduce("Charlie", 30, "New York");
introduce("Diana", 25, "Los Angeles");

// function with return value
function add(a, b) {
  return a + b;
}

const sum = add(5, 3);
console.log(`The sum is: ${sum}`);
console.log(`The sum of 10 and 20 is: ${add(10, 20)}`);


// function without return
function noReturn() {
  let a = 5;
  // no return
}

const result = noReturn();
console.log(`The result of noReturn is: ${result}`); // undefined


// return statement ends the function execution
function checkNumber(num) {
    if(num > 10) {
        return "Greater than 10"
    }
    console.log("This run only if num is 10 or less");
    return "10 or less";
}

console.log(checkNumber(15)); // Greater than 10
console.log(checkNumber(5)); // This run only if num is 10 or less \n 10 or less


// default parameters
function greet(name = "Guest", greeting = "Hello") {
    console.log(`${greeting}, ${name}!`);
}

greet(); // Hello, Guest!
greet("Alice"); // Hello, Alice!
greet("Bob", "Hi"); // Hi, Bob!



// default parameter with practical example
function calculateGST(amount, gstRate = 3) {
    const gstAmount = (amount * gstRate) / 100;
    return gstAmount;
}

console.log(`GST for 480000 at default rate: ${calculateGST(480000)}`); // GST for 480000 at default rate: 14400
console.log(`GST for 1000 at 5%: ${calculateGST(1000, 5)}`); // GST for 1000 at 5%: 50


// function expression
const multiply = function(a,b){
    return a * b;
}

console.log(`The product of 4 and 5 is: ${multiply(4,5)}`); // The product of 4 and 5 is: 20


// Arrow function 

// regular arrow function
const divide = (a, b) => {
    return a / b;
}   
console.log(`The division of 10 by 2 is: ${divide(10, 2)}`); // The division of 10 by 2 is: 5

// implicit return in arrow function
const subtract = (a,b) => a - b;
console.log("The difference between 10 and 4 is: " + subtract(10, 4)); // The difference between 10 and 4 is: 6

// single parameter now parentheses  needed
const square = x => x * x;
console.log(`The square of 5 is: ${square(5)}`); // The square of 5 is: 25



// function scope
function scopeExample(){
    let localVariable = "I am local";
    console.log(localVariable); // I am local
}

scopeExample();
// console.log(localVariable); // Uncaught ReferenceError: localVariable is not defined 


// Returning different data types

// number
function getAge() {
    return 27;
}

// string
function getName() {
    return "Manoj";
}

// boolean
function isAdult(age) {
    return age >= 18;
}

// array
function getColors(){
    return ["red", "green", "blue"];
}

// object
function getUser() {
    return {
        name: "Manoj",
        age: 27,
        city: "Mysore"
    }
}

console.log(`Age: ${getAge()}`); // Age: 27
console.log(`Name: ${getName()}`); // Name: Manoj
console.log(`Is adult: ${isAdult(20)}`); // Is adult: true
console.log(`Colors: ${getColors().join(", ")}`); // Colors: red, green, blue
console.log(`User: ${JSON.stringify(getUser())}`); // User: {"name":"Manoj","age":27,"city":"Mysore"}


// function with spread operator
function sumAll(...numbers) {
    console.log(`Numbers to sum: ${numbers}`,typeof numbers); // Numbers to sum: [1, 2, 3] object
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(`Sum of 1, 2, 3: ${sumAll(1, 2, 3)}`); // Sum of 1, 2, 3: 6
console.log(`Sum of 4, 5, 6, 7: ${sumAll(4, 5, 6, 7)}`); // Sum of 4, 5, 6, 7: 22



// Real world example of function
function calculateGoldPrice(weightInGrams, pricePerGram = 14480) {
    const makingCharge = (weightInGrams * pricePerGram) * 0.05; // 5% making charge
    const totalPrice = (weightInGrams * pricePerGram) + makingCharge;
    return totalPrice;
}

console.log(`Total price for 10 grams of gold: ${calculateGoldPrice(10)}`); // Total price for 10 grams of gold: 152040
console.log(`Total price for 29 grams of gold at custom price: ${calculateGoldPrice(29)}`); // Total price for 20 grams of gold at custom price: 315000



function checkIsEmailValid(email) {
    const isValidEmail = email.includes("@") && email.includes(".");
    return isValidEmail;
}

console.log(`Is valid email: ${checkIsEmailValid("user@example.com")}`); // Is valid email: true
console.log(`Is valid email: ${checkIsEmailValid("invalid-email")}`); // Is valid email: false


