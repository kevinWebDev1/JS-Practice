//✅ 1. Arithmetic Operators
let x = 10;
let y = 3;

console.log(x + y); // addition
console.log(x - y); // subtraction
console.log(x * y); // multiplication
console.log(x / y); // division
console.log(x % y); // modulus
console.log(x**y); // exponentiation

// ✅ 2. Assignment Operators
let a = 5;
a += 5; // a = a + 5
a -= 2; // a = a - 2
a *= 2; // a = a * 2

// ✅ 3. Comparison Operators
console.log( 5 > 3); // true
console.log(5 == '5'); // true
console.log(5 === '5'); // false

// ✅ 4. Logical Operators
let isAdult = true
let hasId = false;

console.log(isAdult && hasId); // false
console.log(isAdult || hasId); // true
console.log(!hasId); // true

// ✅ 5. Ternary Operator
let age = 22;

let result = age >= 18 ? "Adult" : "Minor"
console.log(result); // "Adult"

//🎯 Mini Task: Simple Eligibility Checker
    //📝 Task Name: "Am I Eligible?":
    let myAge = 22;
    let hasLicense = true;

   let amIeligible =  myAge > 18 && hasLicense ? "You can Drive !" : "You are not eligible to drive !";
   console.log(amIeligible) // You can Drive