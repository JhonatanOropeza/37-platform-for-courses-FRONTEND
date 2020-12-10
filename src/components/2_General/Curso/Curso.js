import React from 'react';

import Main from '../../1_Helpers/Main';
import Contenido from './Contenido';
import SignificadoColores from './SignificadoColores';
import Material from './Material';
//------------------- 1.- CSS Style && .env ---------------
import '../../../../node_modules/video-react/dist/video-react.css'
//------------------- 2.- Some functions ------------------
//------------------- 3.- PRINCIAPAL COMPONENT ------------
export default function Curso() {
    //--------------------- 3.1- Functions---------------
    //---------------------- 3.2 Return------------------
    return (
        <Main X_Y_Centered={false}>
            <div className="container pt-2 curso_container_principal">
                <h4 className="curso_titulo pl-3 pr-1 pb-1 mt-2">Curso A1</h4>
                <Material/>
                <Contenido/>
                <SignificadoColores/>
            </div>
        </Main>
    );
}
//------------------- 4 Other components ------------------