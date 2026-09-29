//Ejercicio 4: Ordenar un Array de Objetos

//Crea un array de objetos llamado alumnos donde cada objeto tiene las propiedades nombre y edad. Agrega al menos 5 objetos a este array.
const alumnos = [
  { nombre: "Ana", edad: 20 },
  { nombre: "Luis", edad: 22 },
  { nombre: "María", edad: 19 },
  { nombre: "Carlos", edad: 21 },
  { nombre: "Lucía", edad: 23 }
];

//Escribe una función que tome el array de alumnos y lo ordene por edad de menor a mayor utilizando el método sort.

let ordenado = alumnos.sort((alum1,alum2) => alum1.edad - alum2.edad);
//Imprime el array de alumnos ordenado por la consola.

console.log(ordenado);
