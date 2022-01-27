// Variable que recoge los elementos con la clase "card"
var cards = document.querySelectorAll('.card');

// Funcion flip()
// Crea un efecto visual de volteo sobre la carta
function flipCard() {
    this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));