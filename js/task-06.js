const inputEl = document.querySelector("#validation-input");
console.log(inputEl);
const onputLength = Number(inputEl.dataset.length);
console.log(onputLength);

inputEl.addEventListener("blur", (event) => {
    if (onputLength === event.currentTarget.length) {
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");
    } else {
        inputEl.classList.add("invalid");
       
    }
});


