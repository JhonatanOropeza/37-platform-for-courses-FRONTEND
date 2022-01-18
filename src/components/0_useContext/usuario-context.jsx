import React, { useState, useEffect, useMemo } from 'react';
import Axios from 'axios';
import { setToken, getToken, deleteToken } from '../../helpers/auth_helpers';

const baseURL = process.env.REACT_APP_RUTA_PRINCIPAL;

const UsuarioContext = React.createContext();

export function UsuarioProvider(props) {
    const [usuario, setUsuario] = useState(null);
    const [cargandoUsuario, setCargandoUsuario] = useState(true);

    useEffect(() => {
        //En caso de que haya token en LocalStorage
        async function cargarUsuario() {
            if (!getToken()) {
                setCargandoUsuario(false);
                return;
            }
            try {
                const { data } = await Axios.get(baseURL + '/alumno/auth/whoami');
                setUsuario(data.user);
                setCargandoUsuario(false);
            } catch (error) {
                console.log(error)
            }
        }
        cargarUsuario();
    }, []);

    //--------------------------------------------------------------
    //------------------  Another king of functions ----------------
    //--------------------------------------------------------------

    async function login(correo, contrasena) {
        const { data } = await Axios.post(baseURL + '/alumno/authJWT/login', {
            correo,
            contrasena
        });
        setUsuario(data.user);
        setToken(data.token);
    }

    function logout() {
        setUsuario(null);
        deleteToken();
    }

    async function logAuth0(token, tipo) {
        if (tipo === 'facebook') {
            const { data } = await Axios.post(baseURL + `/alumno/authFB/log/token?access_token=${token}`);
            console.log('Log with Face');
            setUsuario(data);
            setToken(token);
        }
        if (tipo === 'google') {
            const { data } = await Axios.post(baseURL + `/alumno/authGoogle/log/token?access_token=${token}`);
            console.log('Log with Google');
            setUsuario(data);
            setToken(token);
        }
    }
    const value = useMemo(() => {
        return ({
            usuario,
            cargandoUsuario,
            login,
            logout,
            logAuth0
        })
    }, [usuario, cargandoUsuario]);//Se refresque con estos edos

    return <UsuarioContext.Provider value={value} {...props} />
}

export function useUsuario() {
    const context = React.useContext(UsuarioContext);
    if (!context) {
        throw new Error('useUsuario debe estar dentro del proveedor UsuaiorContext');
    }
    return context;
}