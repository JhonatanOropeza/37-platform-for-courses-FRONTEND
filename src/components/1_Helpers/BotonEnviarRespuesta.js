import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import 'moment/locale/es';

//------------------- 1.- CSS Style && .env ---------------
//------------------- 2.- Some functions ------------------
//------------------- 3.- PRINCIAPAL COMPONENT ------------
export default function BotonEnviarRespuesta({
    colorDelBoton,
    cargando,
    mensajeBotonInicio,
    mensajeCargando,
    mensajeBotonFinal,
    botonSinPresionarFALSE,
    functionOnClick,
    conFecha,
    fecha
}) {
    //--------------------- 3.1- Functions---------------
    //---------------------- 3.2 Return------------------
    if (cargando) {
        //Si se esta ejecutando la petición al BK
        return (
            <button className={`btn btn-${colorDelBoton}`} type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />  {mensajeCargando}
            </button>
        );
    }
    if (botonSinPresionarFALSE === false) {
        //El boton no ha sido presionado
        return (
            <button className={`btn btn-${colorDelBoton}`} type="button" onClick={functionOnClick}>
                {mensajeBotonInicio}
            </button>
        );
    } else {
        //El boton fue presionado y la acción termino
        if (conFecha) {
            return <p className="m-0">{mensajeBotonFinal}<Moment fromNow>{fecha}</Moment></p>
        }else{
            return <p className="m-0">{mensajeBotonFinal}</p>
        }
    }
}
//------------------- 4 Other components ------------------