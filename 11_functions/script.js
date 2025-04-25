//✅ 1. Basic Functions
function greet() {
    console.log("Hello dev");
}
greet();

//✅ 2. Function with parameter
function greetUser(user) {
    console.log(`Hello ${user}`);
}
greetUser("Aniket");

//✅ 3. Function returning a value 
function sum(a,b) {
    return a + b;
}
console.log(sum(5,10));

//✅ 4. Function Expression
const multiply = function(x,y) {
    return x * y;
}
multiply(5,20);

//✅ 5. Arrow Function 

const devide = (a,b) => a / b; 
console.log(devide(10,5));