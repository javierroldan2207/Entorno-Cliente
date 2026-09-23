//Realizar la evaluación del ejercicio anterior sin tener en cuenta si la letra pasada como parámetro esta en mayúsculas o minúsculas

function tieneLetra(str, lyrics) {
    let result = false;
    let strLower = str.toLocaleLowerCase();
    let lyricsLower = lyrics.toLocaleLowerCase();
    if (strLower.indexOf(lyricsLower) >= 0) {
        result = true;
    }
    return result;
}

console.log(tieneLetra("Javier", "R"));
console.log(tieneLetra("Javier", "M"));