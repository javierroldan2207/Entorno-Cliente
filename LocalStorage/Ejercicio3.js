//a) Crea un objeto JavaScript que represente una persona con propiedades como "nombre", "edad" y "ciudad". 
// b) Utiliza JSON.stringify para convertir este objeto en una cadena JSON. 
// c) Almacena la cadena JSON en localStorage bajo la clave "persona". 
// d) Recupera la cadena JSON de localStorage y utiliza JSON.parse para convertirla de nuevo en un objeto JavaScript. 
// e) Muestra en la consola alguna propiedad del objeto recuperado.

let person = {
    nombre: "Hugo",
    edad: 0,
    ciudad: "Jaen"
}

let  personJson = JSON.stringify(person);

localStorage.setItem("person" , personJson);

let personParse = JSON.parse(localStorage.getItem("person"));

