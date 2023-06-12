const fontSizeControlEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

fontSizeControlEl.addEventListener("input", onInputChange);

function onInputChange() {
  const fontSizeEl = fontSizeControlEl.value;
  textEl.style.fontSize = `${fontSizeEl}px`;
}
