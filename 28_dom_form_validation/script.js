const fullName = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const cpassword = document.querySelector("#cpassword");
const passIcon = document.querySelector("#pass-icon");

const errorName = document.querySelector("#error-name");
const errorEmail = document.querySelector("#error-email");
const errorPassword = document.querySelector("#error-password");
const errorCPassword = document.querySelector("#error-cpassword");

const form = document.querySelector("#form");
const submit = document.querySelector("#submit");

submit.disabled = true;

let timer = "";

const formState = {
  name: false,
  email: false,
  password: false,
  confirm: false,
};

fullName.addEventListener("input", () =>
  debounce(nameValidator, 500)
);

email.addEventListener("input", () =>
  debounce(emailValidator, 1000)
);

password.addEventListener("input", () =>
  debounce(passwordValidator, 1000)
);

cpassword.addEventListener("input", () =>
  debounce(cPassValidator, 1000)
);

passIcon.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    passIcon.textContent = "👁️";
    passIcon.setAttribute("title", "hide");
  } else {
    password.type = "password";
    passIcon.textContent = "🔒";
    passIcon.setAttribute("title", "show");
  }
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  alert("Form submitted successfully ✅");

  form.reset();
  submit.disabled = true;

  Object.keys(formState).forEach((key) => (formState[key] = false));
});

function nameValidator() {
  const name = fullName.value.trim();

  if (name.length < 3) {
    errorName.textContent = "(min 3 letters)";
    formState.name = false;
  } else {
    errorName.textContent = "";
    formState.name = true;
  }

  checkFormValidity();
}


function emailValidator() {
  const regex =
    /^(?!.*[.]{2})(?![.-])[a-zA-Z0-9][\w.-]*[a-zA-Z0-9]@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
  const condition = regex.test(email.value);

  if (!condition) {
    errorEmail.textContent = "(invalid email)";
    formState.email = false;
  } else {
    errorEmail.textContent = "";
    formState.email = true;
  }
  checkFormValidity();
}

function passwordValidator() {
  const regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[@#!$&.]).{8,}/;
  const condition = regex.test(password.value);

  if (cpassword.value.length) {
    cPassValidator();
  }

  if (!condition) {
    errorPassword.textContent =
      "Password must be 8+ chars with uppercase, lowercase, number, special char";
    formState.password = false;
  } else {
    errorPassword.textContent = "";
    formState.password = condition;
  }

  checkFormValidity();
}
function cPassValidator() {
  const condition = cpassword.value === password.value;

  if (!condition) {
    errorCPassword.textContent = "(passwords do not match)";
    formState.confirm = false;
  } else {
    errorCPassword.textContent = "";
    formState.confirm = true;
  }
  checkFormValidity();
}

const debounce = (() => {
  let timeout;
  return (func, delay) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, delay);
  };
})();


const checkFormValidity = () => {
  if (
    formState.name &&
    formState.email &&
    formState.password &&
    formState.confirm
  ) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
}
