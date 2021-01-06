import React from 'react';

import MaterialIcon from './4.1MaterialIcon';
//import examenChico from '../../../../images/iconos/examenChico.png';
//------------------- 1.- CSS Style && .env ---------------
//------------------- 2.- Some functions ------------------
//------------------- 3.- PRINCIAPAL COMPONENT ------------
export default function Leccion({
    nivel,
    actualizarMaterialDelCurso,
    actualizarExamenDelCurso,
    botonInscripcionActivado,
    mostrarMensaje,
    bloquearMateriales,
    chanageMaterialInicio
}) {
    //--------------------- 3.1- Functions---------------
    const lecciones = nivel.LECCIONES;
    //---------------------- 3.2 Return------------------
    return (
        <div className="container">
            {
                lecciones.map((leccion, i) => (
                    <div key={i} className="row ">
                        {/** ---------------------------- */}
                        {/** -------- MATERIALES -------- */}
                        {/** ---------------------------- */}
                        <div className="col-4 col-md-2 col-lg-2  CURSO_CONTAINER_LECCION">
                            <h6>{leccion.nombre}</h6>
                        </div>
                        <div className="col-12 col-md-10 col-lg-10 border border-dark">
                            <div className="row">

                                <MaterialIcon
                                    materiales={leccion.MATERIALES}
                                    actualizarMaterialDelCurso={actualizarMaterialDelCurso}
                                    actualizarExamenDelCurso={actualizarExamenDelCurso}
                                    leccion={leccion}
                                    chanageMaterialInicio={chanageMaterialInicio}
                                    //Props para boton de materiales y generar materialAlumno
                                    mostrarMensaje={mostrarMensaje}
                                    bloquearMateriales={bloquearMateriales}

                                />
                                
                            </div>
                        </div>
                        {
                            //Mostrando mensaje cuando no se esta inscrito
                            botonInscripcionActivado === false && <p className="col-12">
                                Nota: podrás visualizar el contenido de cada link y realizar las evaluaciones cuando te inscribas al curso (pestaña "Descripción").</p>
                        }
                    </div>
                ))
            }
        </div>
    );
}

//---------------------------- 4 Other components -------------------------------------
