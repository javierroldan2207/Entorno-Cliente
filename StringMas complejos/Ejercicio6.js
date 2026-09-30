//  comprimirRepeticiones(texto)
// Implementa un “run-length encoding” simple que convierta "aaabbc" en "a3b2c1" .
// Ej.: "wwwwaaadexxxxxx" → "w4a3d1e1x6" .
// Pista: recorre la cadena, lleva el carácter actual y un contador; cuando cambia, añade car
// + count .

function comprimirRepeticiones(text) {
    let result = "";
    let letter = "";
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] == letter || letter == null) {
            count++;
        }else{
            result += letter[i]+count;
        }
    }
    return result;
}


console.log(comprimirRepeticiones("aaaakkkfrrrhh"));