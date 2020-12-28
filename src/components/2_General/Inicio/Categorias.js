import React, {useState} from 'react';

//------------------- 1.- CSS Style && .env ---------------
//------------------- 2.- Some functions ------------------
//------------------- 3.- PRINCIAPAL COMPONENT ------------
export default function Categorias({ cargarCursosPorCategoria, mostrarMensaje }) {
    const [enviandoPeticion, setEnviandoPeticion] = useState(false);
    //--------------------- 3.1- Functions---------------
    async function mostrarClasificacionDeCurso(categoria) {
        if (enviandoPeticion) {
            return;
        }
        try {
            setEnviandoPeticion(true);
            await cargarCursosPorCategoria(categoria);
            setEnviandoPeticion(false);
        } catch (error) {
            setEnviandoPeticion(false);
            mostrarMensaje(error.response.data.message, 1);
            console.log(error)
        }
    }
    //---------------------- 3.2 Return------------------
    return (
        <div className="container border border-dark text-center">
            <h5 className="pt-2">Categorías de cursos</h5>
            <div className="row d-flex justify-content-center">
                <div className="col-12 col-md-6 col-lg-4 border border-dark pt-1">
                    <button type="button" onClick={() => mostrarClasificacionDeCurso('A')} className="btn btn-block BOTO_FOCUS BOTON_ROSA">Categoría A</button>
                </div>
                <div className="col-12 col-md-6 col-lg-4 border border-dark pt-1">
                    <button type="button" onClick={() => mostrarClasificacionDeCurso('B')} className="btn btn-block BOTO_FOCUS BOTON_NARANJA">Categoría B</button>
                </div>
                <div className="col-12 col-md-6 col-lg-4 border border-dark pt-1">
                    <button type="button" onClick={() => mostrarClasificacionDeCurso('C')} className="btn btn-block BOTO_FOCUS BOTON_MORADO">Categoría C</button>
                </div>
                <div className="col-12 col-md-6 col-lg-4 border border-dark pt-1">
                    <button type="button" onClick={() => mostrarClasificacionDeCurso('D')} className="btn btn-block BOTO_FOCUS BOTON_VERDE">Categoría D</button>
                </div>
            </div>
        </div>
    );
}
//------------------- 4 Other components ------------------