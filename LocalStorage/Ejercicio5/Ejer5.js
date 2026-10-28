const form = document.getElementById("userForm");
const list = document.getElementById("userList");

const users = JSON.parse(localStorage.getItem("users")) || [];

function mostrarUsuario(user) {
    const elementList = document.createElement("li");
    elementList.textContent = user.name + "-" + user.address + "-" + user.email + " ";

    const buttonD = document.createElement("button");
    buttonD.textContent = "Borrar";

    buttonD.addEventListener("click", () => {
        elementList.remove(); 

        users.splice(users.indexOf(user), 1);
        localStorage.setItem("users", JSON.stringify(users));
    });

    elementList.appendChild(buttonD);
    list.appendChild(elementList);
}

users.forEach(mostrarUsuario);

form.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const name = document.getElementById("nameU");
    const address = document.getElementById("address");
    const email = document.getElementById("email");

    const user = {
        name: name.value,
        address: address.value,
        email: email.value
    };

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    mostrarUsuario(user); 

    name.value = "";
    address.value = "";
    email.value = "";
});