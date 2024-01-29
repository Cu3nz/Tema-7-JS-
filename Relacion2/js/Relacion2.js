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



    











