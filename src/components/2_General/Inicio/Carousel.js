import React from 'react';

//------------------- 1.- CSS Style && .env ---------------
import imagen1 from '../../../images/carousel/Imagen1.fw.png';
import imagen2 from '../../../images/carousel/Imagen2.fw.png';
import imagen3 from '../../../images/carousel/Imagen3.fw.png';
//------------------- 2.- Some functions ------------------
//------------------- 3.- PRINCIAPAL COMPONENT ------------
export default function Carousel() {
    //--------------------- 3.1- Functions---------------
    //---------------------- 3.2 Return------------------
    return (
        <div className="">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={imagen1} alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={imagen2} alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={imagen3} alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
        </div>
    );
}
//------------------- 4 Other components ------------------