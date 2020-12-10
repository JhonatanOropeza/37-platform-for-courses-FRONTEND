import React from 'react';

import Main from '../../1_Helpers/Main';
import Carousel from './Carousel';
import Categorias from './Categorias';
import Cursos from './Cursos';

//------------------- 1.- CSS Style && .env ---------------
//------------------- 2.- Some functions ------------------
//------------------- 3.- PRINCIAPAL COMPONENT ------------
export default function Inicio({ usuario }) {
    //--------------------- 3.1- Functions---------------
    //---------------------- 3.2 Return------------------
    return (
        <Main X_Y_Centered={false}>
            <Carousel></Carousel>
            <Categorias></Categorias>
            <Cursos></Cursos>
        </Main>
    );
}
//------------------- 4 Other components ------------------
