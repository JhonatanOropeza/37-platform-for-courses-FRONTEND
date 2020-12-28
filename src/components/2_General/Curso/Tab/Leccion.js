import React from 'react';

import video from '../../../../images/iconos/videoChico.png';
import infografia from '../../../../images/iconos/infografiaChico.png';
import actividad from '../../../../images/iconos/actividadChico.png';
import Examen from './Examen';
//import examenChico from '../../../../images/iconos/examenChico.png';
//------------------- 1.- CSS Style && .env ---------------
//------------------- 2.- Some functions ------------------
//------------------- 3.- PRINCIAPAL COMPONENT ------------
export default function Leccion({ nivel, changeMaterialIndex, usuario, greenButton, buttonToGreen }) {
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
                        <div className="col-12 col-md-10 col-lg-10  ">
                            <div className="row">

                                {usuario
                                    ? (
                                        <MaterialesIconYESUser materiales={leccion.MATERIALES} changeMaterialIndex={changeMaterialIndex} />
                                    ) : (
                                        <MaterialesIconNOUser materiales={leccion.MATERIALES} changeMaterialIndex={changeMaterialIndex} buttonToGreen={buttonToGreen} greenButton={greenButton} />
                                    )
                                }
                                {/** ---------------------------- */}
                                {/** ---------- EXAMEN ---------- */}
                                {/** ---------------------------- */}
                                {
                                    usuario && <Examen leccion={leccion} />
                                }

                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

//---------------------------- 4 Other components -------------------------------------
function MaterialesIconNOUser({ materiales, changeMaterialIndex, buttonToGreen, greenButton }) {
    
    function onClickButton(material) {
        changeMaterialIndex(material);
        buttonToGreen(material._id)
    }
    return (
        <>
            {
                materiales.map((material) => (
                    <div key={material._id} className="col-3 col-md-3 col-lg-2  text-center pt-1 pb-1 pl-1 pr-1">
                        {material.tipo === 1 &&
                            <button className="BUTTON_OF_MATERIAL">
                                {
                                    material._id === greenButton
                                        ? (<img src={video} alt="" onClick={() => onClickButton(material)} className="bg-success rounded img-fluid" />)
                                        : (<img src={video} alt="" onClick={() => onClickButton(material)} className="bg-secondary rounded img-fluid" />)
                                }
                            </button>
                        }
                        {material.tipo === 2 &&
                            <button className="BUTTON_OF_MATERIAL">
                                {
                                    material._id === greenButton
                                        ? (<img src={infografia} alt="" onClick={() => onClickButton(material)} className="bg-success rounded img-fluid" />)
                                        : (<img src={infografia} alt="" onClick={() => onClickButton(material)} className="bg-secondary rounded img-fluid" />)
                                }
                            </button>
                        }
                        {material.tipo === 3 &&
                            <button className="BUTTON_OF_MATERIAL">
                                {
                                    material._id === greenButton
                                        ? (<img src={actividad} alt="" onClick={() => onClickButton(material)} className="bg-success rounded img-fluid" />)
                                        : (<img src={actividad} alt="" onClick={() => onClickButton(material)} className="bg-secondary rounded img-fluid" />)
                                }
                            </button>}
                    </div>
                ))
            }
        </>
    );
}

function MaterialesIconYESUser({ materiales, changeMaterialIndex }) {
    return (
        <>
            {
                materiales.map((material) => (
                    <div key={material._id} className="col-3 col-md-3 col-lg-2  text-center pt-1 pb-1 pl-1 pr-1">
                        {material.tipo === 1 &&
                            <button className="BUTTON_OF_MATERIAL">
                                <img src={video} alt="" onClick={() => changeMaterialIndex(material)} className="bg-secondary rounded img-fluid" />
                            </button>
                        }
                        {material.tipo === 2 &&
                            <button className="BUTTON_OF_MATERIAL">
                                <img src={infografia} alt="" onClick={() => changeMaterialIndex(material)} className="bg-secondary rounded img-fluid" />
                            </button>
                        }
                        {material.tipo === 3 &&
                            <button className="BUTTON_OF_MATERIAL">
                                <img src={actividad} alt="" onClick={() => changeMaterialIndex(material)} className="bg-secondary rounded img-fluid" />
                            </button>
                        }
                    </div>
                ))
            }
        </>
    );
}
