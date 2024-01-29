// Ejemplo de componente simple en React

import React, { useState } from 'react';

function Contador() {
    //? contador es una variable 
    //? setContador es la variable que aumneta, empieza en 0.
    //? useState define la variable contador y setContador a 0.
    const [contador, setContador] = useState(0);


    return (
       <center>
        <br /><br /><br /><br />
         <div>
            Hola, mundo! <br /><br />
            <button onClick={() => { //* Agregamos el evento onClick
                setContador(contador + 1); //* SetContador aumenta cada vez que hacemos click en el boton
                console.log(contador); 
            }
            }>
            Sumar</button>
            <p>{contador}</p>  {/* Definimos un parrafo, con la variable contador que se ira incrementando cada vez que hagamos click en el boton */}

            <hr />

            <h1>Imagen que cuando hagamos hover se amplie </h1>

            

        </div>
       </center>
    );
}

export default Contador; //* Exportamos el componente Ejemplo