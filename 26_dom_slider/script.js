const src = [
  "images/img1.png",
  "images/img2.png",
  "images/img3.png",
  "images/img4.png",
  "images/img5.png",
];
const slider = document.querySelector("#slider");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const counter = document.querySelector("#counter");

let timer;
let index = 0;
slider.setAttribute("src", src[index]);
counter.textContent = `Image ${index + 1} of ${src.length}`;

next.addEventListener("click", () => {
  index = (index + 1) % src.length;

  slider.setAttribute("src", src[index]);
  counter.textContent = `Image ${index + 1} of ${src.length}`;
  resetTimer();
  next.disabled = true;
  setTimeout(() => (next.disabled = false), 500);
});

prev.addEventListener("click", () => {
  index = (index - 1 + src.length) % src.length;
  counter.textContent = `Image ${index + 1} of ${src.length}`;
  slider.setAttribute("src", src[index]);
  resetTimer();
  prev.disabled = true;
  setTimeout(() => (prev.disabled = false), 500);
});

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(() => {
    index = (index + 1) % src.length;
    slider.setAttribute("src", src[index]);
    counter.textContent = `Image ${index + 1} of ${src.length}`;
  }, 2000);
}
resetTimer();

slider.addEventListener("mouseenter", () => clearInterval(timer));
slider.addEventListener("mouseleave", resetTimer);
