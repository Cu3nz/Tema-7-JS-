async function cargarUsuarios() {
    try {
        let response = await fetch("Users.json"); // Asegúrate de tener este archivo o ajustar la URL
        let usuarios = await response.json();

        const contenedorPrincipal = document.getElementById("contendor_principal");
        contenedorPrincipal.innerHTML = ""; // Limpiar contenedor

        usuarios.forEach((usuario) => {
            let divUsuario = document.createElement("div");
            divUsuario.innerHTML = `<h2>${usuario.name}</h2> <p>Username: ${usuario.username}</p><p>Email: ${usuario.email}</p>`;
            divUsuario.classList.add("usuario");
            if (usuario.id % 2 === 0) {
                divUsuario.classList.add("par");
            }
            contenedorPrincipal.appendChild(divUsuario);
        });
    } catch (error) {
        console.error("Error al cargar los usuarios:", error);
    }
}

function filtrarUsuarios() {
    const input = document.getElementById("search-input");
    input.addEventListener("keyup", () => {
        const valor = input.value.toLowerCase();
        const contenedorPrincipal = document.getElementById("contendor_principal");
        const usuariosDivs = contenedorPrincipal.getElementsByClassName("usuario");
        Array.from(usuariosDivs).forEach(div => {
            // Asegurarse de buscar en el contenido correcto, aquí asumimos que el username está siempre en el segundo párrafo (p)
            const username = div.getElementsByTagName("p")[0].textContent.toLowerCase(); // Se corrige para obtener correctamente el username
            if (username.includes(valor)) {
                div.style.display = "";
            } else {
                div.style.display = "none";
            }
        });
    });
}

document.getElementById("reload-button").addEventListener("click", () => cargarUsuarios());

// Ejecución inicial
cargarUsuarios();
filtrarUsuarios();
