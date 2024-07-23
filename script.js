const generalRadio = document.querySelector("#general");
const supportRadio = document.querySelector("#support");

generalRadio.addEventListener("click", (event) => {
    if (generalRadio.checked == true) {
        generalRadio.parentElement.classList.add("selected");
        supportRadio.parentElement.classList.remove("selected");
    } else {
        generalRadio.parentElement.classList.remove("selected");
    }
});

supportRadio.addEventListener("click", (event) => {
    if (supportRadio.checked == true) {
        supportRadio.parentElement.classList.add("selected");
        generalRadio.parentElement.classList.remove("selected");
    } else {
        supportRadio.parentElement.classList.remove("selected");
    }
});

const form = document.querySelector("#form");

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    var errorState = false;

    //Get all inputs and their error messages
    const nameInput = document.querySelector("#name").value;
    const nameError = document.querySelector("#name-error");

    const lastNameInput = document.querySelector("#lastname").value;
    const lastNameError = document.querySelector("#lastname-error");

    const emailInput = document.querySelector("#email").value;
    const emailError = document.querySelector("#email-error");
    const emailValid = document.querySelector("#email-valid");

    const queryElement = document.querySelector("input[name='query']:checked");
    const queryInput = queryElement ? queryElement.value : undefined;
    const queryError = document.querySelector("#query-error");

    const messageInput = document.querySelector("#message").value;
    const messageError = document.querySelector("#message-error");

    const consentInput = document.querySelector("#consent").checked;
    const consentError = document.querySelector("#consent-error");

    //check inputs and show their respective errors if empty / invalid
    if (!nameInput) {
        nameError.style.display = "block";
        errorState = true;
    } else {
        nameError.style.display = "none";
    }

    if (!lastNameInput) {
        lastNameError.style.display = "block";
        errorState = true;
    } else {
        lastNameError.style.display = "none";
    }

    if (!emailInput) {
        emailError.style.display = "block";
        errorState = true;
    } else {
        emailError.style.display = "none";

        var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (!emailInput.match(pattern)) {
            errorState = true;
            emailValid.style.display = "block";
        } else {
            emailValid.style.display = "none";
        }
    }

    if (!queryInput) {
        queryError.style.display = "block";
        errorState = true;
    } else {
        queryError.style.display = "none";
    }

    if (!messageInput) {
        messageError.style.display = "block";
        errorState = true;
    } else {
        messageError.style.display = "none";
    }

    if (!consentInput) {
        consentError.style.display = "block";
        errorState = true;
    } else {
        consentError.style.display = "none";
    }

    if (!errorState) {
        successToast();
    }
}

var isToast = false;

async function successToast() {
    const toast = document.querySelector(".toast");
    if (toast && !isToast) {
        isToast = true;
        toast.classList.add("success");
        await new Promise((r) => setTimeout(r, 2500));
        toast.classList.remove("success");
        isToast = false;
    }
}
