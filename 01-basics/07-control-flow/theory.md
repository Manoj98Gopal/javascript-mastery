# Control Flow in JavaScript

## What is Control Flow?

Control flow is the order in which statements are executed in a program. By default, JavaScript executes code line by line from top to bottom. Control flow statements allow you to change this order based on conditions.

---

## Types of Control Flow Statements

1. **Conditional Statements** (if, else if, else, switch)
2. **Looping Statements** (covered in next topic)
3. **Jump Statements** (break, continue, return)

---

## 1. if Statement

Executes a block of code if a condition is true.

### Syntax
```javascript
if (condition) {
    // Code executes if condition is true
}
```

### Example
```javascript
let age = 20;

if (age >= 18) {
    console.log("You are an adult");  // Executes
}
```

---

## 2. if...else Statement

Executes one block if condition is true, another block if false.

### Syntax
```javascript
if (condition) {
    // Executes if condition is true
} else {
    // Executes if condition is false
}
```

### Example
```javascript
let age = 15;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");  // Executes
}
```

---

## 3. if...else if...else Statement

Tests multiple conditions sequentially.

### Syntax
```javascript
if (condition1) {
    // Executes if condition1 is true
} else if (condition2) {
    // Executes if condition2 is true
} else if (condition3) {
    // Executes if condition3 is true
} else {
    // Executes if all conditions are false
}
```

### Example
```javascript
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");  // Executes
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}
```

**Important:** Only the FIRST matching condition executes, then the entire if/else chain is exited.

---

## 4. Nested if Statements

if statements inside other if statements.

### Example
```javascript
let hasTicket = true;
let hasId = true;

if (hasTicket) {
    if (hasId) {
        console.log("Entry allowed");  // Executes
    } else {
        console.log("ID required");
    }
} else {
    console.log("Ticket required");
}
```

### Better Alternative: Logical Operators
```javascript
// Instead of nesting
if (hasTicket && hasId) {
    console.log("Entry allowed");
} else if (hasTicket && !hasId) {
    console.log("ID required");
} else {
    console.log("Ticket required");
}
```

---

## 5. switch Statement

Tests a value against multiple cases.

### Syntax
```javascript
switch (expression) {
    case value1:
        // Code executes if expression === value1
        break;
    case value2:
        // Code executes if expression === value2
        break;
    default:
        // Code executes if no case matches
}
```

### Example
```javascript
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");  // Executes
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
```

---

## 6. switch Statement - Important Concepts

### A. Strict Equality (===)

Switch uses **strict equality** to match cases.
```javascript
let value = "5";

switch (value) {
    case 5:        // Won't match (number)
        console.log("Number 5");
        break;
    case "5":      // Will match (string)
        console.log("String 5");  // Executes
        break;
}
```

### B. break Statement

**Without break**, execution "falls through" to the next case.
```javascript
let num = 2;

switch (num) {
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");  // Executes
        // No break here!
    case 3:
        console.log("Three");  // Also executes! (fall-through)
        break;
    default:
        console.log("Other");
}
// Output: "Two" and "Three"
```

### C. Intentional Fall-Through

Fall-through can be useful for multiple cases with same action.
```javascript
let day = "Saturday";

switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("Weekday");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend");  // Executes
        break;
    default:
        console.log("Invalid day");
}
```

**Common Pattern:**
```javascript
let color = "yellow";

switch (color) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
    case "orange":
        console.log("Caution");  // yellow falls through to here
        break;
    case "green":
        console.log("Go");
        break;
}
```

### D. default Case

Executes if no case matches. Can be placed anywhere, but convention is last.
```javascript
let fruit = "grape";

switch (fruit) {
    case "apple":
        console.log("Apple");
        break;
    case "banana":
        console.log("Banana");
        break;
    default:
        console.log("Unknown fruit");  // Executes
        break;
}
```

---

## 7. if/else vs switch

### Use if/else when:
- Testing ranges or complex conditions
- Different conditions for each branch
- Boolean logic needed
```javascript
// Range checking - use if/else
if (age < 13) {
    console.log("Child");
} else if (age < 20) {
    console.log("Teenager");
} else {
    console.log("Adult");
}

// Complex conditions - use if/else
if (user.isAdmin && user.isActive) {
    console.log("Admin access");
}
```

### Use switch when:
- Checking single value against multiple constants
- Many specific cases
- Want to use fall-through
```javascript
// Specific values - use switch
switch (userRole) {
    case "admin":
        console.log("Admin panel");
        break;
    case "editor":
        console.log("Editor panel");
        break;
    case "viewer":
        console.log("View only");
        break;
}
```

---

## 8. Truthy and Falsy in Conditions

Conditions automatically convert values to boolean.

### Falsy Values (8 total)
```javascript
if (false) { }       // Won't execute
if (0) { }           // Won't execute
if (-0) { }          // Won't execute
if (0n) { }          // Won't execute
if ("") { }          // Won't execute
if (null) { }        // Won't execute
if (undefined) { }   // Won't execute
if (NaN) { }         // Won't execute
```

### Truthy Values (Everything else)
```javascript
if (true) { }        // Executes
if (1) { }           // Executes
if ("hello") { }     // Executes
if ([]) { }          // Executes (empty array is truthy!)
if ({}) { }          // Executes (empty object is truthy!)
```

---

## 9. Ternary Operator (Conditional Operator)

Shorthand for simple if/else.

### Syntax
```javascript
condition ? expressionIfTrue : expressionIfFalse
```

### Example
```javascript
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);  // "Adult"

// Equivalent to:
let status;
if (age >= 18) {
    status = "Adult";
} else {
    status = "Minor";
}
```

### When to Use

✅ **Good:**
```javascript
// Simple value assignment
let discount = isMember ? 0.10 : 0.05;

// Simple display logic
console.log(count === 1 ? "1 item" : `${count} items`);
```

❌ **Avoid:**
```javascript
// Complex nested ternary (hard to read)
let result = a > b ? a > c ? a : c : b > c ? b : c;

// Better: use if/else
let result;
if (a > b) {
    result = a > c ? a : c;
} else {
    result = b > c ? b : c;
}
```

---

## 10. Guard Clauses

Early returns to reduce nesting.

### ❌ Deep Nesting (Hard to Read)
```javascript
function processOrder(order) {
    if (order) {
        if (order.items) {
            if (order.items.length > 0) {
                if (order.isPaid) {
                    console.log("Processing order");
                    // ... complex logic
                } else {
                    console.log("Payment required");
                }
            } else {
                console.log("No items in order");
            }
        } else {
            console.log("Invalid order");
        }
    } else {
        console.log("No order");
    }
}
```

### ✅ Guard Clauses (Easy to Read)
```javascript
function processOrder(order) {
    if (!order) {
        console.log("No order");
        return;
    }
    
    if (!order.items) {
        console.log("Invalid order");
        return;
    }
    
    if (order.items.length === 0) {
        console.log("No items in order");
        return;
    }
    
    if (!order.isPaid) {
        console.log("Payment required");
        return;
    }
    
    console.log("Processing order");
    // ... complex logic
}
```

**Benefits:**
- Easier to read
- Less nesting
- Clear error conditions upfront

---

## 11. Common Patterns

### Pattern 1: Range Checking
```javascript
let temp = 25;

if (temp < 0) {
    console.log("Freezing");
} else if (temp < 20) {
    console.log("Cold");
} else if (temp < 30) {
    console.log("Comfortable");  // Executes
} else {
    console.log("Hot");
}
```

### Pattern 2: Type Checking
```javascript
function process(value) {
    if (typeof value === "string") {
        console.log("String:", value.toUpperCase());
    } else if (typeof value === "number") {
        console.log("Number:", value * 2);
    } else if (Array.isArray(value)) {
        console.log("Array length:", value.length);
    } else {
        console.log("Unknown type");
    }
}
```

### Pattern 3: Existence Checking
```javascript
if (user) {  // Check if user exists
    console.log("User:", user.name);
} else {
    console.log("No user");
}

// Better: optional chaining
console.log("User:", user?.name || "Guest");
```

---

## 12. Best Practices

### ✅ DO

1. **Always use brackets `{}`**
```javascript
// ✅ Good
if (condition) {
    doSomething();
}

// ❌ Risky (easy to make mistakes)
if (condition)
    doSomething();
```

2. **Use strict equality `===` in conditions**
```javascript
// ✅ Good
if (value === 5) { }

// ❌ Avoid
if (value == 5) { }
```

3. **Keep conditions simple and readable**
```javascript
// ✅ Good
let isEligible = age >= 18 && hasLicense;
if (isEligible) { }

// ❌ Hard to read
if (age >= 18 && hasLicense && !isSuspended && hasInsurance) { }
```

4. **Use guard clauses to reduce nesting**
```javascript
// ✅ Good
if (!user) return;
if (!user.isActive) return;
// ... main logic

// ❌ Too nested
if (user) {
    if (user.isActive) {
        // ... main logic
    }
}
```

5. **Always include `break` in switch (unless intentional fall-through)**
```javascript
// ✅ Good
switch (value) {
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
}
```

### ❌ DON'T

1. **Don't omit brackets**
```javascript
// ❌ Bad
if (condition)
    line1();
    line2();  // Always executes (not part of if!)
```

2. **Don't nest too deeply**
```javascript
// ❌ Bad (too nested)
if (a) {
    if (b) {
        if (c) {
            if (d) {
                // ...
            }
        }
    }
}
```

3. **Don't use complex nested ternaries**
```javascript
// ❌ Bad
let result = a ? b ? c : d : e ? f : g;

// ✅ Good - use if/else
```

4. **Don't forget default case in switch**
```javascript
// ❌ Risky
switch (value) {
    case 1:
        break;
    case 2:
        break;
    // No default!
}

// ✅ Better
switch (value) {
    case 1:
        break;
    case 2:
        break;
    default:
        console.log("Unexpected value");
}
```

---

## Summary

### Control Flow Statements

**if/else:**
- Tests conditions
- Use for ranges, complex logic
- Can be chained with else if

**switch:**
- Matches values (strict equality ===)
- Use for many specific values
- Needs `break` (unless intentional fall-through)
- `default` case for unmatched values

**Ternary:**
- Shorthand for simple if/else
- One-liners only
- Avoid complex nesting

### Key Points for Interviews

⭐ Always use brackets `{}` with if/else  
⭐ if/else checks first true condition, then exits  
⭐ switch uses strict equality (===)  
⭐ break prevents fall-through in switch  
⭐ Fall-through can be intentional (multiple cases, one action)  
⭐ Guard clauses reduce nesting  
⭐ Empty arrays/objects are truthy  
⭐ Prefer if/else for ranges, switch for specific values  
⭐ Ternary is for simple conditions only  
⭐ default case should always be included in switch