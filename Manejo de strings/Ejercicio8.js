//Hacer una función generarNombre que reciba como parámetros de entrada tres cadenas de texto. Si la longitud de alguna cadena cadena es menor que cinco, la función debe devolver el texto ‘error’. Si ninguna cadena tiene menos de 5 letras, devolver una nueva palabra utilizando las tres primeras letras de cada palabra.

function generarNombre(str, str2, str3) {
    let result = "";
    if (str.length < 5 || str2.length < 5 || str3.length < 5) {
        result = "Error";
    } else {
        result = str.substr(0, 3) + str2.substr(0, 3) + str3.substr(0, 3);
    }
    return result;
}

console.log(generarNombre("Javier", "Roldan", "Duran"));
console.log(generarNombre("ee", "jajdjd", "kjdskjnds"));