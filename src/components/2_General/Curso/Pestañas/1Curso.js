import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import Main from '../../../1_Helpers/Main';
import Contenido from './2Contenido';
import SignificadoColores from '../SignificadoColores';
import Material from '../MaterialInicio';
import Loading from '../../../1_Helpers/Loading';
//------------------- 1.- CSS Style && .env ---------------
import '../../../../../node_modules/video-react/dist/video-react.css'
const baseURL = process.env.REACT_APP_RUTA_PRINCIPAL;
//------------------- 2.- Some functions ------------------
//------------------- 3.- PRINCIAPAL COMPONENT ------------
export default function Curso({ mostrarMensaje, match}) {
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
                //1.- Verificando si tenemos inscripción
                const { data: inscripcion } = await Axios.get(baseURL + `/alumno/auth/identificarInscripcion/${idCurso}`);
                if (inscripcion.result.length === 0) {
                    //No tenemos inscripción, el bloqueo "materiales" debe estar en TRUE
                    const { data: cursoActual } = await Axios.get(baseURL + `/curso/getCurso/${idCurso}`);
                    //Cargamos todos los datos del curso a mostrar en pantalla
                    setCurso(cursoActual.result);
                    setBloquearMateriales(true);
                    setBotonInscripcionActivado(false);
                    //Cargamos el 1er material de todo el curso para mostrarlo en pantalla
                    let materialBienvenida = {
                        linkOfMaterial: cursoActual.result.videoBienvenida,
                        tipo: 1//Es 1 porque siempre será el video de bienvenida
                    }
                    setMaterialIndex(materialBienvenida);
                } else {
                    //Si tenemos inscripción, el bloqueo de "materiales" debe estar en FALSE
                    const { data: cursoActual } = await Axios.get(baseURL + `/curso/auth/getCursoOfUser/${idCurso}`);
                    //Cargamos todos los datos del curso a mostrar en pantalla
                    setCurso(cursoActual.result);
                    setFecha(inscripcion.result.fechaInscripcion);
                    setBloquearMateriales(false);
                    setBotonInscripcionActivado(true);
                    //Cargamos el 1er material de todo el curso para mostrarlo en pantalla
                    let materialBienvenida = {
                        linkOfMaterial: cursoActual.result.videoBienvenida,
                        tipo: 1//Es 1 porque siempre será el video de bienvenida
                    }
                    setMaterialIndex(materialBienvenida);
                }

                setCargandoCurso(false);
            } catch (error) {
                setCargandoCurso(false);
                mostrarMensaje('Error al cargar el curso, reintente.', 1);
                console.log(error);
            }
        }
        getCursos();
    }, [mostrarMensaje, idCurso]);

    //Se ejecuta cuando damos click a ún material que no ha sido visualizado
    function actualizarMaterialDelCurso(materialToChange) {
        setCurso(() => {
            //1.- Iterando para llegar a cada material
            function recorridoParaActualizar() {
                let niveles = curso.NIVELES;
                niveles.forEach((nivel => {
                    nivel.LECCIONES.forEach(leccion => {
                        leccion.MATERIALES.forEach(material => {
                            // 1.2.- Actualizando el nivel
                            if (material._id === materialToChange._id) {
                                material.estado = -1;
                            }
                            return material;
                        })
                    })
                }));
                return niveles;
            }
            const nivelesActualizados = recorridoParaActualizar();
            var aux = {};
            aux = curso;
            delete aux.NIVELES;
            aux.NIVELES = nivelesActualizados;
            return aux;
        })
        setMaterialIndex(materialToChange);
    }

    //Se ejecuta después de que un examen fue contestado y calificado
    function actualizarExamenDelCurso(materialToChange, nuevaCalificacion) {
        //LAs siguientes dos variables no ayduaran a mostrar en la pantalla principal
        //EL er material de la lección que se presento el examen.
        let numeroDeNivel = 0;
        let numeroDeLeccion = 0;
        //1.- Iterando para llegar a cada material
        function recorridoParaActualizar() {
            let niveles = curso.NIVELES;
            niveles.forEach(((nivel, i) => {
                nivel.LECCIONES.forEach((leccion, j) => {
                    leccion.MATERIALES.forEach(material => {
                        // 1.2.- Actualizando el nivel
                        if (material._id === materialToChange._id) {
                            material.estado = nuevaCalificacion;
                            numeroDeNivel = i;
                            numeroDeLeccion = j;
                        }
                        return material;
                    })
                })
            }));
            return niveles;
        }
        const nivelesActualizados = recorridoParaActualizar();
        var aux = {};
        aux = curso;
        delete aux.NIVELES;
        aux.NIVELES = nivelesActualizados;
        //Actualizamos el curso
        setCurso(aux);
        //Colocamos en pantalla como amterial visible el primer amterial de todo el nivel
        setMaterialIndex(nivelesActualizados[numeroDeNivel].LECCIONES[numeroDeLeccion].MATERIALES[0]);
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

    function chanageMaterialInicio(newMaterial) {
        setMaterialIndex(newMaterial)
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
                    actualizarMaterialDelCurso={actualizarMaterialDelCurso}
                    actualizarExamenDelCurso={actualizarExamenDelCurso}
                    chanageMaterialInicio={chanageMaterialInicio}
                    //Props para el boton de inscripción
                    generandoInscripcion={generandoInscripcion}
                    botonInscripcionActivado={botonInscripcionActivado}
                    functionGenerarInscripcion={functionGenerarInscripcion}
                    fecha={fecha}
                    //Props para boton de materiales y generar materialAlumno
                    mostrarMensaje={mostrarMensaje}
                    bloquearMateriales={bloquearMateriales}
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