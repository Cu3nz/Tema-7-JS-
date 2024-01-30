fetch("Posts.json")
.then((response) => response.json()) //* Convertimos las respuestas del fetch en json 
.then((json) => { //? Json ahora mismo tiene todo lo que devuelve el fetch.

    const contenedorPrincipal = document.getElementById("contenedor_principal"); //? Almacenamos en la variable el contenedor principal, donde van a ir cada uno de las siguientes posts.

    contenedorPrincipal.innerHTML = ""; //? Si hay algo, lo dejamos vacio, para poder añadir solamente los posts.


    json.forEach((item) => {

        let crearDiv = document.createElement("div"); //? Creamos el elemento div.

        crearDiv.classList.add("div_post")

        crearDiv.innerHTML = `<h2>Post del id ${item.id}</h2> <p> <strong>Titulo:</strong> ${item.title}</p> <p><strong>Body: </strong> ${item.body}</p>`;

        contenedorPrincipal.appendChild(crearDiv); //? Añadimos al contenedorPrincipal, cada uno de los divs que se van creando.


        //todo Para que el primer texto de cada div posts este centrado en este caso los h2.

        let h2Posts = document.getElementsByTagName("h2"); //? Almaceno en un array todos los h2.

        //todo Recorremos con un for y vamos añadiendo la clase h2, a cada uno de los h2 que hay en cada div.
        for (let h2 of h2Posts) {
            h2.classList.add("h2"); //? Añadimos la clase h2
        }

        //todo Elegimos el primer parrafo de todos los divs que contiene los posts.

        let primerParrafoDivs = crearDiv.getElementsByTagName("p")[0]; //* Elegimos el primer parrafo de cada uno de los divs, en este caso el title

        /* console.log(primerParrafoDivs); */

        primerParrafoDivs.classList.add("parrafo_title") //? Añadimos la clase parrafo_title al primer p de cada div


        //todo Seleccionamos el primer div 

        let primerDiv = contenedorPrincipal.getElementsByTagName("div")[0]; //? Me posiciono en el contenedor principal (donde estan todos los divs metidos) y selecciono el primero.) 

        console.log(primerDiv);


        let segundoParrafo = primerDiv.getElementsByTagName("p")[1]; //* De ese primer div selecciono el segundo parrafo, ya que creo un array que va a tener 2 parrafos, el segundo parrafo esta en el indice 1 del array.

        console.log(segundoParrafo);

        segundoParrafo.classList.add("segundo_parrafo"); //* Le añadimos la clase con nombre segundo parrafo.

    })

})