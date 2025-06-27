const userList = document.querySelector("#userList");
const fetchBtn = document.querySelector("#fetch");
const loader = document.querySelector("#loader");

const url = "https://randomuser.me/api/?results=5";

fetchBtn.addEventListener("click", () => {
    userList.innerHTML = "<p>Loading...</p>";
    userGetter();
});

function userGetter() {
    loader.classList.remove("hidden");
    userList.innerHTML = "";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      loader.classList.add("hidden");
      const userHTML = data.results.map(user => {
        return `
        <div class="card">
            <div class="profile">
                <img src="${user.picture.medium}">
            </div>
            <div class="profile-details">
                <p id="name">Name: ${user.name.title} ${user.name.first} ${user.name.last}</p>
                <p id="age">Age: ${user.dob.age}</p>
                <p id="email">Email: ${user.email}</p>
                <p id="location">Location: ${user.location.country}</p>
            </div>
        </div>
        `
      })

      userList.innerHTML = userHTML.join("");
      
      
    })
    .catch((error) => {
      // handle errors
      console.log(error);
    });
};
