
import React, { useState } from 'react';

function ImagenHover(){
    const [scale, setScale] = useState(1); // Usamos el estado para controlar la escala
    return(
        <div>
            <center>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" width={200} alt="" style={{
                 transform: `scale(${scale})`,  //? Coge el valor de setScale y amplia la imagen un 120%.
                 transition: 'transform 0.5s ease'
            }}
            onMouseOver={() => setScale(1.2)} //? Amplía la imagen 1.2
            onMouseOut={() => setScale(1)} //? Regresa la imagen a su tamaño original
            />
            </center>
            <br /><br />
            <hr />
        </div>
    );
}

export default ImagenHover;