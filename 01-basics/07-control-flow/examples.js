// Basic if/else
let age = 19;

if (age < 18) {
  console.log("Minor");
} else {
  console.log("Adult");
}

// if/else if/else chain
let score = 85;
if (score >= 95) {
  console.log("A+");
} else if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else {
  console.log("F");
}

// Nested if statements
let hasTicket = true;
let hasId = false;

if (hasTicket) {
  if (hasId) {
    console.log("Allowed entry");
  } else {
    console.log("ID required for entry");
  }
} else {
  console.log("Ticket required for entry");
}

// Switch statement

let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

// Switch with fall-through (no break)
let color = "yellow";

switch (color) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
  case "orange":
    console.log("Caution");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Unknown color");
}

// Ternary operator
let isMember = true;
let discount = isMember ? 0.1 : 0.05;
console.log("Discount:", discount);
