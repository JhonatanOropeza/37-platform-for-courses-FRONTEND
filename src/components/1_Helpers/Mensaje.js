import React from 'react';
import { VscError } from 'react-icons/vsc';

//------------------- 1.- CSS Style && .env ---------------
//------------------- 2.- Some functions ------------------
//------------------- 3.- PRINCIAPAL COMPONENT ------------
export default function Mensaje({ datosMensaje, ocultarMensaje }) {
    //--------------------- 3.1- Functions---------------
    let classesDiv = '';
    let classesIcon = '';
    if (datosMensaje.tipo === 1) {
        //Si el tipo de mensaje es de error
        classesDiv = 'alert alert-danger p-1 m-0 text-center';
        classesIcon = 'MENSAJE_DE_ALERTA_BOTON_1';
    } else if (datosMensaje.tipo === 2) {
        //Si el tipo de error es de advertencia
        classesDiv = 'alert alert-warning p-1 m-0 text-center';
        classesIcon = 'MENSAJE_DE_ALERTA_BOTON_2';
    } else if (datosMensaje.tipo === 3) {
        //Si el tipo de error es de "éxito"
        classesDiv = 'alert alert-success p-1 m-0 text-center';
        classesIcon = 'MENSAJE_DE_ALERTA_BOTON_3';
    }
    //---------------------- 3.2 Return------------------
    if (!datosMensaje.mensaje) {
        return null;
    }
    return (
        <div className="MENSAJE_DE_ALERTA">
            <div className={classesDiv}>
                {datosMensaje.mensaje}
                <button
                    className="btn bg-transparent p-0 pl-2 pr-2"
                    onClick={ocultarMensaje}>
                    <VscError className={classesIcon} />
                </button>
            </div>
        </div>
    );
}
//------------------- 4 Other components ------------------