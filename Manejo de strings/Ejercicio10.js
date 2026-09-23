//Hacer una función generarNombre3 que reciba como parámetros de entrada tres cadenas de texto. Si la longitud de alguna cadena cadena es menor que cinco, la función debe devolver el texto ‘error’. Si ninguna cadena tiene menos de 5 letras, devolver una nueva palabra utilizando las tres últimas letras de cada palabra.

function generarNombre3(str, str2, str3) {
    let result;
    if (str.length < 5 || str2.length < 5 || str3.length < 5) {
        result = "error";
    } else {
        result = str.slice(-3) + str2.slice(-3) + str3.slice(-3);
    }
    return result;
}

console.log(generarNombre3("Javier", "Roldan", "Duran"));