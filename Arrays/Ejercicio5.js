//Ejercicio 5: Otros Métodos de Array

//Crea dos arrays, array1 y array2, con algunos elementos.
let a = [1,2,3,4,5];
let b = ['a','b','platanos','d'];
//Utiliza el método concat para concatenar los dos arrays en uno nuevo llamado concatenado.

let c = a.concat(b);
console.log(c);
//Utiliza el método reverse para invertir el orden de los elementos en concatenado.

c.reverse();
console.log(c);
//Utiliza el método indexOf para encontrar la posición del elemento 'Plátanos' en concatenado.
console.log(c.indexOf("platanos"));

//Utiliza el método lastIndexOf para encontrar la última posición del elemento 'Plátanos' en concatenado.
console.log(c.lastIndexOf("platanos"));