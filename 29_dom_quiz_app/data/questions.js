export const questions = [
  {
    question: "What is the capital of India?",
    options: ["New Delhi", "Mumbai", "Chennai", "Bangalore"],
    correct: "New Delhi",
  },
  {
    question: "What is the largest mammal on Earth?",
    options: ["Elephant", "Lion", "Giraffe", "Blue Whale"],
    correct: "Blue Whale",
  },
  {
    question: "What is the smallest country in the world?",
    options: ["Vatican City", "Monaco", "Nauru", "Tuvalu"],
    correct: "Vatican City",
  },
  {
    question: "Which animal is known as the king of the jungle?",
    options: ["Lion", "Tiger", "Elephant", "Giraffe"],
    correct: "Lion",
  },
  {
    question: "What is the largest living species of lizard?",
    options: ["Crocodile", "Snake", "Komodo Dragon", "Tiger"],
    correct: "Komodo Dragon",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Saturn", "Jupiter", "Uranus"],
    correct: "Jupiter",
  },
  {
    question: "What is the process of converting water into ice called?",
    options: ["Melting", "Boiling", "Freezing", "Evaporation"],
    correct: "Freezing",
  },
  {
    question: "What is the largest state in India?",
    options: ["Uttar Pradesh", "Maharashtra", "Rajasthan", "Madhya Pradesh"],
    correct: "Rajasthan",
  },
  {
    question: "What is the national animal of India?",
    options: ["Lion", "Tiger", "Elephant", "Peacock"],
    correct: "Tiger",
  },
  {
    question: "What is the national flower of India?",
    options: ["Rose", "Lotus", "Sunflower", "Daisy"],
    correct: "Lotus",
  }
];

for (let i = questions.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [questions[i], questions[j]] = [questions[j], questions[i]];
}

