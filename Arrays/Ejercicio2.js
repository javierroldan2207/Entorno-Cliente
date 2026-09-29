//Ejercicio 2: Copiar un Array

//Crea un array llamado original con algunos elementos.
let original = [1,2,3,4,5,6];
//Crea un nuevo array llamado copia que sea una copia de original utilizando el método slice.

let copia = original.slice();
//Modifica un elemento en copia y verifica si también se modifica en original.
copia.splice(1,2);

console.log(original);
console.log(copia);