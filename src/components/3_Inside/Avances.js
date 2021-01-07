import React, { useState, useEffect } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdSchool } from 'react-icons/md';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import Loading from '../1_Helpers/Loading';
import Main from '../1_Helpers/Main';
//------------------- 1.- CSS Style && .env ---------------
const baseURL = process.env.REACT_APP_RUTA_PRINCIPAL;
//------------------- 2.- Some functions ------------------
//------------------- 3.- PRINCIAPAL COMPONENT ------------
export default function Avances({ usuario, mostrarMensaje }) {
    const [cursosDelAlumno, setCursosDelAlumno] = useState([]);
    const [cargando, setCargando] = useState(false);
    //--------------------- 3.1- Functions---------------
    useEffect(() => {
        async function cargarCursosDelAlumno() {
            try {
                setCargando(true);
                const { data } = await Axios.get(baseURL + '/curso/auth/get_avancesDelAlumno');
                //console.log(data.result);
                setCursosDelAlumno(data.result);
                setCargando(false);
            } catch (error) {
                setCargando(false);
                mostrarMensaje(error.response.data.message, 1);
            }
        }
        cargarCursosDelAlumno();
    }, [mostrarMensaje])
    //---------------------- 3.2 Return------------------
    if (cargando) {
        return (
            <Main X_Y_Centered={true}>
                <Loading />
            </Main>
        );
    }
    return (
        <Main>
            <div className="container mt-3 AVANCES_CONTAINER_PRINCIPAL">
                {/** DATOS DEL ALUMNO*/}
                <div>
                    <h4><BsFillPersonFill /> Datos del alumno</h4>
                    <ul className="border border-secondary rounded bg-white">
                        <li>Nombre: {usuario.nombre}</li>
                        <li>Correo: {usuario.correo}</li>
                    </ul>
                </div>
                {/** CURSOS DEL ALUMNO*/}
                <div className="">
                    <h4><MdSchool /> Cursos del alumno</h4>
                </div>
                <div className="container">

                    {cursosDelAlumno.length === 0
                        ? (
                            <div className="col-12 d-flex justify-content-center">
                                <div className="MENSAJE_GENERICO">
                                    <h6>Aún no te has inscrito a algún curso de la plataforma.</h6>
                                </div>
                            </div>
                        ) : (
                            
                                cursosDelAlumno.map(curso => (
                                    <div className="row border border-secondary rounded bg-white pt-1 pb-2 mb-2" key={curso._id}>
                                        <div className="col-12 text-center ">
                                            <h3>{curso.nombre}</h3>
                                        </div>
                                        <div className="col-12 col-md-6 ">
                                            <div className="row">
                                                <Link to={`/curso/${curso._id}`} className="col-4 p-0">
                                                    <img src={curso.linkOfIcon} alt="" className="rounded AVANCES_ICON_CENTERED" />
                                                </Link>
                                                <div className="col-8">
                                                    <p className="m-0">Total de nivels: {curso.totalNiveles}</p>
                                                    <p className="m-0">Total de lecciones: {curso.totalLecciones}</p>
                                                    <p className="m-0">Evaluaciones a presentar: {curso.totalLecciones}</p>
                                                    <p className="m-0">Evaluaciones presentados: {curso.evalPresentadas}</p>
                                                    <p className="m-0">Evaluciones acreditadas: {curso.evalAcreditadas}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            {/** Se multiplica por 10 para obtener el avance entre 0 y 100% */}
                                            <BarraAvanceDelCurso puntuacion={curso.puntuacion * 10} />
                                        </div>
                                    </div>
                                ))
                        )
                    }



                </div>
            </div>
        </Main>
    );
}
//------------------- 4 Other components ------------------
function BarraAvanceDelCurso({ puntuacion }) {
    let classes = "";
    if (puntuacion <= 50) { classes = "progress-bar BARRA_AVANCES_NARANJA text-dark"; }
    if (puntuacion > 50 && puntuacion < 80) { classes = "progress-bar bg-warning text-dark"; }
    if (puntuacion >= 80 && puntuacion < 100) { classes = "progress-bar bg-info text-dark"; }
    if (puntuacion === 100) { classes = "progress-bar bg-suceess text-dark"; }
    return (
        <>
            <p className="m-0">Avance del curso:</p>
            {puntuacion === 0
                ? (
                    <p>Aún no has acreditado alguna evaluación del curso. Tu avance esta en cero (0).</p>
                ) : (
                    <div className="progress">
                        <div className={classes} style={{ width: `${puntuacion}%` }} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                            {puntuacion !== 0 && <>{puntuacion}%</>}
                        </div>
                    </div>
                )}
        </>
    );
}