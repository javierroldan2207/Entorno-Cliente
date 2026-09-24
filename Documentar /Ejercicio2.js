//Funciones

/**
 * Calculo del area de una figura.
 * @param {number} base 
 * @param {number} altura 
 * @returns {number}
 */
function areaRectangulo(base, altura) {
return base * altura;
}

/**
 * COnversor de mayusculas de una cadena de texto.
 * @param {string} texto 
 * @returns {string}
 */
function convertirEnMayusculas(texto) {
return texto.toUpperCase();
}

/**
 * Generar nombre completo introducido.
 * @param {string} nombre 
 * @param {string} apellido 
 * @returns {string}
 */
function generarNombreCompleto(nombre, apellido) {
return nombre + " " + apellido;
}

/**
 * Devuelve tru si eres mayor de edad.
 * @param {number} edad 
 * @returns {boolean}
 */
function esMayorDeEdad(edad) {
return edad >= 18;
}

