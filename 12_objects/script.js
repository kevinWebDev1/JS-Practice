//✅ 1. Create an Object
const student = {
    name: "Kevin",
    age: 21,
    course: "JavaScript",
    isEnrolled: true
}
console.log(student.name); // Dot notation
console.log(student["age"]); // Bracket notation

//✅ 2. // Add and update Properties
student.grade = "A";
student.age = 22;

//✅ 3. Loop through an Object
for(let key in student) {
    console.log("key ::>", student[key]);
}

//✅ 4. Nested Object
let person = {
    name: "Ghost",
    address: {
        city: "Hardoi",
        pincode: 241001
    }
}

//✅ 5. 