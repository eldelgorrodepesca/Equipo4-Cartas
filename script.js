// Variable que recoge los elementos con la clase "card"
var cards = document.querySelectorAll('.card');


var cartaGirada = false;
var front;
var back;


// Funcion flip()
// Crea un efecto visual de volteo sobre la carta
function flip() {   
    this.classList.toggle('flip');

    /*
     mostrarCarta();
     ocultarCarta();
    //Funcion mostrar carta
function mostrarCarta() {
    if (!cartaGirada()){
        cartaGirada = true;
        front = this;
        console.log({front,back});

        } else {
             ocultarCarta();
        }     
}

//Funcion ocultar carta
function ocultarCarta() {
     if (cartaGirada = true()){
         cartaGirada = false;
             back = this;
             console.log({front,back});
            
     } else {
         mostrarCarta();

     }
   }*/


if (!cartaGirada){
    cartaGirada = true;
    front = this;
    console.log({front,back});

} else {
    cartaGirada = false;
    back = this;
    console.log({front,back});

    }
}


cards.forEach(card => card.addEventListener('click', flipCard));