const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");
console.log(inputEl);
console.log(spanEl);

inputEl.addEventListener('input', fontSizeContrEl);
function fontSizeContrEl(event) {
    spanEl.style.fontSize = `${event.currentTarget.value}px`;
}