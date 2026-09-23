//Completar el ejercicio anterior haciendo que en la nueva palabra generada las letras esten en mayúsculas.

function crearPalbra(lyrics, num) {
    return lyrics.repeat(num).toLocaleUpperCase();
}

console.log(crearPalbra("j", 3));