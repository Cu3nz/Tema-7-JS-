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
  
function LeerProductos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (listaDeProductos.length > 0) {
          console.log("Lista de productos inicial:");
          console.table(listaDeProductos);
          resolve(listaDeProductos);
        } else {
          reject(new Error("No se han podido leer los productos"));
        }
      }, 1000);
    });
  }
  
  function comprarProducto(nombreProductoComprar) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let indiceProductoEncontrado = -1;
        for (let i = 0; i < listaDeProductos.length; i++) {
          if (listaDeProductos[i].nombre === nombreProductoComprar) {
            indiceProductoEncontrado = i;
            break;
          }
        }
  
        if (indiceProductoEncontrado !== -1) {
          listaDeProductos.splice(indiceProductoEncontrado, 1);
          resolve(indiceProductoEncontrado);
        } else {
          reject(new Error("**** Error Producto no encontrado"));
        }
      }, 1000);
    });
  }
  
  LeerProductos()
    .then(() => {
      let nombreProductoAEliminar = "Pixel 5";
      return comprarProducto(nombreProductoAEliminar);
    })
    .then(indiceEliminado => {
      console.log(`Producto eliminado en el índice: ${indiceEliminado}`);
      console.log("Lista de productos después de eliminar:");
      console.table(listaDeProductos);
    })
    .catch(error => {
      console.error(error.message);
    });