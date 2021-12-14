//Made by Tore
console.log("dropdown work");

const dropDownList2 = document.querySelector(".nav-dt__dropdown-arrow-2-list");

const arrowIconDown2 = document.querySelector(".arrow-2");
dropDownList2.style.display = "none";

function dropDownDesktop() {
    console.log("function 1 works")
    
    if (dropDownList2.style.display === "none") {
        dropDownList2.style.display = "flex";
    } else {
        dropDownList2.style.display = "none";
    }
}

arrowIconDown2.addEventListener("click",dropDownDesktop);