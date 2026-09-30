//4. rotarDerecha(texto, n)
//Rota la cadena n posiciones hacia la derecha (si n > longitud, usa módulo).
//Ej.: rotarDerecha("abcdef", 2) → "efabcd" .
//Pista: usa substring dos veces y concatena.

function rotarDerecha(text, n){
    let result = "";
    if(text.length >= n){
        let text1 = text.slice(n);
        let text2 = text.slice(0,n);
        result = text1+text2;
    }
    return result;
}

console.log(rotarDerecha("Javier",3));
