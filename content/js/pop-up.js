//Maria

let navn = document.getElementById('fname');
let efternavn = document.getElementById('lname');
let email = document.getElementById('email-input');
let emne = document.getElementById('topic');
let container = document.getElementById('pop-up-container');
let besked = 'Vi har modtaget din besked og vi vil vende tilbage til dig hurtigst muligt. Vi har sendt et kvittering på at beskeden er sendt til din email';


function msgConfirm() {


    if (navn.value.length == 0 && email.value.length == 0) {
        console.log("adganskode og email og bekræft er tom");
        container.style.display = "none"
        alert("tom")

    }
    else {
        container.style.display = "block"

    }
}


let closebotton = document.getElementById('close-btn1')

function closebtn() {
    container.style.display = "none"

}

/*    
    //let container = [navn, besked, email];
    
    console.log(container);
        
        container.style.display = "block";
    
    
    
        const menu = document.getElementById('pop-up-text');
    container.forEach((field)=> {
    
        menu.appendChild(createMenuItem(field));
    })
    
    
 
    
    function createMenuItem(field) {
        let p = document.createElement('p');
        p.classList.add("listItem_confirm");
        p.textContent = field;
        return p;
    
    };
    
    
    
    
         // if (navn.value.length == 0 && email.value.length == 0 && besked.value.length == false) {
            
        //     consol.log ('emt')
        // }
    
        // else ( navn.value.lenght < 2 && email.value.lenght < 2 && besked.value.length < 2 == true){
           
        //     consol.log ('works')
    
        // }
    
    
        let form = document.getElementById("form-contact");
    
    //function handleForm(event) {
         //event.preventDefault();
         //alert("yes") 
        //} 
    
    form.addEventListener('send', handleForm);
    
    */



