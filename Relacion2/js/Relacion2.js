//todo Realiza una listas de productos en un vector, los productos serán teléfonos móviles, nombre, marca y precio. 3 Elementos.

var listaDeProductos = [
  {
    nombre: "Galaxy S21",
    marca: "Samsung",
    precio: 799,
  },
  {
    nombre: "iPhone 12",
    marca: "Apple",
    precio: 899,
  },
  {
    nombre: "Pixel 5",
    marca: "Google",
    precio: 699,
  },
  {
    nombre: "iPhone 13",
    marca: "Apple",
    precio: 999,
  },
  {
    nombre: "Galaxy Note 20",
    marca: "Samsung",
    precio: 999,
  },
  {
    nombre: "OnePlus 9",
    marca: "OnePlus",
    precio: 729,
  },
  {
    nombre: "iPhone 12 Pro Max",
    marca: "Apple",
    precio: 1099,
  },
  {
    nombre: "Xiaomi Mi 11",
    marca: "Xiaomi",
    precio: 749,
  },
  {
    nombre: "Sony Xperia 1 II",
    marca: "Sony",
    precio: 1199,
  },
  {
    nombre: "iPhone SE",
    marca: "Apple",
    precio: 399,
  },
];

//todo Realiza una función que sea LeerProductos la cual contiene una promesa, ComprarProducto. Tiene dentro un
//todo setTimeout(() => {
//todo resolve(...);
//todo reject(Error("No se han podido leer los productos")
//todo },1000)
//todo Devuelve la lista de productos tal cual.

function LeerProductos(){
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (listaDeProductos.length > 0){
              console.log("Lista de productos inicial:");
              console.table(listaDeProductos);
              resolve(listaDeProductos);
          } else {
              reject(new Error("No se han podido leer los productos"));
          }
      }, 1000);
  });
}


//todo Realiza otra función que es comprarProducto(), que va a devolver el elemento pasado por parámetro, vale la posición del vector.

//todo Para este ejercicio voy a hacer una funcion que me valide que si existe 


function comprarProducto( nombreProductoComprar ){

  //todo Para devolver el indice del elemento pasado por parametro hago lo siguiente.

      return new Promise((resolve, reject) => {
        setTimeout(() => {

          let indiceProductoEncontrado = -1; 

          //? Buscamos el producto
          for (let i = 0; i < listaDeProductos.length; i++) {
            if (listaDeProductos[i].nombre === nombreProductoComprar) {
                indiceProductoEncontrado = i; //? Guardamos el indice del producto que hemos encontrado
                break; //? Salimos del ciclo ya que encontramos el producto
            }
        }

        //* Verificamos si se ha encontrado el producto o no para borrarlo.

        if (indiceProductoEncontrado !== -1){ //? Si la variable de indice tiene un numero almacenado distinto de -1, es porque existe el nombre del producto en el array.

          listaDeProductos.splice(indiceProductoEncontrado , 1) //? Nos posicionamos en el indice del movil comprado y lo borramos (por eso pongo 1, para solo borrar ese indice).

          resolve(indiceProductoEncontrado); //* Resolvemos la promesa con el indice del movil comprado

        } else {
          //! Si el producto no ha sido encontrado en el array, la promesa falla y mandamos el siguiente mensaje de error.
          reject(new Error("**** Error Producto no encontrado"));
        }

        },1000); // cierre de settimout y le ponemos un tiempo en mi caso 1000
      });
  }

  //? Ejecutamos la promesa eliminando un producto mediante el nombre del movil

  LeerProductos()
  .then(() => {
    let nombreProductoAEliminar = "Pixel 5";
    return comprarProducto(nombreProductoAEliminar); //? Llamamos a la funcion pasandole el nombre del movil y lo elimina del array.
  })
  .then(indiceEliminado => {
    console.log(`%cProducto eliminado en el índice: %c${indiceEliminado}`, "color: orange; font-size: 16px;", "color: green; font-size: 16px;");
    console.log("%cLista de productos después de eliminar:", "color: green; font-size: 16px");
    console.table(listaDeProductos);
  })
  .catch(error => {
    console.error(error.message);
  });
  //! Realizada por sergio





  //todo Segundo ejercicio leer ficheros
  function crearBotones(textoBoton, nombreOnclick, idDestinoBoton) {
    textoBoton.forEach(textoBoton => {
      let crearBoton = document.createElement("button"); //? Creamos el boton
      crearBoton.style.marginLeft = "0.5%"; //? Estilo css para dejar margen entre botones
      crearBoton.setAttribute('onclick', nombreOnclick); //? Agregamos el atributo onclick al boton con el nombre que se pasa por parametro.
      let textoDelBoton = document.createTextNode(textoBoton); //? Definimos el texto que va a tener el boton 
      crearBoton.appendChild(textoDelBoton); //? Añadimos el texto al boton
      document.getElementById(idDestinoBoton).appendChild(crearBoton); //? Hora de añadir el boton al dom, para ello cogemos el id que nos ha pasado el usuario ("getElementById(idDestinoBoton)" y añadimos el boton con su nombre y atributos onclick)
    });
  }


  /* crearBotones(["Leer archivo"] , "leerArchivo()" , "botonCargarFichero"); */


document.getElementById("botonCargarFichero").addEventListener('click' , function(){ //? Añadimos un evento al boton

  const inputTipoFile = document.getElementById("input"); //? Almacenamos el archivo que subimos por el input

  if(inputTipoFile.files.length > 0){ //? Verificamos si el input tiene archivos cargados 
    const primerArchivo = inputTipoFile.files[0]; //? Solo cogemos el primer archivo del array files

    loadFile(primerArchivo) //? Leemos el primer archivo
    .then(() => mostrarMensaje('Archivo cargado correctamente.'))
    .catch(error => mostrarMensaje(`Error al cargar el archivo: ${error.message}`));
  }
});


function loadFile(archivo){ //? Funcion que lee el archivo que se le pasa por parametro.

  return new Promise ((resolve , reject) => {

    const leer = new FileReader(); //? Creamos una nueva instancia de FileReader que se utiliza para leer el contenido de los archivos

    leer.onload = () => { //? Establece una función que se ejecutará cuando FileReader haya terminado de leer el archivo.
      try {
        const contenidoArchivo = leer.result; //? Leemos el contenido y lo almacenamos en la variable contenidoArchivo

        appendContentToHead(file.type, contenidoArchivo); //*appendContentToHead(file.type, contenidoArchivo); // Llama a la función 'appendContentToHead' con dos argumentos: 'file.type', que representa el tipo MIME del archivo, y 'contenidoArchivo', que contiene los datos del archivo. Esta función se encarga de procesar o utilizar estos datos, posiblemente agregándolos al elemento <head> del documento HTML.

        resolve(); //* Define que la promesa se ha realizado con exito
      } catch (error){
        reject(error);
      }
    };

    reader.onerror = () => reject(new Error('Error al leer el archivo'));
    reader.readAsText(file);
  })

}

    











