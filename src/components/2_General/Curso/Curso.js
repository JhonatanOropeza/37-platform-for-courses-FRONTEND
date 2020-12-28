import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import Main from '../../1_Helpers/Main';
import Contenido from './Tab/Contenido';
import SignificadoColores from './SignificadoColores';
import Material from './Material';
import Loading from '../../1_Helpers/Loading';

//------------------- 1.- CSS Style && .env ---------------
import '../../../../node_modules/video-react/dist/video-react.css'
const baseURL = process.env.REACT_APP_RUTA_PRINCIPAL;
//------------------- 2.- Some functions ------------------
//------------------- 3.- PRINCIAPAL COMPONENT ------------
export default function Curso({ mostrarMensaje, match, usuario }) {
    const idCurso = match.params.id;
    const [curso, setCurso] = useState(null);
    const [cargandoCurso, setCargandoCurso] = useState(true);
    const [materialIndex, setMaterialIndex] = useState(null);
    //--------------------- 3.1- Functions---------------
    useEffect(() => {
        async function getCursos() {
            try {
                setCargandoCurso(true);
                const { data } = await Axios.get(baseURL + `/curso/getCurso/${idCurso}`);
                //Cargamos todos los datos del cuso a mostrar en pantalla
                setCurso(data.result[0]);
                //Cargamos el 1er material de todo el curso para mostrarlo en pantalla
                setMaterialIndex(data.result[0].NIVELES[0].LECCIONES[0].MATERIALES[0]);
                setCargandoCurso(false);
            } catch (error) {
                setCargandoCurso(false);
                mostrarMensaje(error.response.data.message, 1);
                console.log(error);
            }
        }
        getCursos();
    }, [mostrarMensaje, idCurso])

    function changeMaterialIndex(dataMaterial){
        setMaterialIndex(dataMaterial);
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
                <Material materialIndex={materialIndex}/>
                {/** inicio TAB */}
                <Contenido curso={curso} changeMaterialIndex={changeMaterialIndex} usuario={usuario}/>
                {/** fin TAB */}
                <SignificadoColores usuario={usuario}/>
            </div>
        </Main>
    );
}
//------------------- 4 Other components ------------------
function ContornoYNombreDelCurso({ curso }) {
    //Determinado el color de contorno del título del curso
    let classess = '';
    if (curso.categoria=== "A") {
        classess = 'curso_titulo_rosa pl-3 pr-1 pb-1 mt-2'
    }else if (curso.categoria=== "B") {
        classess = 'curso_titulo_naranja pl-3 pr-1 pb-1 mt-2'
    }else if (curso.categoria=== "C") {
        classess = 'curso_titulo_morado pl-3 pr-1 pb-1 mt-2'
    }else if (curso.categoria=== "D") {
        classess = 'curso_titulo_verde pl-3 pr-1 pb-1 mt-2'
    }
    return (
        <h4 className={classess}>{curso.nombre}</h4>
    );
}