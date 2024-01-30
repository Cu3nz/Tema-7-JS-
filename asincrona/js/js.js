
async function funcion(){
  //* Si hace exito.
  let response = await fetch("Posts.json") //todo Pagina donde vamos a cargar todos los datos, es un json.
  let user = await response.json();
  
    const contenedorPrincipal = document.getElementById("contenedor_principal"); //? Contenedor principal, donde voy a ir metiendo cada uno de los divs
    contenedorPrincipal.innerHTML = ""; //? Limpiamos el contenedor antes de añadir nuevos elementos

    //todo Una vez que limpiamos el contenedor principal lo recorremos con un foreach y vamos añadiendo dentro del contenedor principal divs con el id y el titulo

    try {
        
        user.forEach((item) => {
            let crearDiv = document.createElement("div"); //* Creamos el div.
      
            /* crearDiv.setAttribute("class" , "div_contenido"); //? Añadimos el id, con el nombre div_contenido a cada uno de los divs que se crea */
      
            crearDiv.classList.add("div_contenido"); //? Esto lo que hace es añadir el atributo class con el nombre div_contenido y coge los estilos que esten definidos en el css con el nombre de la clase en este caso .div_contenido
      
            crearDiv.innerHTML = `<h2>Post del id ${item.id}</h2> <p> <strong>Titulo:</strong> ${item.title}</p><p><strong>Body: </strong>${item.body}</p>`; //? Agregamos el post del id , el titulo de cada uno y el body de cada uno.
      
            //todo lo tengo que poner aqui, porque es justo despues de pintar los parrafos
      
            console.log(crearDiv.firstElementChild); //? Esto saca el primer hijo, basicamente el post del id tal....
      
            crearDiv.firstElementChild.style.textAlign= "center"
      
            contenedorPrincipal.appendChild(crearDiv); //? Añadimos al contenedor principal el div con el id y el titulo.
      
            /* if (item.id === 2){
      
              let contenedorStyleFlex = document.createElement("div");
              
              contenedorStyleFlex.classList.add("id_dos"); //? Le añado la clase con el nombre id_dos, solamente a los divs que tenga el id 2
      
              contenedorStyleFlex.appendChild(crearDiv);
            } */
      
          });

    } catch (error) {
        console.log(error);
    }
  

   
}

funcion();
