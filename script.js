const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");
const passwordErrorMsg = document.querySelector(".password-error");
const phoneNumberInput = document.querySelector("#phone-number");

const rootStyles = getComputedStyle(document.documentElement);
const invalidColor = "#C62E2E";
const validColor = "#8EB486";

function checkRequiredCharacters(event) {
    document.querySelectorAll("li").forEach(item => item.style.display = "block");
    const eventString = event.target.value;

    const hasUppercase = /[A-Z]/.test(eventString);
    const hasLowercase = /[a-z]/.test(eventString);
    const hasNumber = /\d/.test(eventString);
    const hasSpecialChar = /[^A-Za-z0-9]/.test(eventString);

    if(!hasUppercase) {
        document.querySelector(".uppercase").style.color = invalidColor;
        document.querySelector(".uppercase-wording").innerHTML = "Does not contain";
    } else {
        document.querySelector(".uppercase").style.color = validColor;
        document.querySelector(".uppercase-wording").innerHTML = "Contains";
    }

    if(!hasLowercase) {
        document.querySelector(".lowercase").style.color = invalidColor;
        document.querySelector(".lowercase-wording").innerHTML = "Does not contain";
    } else {
        document.querySelector(".lowercase").style.color = validColor;
        document.querySelector(".lowercase-wording").innerHTML = "Contains";
    }

    if(!hasNumber) {
        document.querySelector(".number").style.color = invalidColor;
        document.querySelector(".number-wording").innerHTML = "Does not contain";
    } else {
        document.querySelector(".number").style.color = validColor;
        document.querySelector(".number-wording").innerHTML = "Contains";
    }

    if(!hasSpecialChar) {
        document.querySelector(".special-char").style.color = invalidColor;
        document.querySelector(".special-wording").innerHTML = "Does not contain";
    } else {
        document.querySelector(".special-char").style.color = validColor;
        document.querySelector(".special-wording").innerHTML = "Contains";
    }
}

function checkPasswordsMatch(event) {

    if(event.target.value !== passwordInput.value || event.target.value !== confirmPasswordInput.value) {
        confirmPasswordInput.style.borderColor = invalidColor;
        passwordInput.style.borderColor = invalidColor;
        passwordErrorMsg.style.display = "block";
        passwordErrorMsg.style.color = invalidColor;
    }
    if(event.target.value === passwordInput.value && event.target.value === confirmPasswordInput.value && event.target.value !== "") {
        event.target.style.borderColor = validColor;
        passwordInput.style.borderColor = validColor;
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

passwordInput.addEventListener("input", e => {
    checkPasswordsMatch(e);
    checkRequiredCharacters(e);
});
confirmPasswordInput.addEventListener("input", checkPasswordsMatch);
phoneNumberInput.addEventListener("input", autoFormatNumber);


