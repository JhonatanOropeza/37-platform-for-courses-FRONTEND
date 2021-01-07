import React from 'react';
import { Link } from 'react-router-dom';

//------------------- 1.- CSS Style && .env ---------------
//------------------- 2.- Some functions ------------------
//------------------- 3.- PRINCIAPAL COMPONENT ------------
export default function Cursos({ cursos, tituloCursos }) {
    //--------------------- 3.1- Functions---------------
    //---------------------- 3.2 Return------------------

    return (
        <div className="container text-center d-flex justify-content-center">
            <div className="row">
                <div className="col-12">
                    <h5 className="pt-2 ">{tituloCursos}</h5>
                </div>
                {cursos.length === 0
                    ? (
                        <div className="col-12 d-flex justify-content-center">
                            <div className="CURSOS_MENSAJE">
                                <h6>Aún no hay cursos para esta categoría</h6>
                            </div>
                        </div>
                    ) : (
                        <div className="col-12">
                            <div className="row d-flex justify-content-center">
                                {
                                    cursos.map((curso) => (
                                        <Link
                                            key={curso._id}
                                            to={`/curso/${curso._id}`}
                                            className="col-6 col-sm-4 col-md-3 col-lg-2"
                                        >
                                            <img src={curso.linkOfIcon} alt="" className="rounded" /><p>{curso.nombre}</p>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </div >
    );
}
//------------------- 4 Other components ------------------