//? Solicutud get

fetch("PacoApiPost.json") //todo Pagina donde vamos a cargar todos los datos, es un json.
  //* Si hace exito.
  .then((response) => response.json()) //* Convierte las respuestas en un json.
  .then((json) => {
    const contenedorPrincipal = document.getElementById("contenedor_principal"); //? Contenedor principal, donde voy a ir metiendo cada uno de los divs
    contenedorPrincipal.innerHTML = ""; //? Limpiamos el contenedor antes de añadir nuevos elementos

    //todo Una vez que limpiamos el contenedor principal lo recorremos con un foreach y vamos añadiendo dentro del contenedor principal divs con el id y el titulo

  

    json.forEach((item) => {
      let crearDiv = document.createElement("div"); //* Creamos el div.

      /* crearDiv.setAttribute("class" , "div_contenido"); //? Añadimos el id, con el nombre div_contenido a cada uno de los divs que se crea */

      crearDiv.classList.add("div_contenido"); //? Esto lo que hace es añadir el atributo class con el nombre div_contenido y coge los estilos que esten definidos en el css con el nombre de la clase en este caso .div_contenido

      crearDiv.innerHTML = `<img src="${item.imagen}"></img><h2>Post del id ${item.user_id}</h2> <p> <strong>Titulo:</strong> ${item.titulo}</p><p><strong>Body: </strong>${item.contenido}</p> <p>Estado: <span>${item.estado}</span></p>`; //? Agregamos el post del id , el titulo de cada uno y el body de cada uno.

      //todo lo tengo que poner aqui, porque es justo despues de pintar los parrafos

      let primerElementoHijoDivs = crearDiv.firstElementChild; //? Selecciono el primer elemento de cada uno de los divs en este caso la imagen

      console.log(primerElementoHijoDivs); //? Esto saca el primer hijo de cada uno de los divs, basicamente es la imagen ....

      primerElementoHijoDivs.classList.add("imagen");

      primerElementoHijoDivs.addEventListener("click", function() {
        
        this.classList.toggle("imagen-ampliada");

    });
      

      contenedorPrincipal.appendChild(crearDiv); //? Añadimos al contenedor principal el div con el id y el titulo.

      

    });
  })
  .catch((error) => console.error("Solicitud fallida", error)); //* Capturamos los errores.


