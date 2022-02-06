// Variable que recoge los elementos con la clase "card"
var cards = document.querySelectorAll('.card');


var cartaGirada = false;
var front;
var back;


// Funcion flip()
// Crea un efecto visual de volteo sobre la carta
function flip() {
    this.classList.toggle('flip');


    //Cambia los valores booleanos de cartaGirada para poder identificar con cada click cuando esta girada o tapada    
    if (!cartaGirada) {
        cartaGirada = true;
        front = this;
    } else {

        cartaGirada = false;
        back = this;

    }

}
cards.forEach(card => card.addEventListener('click', flip));

//Funcion ocultar carta que elimina el flip despues de 2000 milisegundos
function ocultarCarta() {
    setTimeout(() => {
        front.classList.remove('flip');
        back.classList.remove('flip');
    }, 1000);
}



/*mezcla las cartas ,cada posicion de ellas obtine un numero del 1-8 y se mezclan*/
function mezclar() {
    cards.forEach(card => {
        let posAleatoria = Math.floor(Math.random() * 8);
        card.style.order = posAleatoria;
    })

}

function juegoFinalizado() {
    if (puntos = 4) {
        alert("Ha ganado enhorabuena");
    }
}

/*La funcion para reiniciar el juego se usa en location.reload() ,luego en el body de board.html esta onload=" mezclar()" para que las mezcle
despues de refrescar la pagina*/