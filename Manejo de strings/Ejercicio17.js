/*Realizar la evolución del ejercicio anterior sin tener en cuenta si la letra pasada como parámetro esta en mayúsculas o 
minúsculas Hacer una función contadorDeLetras2 que reciba como parámetro de entrada dos cadenas de texto y una letra y devuelva la cadena de texto en la que dicha letra esta más presente. Utilizar para ello un bucle for. 
No tener en cuenta si la letra pasada como parámetro esta en mayúsculas o minúsculas.*/

/**
 * Devuelve la cadena con mayor numero de caracters.
 * @param {string} str 
 * @param {string} str2 
 * @param {string} lyrics 
 * @returns {string}
 */

function contadorDeLetras2(str, str2, lyrics) {
    let result = "";
    let num1 = 0;
    let num2 = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i).toLocaleLowerCase() === lyrics.toLocaleLowerCase()) {
            num1++;
        }
    }
    for (let i = 0; i < str2.length; i++) {
        if (str2.charAt(i).toLocaleLowerCase() === lyrics.toLocaleLowerCase()) {
            num2++;
        }
    }
    if (num1 > num2) {
        result = str;
    } else if (num2 > num1) {
        result = str2;
    } else {
        result = "Aparecen las mismas veces";
    }
    return result;
}

console.log(contadorDeLetras2("MadDre e fe", "eSToEs", "e"));
console.log(contadorDeLetras2("Emeye", "eSToEes", "e"));