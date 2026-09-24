//Escribe una función llamada toCase que reciba como parámetro de entrada una cadena de texto y devuelva esa misma cadena de texto en minúsculas, un guión medio y de nuevo esa misma cadena de texto en mayúsculas.

function toCase(str) {

    return str.toLocaleUpperCase() + "-" + str.toLocaleLowerCase();
}

console.log(toCase("JAvIer"));