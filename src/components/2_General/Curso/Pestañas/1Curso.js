import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import Main from '../../../1_Helpers/Main';
import Contenido from './2Contenido';
import SignificadoColores from '../SignificadoColores';
import Material from '../Material';
import Loading from '../../../1_Helpers/Loading';

//------------------- 1.- CSS Style && .env ---------------
import '../../../../../node_modules/video-react/dist/video-react.css'
const baseURL = process.env.REACT_APP_RUTA_PRINCIPAL;
//------------------- 2.- Some functions ------------------
//------------------- 3.- PRINCIAPAL COMPONENT ------------
export default function Curso({ mostrarMensaje, match, usuario }) {
    const idCurso = match.params.id;
    const [curso, setCurso] = useState(null);
    const [cargandoCurso, setCargandoCurso] = useState(true);
    const [materialIndex, setMaterialIndex] = useState(null);
    const [generandoInscripcion, setGenerandoInscripcion] = useState(false);
    const [bloquearMateriales, setBloquearMateriales] = useState(null);
    const [botonInscripcionActivado, setBotonInscripcionActivado] = useState(null);
    const [fecha, setFecha] = useState(null);
    //--------------------- 3.1- Functions---------------
    useEffect(() => {
        async function getCursos() {
            try {
                setCargandoCurso(true);
                const { data: cursoActual } = await Axios.get(baseURL + `/curso/getCurso/${idCurso}`);
                //Cargamos todos los datos del curso a mostrar en pantalla
                setCurso(cursoActual.result);
                //Cargamos el 1er material de todo el curso para mostrarlo en pantalla
                let materialBienvenida = {
                    linkOfMaterial: cursoActual.result.videoBienvenida,
                    tipo: 1
                }
                setMaterialIndex(materialBienvenida);
                const { data: inscripcion } = await Axios.get(baseURL + `/alumno/auth/identificarInscripcion/${cursoActual.result._id}`);
                if (inscripcion.result.length === 0) {
                    //No tenemos inscripción, el bloqueo "materiales" debe estar en TRUE
                    setBloquearMateriales(true);
                    setBotonInscripcionActivado(false);
                } else {
                    //Si tenemos inscripción, el bloqueo de "materiales" debe estar en FALSE
                    setFecha(inscripcion.result.fechaInscripcion);
                    setBloquearMateriales(false);
                    setBotonInscripcionActivado(true);
                }
                setCargandoCurso(false);
            } catch (error) {
                setCargandoCurso(false);
                mostrarMensaje('Error al cargar el curso, reintente.', 1);
                console.log(error);
            }
        }
        getCursos();
    }, [mostrarMensaje, idCurso])

    function changeMaterialIndex(dataMaterial) {
        if (bloquearMateriales) {
            return;
        }
        setMaterialIndex(dataMaterial);
    }
    async function functionGenerarInscripcion() {
        try {
            setGenerandoInscripcion(true);
            const { data: inscripcion } = await Axios.post(baseURL + `/alumno/auth/realizarInscripcion/${curso._id}`)
            //Al realizar la inscripción, se realizan los cambios en los siguientes estados
            setFecha(inscripcion.result.fechaInscripcion);
            setBloquearMateriales(false);
            mostrarMensaje('Ahora puedes visualizar el contenido de las lecciones', 3);
            setBotonInscripcionActivado(true);
            //---------------------------------------------------------
            setGenerandoInscripcion(false);
        } catch (error) {
            setGenerandoInscripcion(false);
            mostrarMensaje("No se pudo generar inscripción, intente de nuevo.", 1);
            console.log(error);
        }
    }
    //---------------------- 3.2 Return------------------
    if (cargandoCurso) {
        return (
            <Main X_Y_Centered={true}>
                <Loading />
            </Main>
        );
    }
    return (
        <Main X_Y_Centered={false}>
            <div className="container pt-2 curso_container_principal">
                <ContornoYNombreDelCurso curso={curso} />
                <Material materialIndex={materialIndex} />
                {/** inicio TAB */}
                <Contenido
                    curso={curso}
                    changeMaterialIndex={changeMaterialIndex}
                    usuario={usuario}
                    mostrarMensaje={mostrarMensaje}
                    //Props para el boton de inscripción
                    generandoInscripcion={generandoInscripcion}
                    botonInscripcionActivado={botonInscripcionActivado}
                    functionGenerarInscripcion={functionGenerarInscripcion}
                    fecha={fecha}
                />
                {/** fin TAB */}
                {
                    //Si botonInscripcionActivado esta en FALSE, se muestra siginificado de colores
                    botonInscripcionActivado && <SignificadoColores />
                }
            </div>
        </Main>
    );
}
//------------------- 4 Other components ------------------
function ContornoYNombreDelCurso({ curso }) {
    //Determinado el color de contorno del título del curso
    let classess = '';
    if (curso.categoria === "A") {
        classess = 'curso_titulo_rosa pl-3 pr-1 pb-1 mt-2'
    } else if (curso.categoria === "B") {
        classess = 'curso_titulo_naranja pl-3 pr-1 pb-1 mt-2'
    } else if (curso.categoria === "C") {
        classess = 'curso_titulo_morado pl-3 pr-1 pb-1 mt-2'
    } else if (curso.categoria === "D") {
        classess = 'curso_titulo_verde pl-3 pr-1 pb-1 mt-2'
    }
    return (
        <h4 className={classess}>{curso.nombre}</h4>
    );
}