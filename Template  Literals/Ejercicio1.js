//Crea una función llamada saludoPersonalizado que tome un nombre y una edad como argumentos y utilice un template literal para devolver un saludo personalizado que incluya el nombre y la edad.

function saludoPersonalizado(str,age){
    return `Hola ${str} de ${age} años.`
}

console.log(saludoPersonalizado("Javier", 25));