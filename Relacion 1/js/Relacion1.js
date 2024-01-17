//todo 1. Realiza una pomesa la cual muestre "promesa cumplida" si control = true y "promesa no cumplida" en caso contrario. 


let promesa = new Promise((resolve, reject) => {
    
    let control = true; //? Asigno el control a true.
    setTimeout(function(){
        console.log("----- Apartado 1 ----")
        if (control){
            resolve("Promesa cumplida con exito"); //? Cuando la promesa se ha cumplido
        } else{
            reject("Promesa no cumplida!!"); //! Cuando la promesa no se ha cumplido.
        }
    },2000)
});

//todo Para ejecutar y manejar la promesa
promesa
    .then((mensaje) => {
        console.log(mensaje); //? En caso de resolve
    })
    .catch((error) => { //! En caso de reject
        console.error(error);
    });




//todo 2. Realiza una promesa que devuelve "Cara" si se cumple y "Cruz" en caso de no ser cumplida. Los casos son nº par aleatorio = "Cara", caso contrario "Cruz".  Evalúa el resultado de la promesa con los métodos then y catch. 



let promesaNumAleatorio = new Promise((resolve, reject) => {

    

    let aleatorioHasta50 = Math.floor(Math.random() * 51); //? Numero aleatorio hasta 50
    
    setTimeout(function(){
        console.log("----- Apartado 2 ----")
        console.log("%cNumero aleatorio: %c" + aleatorioHasta50, "font-size: large;", "color: orange; font-size: large;");


        if (aleatorioHasta50 % 2 == 0){ //? Si el numero es par, devuelve Cara
            resolve("Cara")
        } else {
            reject("Cruz") //? Si el numero no es par, devuelve Cruz 
        }
    },2000);
});


promesaNumAleatorio
    .then((LadoCara) => {
        console.log("%c"+ LadoCara , "color: green;"); //? En caso de resolve
    })
    .catch((ladoCruz) => { //! En caso de reject
        console.log("%c" + ladoCruz, "color: orange;");
    });








