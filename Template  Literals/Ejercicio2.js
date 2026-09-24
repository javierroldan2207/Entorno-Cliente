//Utiliza un template literal para crear una cadena que muestre una lista de compras con varios elementos. Luego, muestra esa cadena en la consola.

function list(str) {
    const items = str.split(",");
    
    for (let i = 0; i < items.length; i++) {
        console.log(`${i + 1}_${items[i].trim()}`);
    }
}

list("Pan,Jamon,Fruta,Agua");