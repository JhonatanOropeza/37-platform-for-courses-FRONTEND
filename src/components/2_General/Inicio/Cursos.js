import React from 'react';

import A1 from '../../../images/cursos/A1.fw.png';
import A2 from '../../../images/cursos/A2.fw.png';
import A3 from '../../../images/cursos/A3.fw.png';
import A4 from '../../../images/cursos/A4.fw.png';
import B1 from '../../../images/cursos/B1.fw.png';
import B2 from '../../../images/cursos/B2.fw.png';
import B3 from '../../../images/cursos/B3.fw.png';
import C1 from '../../../images/cursos/C1.fw.png';
import C2 from '../../../images/cursos/C2.fw.png';
import D1 from '../../../images/cursos/D1.fw.png'
//------------------- 1.- CSS Style && .env ---------------
//------------------- 2.- Some functions ------------------
//------------------- 3.- PRINCIAPAL COMPONENT ------------
export default function Cursos() {
    //--------------------- 3.1- Functions---------------
    //---------------------- 3.2 Return------------------
    return (
        <div className="container border border-success text-center">
            <h5 className="pt-2 ">Todos los cursos</h5>
            <div className="row d-flex justify-content-center">
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 border border-dark">
                    <img src={A1} alt="" className="rounded" /><p>Curso 1</p>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 border border-dark">
                    <img src={A2} alt="" className="rounded" /> <p>Curso 2</p>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 border border-dark">
                    <img src={A3} alt="" className="rounded" /> <p>Curso 3</p>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 border border-dark">
                    <img src={A4} alt="" className="rounded" /> <p>Curso 4</p>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 border border-dark">
                    <img src={B1} alt="" className="rounded" /> <p>Curso 5</p>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 border border-dark">
                    <img src={B2} alt="" className="rounded" /> <p>Curso 6</p>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 border border-dark">
                    <img src={B3} alt="" className="rounded" /> <p>Curso 7</p>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 border border-dark">
                    <img src={C1} alt="" className="rounded" /> <p>Curso 8</p>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 border border-dark">
                    <img src={C2} alt="" className="rounded" /> <p>Curso 9</p>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 border border-dark">
                    <img src={D1} alt="" className="rounded" /> <p>Curso 10</p> 
                </div>
            </div>
        </div>
    );
}
//------------------- 4 Other components ------------------