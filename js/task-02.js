const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredListEl = document.querySelector("#ingredients");

const ingredItemEl = ingredients.map((ingredients) => {
  const createItem = document.createElement("li");
  createItem.textContent = ingredients;
  createItem.classList.add("item");
  return createItem;
});

ingredListEl.append(...ingredItemEl);

console.log(ingredListEl);

