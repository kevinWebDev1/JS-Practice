// 1. Basic Function Declaration
function greet() {
    console.log("Hello Dev!")
}
greet();

// 2. Function with Parameter
function greeting(name) {
    console.log("Hello " + name);
}
greeting("John");

// 3. Function Expression
const multiply = function (a,b) {
    return a * b;
}
console.log("Multiple = " + multiply(3,4));

// 4. Arrow Function
const devide = (a,b) => a / b; 
console.log(devide(10,2));

const oddOrEven = (num) => num % 2 === 0 ? "Even" : "Odd";
console.log(oddOrEven(4)); // Check Even or Odd
console.log(oddOrEven(5)); // Check Even or Odd