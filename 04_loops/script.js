// 1. Print 1 to 10 using for loop
for(let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. Print even numbers till 20 using while
let num = 1;
while(num <= 20) {
    if(num % 2 === 0) {
        console.log(num);
    }
    num++;
}

// another way to do it
let i = 2;
while(i <=20) {
    console.log(i)
    i= i + 2;
}

// 3. do...while demo
let number = 5;
do {
    console.log(number);
    number--;
} while(number > 0)

// Loop through an array
let fruits = ["apple", "banana", "mango"];
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

// Use break and continue
for(let i = 1; i <= 5; i++) {
    if(i === 3) continue;
    if(i === 5) break;
    console.log(i);
}