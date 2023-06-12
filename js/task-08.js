const loginForm = document.querySelector(".login-form");
console.dir(loginForm);

loginForm.addEventListener("submit", onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  const formElement = evt.currentTarget.elements;

  const { email, password } = formElement;

  const userData = {
    mail: email.value,
    pwd: password.value,
  };

  if (!email.value || !password.value) {
    alert("Fill in all the fields");
  } else {
    console.log(userData);
    this.reset();
  }
}
