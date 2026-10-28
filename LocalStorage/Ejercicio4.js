//a) Utilizando localStorage, almacena un objeto cualquiera bajo una clave de tu elección. 
// b) Utiliza la función adecuada para eliminar la clave que contiene el objeto. 
// c) Verifica si la clave que contiene el objeto aún existe en localStorage.

const pet = {
    name: "Julio",
    age: 10,
    color: "Black"
};

localStorage.setItem("pet", JSON.stringify(pet));

localStorage.removeItem("pet");

let petExist = localStorage.getItem("pet");

if(petExist != null){
    console.log("Existe");
}else{
    console.log("No existe");
}