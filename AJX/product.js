document.addEventListener("DOMContentLoaded", () => {
    const btnCargar = document.getElementById("btnCargar");
    const listaProductos = document.getElementById("listaProductos");

    btnCargar.addEventListener("click", cargarProductos);

    function cargarProductos() {
        const xhr = new XMLHttpRequest();

        xhr.open("GET", "http://localhost:3000/productos", true);

        // Cuando llega la respuesta del servidor
        xhr.addEventListener("load", function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                const productos = JSON.parse(xhr.responseText);
                mostrarProductos(productos);
            } else {
                console.error("Error al cargar los productos:", xhr.status, xhr.statusText);
            }
        });

        xhr.addEventListener("error", function () {
            console.error("Error de red: ¿está el servidor encendido?");
        });

        xhr.send();
    }

    function mostrarProductos(productos) {
        listaProductos.innerHTML = "";

        productos.forEach(producto => {
            const li = document.createElement("li");
            li.textContent = `${producto.nombre} - ${producto.precio} €`;
            listaProductos.appendChild(li);
        });
    }
});