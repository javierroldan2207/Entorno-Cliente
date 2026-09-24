//Escribe una función llamada shortcut que tome dos cadenas de texto y devuelva la inicial de cada una de las dos cadenas.

function shortcut(str, str2) {
    return str.toLocaleUpperCase().charAt(0) + str2.toLocaleUpperCase().charAt(0);
}

console.log(shortcut("Inteligencia", "Artificial"));