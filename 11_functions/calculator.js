// Challenge: Real-life Calculator 🧮
// 👇 Do This:
// Create 4 functions:
// add(a, b)
// subtract(a, b)
// multiply(a, b)
// divide(a, b)
// Ask user for:
// 2 numbers
// operation (+, -, *, /)
// Based on user input, call the right function and show result.

const addFunction = (num1,num2) => num1 + num2;
const subtractFunction = (num1,num2) => num1 - num2;
const devideFunction = (num1,num2) => num1 / num2;
const multiplyFunction = (num1,num2) => num1 * num2;

let num1 = Number(prompt("Enter first number"));
let num2 = Number(prompt("Enter second number"));
let operation = prompt("Enter operation: (+, -, *, /)")

switch(operation) {
    case "+": console.log(addFunction(num1,num2));
    break;
    case "-": console.log(subtractFunction(num1,num2));
    break;
    case "/": console.log(devideFunction(num1,num2));
    break;
    case "*": console.log(multiplyFunction(num1,num2));
    break;
    default: console.log("Invalid opeation");
}
