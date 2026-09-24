//Escribe una función llamada informacionProducto que tome un objeto con información de un producto (nombre, precio, categoría, etc.) y utilice un template literal para generar una descripción del producto. Luego, muestra esa descripción en la consola.

function informacionProducto(obj){
    return `Nombre producto: ${obj.marca}, modelo: ${obj.modelo} y año de salida: ${obj.año}`;
}

const coche = {
marca: "Toyota",
modelo: "Corolla",
año: 2020
};

console.log(informacionProducto(coche));