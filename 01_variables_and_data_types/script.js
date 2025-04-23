// // variables-
// var a = 10; // old school - global scope with hoisting
// let b = 20; // modern - block scope
// const c = 30; // constant - block scope

// // DATA TYPES -
// // primitive:
// let name = "Ghost"; // string
// let age = 22; // number
// let isStudent = true; // boolean
// let score = null; // null
// let value; // undefined
// let symbol = Symbol("id"); // symbol

// // reference type:
// let hobbies = ["movies", "music"]; // array (index is reference here)
// let person = { name: "Ghost", age: 22 }; // object (key is reference here)

// // typeof operator
// console.log(typeof age );  // "number"

// 🎯 Mini Practice Task: Variables & Data Types
    // 📝 Task Name: "Ghost's Identity Card"

    let firstName = "Nitin";
    let lastName = "Rathour";
    const age = 22;
    let isStudent = true;
    const hobbies = ['music','typing','programming'];

    const identityCard = {
        name: firstName + " " + lastName,
        age: age,
        studentStatus: isStudent,
        hobbies: hobbies
    }

    console.log(identityCard.name);
    console.log(typeof identityCard.name)

    console.log(identityCard.age);
    console.log(typeof identityCard.age);

    console.log(identityCard.studentStatus);
    console.log(typeof identityCard.studentStatus);

    console.log(identityCard.hobbies);
    console.log(typeof identityCard.hobbies);