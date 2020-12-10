import React from 'react';

import videoChico from '../../../images/iconos/videoChico.png';
import infografiaChico from '../../../images/iconos/infografiaChico.png';
import actividadChico from '../../../images/iconos/actividadChico.png';
import examenChico from '../../../images/iconos/examenChico.png';

import Examen from './Examen';
//------------------- 1.- CSS Style && .env ---------------
//------------------- 2.- Some functions ------------------
//------------------- 3.- PRINCIAPAL COMPONENT ------------
export default function Contenido() {
    //--------------------- 3.1- Functions---------------
    //---------------------- 3.2 Return------------------
    return (
        <div className="container mt-2">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" id="descripcion-tab" data-toggle="tab" href="#descripcion" role="tab" aria-controls="descripcion" aria-selected="true">Descripción</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="temario-tab" data-toggle="tab" href="#temario" role="tab" aria-controls="temario" aria-selected="false">Temario</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="nivel1-tab" data-toggle="tab" href="#nivel1" role="tab" aria-controls="nivel1" aria-selected="false">Nivel 1</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="nivel2-tab" data-toggle="tab" href="#nivel2" role="tab" aria-controls="nivel2" aria-selected="false">Nivel 2</a>
                </li>
            </ul>
            <div className="tab-content bg-white border border-top-0" id="myTabContent">
                <div className="tab-pane fade show active" id="descripcion" role="tabpanel" aria-labelledby="descripcion-tab">
                    Descripción: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </div>
                <div className="tab-pane fade" id="temario" role="tabpanel" aria-labelledby="temario-tab">
                    Temario: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </div>
                <div className="tab-pane fade" id="nivel1" role="tabpanel" aria-labelledby="nivel1-tab">
                    <Nivel1 />
                </div>
                <div className="tab-pane fade" id="nivel2" role="tabpanel" aria-labelledby="nivel2-tab">
                    <Nivel2 />
                </div>
            </div>
        </div >
    );
}
//------------------- 4 Other components ------------------

function Nivel1() {
    return (
        <div className="container">
            <div className="row ">
                <div className="col-4 col-md-2 col-lg-2  CURSO_CONTAINER_LECCION">
                    <h6>Lección 1</h6>
                </div>
                <div className="col-12 col-md-10 col-lg-10  ">
                    <div className="row">
                        <div className="col-3 col-md-3 col-lg-2  text-center pt-1 pb-1 pl-1 pr-1">
                            <img src={videoChico} alt="" className="bg-secondary rounded img-fluid" />
                        </div>
                        <div className="col-3 col-md-3 col-lg-2  text-center pt-1 pb-1 pl-1 pr-1">
                            <img src={videoChico} alt="" className="bg-success rounded img-fluid" />
                        </div>
                        <div className="col-3 col-md-3 col-lg-2  text-center pt-1 pb-1 pl-1 pr-1">
                            <img src={infografiaChico} alt="" className="bg-secondary rounded img-fluid" />
                        </div>
                        <div className="col-3 col-md-3 col-lg-2  text-center pt-1 pb-1 pl-1 pr-1">
                            <img src={infografiaChico} alt="" className="bg-success rounded img-fluid" />
                        </div>
                        <div className="col-3 col-md-3 col-lg-2  text-center pt-1 pb-1 pl-1 pr-1">
                            <img src={actividadChico} alt="" className="bg-secondary rounded img-fluid" />
                        </div>
                        <div className="col-3 col-md-3 col-lg-2  text-center pt-1 pb-1 pl-1 pr-1">
                            <img src={actividadChico} alt="" className="bg-success rounded img-fluid" />
                        </div>
                        <Examen/>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Nivel2() {
    return (
            <div className="container">
                <div className="row ">
                    <div className="col-4 col-md-2 col-lg-2  CURSO_CONTAINER_LECCION">
                        <h6>Lección 1</h6>
                    </div>
                    <div className="col-12 col-md-10 col-lg-10  ">
                        <div className="row">
                            <div className="col-3 col-md-3 col-lg-2  text-center pt-1 pb-1 pl-1 pr-1">
                                <img src={videoChico} alt="" className="bg-secondary rounded img-fluid" />
                            </div>
                            <div className="col-3 col-md-3 col-lg-2  text-center pt-1 pb-1 pl-1 pr-1">
                                <img src={videoChico} alt="" className="bg-success rounded img-fluid" />
                            </div>
                            <div className="col-3 col-md-3 col-lg-2  text-center pt-1 pb-1 pl-1 pr-1">
                                <img src={infografiaChico} alt="" className="bg-secondary rounded img-fluid" />
                            </div>
                            <div className="col-3 col-md-3 col-lg-2  text-center pt-1 pb-1 pl-1 pr-1">
                                <img src={infografiaChico} alt="" className="bg-success rounded img-fluid" />
                            </div>
                            <div className="col-3 col-md-3 col-lg-2  text-center pt-1 pb-1 pl-1 pr-1">
                                <img src={actividadChico} alt="" className="bg-secondary rounded img-fluid" />
                            </div>
                            <div className="col-3 col-md-3 col-lg-2  text-center pt-1 pb-1 pl-1 pr-1">
                                <img src={actividadChico} alt="" className="bg-success rounded img-fluid" />
                            </div>
                            <div className="col-3 col-md-3 col-lg-2  text-center pt-1 pb-1 pl-1 pr-1">
                                <img src={examenChico} alt="" className="bg-danger rounded img-fluid" />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-4 col-md-2 col-lg-2  CURSO_CONTAINER_LECCION">
                        <h6>Lección 2</h6>
                    </div>
                    <div className="col-12 col-md-10 col-lg-10">
                        <div className="row">
                            <div className="col-3 col-md-3 col-lg-2  text-center pt-1 pb-1 pl-1 pr-1">
                                <img src={videoChico} alt="" className="bg-secondary rounded img-fluid" />
                            </div>
                            <div className="col-3 col-md-3 col-lg-2  text-center pt-1 pb-1 pl-1 pr-1">
                                <img src={videoChico} alt="" className="bg-success rounded img-fluid" />
                            </div>
                            <div className="col-3 col-md-3 col-lg-2  text-center pt-1 pb-1 pl-1 pr-1">
                                <img src={infografiaChico} alt="" className="bg-secondary rounded img-fluid" />
                            </div>
                            <div className="col-3 col-md-3 col-lg-2  text-center pt-1 pb-1 pl-1 pr-1">
                                <img src={infografiaChico} alt="" className="bg-success rounded img-fluid" />
                            </div>
                            <div className="col-3 col-md-3 col-lg-2  text-center pt-1 pb-1 pl-1 pr-1">
                                <img src={actividadChico} alt="" className="bg-secondary rounded img-fluid" />
                            </div>
                            <div className="col-3 col-md-3 col-lg-2  text-center pt-1 pb-1 pl-1 pr-1">
                                <img src={actividadChico} alt="" className="bg-success rounded img-fluid" />
                            </div>
                            <div className="col-3 col-md-3 col-lg-2  text-center pt-1 pb-1 pl-1 pr-1">
                                <img src={examenChico} alt="" className="bg-success rounded img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}