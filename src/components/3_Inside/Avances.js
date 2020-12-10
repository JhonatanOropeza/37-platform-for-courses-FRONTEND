import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdSchool } from 'react-icons/md';

import Main from '../1_Helpers/Main';
import A1 from '../../images/cursos/A1.fw.png';
//------------------- 1.- CSS Style && .env ---------------
//------------------- 2.- Some functions ------------------
//------------------- 3.- PRINCIAPAL COMPONENT ------------
export default function Avances() {
    //--------------------- 3.1- Functions---------------
    //---------------------- 3.2 Return------------------
    return (
        <Main>
            <div className="container mt-3">
                {/** DATOS DEL ALUMNO*/}
                <div>
                    <h4><BsFillPersonFill /> Datos del alumno</h4>
                    <ul className="border border-secondary rounded bg-white">
                        <li>Nombre: </li>
                        <li>Correo: </li>
                    </ul>
                </div>
                {/** CURSOS DEL ALUMNO*/}
                <div className="">
                    <h4><MdSchool /> Cursos del alumno</h4>
                </div>
                <div className="container">
                    <div className="row border border-secondary rounded bg-white pt-1 pb-2 mb-2">
                        <div className="col-12 text-center ">
                            <h3>Curso 1</h3>
                        </div>
                        <div className="col-12 col-md-6 ">
                            <div className="row">
                                <div className="col-4 p-0">
                                    <img src={A1} alt="" className="rounded AVANCES_ICON_CENTERED" />
                                </div>
                                <div className="col-8">
                                    <p className="m-0">Total de nivels: 2</p>
                                    <p className="m-0">Total de lecciones: 3</p>
                                    <p className="m-0">Evaluaciones a presentar: 3</p>
                                    <p className="m-0">Evaluaciones presentados: 3</p>
                                    <p className="m-0">Evaluciones acreditadas: 1</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <p className="m-0">Avance del curso</p>
                            <div className="progress">
                                <div className="progress-bar bg-warning text-dark" style={{ width: "33%" }} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">33%</div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </Main>
    );
}
//------------------- 4 Other components ------------------