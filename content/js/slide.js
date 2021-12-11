let slideIndex = 0;
let images = ["./content/img/klima.jpg", "./content/img/pandemier.jpg", "./content/img/sangaften.jpg"];
let dotColor = ["#eaf4f4", "#6b9080"];
let image = document.getElementById("slider");

let eventHeading = ["Sang aften", "Klimaet i fremtiden", "Pandemier"];
let eventBodytext = ["Oplev en hyggelig sangaften med\n Jørgen Carlsen d.15/9",
    "Oplev et fordrag med Jesper Theilgaard\n om den fremtidig klimasituation."
    , "Oplev et foredrag med Hans Jørn Kolmos \n omkring pandemier."
];

const dot1 = document.getElementById("dot1");
const dot2 = document.getElementById("dot2");
const dot3 = document.getElementById("dot3");

let heading = document.getElementById("slideshow_heading");
let bodytext = document.getElementById("slideshow_bodytext");

let interval = setInterval(current, 5000);


function slideOne() {
    heading.innerHTML = eventHeading[0];
    bodytext.innerHTML = eventBodytext[0];
    dot1.style.background = dotColor[1];
    dot2.style.background = dotColor[0];
    dot3.style.background = dotColor[0];
    clearInterval(interval);
    interval = setInterval(current, 5000);
}

function slideTwo() {
    heading.innerHTML = eventHeading[1];
    bodytext.innerHTML = eventBodytext[1];
    dot1.style.background = dotColor[0];
    dot2.style.background = dotColor[1];
    dot3.style.background = dotColor[0];
    clearInterval(interval);
    interval = setInterval(current, 5000);


}


function slideThree() {
    heading.innerHTML = eventHeading[2];
    bodytext.innerHTML = eventBodytext[2];
    dot1.style.background = dotColor[0];
    dot2.style.background = dotColor[0];
    dot3.style.background = dotColor[1];
    clearInterval(interval);
    interval = setInterval(current, 5000);


}

function firstDot() {
    image.src = images[2];
    console.log("1");
    slideOne();
}


function secondDot() {
    image.src = images[0];
    console.log("2");
    slideTwo();
}


function thirdDot() {
    image.src = images[1];
    console.log("3");
    slideThree();
}


function descriptionDotsChange() {
    if (slideIndex == 0) {
        slideOne();
    }
    else if (slideIndex == 1) {
        slideTwo()
    }
    else if (slideIndex == 2) {
        slideThree();
    }
}

function current() {
    image.src = images[slideIndex];
    slideIndex++;
    slideIndex = slideIndex % images.length;
    console.log(1 % 2)


    dot1.style.transition = "0.5s";
    dot2.style.transition = "0.5s";
    dot3.style.transition = "0.5s";
    descriptionDotsChange();
}

current();

for (let i = 0; i < dotColor.length; i++) {
    console.log(dotColor[i]);
}

