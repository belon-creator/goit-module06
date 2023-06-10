const refs = {
  incrementBtn: document.querySelector('button[data-action="increment"]'),
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  valueEl: document.querySelector("#value"),
};
console.log(refs.incrementBtn);
console.log(refs.decrementBtn);
console.log(refs.valueEl);

refs.incrementBtn.addEventListener("click", () => {
  refs.valueEl.textContent = Number(refs.valueEl.textContent) + 1;
});

refs.decrementBtn.addEventListener("click", () => {
  refs.valueEl.textContent = Number(refs.valueEl.textContent) - 1;
});
