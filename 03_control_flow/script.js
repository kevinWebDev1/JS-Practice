// Simple Age Checker
let age = 17;

if(age >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote");
}

// Grading System
let marks = 75;

if(marks >= 90) {
    console.log("Grade A");
} else if(marks >=75) {
    console.log("Grade B");
} else if(marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail")
}

// Day of the Week – switch
let day = 3;
switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednessday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default: console.log("Invalid day");
}