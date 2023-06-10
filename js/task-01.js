function calcCategories(el) {
  const categoriesEl = document.querySelector("#categories");
  console.dir(categoriesEl);
  const childrenEls = categoriesEl.querySelectorAll(".item");
  console.log(childrenEls);
  console.log(`Number of categories: ${childrenEls.length}`);

  childrenEls.forEach((item) => {
    const titleEl = item.querySelector("h2").textContent;
    const numberOfCategories = item.querySelectorAll("li").length;

    console.log("Category: ", titleEl);
    console.log("Elements: ", numberOfCategories);
  });
  return el;
}

calcCategories();
