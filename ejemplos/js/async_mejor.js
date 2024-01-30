async function promesaAsync() {
  let response = await fetch("Posts.json");
  let json = await response.json();

  const contenedorPrincipal = document.getElementById("contendor_principal");

  contenedorPrincipal.innerHTML = "";

  try {
    json.forEach((item) => {
      let crearDivPost = document.createElement("div"); //* Creamos el div

      crearDivPost.innerHTML = `<h2>Post del id ${item.id}</h2> <p> <strong>Titulo:</strong> ${item.title}</p><p><strong>Body: </strong>${item.body}</p>`; //? Ponemos el siguiente texto en cada uno de los divs.

      crearDivPost.classList.add("divs_post");

      contenedorPrincipal.appendChild(crearDivPost); //? Vamos agregando cada div dentro del contenedor principal.

      //todo Darle formato al h2

      let etiquetaH2Divs = document.getElementsByTagName("h2");

      /* console.log(etiquetaH2Divs); */

      for (let h2 of etiquetaH2Divs) {
        h2.classList.add("etiqueta_h2_mejor"); //? Añadimos la siguiente clase (etiqueta_h2_mejor) a todas las etiquetas h2.
      }

      //todo Elegir el primer cuarto div

      //? Seleccionar el cuarto div
      let cuartoDiv = contenedorPrincipal.getElementsByTagName("div")[3];

      if (cuartoDiv) { //? Si existe cuartoDiv
        console.log("Cuarto div encontrado:", cuartoDiv);

        //? Seleccionamos todos los divs que tenga el div 4
        let parrafos = cuartoDiv.getElementsByTagName("p");


        if (parrafos.length >= 2) { //? Si hay al menos dos parrafos, seleccionar el segundo

          let segundoParrafo = parrafos[1];

          console.log("Segundo párrafo del cuarto div:", segundoParrafo);

        } else {

            console.log("%cNo existe el segundo párrafo, solo hay uno.", "color: red; font-size: 16px;");
        }
      } else {

        console.log("Cuarto div no encontrado.");
      }
    });
  } catch (error) {
    console.log(error);
  }
}
//! Importante llamar a la funcion, si no esto no funciona

promesaAsync();
