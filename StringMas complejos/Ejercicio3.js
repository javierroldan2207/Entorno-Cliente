// 3. esPalindromo(texto)
// Devuelve true si la cadena es palíndromo ignorando espacios, signos y mayúsculas,
// false si no.
// Ejemplo: esPalindromo("Dábale arroz a la zorra el abad") → true .
// Pista: usa .replace() con una expresión regular para eliminar todo menos letras/dígitos,
// luego compara con la invertida

function esPalindromo(texto) {
  const textoLimpio = texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") 
    .replace(/[^a-z0-0]/g, "");    

  const textoInvertido = textoLimpio.split("").reverse().join("");

  return textoLimpio === textoInvertido;
}

console.log(esPalindromo("Dábale arroz a la zorra el abad")); 
console.log(esPalindromo("Dábale burro a elzorra el abad")); 