const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingridientList = document.querySelector("#ingredients");

ingredients.forEach((ingridient) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = `${ingridient}`;
  itemEl.classList.add("item");
  ingridientList.appendChild(itemEl);
});
