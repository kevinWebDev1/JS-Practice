// 1. Create an array of fruits
const fruits = ["apple", "banana", "mango"];
console.log(fruits);


// 2. Add a fruit to the End and Start

fruits.push("Grape"); // adds a fruit at End
fruits.unshift("Guava"); // adds a fruits in Start
console.log(fruits);

// 3. Remove fruit from Start and End
fruits.pop(); // removes last fruit
fruits.shift(); // remove first fruit
console.log(fruits)

// 4. Slice out 2 fruits
let slicedFruit = fruits.slice(0,2) // slicing fruit from 0 index to 2 (2 excluded!)
console.log(slicedFruit);

// 5. Replace 1 item using splice
fruits.splice(0, 1, "kiwi");  // replaces second fruit
console.log(fruits)

// 6. Loop through Array
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Now Challenge: Student Marks Analyzer 🎓

// Create an array marks = [45, 67, 89, 32, 90, 55]
// Calculate:
// Total marks
// Average marks
// Highest mark
// Count how many students scored above 60
// Use for loop to solve this (no .reduce yet)

const marks = [45, 67, 89, 32, 90, 55];
let total = 0;
let highest = 0;
let countAbove60 = 0;

for (let i = 0; i < marks.length; i++) {
  total += marks[i];
  if (marks[i] > highest) highest = marks[i];
  if (marks[i] > 60) countAbove60++;
}
let average = total / marks.length;
console.log("Total:", total, "Average:", average, "Highest:", highest, "Above 60:", countAbove60);




