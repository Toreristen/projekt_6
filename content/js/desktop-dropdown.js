console.log("dropdown work");

/*const dropDownList = document.querySelector("");
const dropDownItem = document.querySelectorAll("");
const arrowIconUp = document.querySelector("");*/
const arrowIconDown = document.querySelector(".arrow-2");
//dropDownList.style.display = "none";
//arrowIconDown.style.display = "none";

function dropDownDesktop() {
    console.log("function 1 works")
    /*
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
    */
}

//arrowIconUp.addEventListener("click", dropDownDesktop);
arrowIconDown.addEventListener("click",dropDownDesktop);