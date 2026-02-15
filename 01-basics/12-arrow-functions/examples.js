// ============================================
// ARROW FUNCTIONS, PARAMETERS & ARGUMENTS
// Complete Examples
// ============================================

// --------------------------------------------
// 1. ARROW FUNCTION - BASIC SYNTAX
// --------------------------------------------

// Traditional function
const addTraditional = function (a, b) {
  return a + b;
};

// Arrow function with explicit return
const addArrow = (a, b) => {
  return a + b;
};

// Arrow function with implicit return
const addShort = (a, b) => a + b;

console.log(addTraditional(5, 3)); // 8
console.log(addArrow(5, 3)); // 8
console.log(addShort(5, 3)); // 8

// --------------------------------------------
// 2. SYNTAX VARIATIONS
// --------------------------------------------

// Multiple parameters - parentheses required
const multiply = (a, b) => a * b;

// Single parameter - parentheses optional
const square = x => x * x;
const squareWithParens = (x) => x * x;

// No parameters - parentheses required
const getRandomNumber = () => Math.random();
const greet = () => "Hello!";

console.log(multiply(4, 5)); // 20
console.log(square(7)); // 49
console.log(getRandomNumber()); // Random number
console.log(greet()); // "Hello!"

// --------------------------------------------
// 3. IMPLICIT VS EXPLICIT RETURN
// --------------------------------------------

// Implicit return (single expression, no braces)
const double = x => x * 2;

// Explicit return (multiple statements, braces needed)
const calculate = (a, b) => {
  const sum = a + b;
  const product = a * b;
  return { sum, product };
};

console.log(double(5)); // 10
console.log(calculate(3, 4)); // { sum: 7, product: 12 }

// --------------------------------------------
// 4. RETURNING OBJECTS - IMPORTANT!
// --------------------------------------------

// ❌ WRONG - Returns undefined
// const getUserWrong = () => { name: "Manoj", age: 25 };
// console.log(getUserWrong()); // undefined

// ✅ CORRECT - Wrap object in parentheses
const getUserCorrect = () => ({ name: "Manoj", age: 25 });
console.log(getUserCorrect()); // { name: 'Manoj', age: 25 }

// --------------------------------------------
// 5. DEFAULT PARAMETERS
// --------------------------------------------

const greetWithDefault = (name = "Guest", greeting = "Hello") => {
  return `${greeting}, ${name}!`;
};

console.log(greetWithDefault()); // "Hello, Guest!"
console.log(greetWithDefault("Manoj")); // "Hello, Manoj!"
console.log(greetWithDefault("Manoj", "Hi")); // "Hi, Manoj!"

// Default parameters with undefined vs null
console.log(greetWithDefault(undefined, "Hey")); // "Hey, Guest!" (uses default)
console.log(greetWithDefault(null, "Hey")); // "Hey, null" (doesn't use default)

// --------------------------------------------
// 6. DEFAULT PARAMETERS - PRACTICAL EXAMPLE
// --------------------------------------------

const calculatePrice = (price, tax = 0.18, discount = 0) => {
  const total = price + price * tax - discount;
  return total.toFixed(2);
};

console.log(calculatePrice(100)); // "118.00"
console.log(calculatePrice(100, 0.2)); // "120.00"
console.log(calculatePrice(100, 0.18, 10)); // "108.00"

// --------------------------------------------
// 7. REST PARAMETERS
// --------------------------------------------

// Collect all arguments into an array
const sum = (...numbers) => {
  return numbers.reduce((total, num) => total + num, 0);
};

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum(10, 20)); // 30

// Rest parameter with other parameters (must be last)
const introduce = (firstName, lastName, ...hobbies) => {
  return `${firstName} ${lastName} likes: ${hobbies.join(", ")}`;
};

console.log(introduce("Manoj", "Kumar", "coding", "reading", "gaming"));
// "Manoj Kumar likes: coding, reading, gaming"

// --------------------------------------------
// 8. DESTRUCTURING PARAMETERS - OBJECTS
// --------------------------------------------

// Extract properties from object parameter
const greetUser = ({ name, age }) => {
  return `${name} is ${age} years old`;
};

const user = { name: "Manoj", age: 25, city: "Bangalore" };
console.log(greetUser(user)); // "Manoj is 25 years old"

// With default values
const greetUserWithDefaults = ({ name = "Guest", age = 18 } = {}) => {
  return `${name} is ${age} years old`;
};

console.log(greetUserWithDefaults()); // "Guest is 18 years old"
console.log(greetUserWithDefaults({ name: "Alice" })); // "Alice is 18 years old"
console.log(greetUserWithDefaults({ name: "Bob", age: 30 })); // "Bob is 30 years old"

// --------------------------------------------
// 9. DESTRUCTURING PARAMETERS - ARRAYS
// --------------------------------------------

const getFirstTwo = ([first, second]) => {
  return { first, second };
};

console.log(getFirstTwo([10, 20, 30, 40])); // { first: 10, second: 20 }

// With rest
const getFirstAndRest = ([first, ...rest]) => {
  return { first, rest };
};

console.log(getFirstAndRest([1, 2, 3, 4, 5])); 
// { first: 1, rest: [2, 3, 4, 5] }

// --------------------------------------------
// 10. ARROW FUNCTIONS AS CALLBACKS
// --------------------------------------------

// Array methods
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

const total = numbers.reduce((sum, num) => sum + num, 0);
console.log(total); // 15

// setTimeout
setTimeout(() => {
  console.log("This runs after 1 second");
}, 1000);

// --------------------------------------------
// 11. 'this' BINDING - REGULAR FUNCTION
// --------------------------------------------

const objRegular = {
  name: "Manoj",
  greet: function () {
    console.log(`Hello, I'm ${this.name}`);
  },
};

objRegular.greet(); // "Hello, I'm Manoj" (this refers to objRegular)

// --------------------------------------------
// 12. 'this' BINDING - ARROW FUNCTION
// --------------------------------------------

const objArrow = {
  name: "Alice",
  greet: () => {
    console.log(`Hello, I'm ${this.name}`);
  },
};

objArrow.greet(); // "Hello, I'm undefined" (this is NOT objArrow)

// Arrow function inherits 'this' from parent scope
// In this case, parent scope is global/window

// --------------------------------------------
// 13. ARROW FUNCTION IN CLASS (Good Use Case)
// --------------------------------------------

class Counter {
  constructor() {
    this.count = 0;
  }

  // Regular method
  increment() {
    this.count++;
  }

  // Using arrow function to preserve 'this'
  startCounting() {
    setInterval(() => {
      this.count++; // 'this' refers to Counter instance
      console.log(this.count);
    }, 1000);
  }
}

// const counter = new Counter();
// counter.startCounting(); // Logs: 1, 2, 3, 4...

// --------------------------------------------
// 14. 'arguments' OBJECT - REGULAR FUNCTION
// --------------------------------------------

function regularFunc() {
  console.log(arguments); // Arguments object available
  console.log(arguments[0]); // First argument
  console.log(arguments.length); // Number of arguments
}

regularFunc(1, 2, 3);
// [Arguments] { '0': 1, '1': 2, '2': 3 }
// 1
// 3

// --------------------------------------------
// 15. 'arguments' OBJECT - ARROW FUNCTION (NO ACCESS)
// --------------------------------------------

// Arrow function doesn't have 'arguments'
// const arrowFunc = () => {
//   console.log(arguments); // ReferenceError: arguments is not defined
// };

// arrowFunc(1, 2, 3); // Error

// SOLUTION: Use rest parameters
const arrowFuncWithRest = (...args) => {
  console.log(args); // Real array
  console.log(args[0]);
  console.log(args.length);
};

arrowFuncWithRest(1, 2, 3);
// [1, 2, 3]
// 1
// 3

// --------------------------------------------
// 16. CONSTRUCTOR - REGULAR FUNCTION
// --------------------------------------------

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Manoj", 25);
console.log(person1); // Person { name: 'Manoj', age: 25 }

// --------------------------------------------
// 17. CONSTRUCTOR - ARROW FUNCTION (NOT ALLOWED)
// --------------------------------------------

const PersonArrow = (name, age) => {
  this.name = name;
  this.age = age;
};

// const person2 = new PersonArrow("Alice", 30); // TypeError: PersonArrow is not a constructor

// --------------------------------------------
// 18. HIGHER-ORDER FUNCTIONS
// --------------------------------------------

// Function that returns another function
const multiplyBy = multiplier => number => number * multiplier;

const doublee = multiplyBy(2);
const triple = multiplyBy(3);
const quadruple = multiplyBy(4);

console.log(doublee(5)); // 10
console.log(triple(5)); // 15
console.log(quadruple(5)); // 20

// --------------------------------------------
// 19. CHAINING ARRAY METHODS
// --------------------------------------------

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = data
  .filter(num => num > 3) // [4, 5, 6, 7, 8, 9, 10]
  .map(num => num * 2) // [8, 10, 12, 14, 16, 18, 20]
  .reduce((sum, num) => sum + num, 0); // 98

console.log(result); // 98

// --------------------------------------------
// 20. CONDITIONAL LOGIC IN ARROW FUNCTIONS
// --------------------------------------------

// Simple ternary
const isEven = num => num % 2 === 0;
console.log(isEven(4)); // true
console.log(isEven(5)); // false

// Multiple conditions
const getGrade = score =>
  score >= 90 ? "A" :
  score >= 80 ? "B" :
  score >= 70 ? "C" :
  score >= 60 ? "D" : "F";

console.log(getGrade(95)); // "A"
console.log(getGrade(75)); // "C"
console.log(getGrade(55)); // "F"

// With explicit return for complex logic
const checkAge = age => {
  if (age < 18) return "Minor";
  if (age < 65) return "Adult";
  return "Senior";
};

console.log(checkAge(15)); // "Minor"
console.log(checkAge(30)); // "Adult"
console.log(checkAge(70)); // "Senior"

// --------------------------------------------
// 21. REAL-WORLD EXAMPLE - API RESPONSE HANDLER
// --------------------------------------------

const processUsers = users =>
  users
    .filter(user => user.active) // Only active users
    .map(user => ({
      id: user.id,
      name: user.name.toUpperCase(),
      email: user.email.toLowerCase(),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

const users = [
  { id: 1, name: "Manoj", email: "MANOJ@EXAMPLE.COM", active: true },
  { id: 2, name: "Alice", email: "ALICE@EXAMPLE.COM", active: false },
  { id: 3, name: "Bob", email: "BOB@EXAMPLE.COM", active: true },
];

console.log(processUsers(users));
// [
//   { id: 3, name: 'BOB', email: 'bob@example.com' },
//   { id: 1, name: 'MANOJ', email: 'manoj@example.com' }
// ]

// --------------------------------------------
// 22. REAL-WORLD EXAMPLE - FORM VALIDATION
// --------------------------------------------

const validateEmail = email => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const validatePassword = password => password.length >= 8;

const validateForm = ({ email, password }) => ({
  emailValid: validateEmail(email),
  passwordValid: validatePassword(password),
  isValid: validateEmail(email) && validatePassword(password),
});

console.log(validateForm({ email: "test@example.com", password: "12345678" }));
// { emailValid: true, passwordValid: true, isValid: true }

console.log(validateForm({ email: "invalid", password: "123" }));
// { emailValid: false, passwordValid: false, isValid: false }

// --------------------------------------------
// 23. REAL-WORLD EXAMPLE - DISCOUNT CALCULATOR
// --------------------------------------------

const calculateDiscount = (price, discountPercent = 0) => {
  const discount = (price * discountPercent) / 100;
  const finalPrice = price - discount;
  return {
    originalPrice: price,
    discount,
    finalPrice,
    saved: `${discountPercent}%`,
  };
};

console.log(calculateDiscount(1000, 20));
// { originalPrice: 1000, discount: 200, finalPrice: 800, saved: '20%' }

// --------------------------------------------
// 24. COMPARING ALL THREE FUNCTION TYPES
// --------------------------------------------

// Function Declaration
function addDeclaration(a, b) {
  return a + b;
}

// Function Expression
const addExpression = function (a, b) {
  return a + b;
};

// Arrow Function
const addArrowFunc = (a, b) => a + b;

console.log(addDeclaration(5, 3)); // 8
console.log(addExpression(5, 3)); // 8
console.log(addArrowFunc(5, 3)); // 8

// --------------------------------------------
// 25. EDGE CASES AND GOTCHAS
// --------------------------------------------

// Returning undefined implicitly
const returnNothing = () => {
  1 + 1; // No return statement
};
console.log(returnNothing()); // undefined

// Returning value implicitly
const returnSomething = () => 1 + 1;
console.log(returnSomething()); // 2

// Object literal needs parentheses
const makeObject = () => ({ key: "value" });
console.log(makeObject()); // { key: 'value' }

// Multiline implicit return with parentheses
const complexReturn = (a, b) => (
  a + b
);
console.log(complexReturn(5, 3)); // 8

// --------------------------------------------
// 26. MIXING REGULAR PARAMS WITH REST
// --------------------------------------------

const logEverything = (first, second, ...others) => {
  console.log("First:", first);
  console.log("Second:", second);
  console.log("Others:", others);
};

logEverything(1, 2, 3, 4, 5);
// First: 1
// Second: 2
// Others: [3, 4, 5]

// --------------------------------------------
// 27. NESTED ARROW FUNCTIONS
// --------------------------------------------

const add = a => b => a + b;

console.log(add(5)(3)); // 8

const add5 = add(5);
console.log(add5(10)); // 15
console.log(add5(20)); // 25

// --------------------------------------------
// 28. ARROW FUNCTIONS WITH ARRAY DESTRUCTURING
// --------------------------------------------

const getCoordinates = ([x, y, z = 0]) => ({ x, y, z });

console.log(getCoordinates([10, 20])); // { x: 10, y: 20, z: 0 }
console.log(getCoordinates([10, 20, 30])); // { x: 10, y: 20, z: 30 }

// --------------------------------------------
// 29. PRACTICAL EXAMPLE - SORTING
// --------------------------------------------

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
];

// Sort by price (ascending)
const sortedByPrice = [...products].sort((a, b) => a.price - b.price);
console.log(sortedByPrice);

// Sort by name
const sortedByName = [...products].sort((a, b) =>
  a.name.localeCompare(b.name)
);
console.log(sortedByName);

// --------------------------------------------
// 30. WHEN NOT TO USE ARROW FUNCTIONS
// --------------------------------------------

// ❌ DON'T use as object methods if you need 'this'
const badExample = {
  name: "Test",
  greet: () => console.log(this.name), // 'this' is not the object
};

// ✅ DO use regular function for object methods
const goodExample = {
  name: "Test",
  greet() {
    console.log(this.name); // Works correctly
  },
};