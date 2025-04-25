//✅ 1. Print Number 1 to 10
for(let i = 1; i <= 10; i++) {
    console.log(i)
}

//✅ 2. Print Even number from 1 to 20
let n = 2;
while(n<20) {
    console.log(n);
    n+=2;
}

//✅ 3. countdown using while loop
let count = 5;
while(count>0) {
    console.log(count);
    count--;
}

//✅ 4. Do...while loop
let x = 5;
do {
    console.log(x);
    x++;
} while(x <= 10)

//✅ 5. Break and Continue
for (let i = 1; i <= 10; i++) {
    if (i === 5) continue;
    if (i === 8) break;
    console.log(i);
  }
  
// Challenge: Divisible Numbers Finder 🔎
// 👇 Do This:
// Ask for two inputs:
// start (e.g., 10)
// end (e.g., 100)
// Loop through the numbers and:
// Print all numbers divisible by 3 and 5
// Count how many such numbers exist

let a = prompt("Enter start number");
let b = prompt("Enter end number");
let countTotalNumber = 0;

for(let i = a; i <= b; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log("number: " + i);
        countTotalNumber++;
    }
}
console.log("countTotalNumber " + countTotalNumber);