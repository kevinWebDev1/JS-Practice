// Create an array of 5 secret words:
// let secretWords = ["ghost", "dragon", "ninja", "robot", "wizard"];
// Ask the user to guess one word (use prompt() for now).

// If their guess is in the array → You guessed it right!
// Else → Try again, wrong guess.

// Keep track of correct guess count in a variable (for extra feature).

let secretWords = ["ghost", "dragon", "ninja", "robot", "wizard"];
let guessWord = prompt("Guess From : ghost, dragon, ninja, robot, wizard");
let correctGuessCount = 0;
let randomWord = secretWords[(Math.floor((Math.random() * 10) % 5))];
console.log(randomWord)

if(guessWord === randomWord) {
    console.log('✅ You guessed it right!', randomWord);
    correctGuessCount++
} else console.log("Wrong Guess, Try again !");


console.log("correctGuessCount ::>", correctGuessCount);
