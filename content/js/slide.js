let slideIndex = 0;
let images = ["img/danni2.png", "img/danni3.png", "img/danni7.png"];
let image = document.getElementById("slider");
let interval = setInterval(current, 5000);

function nexte() {
    image.src = images[slideIndex++];

    if (slideIndex == images.length + 1) {

        window.location.reload(false);
    }

}

function prev() {
    image.src = images[slideIndex--];
    if (slideIndex == 0) {
        slideIndex = image.length;
    }
}


function current() {
    image.src = images[slideIndex];
    slideIndex++;
    slideIndex = slideIndex % images.length;


}

current();