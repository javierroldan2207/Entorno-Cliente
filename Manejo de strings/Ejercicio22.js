//Escribe una función llamada firstWord que reciba como parámetro de entrada una cadena de texto y devuelva la primera palabra de esa cadena. La primera palaba de la cadena serán todos los caracteres que hay hasta el primer espacio.

function firstWord(str){
    return str.split().trim(" ")[0];
}