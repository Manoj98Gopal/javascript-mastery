# Interview Questions - Control Flow

## Q1: What is the difference between if/else and switch?

**Answer:**

**if/else:**
- Can test any condition (ranges, complex logic)
- Uses any boolean expression
- Conditions can be different for each branch

**switch:**
- Tests single value against multiple constants
- Uses strict equality (===)
- All cases test same variable
```javascript
// if/else - good for ranges
if (age < 13) {
    console.log("Child");
} else if (age < 20) {
    console.log("Teen");
} else {
    console.log("Adult");
}

// switch - good for specific values
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
}
```

**When to use:**
- if/else: Ranges, complex conditions, boolean logic
- switch: Matching specific values, many cases

---

## Q2: What happens if you forget `break` in a switch statement?

**Answer:**  
The code "falls through" to the next case, executing all subsequent cases until a `break` is found or the switch ends.
```javascript
let num = 2;

switch (num) {
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");  // Executes
        // No break!
    case 3:
        console.log("Three");  // Also executes! (fall-through)
        break;
}
// Output: "Two" and "Three"
```

**When fall-through is intentional:**
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
        console.log("Weekend");  // Multiple cases, one action
        break;
}
```

---

## Q3: Does switch use `==` or `===`?

**Answer:**  
Switch uses **strict equality (===)** to match cases.
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

---

## Q4: What's the output?
```javascript
let score = 85;

if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
}
```

**Answer:** `"B"`

**Reason:**  
- First condition (score >= 90) is false
- Second condition (score >= 80) is true → executes "B"
- Entire if/else chain exits (remaining conditions not checked)

---

## Q5: What's the output?
```javascript
let x = 0;

if (x) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}
```

**Answer:** `"Falsy"`

**Reason:**  
`0` is a falsy value in JavaScript.

**All falsy values:** `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`

---

## Q6: What's the output?
```javascript
let arr = [];

if (arr) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}
```

**Answer:** `"Truthy"`

**Reason:**  
Empty arrays `[]` are **truthy** in JavaScript!

To check if array is empty:
```javascript
if (arr.length > 0) {
    console.log("Has items");
}
```

---

## Q7: What's wrong with this code?
```javascript
if (age >= 18)
    console.log("Adult");
    console.log("Can vote");
```

**Answer:**  
The second `console.log` is NOT part of the if statement. It always executes!
```javascript
// What JavaScript sees:
if (age >= 18) {
    console.log("Adult");
}
console.log("Can vote");  // Always runs!
```

**Fix:** Always use brackets
```javascript
if (age >= 18) {
    console.log("Adult");
    console.log("Can vote");
}
```

---

## Q8: What's the output?
```javascript
switch (2 + 2) {
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four");
    case 5:
        console.log("Five");
        break;
    default:
        console.log("Other");
}
```

**Answer:**
```
Four
Five
```

**Reason:**  
- `2 + 2 = 4` matches case 4
- Prints "Four"
- NO break → falls through to case 5
- Prints "Five"
- break statement stops execution

---

## Q9: Can you use expressions in switch cases?

**Answer:**  
Yes, but it's uncommon. Usually better to use if/else.
```javascript
let age = 25;

switch (true) {
    case age < 13:
        console.log("Child");
        break;
    case age < 20:
        console.log("Teen");
        break;
    case age < 60:
        console.log("Adult");  // Executes
        break;
    default:
        console.log("Senior");
}
```

**Better with if/else:**
```javascript
if (age < 13) {
    console.log("Child");
} else if (age < 20) {
    console.log("Teen");
} else if (age < 60) {
    console.log("Adult");
} else {
    console.log("Senior");
}
```

---

## Q10: What are guard clauses?

**Answer:**  
Guard clauses are early returns that check error conditions first, reducing nesting.

**Without guard clauses (nested):**
```javascript
function process(user) {
    if (user) {
        if (user.isActive) {
            if (user.hasPermission) {
                console.log("Process");
            } else {
                console.log("No permission");
            }
        } else {
            console.log("Inactive");
        }
    } else {
        console.log("No user");
    }
}
```

**With guard clauses (flat):**
```javascript
function process(user) {
    if (!user) {
        console.log("No user");
        return;
    }
    
    if (!user.isActive) {
        console.log("Inactive");
        return;
    }
    
    if (!user.hasPermission) {
        console.log("No permission");
        return;
    }
    
    console.log("Process");
}
```

**Benefits:** Easier to read, less nesting, clear error handling

---

## Q11: What's the output?
```javascript
let value = "";

if (!value) {
    console.log("Empty");
} else {
    console.log("Has value");
}
```

**Answer:** `"Empty"`

**Reason:**  
- `value` is empty string `""` (falsy)
- `!value` = `!falsy` = `true`
- Condition is true, prints "Empty"

---

## Q12: True or False Questions

**Q1:** switch can only check numbers  
**A:** False. Can check any value (strings, numbers, etc.)

**Q2:** `==` and `===` work the same in if statements  
**A:** False. `==` does type coercion, `===` doesn't

**Q3:** Empty array `[]` is falsy  
**A:** False. It's truthy!

**Q4:** switch uses strict equality  
**A:** True. Uses `===`

**Q5:** You must always include `default` in switch  
**A:** False. It's optional, but recommended

**Q6:** Guard clauses use early returns  
**A:** True

**Q7:** Ternary operator can replace all if/else statements  
**A:** True (technically), but shouldn't for complex logic

**Q8:** Fall-through in switch is always a bug  
**A:** False. Can be intentional

---

## Q13: What's the output?
```javascript
let age = 25;
let status = age >= 18 ? age >= 21 ? "Full adult" : "Young adult" : "Minor";
console.log(status);
```

**Answer:** `"Full adult"`

**Reason:**  
- `age >= 18` is true
- Then checks `age >= 21` (nested ternary)
- `age >= 21` is true
- Returns "Full adult"

**Note:** Nested ternaries are hard to read. Better to use if/else.

---

## Q14: What's the difference between these?
```javascript
// Option A
if (user && user.isActive) { }

// Option B
if (user) {
    if (user.isActive) { }
}
```

**Answer:**  
They're functionally the same, but **Option A is better**:
- More concise
- Uses logical AND (`&&`) for short-circuit evaluation
- Same behavior: only checks `user.isActive` if `user` exists

---

## Q15: What's the output?
```javascript
let x = 10;

switch (x) {
    case 5:
    case 10:
    case 15:
        console.log("Multiple of 5");
        break;
    case 20:
        console.log("Twenty");
        break;
    default:
        console.log("Other");
}
```

**Answer:** `"Multiple of 5"`

**Reason:**  
- `x = 10` matches `case 10`
- Falls through (no code for case 10)
- Executes `console.log("Multiple of 5")`
- `break` stops execution

---

## Q16: What's the output?
```javascript
function test(value) {
    if (value == true) {
        console.log("Loose true");
    }
    
    if (value === true) {
        console.log("Strict true");
    }
}

test(1);
```

**Answer:** `"Loose true"`

**Reason:**
- `1 == true` → true (loose equality, type coercion: `1 == 1`)
- `1 === true` → false (strict equality, different types)

**Lesson:** Always use `===` to avoid confusion!

---

## Q17: What's the best way to check if a variable has a value?

**Answer:**  
Depends on what you mean by "has a value":

**Check for null/undefined:**
```javascript
if (value != null) { }  // Checks both null and undefined
// or
if (value !== null && value !== undefined) { }
```

**Check for truthy:**
```javascript
if (value) { }  // But 0, "", false are falsy too!
```

**Check for not empty string:**
```javascript
if (value !== "") { }
// or
if (value.length > 0) { }
```

**Best practice:** Be specific about what you're checking!

---

## Q18: What's the output?
```javascript
let result = true ? false ? "A" : "B" : "C";
console.log(result);
```

**Answer:** `"B"`

**Reason:**  
Right-to-left association for ternary when chained:
- `true ? (false ? "A" : "B") : "C"`
- Inner ternary: `false ? "A" : "B"` → `"B"`
- Outer ternary: `true ? "B" : "C"` → `"B"`

**Lesson:** Avoid nested ternaries!

---

## Q19: When should you use switch instead of if/else?

**Answer:**  
Use switch when:

✅ **Checking single variable against multiple specific values**
```javascript
switch (userRole) {
    case "admin": ...
    case "editor": ...
    case "viewer": ...
}
```

✅ **Many cases (5+)**
```javascript
switch (month) {
    case 1: return "January";
    case 2: return "February";
    // ... 10 more cases
}
```

✅ **Want to use fall-through**
```javascript
switch (day) {
    case "Mon":
    case "Tue":
    case "Wed":
    case "Thu":
    case "Fri":
        return "Weekday";
    case "Sat":
    case "Sun":
        return "Weekend";
}
```

Use if/else when:
- Testing ranges
- Complex conditions
- Different variables in each condition

---

## Q20: What's the output?
```javascript
let x = 0;

if (x = 5) {
    console.log("True");
} else {
    console.log("False");
}

console.log(x);
```

**Answer:**
```
True
5
```

**Reason:**  
- `x = 5` is **assignment**, not comparison!
- Assignment returns the assigned value (5)
- `5` is truthy
- `x` is now 5

**Common mistake!** Should be:
```javascript
if (x === 5) {  // Comparison, not assignment
```

---

## Q21: Can default appear anywhere in switch?

**Answer:**  
Yes, but convention is to put it last.
```javascript
switch (value) {
    default:
        console.log("Default");
        break;
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
}
// Works, but unusual
```

**Best practice:** Always put `default` last for readability.

---

## Q22: What's the output?
```javascript
let value = null;

if (value) {
    console.log("Has value");
} else if (!value) {
    console.log("No value");
} else {
    console.log("Other");
}
```

**Answer:** `"No value"`

**Reason:**  
- `if (value)` → `if (null)` → false (null is falsy)
- `else if (!value)` → `!null` → `!false` → true
- Prints "No value"

---

## Q23: Fix this code
```javascript
// Buggy code
let score = 85;

if (score >= 90)
    console.log("Excellent");
    console.log("Great job");
```

**Answer:**
```javascript
let score = 85;

if (score >= 90) {
    console.log("Excellent");
    console.log("Great job");
}
```

**Problem:** Without brackets, only the first line is part of the if. "Great job" always prints.

---

## Q24: What's better and why?
```javascript
// Option A
if (user !== null && user !== undefined) {
    console.log(user.name);
}

// Option B
if (user != null) {
    console.log(user.name);
}

// Option C
if (user) {
    console.log(user.name);
}
```

**Answer:**  
**Option C** is best in most cases.

**Reason:**
- Option A: Too verbose
- Option B: Good (checks both null and undefined with `!=`)
- Option C: Best (shortest, checks truthy which includes not null/undefined)

**Exception:** If `0`, `""`, or `false` are valid user values, use Option B.

---

## Q25: Final Challenge
```javascript
let a = 1, b = 2, c = 3;

if (a = b = c) {
    console.log("True:", a, b, c);
} else {
    console.log("False:", a, b, c);
}
```

**What will be the output?**

**Answer:**
```
True: 3 3 3
```

**Reason:**
- `a = b = c` is chained assignment (right-to-left)
- `c` is 3
- `b = c` → `b = 3`
- `a = b` → `a = 3`
- Expression returns 3 (truthy)
- All variables are now 3

**Lesson:** Don't use assignment in conditions! Always use comparison (`===`).

---

## Q26: What's the output?
```javascript
let x = 10;

if (x > 5)
if (x > 15)
    console.log("Greater than 15");
else
    console.log("Between 5 and 15");
```

**Answer:** `"Between 5 and 15"`

**Reason:**  
The `else` belongs to the nearest `if`. JavaScript sees:
```javascript
if (x > 5) {
    if (x > 15) {
        console.log("Greater than 15");
    } else {
        console.log("Between 5 and 15");  // This executes
    }
}
```

**Always use brackets to avoid confusion!**

---

## Q27: What's the output?
```javascript
switch ("hello") {
    case "hello":
        console.log("Hi");
    case "world":
        console.log("World");
    default:
        console.log("Default");
}
```

**Answer:**
```
Hi
World
Default
```

**Reason:**  
No `break` statements, so all cases fall through after the match.

---

## Q28: What's the output?
```javascript
let obj = {};

if (obj) {
    console.log("Truthy");
}

if (obj.property) {
    console.log("Has property");
}
```

**Answer:** `"Truthy"`

**Reason:**
- Empty objects `{}` are truthy → prints "Truthy"
- `obj.property` is `undefined` (falsy) → doesn't print "Has property"

---

## Q29: What's the output?
```javascript
let value = false;

if (!value) {
    console.log("A");
} else if (value) {
    console.log("B");
} else {
    console.log("C");
}
```

**Answer:** `"A"`

**Reason:**
- `!value` = `!false` = `true`
- First condition is true
- Prints "A" and exits

---

## Q30: Performance Question

**Which is faster: if/else or switch?**

**Answer:**  
For **many cases (10+)**, switch is typically faster because:
- Modern JavaScript engines optimize switch with jump tables
- O(1) lookup for switch vs O(n) for if/else chain

For **few cases (2-5)**, performance is similar. Choose based on readability:
- Ranges → if/else
- Specific values → switch

**Example where switch is better:**
```javascript
// switch: O(1) lookup
switch (statusCode) {
    case 200: return "OK";
    case 201: return "Created";
    case 400: return "Bad Request";
    case 401: return "Unauthorized";
    // ... 50 more cases
}

// if/else: O(n) - checks each condition
if (statusCode === 200) return "OK";
else if (statusCode === 201) return "Created";
else if (statusCode === 400) return "Bad Request";
// ... much slower for last cases
```