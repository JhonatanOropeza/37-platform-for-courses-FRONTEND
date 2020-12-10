import React from 'react';
import { BsFillCircleFill } from "react-icons/bs";
//------------------- 1.- CSS Style && .env ---------------
//------------------- 2.- Some functions ------------------
//------------------- 3.- PRINCIAPAL COMPONENT ------------
export default function SignificadoColores(){
//--------------------- 3.1- Functions---------------
//---------------------- 3.2 Return------------------
    return(
        <div className="container mt-2">
            <h6>Significado de los colores</h6>
            <p className="text-secondary m-0"><BsFillCircleFill/> No has visaulizado este material</p>
            <p className="text-success m-0"><BsFillCircleFill/> Ya has visualizado el material</p>
            <p className="text-danger mb-1"><BsFillCircleFill/> No has acreditado esta prueba</p>
        </div>
    );
}
//------------------- 4 Other components ------------------