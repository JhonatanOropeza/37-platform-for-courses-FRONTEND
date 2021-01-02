import React from 'react';

import Leccion from './3Leccion';
import BotonEnviarRespuesta from '../../../1_Helpers/BotonEnviarRespuesta';
//------------------- 1.- CSS Style && .env ---------------
//------------------- 2.- Some functions ------------------
//------------------- 3.- PRINCIAPAL COMPONENT ------------
export default function Contenido({
    curso,
    changeMaterialIndex,
    usuario,
    botonInscripcionActivado,
    generandoInscripcion,
    functionGenerarInscripcion,
    fecha
}) {
    //--------------------- 3.1- Functions---------------
    //---------------------- 3.2 Return------------------
    return (
        <div className="container mt-2">
            {/** ------------------------------------------------ */}
            {/** ---------- 1.- Inicio cabezara de tab ---------- */}
            {/** ------------------------------------------------ */}
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" id="descripcion-tab" data-toggle="tab" href="#descripcion" role="tab" aria-controls="descripcion" aria-selected="true">Descripción</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="temario-tab" data-toggle="tab" href="#temario" role="tab" aria-controls="temario" aria-selected="false">Temario</a>
                </li>
                {usuario &&
                    curso.NIVELES.map((nivel, i) => (
                        <li className="nav-item" key={i}>
                            <a
                                className="nav-link"
                                id={`nivel${i + 1}-tab`}
                                data-toggle="tab"
                                href={`#nivel${i + 1}`}
                                role="tab"
                                aria-controls={`nivel${i + 1}`}
                                aria-selected="false"
                            >
                                {nivel.nombre}
                            </a>
                        </li>
                    ))
                }
            </ul>
            {/** ------------------------------------------------ */}
            {/** ---------..- 1.- Fin cabezara de tab - --------- */}
            {/** ------------------------------------------------ */}

            {/** ------------------------------------------------ */}
            {/** ------------ 2.- Inicio cuerpo tab ------------- */}
            {/** ------------------------------------------------ */}
            <div className="tab-content bg-white border border-top-0" id="myTabContent">
                <div className="tab-pane fade show active p-2 mb-2" id="descripcion" role="tabpanel" aria-labelledby="descripcion-tab">
                    <p>{curso.descripcion}</p>
                    <BotonEnviarRespuesta
                        colorDelBoton="info"
                        cargando={generandoInscripcion}
                        mensajeBotonInicio="Inscribirse"
                        mensajeCargando="Generando inscripción"
                        mensajeBotonFinal="Te inscribiste al curso hace "
                        botonSinPresionarFALSE={botonInscripcionActivado}
                        functionOnClick={functionGenerarInscripcion}
                        conFecha={true}
                        fecha={fecha}
                    />
                </div>
                <div className="tab-pane fade p-2" id="temario" role="tabpanel" aria-labelledby="temario-tab">
                    <Temario temario={curso.temario}></Temario>
                </div>
                {/** ------------ Imprimiendo cada NIVEL ------------- */}
                {usuario &&
                    curso.NIVELES.map((nivel, i) => (
                        <div
                            key={nivel._id}
                            className="tab-pane fade"
                            id={`nivel${i + 1}`}
                            role="tabpanel"
                            aria-labelledby={`nivel${i + 1}-tab`}
                        >
                            <Leccion
                                nivel={nivel}
                                changeMaterialIndex={changeMaterialIndex}
                                usuario={usuario}
                                //Para saber si msotrar o no la invitación aisncribirse
                                botonInscripcionActivado={botonInscripcionActivado}
                            />
                        </div>
                    ))
                }
            </div>
            {/** ------------------------------------------------ */}
            {/** -------------- 2.- Fin cuerpo tab -------------- */}
            {/** ------------------------------------------------ */}
        </div >
    );
}
//------------------- 4 Other components ------------------
function Temario({ temario }) {
    return (
        <ul>
            {temario.map((nivel, i) => (
                <li className="UL-SQUARE" key={i}>
                    {nivel[0]}
                    <ul>
                        {nivel.map((leccion, i) => (
                            i > 0 &&
                            <li className="UL-DISC" key={i}>
                                {leccion}
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    );
}