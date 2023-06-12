const changeColorBtnEl = document.querySelector(".change-color");
console.log(changeColorBtnEl);
const colorInViewport = document.querySelector(".color");
console.log(colorInViewport);
changeColorBtnEl.addEventListener("click", changeColor);

function changeColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
  colorInViewport.textContent = randomColor;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
