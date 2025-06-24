const input = document.querySelector("#input") 
const icon = document.querySelector("#icon") 

icon.addEventListener("click", () => {
    if(input.getAttribute("type") === "password") {
        input.setAttribute("type","text");
        icon.innerText = "👁️";
        icon.setAttribute("title", "Hide Password");
    } else {
        input.setAttribute("type","password");
        icon.innerText = "🔒";
        icon.setAttribute("title", "Show Password");
    }
})

