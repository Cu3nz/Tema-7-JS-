//? Solicutud get

fetch("https://jsonplaceholder.typicode.com/posts") //todo Pagina donde vamos a cargar todos los datos, es un json.
  //* Si hace exito.
  .then((response) => response.json()) //* Convierte las respuestas en un json.
  .then((json) => {
    const contenedorPrincipal = document.getElementById("contenedor_principal"); //? Contenedor principal, donde voy a ir metiendo cada uno de los divs
    contenedorPrincipal.innerHTML = ""; //? Limpiamos el contenedor antes de añadir nuevos elementos

    //todo Una vez que limpiamos el contenedor principal lo recorremos con un foreach y vamos añadiendo dentro del contenedor principal divs con el id y el titulo

    json.forEach((item) => {
      let crearDiv = document.createElement("div"); //* Creamos el div.

      crearDiv.style.backgroundColor = "grey"; //? Añadimos un fondo

      crearDiv.style.border = "3px solid black"; //? Añadimos un borde 3px solid y negro

      crearDiv.style.margin = "2vh"; //? Margen para cada div, para que haya espacio

      crearDiv.style.padding = "2vh"; //? margen para que el texto no este pegado al borde del div

      crearDiv.innerHTML = `<h2>Post del id ${item.id}</h2><p> <strong>Titulo:</strong> ${item.title}</p><p><strong>Body: </strong>${item.body}</p>`; //? Agregamos el post del id , el titulo de cada uno y el body de cada uno.

      //todo lo tengo que poner aqui, porque es justo despues de pintar los parrafos

      console.log(crearDiv.firstElementChild); //? Esto saca el primer hijo, basicamente el post del id tal....

      crearDiv.firstElementChild.style.textAlign= "center"
      
      crearDiv.style.fontSize = "1.5vw" //? Cogemos el primer hijo y lo ponemos en el centro.

      contenedorPrincipal.appendChild(crearDiv); //? Añadimos al contenedor principal el div con el id y el titulo.
    });
  })
  .catch((error) => console.error("Solicitud fallida", error)); //* Capturamos los errores.

//todo Una vez que ya tenemos nuestro array, vamos a pintar cada post en un div diferente.
