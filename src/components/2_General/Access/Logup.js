import React, { useState } from 'react';

import ImagenUsuario from '../../../images/iconos/usuario.png';

import Main from '../../1_Helpers/Main'
import FacebookButton from './FacebookButton';
import GoogleButton from './GoogleButton';
//------------------- 1.- CSS Style && .env ---------------
//------------------- 2.- Some functions ------------------
//------------------- 3.- PRINCIAPAL COMPONENT ------------
export default function Logup({ logup, mostrarMensaje, logAuth0 }) {
    const [datosLogup, setDatosLogup] = useState(
        {
            nombre: '',
            apellidos: '',
            correo: '',
            contrasena: ''
        }
    );
    const [enviandoPeticion, setEnviandoPeticion] = useState(false);
    //--------------------- 3.1- Functions---------------
    function handleInputChange(e) {
        setDatosLogup({
            ...datosLogup,//Destruturación, pone las propiedades iguales
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (enviandoPeticion) { return }
        try {
            setEnviandoPeticion(true);
            await logup(datosLogup.nombre, datosLogup.apellidos, datosLogup.correo, datosLogup.contrasena);
            setEnviandoPeticion(false);
        } catch (error) {
            setEnviandoPeticion(false);
            mostrarMensaje(error.response.data.message, 1);
            console.log(error)
        }
    }
    //---------------------- 3.2 Return------------------
    return (
        <Main>
            <div className="container rounded  LOG_CONTAINER mt-2 pb-2 pt-2">
                <h4 className="text-center">Registrarse</h4>
                <div className="LOG_ICON mb-2">
                    <img alt="" src={ImagenUsuario} className="rounded-circle LOG_ICON_ROUNDED"></img>
                </div>
                <form className="mb-2" onSubmit={handleSubmit}>
                    <div className="form-group mb-2">
                        <label className="mb-1">Correo electrónico:</label>
                        <input type="email" name="correo" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese correo" onChange={handleInputChange} required />
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-1">Nombre (s):</label>
                        <input type="text" name="nombre" className="form-control" id="exampleNombres" aria-describedby="emailHelp" placeholder="Ingrese nombre (s)" onChange={handleInputChange} required />
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-1">Apellidos:</label>
                        <input type="text" name="apellidos" className="form-control" id="exampleApellidos" aria-describedby="emailHelp" placeholder="Ingrese apellidos" onChange={handleInputChange} required />
                    </div>
                    <div className="form-group mb-3">
                        <label className="mb-1">Contraseña:</label>
                        <input type="password" name="contrasena" className="form-control" id="exampleInputPassword1" placeholder="Ingrese contraseña" onChange={handleInputChange} required />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary ">Registrarse</button>
                    </div>
                </form>
                <div className="text-center mb-2">
                    <span><b>Ó</b></span>
                </div>
                {/** ------------------------------------- */}
                {/**                FACEBOOK               */}
                {/** ------------------------------------- */}
                <FacebookButton logAuth0={logAuth0} mostrarMensaje={mostrarMensaje} />
                {/** ------------------------------------- */}
                {/**                GOOGLE               */}
                {/** ------------------------------------- */}
                <GoogleButton logAuth0={logAuth0} mostrarMensaje={mostrarMensaje} />
            </div>
        </Main>
    );
}
//------------------- 4 Other components ------------------