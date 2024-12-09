const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");
const passwordErrorMsg = document.querySelector(".password-error");

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

passwordInput.addEventListener("input", checkPassword);
confirmPasswordInput.addEventListener("input", checkPassword);

