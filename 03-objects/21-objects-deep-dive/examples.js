// Five ways to create an object 

// 1. Object literal syntax
const person1 = {
  name : 'Alice',
  age : 30,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  } 
}


// 2. Constructor function
function Person (name,age){
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person2 = new Person('Bob', 25);


// 3. Object.create() method
const personProto = {
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

const person3 = Object.create(personProto);
person3.name = 'Charlie';
person3.age = 35;


// 4. ES6 Class syntax
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person4 = new PersonClass('David', 28);


// 5. Factory function
function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
}

const person5 = createPerson('Eve', 22);

// Testing the objects
person1.greet(); // Hello, my name is Alice
person2.greet(); // Hello, my name is Bob
person3.greet(); // Hello, my name is Charlie
person4.greet(); // Hello, my name is David
person5.greet(); // Hello, my name is Eve




// ============================================================
// SECTION 2: Adding, Updating, Deleting Properties
// ============================================================



// Adding a new property
person1.city = 'New York';
person1['country'] = 'USA';
console.log(person1.city); // New York
console.log(person1.country); // USA


// Modifying an existing property
person1.age = 31;
person1['name'] = 'Alice Smith';
console.log(person1.age); // 31


// Deleting a property
delete person1.city;
console.log(person1.city); // undefined 




// ============================================================
// SECTION 3: Dot vs Bracket Notation
// ============================================================


const user = { name: "Alice", "user-age": 30, city: "NY" };

// Dot notation
console.log(user.name); // Alice
console.log(user.city); // NY

// Bracket notation
console.log(user["name"]); // Alice
console.log(user["user-age"]); // 30

// Using variables with bracket notation
const propName = "city";
console.log(user[propName]); // NY

// Invalid property names with dot notation
// console.log(user.user-age); // SyntaxError



// ============================================================
// SECTION 4: Checking Property Existence
// ============================================================


const car = { make: "Toyota", model: "Camry", year: 2020 };

// Using 'in' operator
console.log("make" in car); // true
console.log("color" in car); // false

// Using hasOwnProperty method
console.log(car.hasOwnProperty("model")); // true
console.log(car.hasOwnProperty("color")); // false

// Using optional chaining
console.log(car?.year); // 2020
console.log(car?.color); // undefined


// ============================================================
// SECTION 5: Property Shorthand & Computed Keys (ES6)
// ============================================================


// Property shorthand
const name = "Alice";
const age = 30;

const person6 = { name, age };
console.log(person6); // { name: 'Alice', age: 30 }

// Computed property names
const propName1 = "firstName";
const propName2 = "lastName";

const person7 = {
  [propName1]: "Bob",
  [propName2]: "Smith"
};

console.log(person7); // { firstName: 'Bob', lastName: 'Smith' }  


// ============================================================
// SECTION 6: Nested Objects
// ============================================================



const company = {
  name: "Tech Corp",
  employees: [
    { name: "Alice", role: "Developer" },
    { name: "Bob", role: "Designer" }
  ],
  address: {
    street: "123 Main St",
    city: "NY",
    country: "USA"
  }
};

console.log(company.employees[0].name); // Alice
console.log(company.address.city); // NY
console.log(company['address']['street']); // 123 Main St


// ============================================================
// SECTION 8: Property Descriptors (Advanced)
// ============================================================


const obj = {name : "Alice"};

// see the hidden properties of the object 
const descriptor = Object.getOwnPropertyDescriptor(obj, 'name');
console.log(descriptor);
// Output: { value: 'Alice', writable: true, enumerable: true, configurable: true }

// Define a property with custom descriptor
Object.defineProperty(obj, "id", {
  value: 42,
  writable: false,     // cannot change value
  enumerable: false,   // will NOT show in for...in or Object.keys()
  configurable: false  // cannot delete or redefine
});
 
obj.id = 99;           // silently fails (or throws in strict mode)
console.log(obj.id);   // 42 ← unchanged
console.log(Object.keys(obj)); // ["name"] ← "id" not shown (enumerable: false)



// ============================================================
// SECTION 9: Looping Over Objects
// ============================================================

const user2 = { name: "Alice", age: 30, city: "NY" };

// for...in loop (iterates over enumerable properties)
for (let key in user2) {
  console.log(`${key}: ${user2[key]}`);
}


// Object.keys() method
const keys = Object.keys(user2);
console.log(keys); // ["name", "age", "city"]

keys.forEach(key => {
  console.log(`${key}: ${user2[key]}`);
});


// ============================================================
// SECTION 10: Common Gotchas & Tricky Examples
// ============================================================
 
// Gotcha 1: typeof null is "object" — famous JS bug!
console.log(typeof null);        // "object" ← BUG, null is NOT an object
console.log(typeof {});          // "object" ← actual object
console.log(typeof []);          // "object" ← arrays are objects too!
console.log(typeof function(){}); // "function"
 
// Better way to check for actual object (not null, not array):
function isPlainObject(val) {
  return typeof val === "object" && val !== null && !Array.isArray(val);
}
console.log(isPlainObject({}));    // true
console.log(isPlainObject(null));  // false
console.log(isPlainObject([]));    // false
 