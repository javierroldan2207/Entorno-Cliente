//Escribe una función llamada firstChar, que devuelva la primera letra que no sea un espacio cuando una cadena de texto es pasada.

function firstChar(str){
    return str.trim().charAt(0);
}

console.log(firstChar("  Javier"));