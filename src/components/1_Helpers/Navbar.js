import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosAttach } from "react-icons/io";

import {useUsuario} from '../0_useContext/usuario-context';

//------------------- 1.- CSS Style && .env ---------------
//------------------- 2.- Some functions ------------------
//------------------- 3.- PRINCIAPAL COMPONENT ------------
export default function Navbar() {
    const {usuario, logout } = useUsuario();
    const [isNavCollapsed, setIsNavCollapsed] = useState(false);
    const NavCollapseFalse = () => { setIsNavCollapsed(false); }
    const NavCollapseTrue = () => { setIsNavCollapsed(true); }
    const NavCollapseBoth = () => { setIsNavCollapsed(!isNavCollapsed)}
    //--------------------- 3.1- Functions---------------
    //---------------------- 3.2 Return------------------
    return (
        <nav
            className="navbar navbar-expand-lg navbar-light bg-primary BARRA_DE_NAVEGACION"
            onMouseLeave={NavCollapseFalse}
        >
            <Link className="navbar-brand" to="/">
                <h4 className="mb-0">Plataforma de cursos</h4>
            </Link>
            <button onClick={NavCollapseTrue} aria-expanded={!isNavCollapsed ? true : false} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`${!isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto text-right">
                    <li className="nav-item dropdown" >
                        <Link className="nav-link text-light" to="/" onClick={NavCollapseFalse}><IoIosAttach />Inicio</Link>
                    </li>
                    {
                        usuario
                            ? <YesAuthenticated logout={logout} NavCollapseBoth={NavCollapseBoth} usuario={usuario} />
                            : <NotAuthenticated NavCollapseBoth={NavCollapseBoth} />
                    }
                </ul>
            </div>
        </nav >
    )
}
//------------------- 4 Other components ------------------
function YesAuthenticated({ logout, NavCollapseBoth, usuario }) {
    return (
        <>
            <li className="nav-item">
                <Link className="nav-link text-light" to={`/advances/${usuario._id}`} onClick={NavCollapseBoth}><IoIosAttach />Avances</Link>
            </li>
            <button
                className="nav-item bg-transparent border-0 p-0 text-right"
                onClick={() => {
                    logout();
                    NavCollapseBoth();
                }}
                style={{ outline: 'none' }}
            >
                <div className="nav-link text-light"><IoIosAttach />Cerrar sesión</div>
            </button>
        </>
    );
}

function NotAuthenticated({ NavCollapseBoth }) {
    return (
        <>
            <li className="nav-item">
                <Link className="nav-link text-light" to="/login" onClick={NavCollapseBoth}><IoIosAttach />Iniciar sesión</Link>
            </li>
            <li className="nav-item dropdown">
                <Link className="nav-link text-light" to="/logup" onClick={NavCollapseBoth}><IoIosAttach />Registrarse</Link>
            </li>
        </>
    );
}