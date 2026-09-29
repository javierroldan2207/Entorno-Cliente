//2. invertirCadena(texto)
//Devuelve la cadena invertida.
//Ejemplo: invertirCadena("hola") → "aloh" .
//Pista: recorre la cadena desde el final construyendo una nueva

function invertirCadena(text) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        result = text[i] + result;
    }
    return result;
}

console.log(invertirCadena("Hola buenos dias"));