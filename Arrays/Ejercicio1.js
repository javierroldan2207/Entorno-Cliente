//Ejercicio 1: Crear y Manipular Arrays

//Crea un array llamado listaCompra con los siguientes elementos: 'Peras', 'Manzanas', 'Kiwis', 'Plátanos', y 'Mandarinas'.
let listaCompra = ['Peras', 'Manzanas', 'Kiwis', 'Platanos', 'Mandarinas'];

//Usa el método splice para eliminar las 'Manzanas' de la lista de compra.
listaCompra.splice(1,1);

//Usa el método splice para añadir 'Naranjas' y 'Sandía' después de 'Plátanos' en la lista de compra.

listaCompra.splice(3,0,'Naranjas', 'Sandia');
//Usa el método splice para reemplazar 'Kiwis' con 'Cerezas' y 'Nísperos' en la lista de compra.

listaCompra.splice(1,1,'Cerezas','Nispero');
//Imprime la lista de compra final por la consola.
console.log(listaCompra);