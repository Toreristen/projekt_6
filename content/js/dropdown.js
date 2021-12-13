//Made by Tore
console.log("dropdown link");


const dropDownList = document.querySelector(".nav__dropdown")
const dropDownItem = document.querySelectorAll(".nav__dropdown-item");
const arrowIconUp = document.querySelector(".nav__dropdown-arrow");
const arrowIconDown = document.querySelector(".nav__dropdown-arrow-2");
dropDownList.style.display = "none";
arrowIconDown.style.display = "none";

function dropDown() {
    if (dropDownList.style.display == "none") {
        dropDownList.style.display = "initial";
        arrowIconUp.style.display = "none";
        arrowIconDown.style.display = "initial";
        dropDownList.classList.remove("show__dropdown");

    } else {
        dropDownList.style.display = "none";
        arrowIconUp.style.display = "initial";
        arrowIconDown.style.display = "none";
        dropDownList.classList.add("show__dropdown");
    }
}

arrowIconUp.addEventListener("click", dropDown);
arrowIconDown.addEventListener("click",dropDown);