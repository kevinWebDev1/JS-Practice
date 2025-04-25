//✅ 1. Basic Age check for Eligible for Vote
let age = 18;
if(age >= 18) {
    console.log("you can vote");
} else {
    console.log("You cannot vote")
}

//✅ 2. Multiple condition based on Marks
let mark = 80;
if(mark >= 90) console.log("Grade A");
else if(mark >= 75) console.log("Grade B");
else if(mark >= 60) console.log("Grade C");
else if(mark >= 40) console.log("Grade D");
else console.log("Fail");

//✅ 3. Logical Operators
let isStudent = true;
let hasId = false;

if(isStudent && hasId) console.log("Access Granted!");
else console.log("Access denied");

//✅ 4. Negation
let loggedIn = false;
if(!loggedIn) console.log("Please Login");

// Challenge: Cinema Ticket Booking System 🎬
// 👇 Create this logic:
// Variables:

// age (number)

// hasTicket (boolean)

// Rules:

// If age < 5 → "Not allowed"

// If age between 5 and 17 → "Child ticket"

// If age 18+ and has ticket → "Welcome to the cinema"

// If age 18+ but no ticket → "Please buy a ticket"

// Else → "Entry denied"

let personAge = 17;
let hasTicket = true;

if(personAge <= 5) console.log("Not allowed");
else if(personAge > 5 && personAge < 18) console.log("child ticket");
else if(personAge > 18 && hasTicket) console.log("Welcome to the cinema");
else if(personAge > 18 && !hasTicket) console.log("Please buy a ticket");
else console.log("Entry denied");

