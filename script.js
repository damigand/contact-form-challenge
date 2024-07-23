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
