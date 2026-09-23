//Hacer una función generarNombre2 que reciba como parámetros de entrada tres cadenas de texto. Si la longitud de alguna cadena cadena es menor que cinco, la función debe devolver el texto ‘error’. Si ninguna cadena tiene menos de 5 letras, devolver una nueva palabra utilizando la última letra de cada palabra.

function generarNombre2(str, str2, str3) {
    let result;
    if (str.length < 5 || str2.length < 5 || str3.length < 5) {
        result = "Error";
    } else {
        result = str.charAt(str.length - 1) + str2.charAt(str2.length - 1) + str3.charAt(str3.length - 1);
    }
    return result;
}

console.log(generarNombre2("Javier", "Roldan", "Duran"));