/*============================== VARIABLES ==============================*/

var cards = document.querySelectorAll('.card'); // recoge los elementos con la clase "card"
var cartaGirada = false; // indica el estado de la carta
var front, back; // partes de la carta
var minutes = 2;
var seconds = 0;

/*================================= FLIP =================================*/

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
cards.forEach(card => card.addEventListener('click', flip)); // genera el efecto sobre las cartas

/*============================== OCULTAR ==============================*/

//Funcion ocultar carta que elimina el flip despues de 2000 milisegundos
function ocultarCarta() {
    setTimeout(() => {
        front.classList.remove('flip');
        back.classList.remove('flip');
    }, 1000);
}


/*============================ MECLAR CARTAS ===========================*/

/*mezcla las cartas ,cada posicion de ellas obtine un numero del 1-8 y se mezclan*/
function mezclar() {
    cards.forEach(card => {
        let posAleatoria = Math.floor(Math.random() * 8);
        card.style.order = posAleatoria;
    })
}

/*============================== FINALIZAR ==============================*/

function juegoFinalizado() {
    // caso en que llegue a conseguir el maximo de puntos
    if (puntos = 4) {
        alert("Ha ganado enhorabuena");
    }
}

/*============================== REINICIAR ==============================*/

/*La funcion para reiniciar el juego se usa en location.reload() ,luego en el body de board.html esta onload=" mezclar()" para que las mezcle
despues de refrescar la pagina*/

/*============================== CRONOMETRO ==============================*/

// llama a la funcion del segundero que incluye la del minutero y el stop
secondHand();

// funcion que explica el funcionamiento del segundero
function secondHand() {
    let changeSeconds; // variable que sustituira a los segundos

    if (seconds < 0) {
        // Caso para cuando los segundos sean menores que 0
        seconds = 59;
    }

    if (seconds < 10) {
        // Caso para cuando los segundos sean menores que 10
        changeSeconds = "0" + seconds;
    } else {
        changeSeconds = seconds;
    }

    // sustituye a los segundos y los imprime
    document.getElementById("seconds").innerHTML = changeSeconds;
    seconds--;

    // llama al minutero y para el juego
    minuteHand(seconds);
    stopTime(minutes, seconds);
}

// funcion que explica el funcionamiento del minutero
function minuteHand(seconds) {
    let changeMinutes; // variable que sustituira a los minutos

    if (seconds <= -1 && minutes !== 0) {
        // caso en el que los minutos y segundos sean menores que 0 
        setTimeout(() => {
            minutes--;
        }, 500);
    }

    if (minutes < 10) {
        // Caso para cuando los minutes sean menores que 10
        changeMinutes = "0" + minutes;
    } else {
        changeMinutes = minutes;
    }

    // sustituye e imprime los minutos
    document.getElementById("minutes").innerHTML = changeMinutes;
}

setInterval(secondHand, 1000); // intervalo de tiempo del cronometro

// funcion encargada de parar el juego
function stopTime(minutes, seconds) {
    // caso en el que se acabe el tiempo
    if (minutes == 0 && seconds == 0) {
        alert('Se acabó tu tiempo!!');
        window.location = "index.html"; // redirige al inicio
    }
}