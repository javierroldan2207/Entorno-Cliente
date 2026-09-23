//Hacer una función contadorDeLetras que reciba como parámetro de entrada una cadena de texto y una letra y devuelva el número de veces que esa letra esta presente en la palabra. Utilizar para ello un bucle for.

function contadorDeLetras(str, lyrics) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i).toLocaleLowerCase() === lyrics.toLocaleLowerCase()) {
            result++;
        }
    }
    return result;
}

console.log(contadorDeLetras("Maadremia", "a"));