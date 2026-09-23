//Hacer una función tieneLetra que reciba como parámetro de entrada una cadena de texto y una letra y devuelva true si la letra esta presente en la palabra y false si no lo esta. Utilizar para ello el método indexOf.

function tieneLetra(str, lyrics) {
    let result = false;
    if (str.indexOf(lyrics) >= 0) {
        result = true;
    }
    return result;
}

console.log(tieneLetra("Javier", "r"));
console.log(tieneLetra("Javier", "m"));