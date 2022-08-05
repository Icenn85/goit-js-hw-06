const formEl = document.querySelector(".login-form");
console.log(formEl);

formEl.addEventListener("submit", onSubBtn);

function onSubBtn (event) {
    event.preventDefault();

    const {
        elements:
        { email,
          password },
    } = event.currentTarget;


    if (email.value === "" || password.value === "") {
      return alert("All the fields must be filled!");
    }
    console.log(`Email: ${email.value}, Password: ${password.value}`); 

    event.currentTarget.reset();

}
