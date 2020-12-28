import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosAttach } from "react-icons/io";

//------------------- 1.- CSS Style && .env ---------------
//------------------- 2.- Some functions ------------------
//------------------- 3.- PRINCIAPAL COMPONENT ------------
export default function Navbar({ usuario, logout }) {
    const [isNavCollapsed, setIsNavCollapsed] = useState(false);
    const NavCollapseFalse = () => { setIsNavCollapsed(false); }
    const NavCollapseTrue = () => { setIsNavCollapsed(true); }
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
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={NavCollapseTrue}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`${!isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto text-right">
                    <li className="nav-item dropdown" >
                        <Link className="nav-link text-light" to="/" onClick={NavCollapseFalse}><IoIosAttach />Inicio</Link>
                    </li>
                    {
                        usuario
                            ? <YesAuthenticated logout={logout} NavCollapseFalse={NavCollapseFalse} usuario={usuario} />
                            : <NotAuthenticated NavCollapseFalse={NavCollapseFalse} />
                    }
                </ul>
            </div>
        </nav >
    )
}
//------------------- 4 Other components ------------------
function YesAuthenticated({ logout, NavCollapseFalse, usuario }) {
    return (
        <>
            <li className="nav-item">
                <Link className="nav-link text-light" to={`/advances/${usuario._id}`} onClick={NavCollapseFalse}><IoIosAttach />Avances</Link>
            </li>
            <button
                className="nav-item bg-transparent border-0 p-0 text-right"
                onClick={() => {
                    logout();
                    NavCollapseFalse();
                }}
                style={{ outline: 'none' }}
            >
                <div className="nav-link text-light"><IoIosAttach />Cerrar sesión</div>
            </button>
        </>
    );
}

function NotAuthenticated({ NavCollapseFalse }) {
    return (
        <>
            <li className="nav-item">
                <Link className="nav-link text-light" to="/login" onClick={NavCollapseFalse}><IoIosAttach />Iniciar sesión</Link>
            </li>
            <li className="nav-item dropdown">
                <Link className="nav-link text-light" to="/logup" onClick={NavCollapseFalse}><IoIosAttach />Registrarse</Link>
            </li>
        </>
    );
}