const textarea = document.querySelector("#textarea");
const counter = document.querySelector("#count");
const bar = document.querySelector("#bar");

let count = 0;
const max = 100;
textarea.setAttribute("maxLength", max);

counter.textContent = `Characters: ${count} / 100`;

textarea.addEventListener("input", () => {
  count = textarea.value.length;
  counter.textContent = `Characters: ${count} / 100`;
  bar.style.width = 25 + count + "px";
  bar.textContent = count + "%";
  
  if (count >= max) {
    counter.textContent += " - Limit Reached";
    counter.style.color = "red";
  } else {
    counter.style.color = "black";
  }
});
