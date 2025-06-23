const counter = document.getElementById("counter");

const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");

let count = 0;

counter.innerHTML = count;

increase.addEventListener("click", () => {
  count++;
  counter.innerHTML = count;
  updateDisplay();
});
decrease.addEventListener("click", () => {
  count--;
  counter.innerHTML = count;
  updateDisplay();
});
reset.addEventListener("click", () => {
  count = 0;
  counter.innerHTML = count;
  updateDisplay();
});

const updateDisplay = () => {
  if (count > 0) {
    counter.style.color = "green";
  } else if (count < 0) {
    counter.style.color = "red";
  } else {
    counter.style.color = "black";
  }
};
