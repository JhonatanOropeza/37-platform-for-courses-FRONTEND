import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import FacebookLogin from 'react-facebook-login';

//------------------- 1.- CSS Style && .env ---------------
const appId = process.env.REACT_APP_APPID_FACEBOOK;
//------------------- 2.- Some functions ------------------
//------------------- 3.- PRINCIAPAL COMPONENT ------------
export default function FacebookButton({logAuth0, mostrarMensaje}){
//--------------------- 3.1- Functions---------------
const responseFacebook = async (response) => {
    //Variables de session y redireccionamiento
    try {
        await logAuth0(response.accessToken, 'facebook')
    } catch (error) {
        mostrarMensaje('Error al cargar datos del usuario');
        console.log(error)
    }
}
/* const componentClicked = () => {
    alert('Hola click');
}*/
//---------------------- 3.2 Return------------------
    return(
        <FacebookLogin
                    appId={appId}
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={responseFacebook}
                    textButton="Inicia sesión con Facebook"
                    icon={<FaFacebookF/>} 
                    cssClass= "btn btn-block LOG_BTN_FACEBOOK"/>
    );
}
//------------------- 4 Other components ------------------