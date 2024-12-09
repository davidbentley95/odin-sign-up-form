const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");
const passwordErrorMsg = document.querySelector(".password-error");
const phoneNumberInput = document.querySelector("#phone-number");

function checkPassword(event) {

    if(event.target.value !== passwordInput.value) {
        event.target.style.borderColor = "#C62E2E";
        passwordInput.style.borderColor = "#C62E2E";
        passwordErrorMsg.style.display = "block";
        passwordErrorMsg.style.color = "#C62E2E";
    }
    if(event.target.value === passwordInput.value) {
        event.target.style.borderColor = "#8EB486";
        passwordInput.style.borderColor = "#8EB486";
        passwordErrorMsg.style.display = "none";
    }
}

function autoFormatNumber(event) {
    console.log(event.target.value.length)

    let numberStringArray = event.target.value.split("");

    if(event.target.value.length === 10 & !numberStringArray.includes("-")) {
        numberStringArray.splice(3,0,"-");
        numberStringArray.splice(7,0,"-")
        phoneNumberInput.value = numberStringArray.join("");
    }
}

passwordInput.addEventListener("input", checkPassword);
confirmPasswordInput.addEventListener("input", checkPassword);
phoneNumberInput.addEventListener("input", autoFormatNumber);


