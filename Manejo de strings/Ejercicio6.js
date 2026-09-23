//Hacer una función devuelveMasLarga que reciba como parámetro de entrada dos cadenas de texto y devuelva la mayor. En caso de que ambas cadenas sean iguales, devolveremos la correspondiente al primer parámetro de la función.

function devuelveMasLarga(str, str2) {
    let num = str.length;
    let num2 = str2.length;
    let result = "";
    if (num === num2) {
        result = "Son iguales."
    } else if (num > num2) {
        result = str
    } else {
        result = str2;
    }
    return result;
}

console.log(devuelveMasLarga("Hola buenos dias", "Mi nombre"));
console.log(devuelveMasLarga("lkjhg", "juhnm"));
console.log(devuelveMasLarga("hdg", "jkjnfjdsf"));