import React from 'react';

//------------------- 1.- CSS Style && .env ---------------
//------------------- 2.- Some functions ------------------
//------------------- 3.- PRINCIAPAL COMPONENT ------------
export default function Categorias() {
    //--------------------- 3.1- Functions---------------
    //---------------------- 3.2 Return------------------
    return (
        <div className="container border border-dark text-center">
            <h5 className="pt-2">Categorías de cursos</h5>
            <div className="row d-flex justify-content-center">
                <div className="col-12 col-md-6 col-lg-4 border border-dark pt-1">
                    <button type="button" className="btn btn-block BOTO_FOCUS BOTON_ROSA">Categoría 1</button>
                </div>
                <div className="col-12 col-md-6 col-lg-4 border border-dark pt-1">
                    <button type="button" className="btn btn-block BOTO_FOCUS BOTON_NARANJA">Categoría 2</button>
                </div>
                <div className="col-12 col-md-6 col-lg-4 border border-dark pt-1">
                    <button type="button" className="btn btn-block BOTO_FOCUS BOTON_MORADO">Categoría 3</button>
                </div>
                <div className="col-12 col-md-6 col-lg-4 border border-dark pt-1">
                    <button type="button" className="btn btn-block BOTO_FOCUS BOTON_VERDE">Categoría 4</button>
                </div>
            </div>
        </div>
    );
}
//------------------- 4 Other components ------------------