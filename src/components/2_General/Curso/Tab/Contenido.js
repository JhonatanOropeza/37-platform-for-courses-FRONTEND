import React from 'react';

import Leccion from './Leccion';
//------------------- 1.- CSS Style && .env ---------------
//------------------- 2.- Some functions ------------------
//------------------- 3.- PRINCIAPAL COMPONENT ------------
export default function Contenido({ curso, changeMaterialIndex, usuario }) {
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
                {
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
                <div className="tab-pane fade show active p-2" id="descripcion" role="tabpanel" aria-labelledby="descripcion-tab">
                    {curso.descripcion}
                </div>
                <div className="tab-pane fade p-2" id="temario" role="tabpanel" aria-labelledby="temario-tab">
                    {curso.contenido}
                </div>
                {
                    curso.NIVELES.map((nivel, i) => (
                        <div
                            key={nivel._id}
                            className="tab-pane fade"
                            id={`nivel${i + 1}`}
                            role="tabpanel"
                            aria-labelledby={`nivel${i + 1}-tab`}
                        >
                            <Leccion nivel={nivel} changeMaterialIndex={changeMaterialIndex} usuario={usuario}/>
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