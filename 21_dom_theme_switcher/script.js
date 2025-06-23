const canvas = document.querySelector("#canvas");
const themeSwitcher = document.querySelector("#theme-switcher");
const modeStatus = document.querySelector("#status");

if(canvas.classList.contains("light-theme")) {
    modeStatus.innerText = 'active mode: "light mode"';
    themeSwitcher.innerText = "🌙";
} else {
    modeStatus.innerText = 'active mode: "dark mode"';
    themeSwitcher.innerText = "🌞";
}


const setMode = (mode) => {
    modeStatus.innerText = `active mode : ${mode} mode`
    themeSwitcher.innerText = mode === "dark" ? "🌞" : "🌙"
}

themeSwitcher.addEventListener("click", () => {
  canvas.classList.toggle("dark-theme");

  setMode(canvas.classList.contains("dark-theme") ? "dark" : "light");
});
