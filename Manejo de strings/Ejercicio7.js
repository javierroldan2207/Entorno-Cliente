//Hacer una función devuelveMasLarga2 que reciba como parámetro de entrada tres cadenas de texto y devuelva la mayor. En caso de que al menos dos cadenas tengan igual longitud, devolveremos el texto Hay al menos dos cadenas iguales.

function devuelveMasLarga2(str, str2, str3) {
    let result = ""
    if (str.length === str2.length || str2.length === str3.length || str.length === str3.length) {
        result = "Hay al menos dos cadenas iguales";
    } else if (str2.length > str.length && str2.length > str3.length) {
        result = str2
    } else if (str3.length > str.length && str3.length > str2.length) {
        result = str3;
    } else if (str.length > str2.length && str.length > str3.length) {
        result = str;
    }
    return result;
}

console.log(devuelveMasLarga2("Hola buenos dias", "Mi nombre", "Mas vale"));
console.log(devuelveMasLarga2("lkjhg", "juhnm", "juhn3333m"));
console.log(devuelveMasLarga2("hdg", "jkjnfjdsf", "juhnm"));