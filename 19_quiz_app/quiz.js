const quiz = [
  {
    Question: "What is the Capital of India",
    options: ["Mumbai", "Delhi", "Banglore", "Chennai"],
    correctAnswer: 1,
  },
  {
    Question: "Which of the following is not a programming language",
    options: ["Java", "Python", "HTML", "English"],
    correctAnswer: 3,
  },
  {
    Question: "What is the largest planet in our solar system",
    options: ["Earth", "Saturn", "Jupiter", "Uranus"],
    correctAnswer: 2,
  },
  {
    Question: "What is the largest living species of lizard",
    options: ["Crocodile", "Snake", "Komodo Dragon", "Tiger"],
    correctAnswer: 2,
  },
];

const quizShuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

let score = 0;

const askQuestion = () => {
  const shuffledQuiz = quizShuffle(quiz);
  const total = shuffledQuiz.length;
  shuffledQuiz.forEach((qus, index) => {
    let options = "";
    qus.options.forEach((opt, i) => {
      options += `\n${i + 1}. ${opt}`;
    });

    const userInput = Number(
      prompt(`Q${index + 1} ${qus.Question} ${options}`)
    );

    const correctAnswer = qus.correctAnswer + 1;

    checkAnswer(userInput, correctAnswer, qus);
  });
  showResult(score, total);
};


const checkAnswer = (userInput, correctAnswer, qus) => {
  if (userInput < 1 || userInput > qus.options.length || isNaN(userInput)) {
    alert("Invalid option. Please select a valid number.");
    return;
  }
  if (userInput === correctAnswer) {
    alert("Correct!");
    score++;
  } else {
    alert(`Wrong! Correct answer was: ${qus.options[qus.correctAnswer]}`);
  }
};

const showResult = (score, total) => {
  console.log(`Final Score: ${score} / ${total}`);
};

askQuestion();
