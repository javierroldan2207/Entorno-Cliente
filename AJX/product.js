const btnCargar = document.getElementById("btnCargar");
const listaProductos = document.getElementById("listaProductos");

btnCargar.addEventListener("click", cargarProductos);


function cargarProductos() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "http://localhost:3000/products", true);

    xhr.addEventListener("load", function (){
        if(xhr.status === 200){
            const respuesta = JSON.parse(xhr.responseText);
            
            mostrarProductos(respuesta.products);
        } else {
            console.log("Error: " + xhr.status);
        }
    });

    xhr.send();
}

function mostrarProductos(productos){
    listaProductos.replaceChildren();

    productos.forEach(function (producto){
        const li = document.createElement("li");

        const texto = document.createTextNode(
            `${producto.id} - ${producto.nombre}:${producto.precio} €`
        );

        li.appendChild(texto);
        listaProductos.appendChild(li);
    });
}