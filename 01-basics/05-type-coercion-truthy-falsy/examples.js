// ============================================
// TYPE COERCION & TRUTHY/FALSY - Complete Examples
// ============================================

console.log("=== EXPLICIT TYPE COERCION ===\n");

// -------------------------------------------
// 1. TO NUMBER
// -------------------------------------------
console.log("--- Converting to Number ---");

// Using Number()
console.log("Number('123'):", Number("123"));           // 123
console.log("Number('123.45'):", Number("123.45"));     // 123.45
console.log("Number('123abc'):", Number("123abc"));     // NaN
console.log("Number(''):", Number(""));                 // 0
console.log("Number('   '):", Number("   "));           // 0
console.log("Number(true):", Number(true));             // 1
console.log("Number(false):", Number(false));           // 0
console.log("Number(null):", Number(null));             // 0
console.log("Number(undefined):", Number(undefined));   // NaN

// Using parseInt()
console.log("\nparseInt('123'):", parseInt("123"));         // 123
console.log("parseInt('123abc'):", parseInt("123abc"));     // 123
console.log("parseInt('abc123'):", parseInt("abc123"));     // NaN
console.log("parseInt('12.5'):", parseInt("12.5"));         // 12
console.log("parseInt('FF', 16):", parseInt("FF", 16));     // 255

// Using parseFloat()
console.log("\nparseFloat('12.5'):", parseFloat("12.5"));       // 12.5
console.log("parseFloat('12.5abc'):", parseFloat("12.5abc"));   // 12.5

// Using unary plus
console.log("\n+'123':", +"123");                       // 123
console.log("+'123.45':", +"123.45");                   // 123.45
console.log("+true:", +true);                           // 1
console.log("+false:", +false);                         // 0


// -------------------------------------------
// 2. TO STRING
// -------------------------------------------
console.log("\n--- Converting to String ---");

// Using String()
console.log("String(123):", String(123));               // "123"
console.log("String(true):", String(true));             // "true"
console.log("String(null):", String(null));             // "null"
console.log("String(undefined):", String(undefined));   // "undefined"
console.log("String([1,2,3]):", String([1, 2, 3]));     // "1,2,3"

// Using toString()
console.log("\n(123).toString():", (123).toString());   // "123"
console.log("true.toString():", true.toString());       // "true"
console.log("(255).toString(16):", (255).toString(16)); // "ff" (hex)
console.log("(10).toString(2):", (10).toString(2));     // "1010" (binary)

// Using concatenation
console.log("\n123 + '':", 123 + "");                   // "123"
console.log("`${123}`:", `${123}`);                     // "123"


// -------------------------------------------
// 3. TO BOOLEAN
// -------------------------------------------
console.log("\n--- Converting to Boolean ---");

// Using Boolean()
console.log("Boolean(1):", Boolean(1));                 // true
console.log("Boolean(0):", Boolean(0));                 // false
console.log("Boolean('hello'):", Boolean("hello"));     // true
console.log("Boolean(''):", Boolean(""));               // false
console.log("Boolean([]):", Boolean([]));               // true
console.log("Boolean({}):", Boolean({}));               // true
console.log("Boolean(null):", Boolean(null));           // false
console.log("Boolean(undefined):", Boolean(undefined)); // false

// Using double negation
console.log("\n!!'hello':", !!"hello");                 // true
console.log("!!'':", !!"");                             // false
console.log("!!1:", !!1);                               // true
console.log("!!0:", !!0);                               // false


console.log("\n\n=== IMPLICIT TYPE COERCION ===\n");

// -------------------------------------------
// 4. STRING COERCION (+ operator)
// -------------------------------------------
console.log("--- + Operator (Concatenation) ---");

console.log("'5' + 3:", "5" + 3);                       // "53"
console.log("5 + '3':", 5 + "3");                       // "53"
console.log("'Hello' + true:", "Hello" + true);         // "Hellotrue"
console.log("'5' + null:", "5" + null);                 // "5null"
console.log("'5' + undefined:", "5" + undefined);       // "5undefined"

// Order matters
console.log("\n5 + 3 + '2':", 5 + 3 + "2");             // "82"
console.log("'2' + 5 + 3:", "2" + 5 + 3);               // "253"


// -------------------------------------------
// 5. NUMERIC COERCION (-, *, /, %)
// -------------------------------------------
console.log("\n--- Arithmetic Operators (Convert to Number) ---");

console.log("'10' - 5:", "10" - 5);                     // 5
console.log("'10' * '2':", "10" * "2");                 // 20
console.log("'10' / '2':", "10" / "2");                 // 5
console.log("'10' % '3':", "10" % "3");                 // 1

console.log("\n'hello' - 5:", "hello" - 5);             // NaN
console.log("'10' - 'abc':", "10" - "abc");             // NaN

// Unary operators
console.log("\n+'5':", +"5");                           // 5
console.log("-'5':", -"5");                             // -5


// -------------------------------------------
// 6. BOOLEAN COERCION (Logical Context)
// -------------------------------------------
console.log("\n--- Logical Context ---");

if ("hello") {
    console.log("'hello' is truthy");                   // Executes
}

if ("") {
    console.log("Won't execute");
} else {
    console.log("'' is falsy");                         // Executes
}


// -------------------------------------------
// 7. COMPARISON COERCION (== vs ===)
// -------------------------------------------
console.log("\n--- == (Loose Equality) ---");

console.log("5 == '5':", 5 == "5");                     // true
console.log("0 == false:", 0 == false);                 // true
console.log("'' == false:", "" == false);               // true
console.log("null == undefined:", null == undefined);   // true

console.log("\n--- === (Strict Equality) ---");

console.log("5 === '5':", 5 === "5");                   // false
console.log("0 === false:", 0 === false);               // false
console.log("null === undefined:", null === undefined); // false


// -------------------------------------------
// 8. SPECIAL CASES
// -------------------------------------------
console.log("\n--- Special Cases ---");

// Arrays and objects
console.log("[1] + [2]:", [1] + [2]);                   // "12"
console.log("[1] - [2]:", [1] - [2]);                   // -1
console.log("{} + []:", {} + []);                       // "[object Object]"
console.log("[] + {}:", [] + {});                       // "[object Object]"

// null and undefined
console.log("\nnull + 5:", null + 5);                   // 5
console.log("undefined + 5:", undefined + 5);           // NaN


console.log("\n\n=== TRUTHY & FALSY VALUES ===\n");

// -------------------------------------------
// 9. ALL 8 FALSY VALUES
// -------------------------------------------
console.log("--- All 8 Falsy Values ---");

const falsyValues = [
    { value: false, name: "false" },
    { value: 0, name: "0" },
    { value: -0, name: "-0" },
    { value: 0n, name: "0n" },
    { value: "", name: '""' },
    { value: null, name: "null" },
    { value: undefined, name: "undefined" },
    { value: NaN, name: "NaN" }
];

falsyValues.forEach(item => {
    console.log(`${item.name}: ${Boolean(item.value)} (falsy)`);
});


// -------------------------------------------
// 10. TRUTHY VALUES (Examples)
// -------------------------------------------
console.log("\n--- Truthy Values (Examples) ---");

const truthyValues = [
    { value: 1, name: "1" },
    { value: -1, name: "-1" },
    { value: "hello", name: '"hello"' },
    { value: "0", name: '"0"' },
    { value: "false", name: '"false"' },
    { value: " ", name: '" "' },
    { value: [], name: "[]" },
    { value: {}, name: "{}" },
    { value: function(){}, name: "function(){}" }
];

truthyValues.forEach(item => {
    console.log(`${item.name}: ${Boolean(item.value)} (truthy)`);
});


console.log("\n\n=== COMMON PITFALLS ===\n");

// -------------------------------------------
// 11. PITFALL 1: Empty array/object are truthy
// -------------------------------------------
console.log("--- Pitfall 1: Empty Collections ---");

if ([]) {
    console.log("[] is truthy!");                       // Executes
}

if ({}) {
    console.log("{} is truthy!");                       // Executes
}

// But array length can be falsy
let arr = [];
if (arr.length) {
    console.log("Won't execute");
} else {
    console.log("arr.length (0) is falsy");             // Executes
}


// -------------------------------------------
// 12. PITFALL 2: String "0" and "false" are truthy
// -------------------------------------------
console.log("\n--- Pitfall 2: String Values ---");

if ("0") {
    console.log('"0" is truthy!');                      // Executes
}

if ("false") {
    console.log('"false" is truthy!');                  // Executes
}


// -------------------------------------------
// 13. PITFALL 3: Logical operators return actual values
// -------------------------------------------
console.log("\n--- Pitfall 3: Logical Operators ---");

let result1 = "hello" || "world";
console.log("'hello' || 'world':", result1);            // "hello"

let result2 = "" || "default";
console.log("'' || 'default':", result2);               // "default"

let result3 = "hello" && "world";
console.log("'hello' && 'world':", result3);            // "world"

let result4 = "" && "world";
console.log("'' && 'world':", result4);                 // ""


// -------------------------------------------
// 14. PITFALL 4: NaN behavior
// -------------------------------------------
console.log("\n--- Pitfall 4: NaN ---");

console.log("Number('hello'):", Number("hello"));       // NaN
console.log("NaN == NaN:", NaN == NaN);                 // false
console.log("NaN === NaN:", NaN === NaN);               // false
console.log("Number.isNaN(NaN):", Number.isNaN(NaN));   // true (correct way)


console.log("\n\n=== LOGICAL OPERATORS BEHAVIOR ===\n");

// -------------------------------------------
// 15. || (OR) - Returns first truthy value
// -------------------------------------------
console.log("--- || (OR) Operator ---");

console.log("'hello' || 'world':", "hello" || "world"); // "hello"
console.log("'' || 'world':", "" || "world");           // "world"
console.log("0 || 100:", 0 || 100);                     // 100
console.log("false || true:", false || true);           // true

// Default values pattern
let userName = "";
let name = userName || "Guest";
console.log("\nDefault value pattern:", name);          // "Guest"


// -------------------------------------------
// 16. && (AND) - Returns first falsy or last value
// -------------------------------------------
console.log("\n--- && (AND) Operator ---");

console.log("'hello' && 'world':", "hello" && "world"); // "world"
console.log("'' && 'world':", "" && "world");           // ""
console.log("0 && 100:", 0 && 100);                     // 0
console.log("true && false:", true && false);           // false

// Conditional execution pattern
let user = { name: "Manoj" };
console.log("\nuser && user.name:", user && user.name); // "Manoj"


// -------------------------------------------
// 17. ! (NOT) - Converts to boolean and negates
// -------------------------------------------
console.log("\n--- ! (NOT) Operator ---");

console.log("!'hello':", !"hello");                     // false
console.log("!'':", !"");                               // true
console.log("!0:", !0);                                 // true
console.log("!1:", !1);                                 // false
console.log("!!!'hello':", !!!"hello");                 // false (triple negation)


console.log("\n\n=== INTERVIEW PATTERNS ===\n");

// -------------------------------------------
// 18. PATTERN 1: Coercion with +
// -------------------------------------------
console.log("--- Pattern 1: + Operator ---");

console.log("1 + 2:", 1 + 2);                           // 3
console.log("1 + '2':", 1 + "2");                       // "12"
console.log("'1' + 2:", "1" + 2);                       // "12"
console.log("'1' + '2':", "1" + "2");                   // "12"
console.log("1 + 2 + '3':", 1 + 2 + "3");               // "33"
console.log("'1' + 2 + 3:", "1" + 2 + 3);               // "123"


// -------------------------------------------
// 19. PATTERN 2: Coercion with -
// -------------------------------------------
console.log("\n--- Pattern 2: - Operator ---");

console.log("5 - 2:", 5 - 2);                           // 3
console.log("'5' - 2:", "5" - 2);                       // 3
console.log("'5' - '2':", "5" - "2");                   // 3
console.log("'hello' - 2:", "hello" - 2);               // NaN


// -------------------------------------------
// 20. PATTERN 3: Null and Undefined
// -------------------------------------------
console.log("\n--- Pattern 3: null vs undefined ---");

console.log("Number(null):", Number(null));             // 0
console.log("Number(undefined):", Number(undefined));   // NaN
console.log("null + 5:", null + 5);                     // 5
console.log("undefined + 5:", undefined + 5);           // NaN
console.log("null == undefined:", null == undefined);   // true
console.log("null === undefined:", null === undefined); // false


// -------------------------------------------
// 21. PATTERN 4: Array Coercion
// -------------------------------------------
console.log("\n--- Pattern 4: Array Coercion ---");

console.log("[1, 2, 3] + 5:", [1, 2, 3] + 5);           // "1,2,35"
console.log("[10] - [2]:", [10] - [2]);                 // 8
console.log("[] + []:", [] + []);                       // ""
console.log("[] - []:", [] - []);                       // 0


// -------------------------------------------
// 22. PATTERN 5: Object Coercion
// -------------------------------------------
console.log("\n--- Pattern 5: Object Coercion ---");

console.log("[1] + [2]:", [1] + [2]);                   // "12"
console.log("[1] - [2]:", [1] - [2]);                   // -1


// -------------------------------------------
// 23. NULLISH COALESCING (??) vs OR (||)
// -------------------------------------------
console.log("\n--- Nullish Coalescing (??) vs OR (||) ---");

console.log("0 || 100:", 0 || 100);                     // 100
console.log("0 ?? 100:", 0 ?? 100);                     // 0

console.log("'' || 'default':", "" || "default");       // "default"
console.log("'' ?? 'default':", "" ?? "default");       // ""

console.log("null || 'default':", null || "default");   // "default"
console.log("null ?? 'default':", null ?? "default");   // "default"


// -------------------------------------sss------
// 24. TRICKY EXAMPLE
// -------------------------------------------
console.log("\n--- Tricky Example ---");

console.log("[] == ![]:", [] == ![]);                   // true (!)
// console.log("[] === ![]:", [] === ![]);                 // false


// -------------------------------------------
// 25. TYPE CHECKING
// -------------------------------------------
console.log("\n--- Type Checking ---");

console.log("typeof (5 + '3'):", typeof (5 + "3"));     // "string"
console.log("typeof ('5' - 3):", typeof ("5" - 3));     // "number"
console.log("typeof (true + 1):", typeof (true + 1));   // "number"
console.log("typeof ([] + []):", typeof ([] + []));     // "string"