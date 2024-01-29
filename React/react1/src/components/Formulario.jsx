import React , {useState} from "react";

function añadirUsers(){
<>
   <hr /> 
    <form>
    <div>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" />
    </div>
    <div>
        <label htmlFor="apellido">Apellido:</label>
        <input type="text" id="apellido" />
    </div>
    <div>
        <label htmlFor="edad">Edad:</label>
        <input type="number" id="edad" />
    </div>
    <button type="submit">Enviar</button>
    <button type="reset">Reset</button>
</form>

</>
}

export default añadirUsers;