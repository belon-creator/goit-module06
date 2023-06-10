const validationInput = document.querySelector("#validation-input");

const dataLength = validationInput.dataset.length;
console.log(dataLength);

validationInput.addEventListener("input", () => {
  const inputValue = validationInput.value;

  if (inputValue.length === Number(dataLength)) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
