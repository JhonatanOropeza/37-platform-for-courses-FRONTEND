import React from 'react';
import { Link } from 'react-router-dom';

//------------------- 1.- CSS Style && .env ---------------
//------------------- 2.- Some functions ------------------
//------------------- 3.- PRINCIAPAL COMPONENT ------------
export default function Cursos({ cursos, tituloCursos }) {
    //--------------------- 3.1- Functions---------------
    //---------------------- 3.2 Return------------------

    return (
        <div className="container border border-success text-center">
            <h5 className="pt-2 ">{tituloCursos}</h5>
            { cursos.length === 0
                ? (
                    <h4>Aún no hay cursos para esta categoría</h4>
                ) : (
                    <div className="row d-flex justify-content-center">
                        {
                            cursos.map((curso) => (
                                <Link
                                    key={curso._id}
                                    to={`/curso/${curso._id}`}
                                    className="col-6 col-sm-4 col-md-3 col-lg-2 border border-dark"
                                >
                                    <img src={curso.linkOfIcon} alt="" className="rounded" /><p>{curso.nombre}</p>
                                </Link>
                            ))
                        }
                    </div>
                )
            }
        </div >
    );
}
//------------------- 4 Other components ------------------