async function promesaAsync(){

    let response = await fetch("Posts.json") 
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

            for( let h2  of etiquetaH2Divs){

                h2.classList.add("etiqueta_h2"); //? Añadimos la siguiente clase (h2) a todas las etiquetas h2.
            }


            //todo Elegir el primer cuarto div

            let cuartoDiv = contenedorPrincipal.getElementsByTagName("div")[3];

            console.log(cuartoDiv);


            if (cuartoDiv){

                let parrafos = cuartoDiv.getElementsByTagName("p");

                let segundoParrafo = parrafos[1];

                console.log(segundoParrafo);

                segundoParrafo.classList.add("segundo_parrafo"); //? Al segundo parrafo le doy estilo

            } else {
                console.error("No exise el cuarto div")
            }
           
        })
        
    } catch (error) {
        console.log(error);
    }

}
//! Importante llamar a la funcion, si no esto no funciona

promesaAsync();