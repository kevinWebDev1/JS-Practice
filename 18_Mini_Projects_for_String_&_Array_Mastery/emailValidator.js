const email = "nitinrathour4810@gmail.com";


const emailValidator = (email) => {
    if(email.includes("@") && email.endsWith(".com") && !email.includes(" ")) {
        console.log(`${email} is a valid email`);
    } else {
        console.log(`${email} is not a valid email`)
    }
}

emailValidator(email);
