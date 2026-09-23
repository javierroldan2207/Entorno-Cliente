//Escribe una función llamada devuelveEnesimaLetra que reciba como parámetro de entrada una cadena de texto y un número y devuelva la letra que ocupe la posición indicada por el número.

function devuelveEnesimaLetra(str, num) {
    return str.charAt(num - 1);
}

console.log(devuelveEnesimaLetra("Mario", 3));
console.log(devuelveEnesimaLetra("Javier", 1));