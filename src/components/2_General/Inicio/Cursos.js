import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import Loading from '../../1_Helpers/Loading';
//------------------- 1.- CSS Style && .env ---------------
const baseURL = process.env.REACT_APP_RUTA_PRINCIPAL;
//------------------- 2.- Some functions ------------------
//------------------- 3.- PRINCIAPAL COMPONENT ------------
export default function Cursos({ mostrarMensaje }) {
    const [cursos, setCursos] = useState([]);
    const [cargandoCursos, setCargandoCursos] = useState(true);
    //--------------------- 3.1- Functions---------------
    useEffect(() => {
        async function cargarCursos() {
            try {
                setCargandoCursos(true);
                const { data } = await Axios.get(baseURL + '/curso/getCursos');
                setCursos(data.result);
                setCargandoCursos(false);
            } catch (error) {
                console.log(error);
                mostrarMensaje(error.response.data.message, 1);
                setCargandoCursos(false);
            }
        }
        cargarCursos();
    }, [mostrarMensaje])
    //---------------------- 3.2 Return------------------
    if (cargandoCursos) {
        <Loading/>
    }
    return (
        <div className="container border border-success text-center">
            <h5 className="pt-2 ">Todos los cursos</h5>
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
        </div>
    );
}
//------------------- 4 Other components ------------------