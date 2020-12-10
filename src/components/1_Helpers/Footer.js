import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
//------------------- 1.- CSS Style && .env ---------------
//------------------- 2.- Some functions ------------------
//------------------- 3.- PRINCIAPAL COMPONENT ------------
export default function Footer() {
    //--------------------- 3.1- Functions---------------
    //---------------------- 3.2 Return------------------
    return (
        <footer style={{ display: 'flex' }} className="bg-primary text-white FOOTER">
            <p className="pl-2 pr-2">Aviso de privacidad</p>
            <p><FaFacebookF /></p>
            <p className="pl-2 pr-2">Ayuda</p>
        </footer>
    );
}