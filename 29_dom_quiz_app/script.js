import { questions } from "./data/questions.js";

/* ========================
   DOM Elements
   ======================== */
const body = document.querySelector("body");
const modeToggle = document.querySelector("#mode");
const modeImg = document.querySelector("#mode img");
const quizContainer = document.querySelector("#quiz-container");
const nextBtn = document.querySelector("#next-btn");
const questionProgress = document.querySelector(".question-progress");
const countdown = document.querySelector(".countdown");

// ========================
// App State
// ========================
let currentIndex = 0;
let scored = 0;
let isLightMode = false;
let timer = 20;
let timerInterval;

// ========================
// Initialization
// ========================
window.onload = () => startQuiz(currentIndex);
modeToggle.addEventListener("click", toggleMode);

// ========================
// Mode Switch
// ========================
function toggleMode() {
  body.classList.toggle("light-mode");
  modeToggle.classList.remove("animate-on", "animate-off");
  void mode.offsetWidth;

  if (!isLightMode) {
    modeToggle.classList.add("animate-on");
    modeImg.src = "img/day.jpg";
  } else {
    modeToggle.classList.add("animate-off");
    modeImg.src = "img/night.jpg";
  }

  isLightMode = !isLightMode;
}

// ========================
// Quiz Flow
// ========================
function startQuiz(index) {
  const container = document.querySelector("#quiz-container");

  const q = questions[index];
  const qusNo = index + 1;

  container.innerHTML = `
        <h2 id="qus">Q${qusNo}. ${q.question}</h2>
        <ul id="opt-list">
            ${q.options.map((opt) => `<li class="opt">${opt}</li>`).join("")}
        </ul>
    `;

  // Update Progress
  updateProgress(index);

  // Handle Options
  const options = document.querySelectorAll(".opt");
  handleOptionClick(options, q);

  // Setup Next Button
  nextBtn.classList.add("disable");

  // Start Timer
  resetTimer();
  startTimer();
}
// Next Button EventListener
nextBtn.addEventListener("click", () => {
  if (nextBtn.textContent === "Finish") {
    showResult(scored, questions.length);
  } else {
    nextQuestion();
  }
});

function nextQuestion() {
  currentIndex++;
  if (currentIndex < questions.length) {
    startQuiz(currentIndex);
  } else {
    showResult(scored, questions.length);
  }
}


// ========================
// Option Handling
// ========================
function handleOptionClick(optionList, question) {
  optionList.forEach((option) =>
    option.addEventListener("click", (e) => {
      nextBtn.classList.remove("disable"); // Enable next
      freezeTimer();

      const selected = e.target;
      const correctAnswer = question.correct;

      // Disable next click
      optionList.forEach((opt) => opt.classList.add("disable"));

      // Mark correctness
      if (selected.textContent === correctAnswer) {
        selected.classList.add("correct");
        scored++;
      } else {
        selected.classList.add("wrong");
      }

      // Show correct answer
      optionList.forEach((opt) => {
        if (opt.textContent === correctAnswer) {
          opt.classList.add("correct");
        }
      });

      if (currentIndex === questions.length - 1) {
        nextBtn.textContent = "Finish";
      }
    })
  );
}

// ========================
// Timer Logic
// ========================
function startTimer() {
  countdown.textContent = timer;
  timerInterval = setInterval(() => {
    timer--;
    countdown.textContent = timer;

    if (timer === 0) {
      freezeTimer();
      nextQuestion();
    }
  }, 1000); // 1 second
}


function resetTimer() {
  clearInterval(timerInterval);
  timer = 20;
  countdown.textContent = timer;
}

const freezeTimer = () => {
  clearInterval(timerInterval);
};

// ========================
// Result + Feedback
// ========================
function scoreFeedback(score, total) {
  const percent = (score * 100) / total;
  if (percent < 40) return "Low 😕 — Keep practicing!";
  if (percent < 70) return "Medium 😌 — You're getting there!";
  if (percent < 100) return "Almost! 😄 — So close to perfect!";
  return "100% — Perfect score!";
}

const showResult = (score, totalScore) => {
  const card = document.querySelector(".card");

  card.innerHTML = `
    <div class="resultScreen">
        <h1 class="score">${score} / ${questions.length}</h1>
        <p class="scoreFeedback">${scoreFeedback(scored, questions.length)}</p>
        <button class="restart">Restart</button>
    </div>
    `;

  document.querySelector(".restart").addEventListener("click", () => {
    window.location.reload();
  });
};

function updateProgress(index) {
  const total = questions.length;
  questionProgress.textContent = `${index + 1} / ${total} question${total > 1 ? 's' : ''}`;
}

