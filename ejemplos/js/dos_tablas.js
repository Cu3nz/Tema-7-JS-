async function promesaDosTablas() {
    let response = await fetch("Posts.json");
    let json = await response.json();

    const contenedorPrincipal = document.getElementById("contendor_principal");
    contenedorPrincipal.innerHTML = "";

    let contenedorUserId; //? Contenedor para los divs cuando item.userId == 2

    try {
        json.forEach((item) => {
            let crearDivPost = document.createElement("div"); //? Creamos el elemento div
            crearDivPost.innerHTML = `<h2>Post del id ${item.id}</h2> <p> <strong>Titulo:</strong> ${item.title}</p><p><strong>Body: </strong>${item.body}</p>`; //? Añadimos el texto.
            crearDivPost.classList.add("divs_post"); //? Añadimos la clase a los divs que contiene los pots 

            if (item.userId == 2) { //? Si el user id es == 2
                if (!contenedorUserId) { //* Si aún no existe, lo creamos

                    contenedorUserId = document.createElement("div"); //? Lo creamos

                    contenedorUserId.classList.add("dos-columnas"); //? Añadimos la clase a los contenedores que tenga el userId == 2.

                    contenedorPrincipal.appendChild(contenedorUserId); //? Añadimos al contenedor principal el contenedor especial
                }
                contenedorUserId.appendChild(crearDivPost); //? Agregamos el contenedorUserId al contenedor donde esta todos los divs, pero solamente los divs que tienen el userId == 2, los demas lo deja normal

            } else { // Si no tiene userId == 2, añadimos al contenedor principal los divs con los pots 

                contenedorPrincipal.appendChild(crearDivPost); // Agregar el div al contenedor principal directamente
            }
        });
    } catch (error) {
        console.log(error);
    }
}


promesaDosTablas();

