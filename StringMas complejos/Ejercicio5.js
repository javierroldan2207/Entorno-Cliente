// 5. sustituirVocalesPorAsterisco(texto)
// Devuelve la misma cadena pero con todas las vocales sustituidas por * .
// Ej.: "Carrera" → "C*rr*r*" .
// Pista: puedes usar replace con regex global o un bucle carácter a carácter.

function sustituirVocalesPorAsterisco(text) {
    let vocals = "aeiou";
    let result = "";
    for (let i = 0; i < text.length; i++) {
        if (vocals.includes(text[i])) {
            result = result + "*";
        } else {
            result = result + text[i];
        }
    }
    return result;
}

console.log(sustituirVocalesPorAsterisco("Javier"));