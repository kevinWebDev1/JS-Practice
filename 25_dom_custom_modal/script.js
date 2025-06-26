const alertBtn = document.querySelector("#open");
const confirm = document.querySelector("#confirm");
const cancel = document.querySelector("#cancel");
const modal = document.querySelector("#modal");
const overlay = document.querySelector("#overlay");

alertBtn.addEventListener("click",() => overlay.classList.remove("hidden"));
confirm.addEventListener("click",() => {
    console.log("Confirm button clicked");
    overlay.classList.add("hidden");
});
cancel.addEventListener("click",() => {
    console.log("Cancel button clicked");
    overlay.classList.add("hidden");
});
modal.addEventListener("click",(e) => e.stopPropagation());
overlay.addEventListener("click",() => {
    console.log("Overlay clicked");
    overlay.classList.add("hidden");
});
