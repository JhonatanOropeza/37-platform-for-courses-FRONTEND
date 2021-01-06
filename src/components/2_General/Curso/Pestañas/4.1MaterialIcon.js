import React, { useState } from 'react';
import Axios from 'axios';

import video from '../../../../images/iconos/videoChico.png';
import infografia from '../../../../images/iconos/infografiaChico.png';
import actividad from '../../../../images/iconos/actividadChico.png';
import Examen from './4.2Examen';

//------------------- 1.- CSS Style && .env ---------------
const baseURL = process.env.REACT_APP_RUTA_PRINCIPAL;
//------------------- 2.- Some functions ------------------
//------------------- 3.- PRINCIAPAL COMPONENT ------------
export default function MaterialeIcon({
    materiales,
    actualizarMaterialDelCurso,
    actualizarExamenDelCurso,
    leccion,
    mostrarMensaje,
    bloquearMateriales,
    chanageMaterialInicio
}) {
    const [actualizandoMaterial, setActualizandoMaterial] = useState(false);
    //--------------------- 3.1- Functions---------------
    async function onSubmitMaterial(material) {
        //Si los materiales estan bloqueados, no servirá el botón
        if (bloquearMateriales) { return; }
        //Si el material ya esta en verde, solo cambiamos de material
        if (material.estado === -1) {
            chanageMaterialInicio(material);
            return;
        }
        //Si el botón esta trabajando, no dejamos que envíe otra petición
        if (actualizandoMaterial) { return; }
        //Generando documento en bd para cambiar el botón a verde
        try {
            setActualizandoMaterial(true);
            await Axios.post(baseURL + `/ZRA/auth/materialAlumno/post_materialAlumno/${material._id}`);
            actualizarMaterialDelCurso(material);
            setActualizandoMaterial(false);
        } catch (error) {
            setActualizandoMaterial(false);
            mostrarMensaje(error.response.data.message, 1)
        }
    }
    //---------------------- 3.2 Return------------------
    return (
        <>
            {
                materiales.map((material) => {
                    let classes = "";
                    if (material.estado === -2) { classes = "bg-secondary rounded img-fluid"; }
                    if (material.estado === -1) { classes = "bg-success rounded img-fluid"; }
                    if (material.estado >= 0 && material.estado <= 7) { classes = "bg-danger rounded img-fluid"; }
                    if (material.estado >= 8) { classes = "bg-success rounded img-fluid"; }

                    return (
                        <div key={material._id} className="col-3 col-md-3 col-lg-2  text-center pt-1 pb-1 pl-1 pr-1">
                            {material.tipo === 1 &&
                                <button type="button" className="BUTTON_OF_MATERIAL">
                                    <img src={video} alt="" onClick={() => onSubmitMaterial(material)} className={classes} />
                                </button>
                            }
                            {material.tipo === 2 &&
                                <button type="button" className="BUTTON_OF_MATERIAL" >
                                    <img src={infografia} alt="" onClick={() => onSubmitMaterial(material)} className={classes} />
                                </button>
                            }
                            {material.tipo === 3 &&
                                <button type="button" className="BUTTON_OF_MATERIAL" >
                                    <img src={actividad} alt="" onClick={() => onSubmitMaterial(material)} className={classes} />
                                </button>
                            }
                            {material.tipo === 4 &&
                                <Examen
                                    leccion={leccion}
                                    classes={classes}
                                    materialExamen={material}
                                    actualizarExamenDelCurso={actualizarExamenDelCurso}
                                />
                            }
                        </div>
                    )
                }

                )
            }
        </>
    );
}
//------------------- 4 Other components ------------------