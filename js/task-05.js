const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("span");

console.log(inputRef);
console.log(outputRef);

inputRef.addEventListener("input", onInput);

function onInput(evt) {
  console.log(evt.currentTarget.value);
  outputRef.textContent = evt.currentTarget.value;
}
