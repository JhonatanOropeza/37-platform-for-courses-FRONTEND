import React from 'react';
import { GoogleLogin } from 'react-google-login';

import { FaGoogle } from 'react-icons/fa';
//------------------- 1.- CSS Style && .env ---------------
//------------------- 2.- Some functions ------------------
//------------------- 3.- PRINCIAPAL COMPONENT ------------
export default function GoogleButton({ logAuth0, mostrarMensaje }) {
    //--------------------- 3.1- Functions---------------
    const responseGoogle = async (response) => {
        try {
            await logAuth0(response.accessToken, 'google')
        } catch (error) {
            mostrarMensaje('Error al cargar datos del usuario',1);
            console.log(error);
        }
    }
    //---------------------- 3.2 Return------------------
    return (
        <GoogleLogin
            clientId='479788430728-561ackodgladd52mfrg9cjc1t7lritt8.apps.googleusercontent.com'
            render={renderProps => (
                <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="btn btn-block LOG_BTN_GOOGLE mt-3">
                    <FaGoogle /> Inicia sesión con Google
                </button>
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    );
}
//------------------- 4 Other components ------------------