//console.log("js linked");

const menuIcon = document.querySelector("#hamburger");
const menu = document.querySelector("#nav__menu");
const closeIcon = document.querySelector("#closeicon");
const programmeIcon = document.querySelector("#program-icon");
const signUpIcon = document.querySelector("#signup-icon");

menu.style.visibility = "hidden";

function toggleMenu() {
    //console.log("function works")
    
    if (menu.style.visibility === "hidden") {
        menu.classList.add("showMenu");
        menu.style.visibility = "visible";
        hamburger.style.display = "none";
        closeIcon.style.display = "initial";
        programmeIcon.style.display = "none";
        signUpIcon.style.display = "none";
        menu.classList.add("show__menu")
    }
    else {
        menu.style.visibility = "hidden";
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        hamburger.style.display = "initial";
        programmeIcon.style.display = "initial";
        signUpIcon.style.display = "initial";
        menu.classList.remove("show__menu")
    }
}

menuIcon.addEventListener("click", toggleMenu);
closeIcon.addEventListener("click", toggleMenu);