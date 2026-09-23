//Hacer una función crearPalabra que reciba como parámetro de entrada una letra y un número y genere una nueva palabra que tenga la letra introducida repetida tantas veces como indique el número.

function crearPalbra(lyrics, num) {
    return lyrics.repeat(num);
}

console.log(crearPalbra("j", 3));