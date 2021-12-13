

let select = document.getElementById('select')
let cards = document.getElementsByClassName('program__card')

const categories = ["sangaften", "foredrag", "hoejskoleophold", "vandretur", "grundlovsmoede", "udflugt"]

var classes = document.getElementsByClassName("program__card");


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
            alert(categories[2] + " er valgt ")

            break;
        case categories[3]:
            alert(categories[3] + " er valgt ")

            break;
        case categories[4]:
            alert(categories[4] + " er valgt ")

            break;
        case categories[5]:
            alert(categories[5] + " er valgt")

            break;
        case "default":
            checkClasses("program__card")
            console.log("sat tilbage til default visning")
            break;

        default: alert("Fejl, ingen kategori valgt");
            // Hvis onChange() metoden bliver kørt uden at ramme nogen cases
            break;
    }

}

function checkClasses(parameter) {

    for (var i = 0; i < classes.length; i++) {
        console.log(classes[i]);
        if (classes[i].classList.contains(parameter)) {
            classes[i].style.display = "block"
        } else {
            classes[i].style.display = "none"
        }
    }

}


