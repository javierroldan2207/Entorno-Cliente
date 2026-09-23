//Escribe una función llamada devuelveUltimaLetra que reciba como parámetro de entrada una cadena de texto y devuelva la última letra.

function devuelveUltimaLetra(str){
    lon = str.length;
    return str.charAt(lon -1);
}

console.log(devuelveUltimaLetra("Javier"));