// Kasper's Javascript

// variabler
const select = document.getElementById('select')
const classes = document.getElementsByClassName("program__card");

// array
const categories = ["sangaften", "foredrag", "hoejskoleophold", "vandretur", "grundlovsmoede", "udflugt"]

// function
function sortCategory() {

    // alert(select.value)

    switch (select.value) {

        case categories[0]:
            console.log(categories[0] + " er valgt ")

            checkClasses(categories[0])

            break;
            
        case categories[1]:
            console.log(categories[1] + " er valgt ")

            checkClasses(categories[1])
            // alert(cards[1].classList.contains("sang"))
            break;

        case categories[2]:
            console.log(categories[2] + " er valgt ")
            checkClasses(categories[2])
            break;

        case categories[3]:
            console.log(categories[3] + " er valgt ")
            checkClasses(categories[3])

            break;

        case categories[4]:
            console.log(categories[4] + " er valgt ")
            checkClasses(categories[4])

            break;

        case categories[5]:
            console.log(categories[5] + " er valgt ")
            checkClasses(categories[5])

            break;
            
        case "default":
            console.log("sat tilbage til default visning")
            checkClasses("program__card")
            break;

        default: alert("Fejl, ingen kategori valgt");
            // Hvis onChange() metoden bliver kørt uden at ramme nogen cases
            break;
    }

}

function checkClasses(parameter) {

    for (let i = 0; i < classes.length; i++) {
        if (classes[i].classList.contains(parameter)) {
            classes[i].style.display = "block"
        } else {
            classes[i].style.display = "none"
        }
        console.log(classes[i]);
    }

}

