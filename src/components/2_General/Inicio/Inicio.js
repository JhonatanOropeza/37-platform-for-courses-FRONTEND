import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import Main from '../../1_Helpers/Main';
import Carousel from './Carousel';
import Categorias from './Categorias';
import Cursos from './Cursos';
import Loading from '../../1_Helpers/Loading';

//------------------- 1.- CSS Style && .env ---------------
const baseURL = process.env.REACT_APP_RUTA_PRINCIPAL;
//------------------- 2.- Some functions ------------------
//------------------- 3.- PRINCIAPAL COMPONENT ------------
export default function Inicio({ usuario, mostrarMensaje }) {
    const [cursos, setCursos] = useState([]);
    const [cargandoCursos, setCargandoCursos] = useState(true);
    const [tituloCursos, setTituloCursos] = useState('Todos los cursos');
    const [cargandoClasificacion, setCargandoClasificacion] = useState(false);
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
    }, [mostrarMensaje]);

    async function cargarCursosPorCategoria(categoria) {
        const { data } = await Axios.post(baseURL + '/curso/getCursosPorCategoria',
            { categoria });
        setTituloCursos(`Cursos de la categoría: ${categoria}`);
        setCursos(data.result);
    }
    //---------------------- 3.2 Return------------------
    if (cargandoCursos) {
        <Loading />
    }
    return (
        <Main X_Y_Centered={false}>
            <Carousel></Carousel>
            <Categorias cargarCursosPorCategoria={cargarCursosPorCategoria} mostrarMensaje={mostrarMensaje}></Categorias>
            <Cursos usuario={usuario} mostrarMensaje={mostrarMensaje} cursos={cursos} tituloCursos={tituloCursos}></Cursos>
        </Main>
    );
}
//------------------- 4 Other components ------------------
