const decremButEl = document.querySelector('[data-action="decrement"]');
console.log(decremButEl);

const incremButEl = document.querySelector('[data-action="increment"]');
console.log(incremButEl);

const butValueEl = document.querySelector(`#value`);
console.log(butValueEl);

let counterValue = 0;

decremButEl.addEventListener('click', () => {
    counterValue -= 1;
    butValueEl.textContent = counterValue;
});

incremButEl.addEventListener("click", () => {
    counterValue += 1;
    butValueEl.textContent = counterValue;
});