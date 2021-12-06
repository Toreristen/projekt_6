//console.log("js linked");

const menuIcon = document.querySelector("#hamburger");
const menu = document.querySelector("#nav__menu");
const closeIcon = document.querySelector("#closeicon");

menu.style.visibility = "hidden";

function toggleMenu() {
    console.log("function works")
    
    if (menu.style.visibility === "hidden") {
        menu.classList.add("showMenu");
        menu.style.visibility = "visible";
        hamburger.style.display = "none";
        closeIcon.style.display = "initial";
    }
    else {
        menu.style.visibility = "hidden";
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        hamburger.style.display = "initial";
    }
}

menuIcon.addEventListener("click", toggleMenu);
closeIcon.addEventListener("click", toggleMenu);