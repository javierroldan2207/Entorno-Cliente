//1. cuentaVocales(texto)
//Devuelve el número de vocales (a, e, i, o, u) en la cadena (ignorar mayúsc/minúsc).
//Ejemplo: cuentaVocales("Universidad") → 5 .
//Pista: normaliza con .toLowerCase() y recorre con un for .

function cuentaVocales(text) {
    const vocales = ("aeiou");
    text = text.toLocaleLowerCase();
    let result = 0;
    for (let i = 0; i < text.length; i++) {
        if (vocales.includes(text[i])) {
            result = result + 1;
        }
    }
    return result;
}

console.log(cuentaVocales("JAvieR"));