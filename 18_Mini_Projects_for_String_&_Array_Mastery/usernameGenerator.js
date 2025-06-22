const fullName = "Rahul Gaur";

// first 3 letters of first name + last 3 letters of last name
// all lowercase
// random number between 10–99

usernameGenerator = (fullName) => {
    const firstThree = fullName.toLowerCase().slice(0,3);
    const lastThree = fullName.toLowerCase().slice(-3,);
    const randomNumber = Math.floor((Math.random() * 90) + 10)

    return firstThree + lastThree + randomNumber;
}

console.log("username ::>", usernameGenerator(fullName));
