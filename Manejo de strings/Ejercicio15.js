//Hacer una función addGuiones que reciba como parámetro de entrada una cadena texto y devuelva una nueva cadena que tendrá un guion medio detrás de cada letra. Utilizar para ello un bucle for.

function addGuiones(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result += str.charAt(i);
        if (i < str.length - 1) {
            result += "-";
        }
    }
    return result;
}

console.log(addGuiones("Javier"));