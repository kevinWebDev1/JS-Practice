//✅ 1. Create a list of fruits
let fruits = ["apple", "banana", "mango"];
console.log(fruits);

//✅ 2. Add and remove items
fruits.push("Papaya"); // adding in the last
console.log(fruits);
fruits.unshift("Guava"); // adding in the start
console.log(fruits);
fruits.pop(); // remove the last one
console.log(fruits);
fruits.shift(); // remove the first one
console.log(fruits);

//✅ 3. Check if a fruits exists
console.log(fruits.includes("banana"));
console.log(fruits.includes("Guava"));

//✅ 4. loop through array
for(let i = 0; i < fruits.lenght; i++) {
    console.log(fruits[i]);
}
