
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Loading from './components/1_Helpers/Loading';
import Main from './components/1_Helpers/Main';
import Mensaje from './components/1_Helpers/Mensaje';
import Navbar from './components/1_Helpers/Navbar';
import Inicio from './components/2_General/Inicio/Inicio';
import Curso from './components/2_General/Curso/Pestañas/1Curso';
import Avances from './components/3_Inside/Avances';
import Prueba from './components/3_Inside/Prueba';
import Login from './components/2_General/Access/Login';
import Logup from './components/2_General/Access/Logup';
import Footer from './components/1_Helpers/Footer';

//------------------- 1.- CSS Style && .env ---------------
import { setToken, getToken, initAxiosInterceptors, deleteToken } from './helpers/auth_helpers';
const baseURL = process.env.REACT_APP_RUTA_PRINCIPAL;
//------------------- 2.- Some functions ------------------
//En caso de tener token, agrega datos del usuario al headers para conocer el usuario
initAxiosInterceptors();
//------------------- 3.- PRINCIAPAL COMPONENT ------------
function App() {
  const [usuario, setUsuario] = useState(null);
  const [cargandoUsuario, setCargandoUsuario] = useState(true);
  const [datosMensaje, setDatosMensaje] = useState(
    {
      mensaje: null,
      tipo: 0
    }
  );
  //--------------------- 3.1- Functions---------------
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

  async function login(correo, contrasena) {
    const { data } = await Axios.post(baseURL + '/alumno/authJWT/login', {
      correo,
      contrasena
    });
    setUsuario(data.user);
    setToken(data.token);
  }

  async function logup(nombre, apellidos, correo, contrasena) {
    const { data } = await Axios.post(baseURL + '/alumno/authJWT/logup', {
      nombre,
      apellidos,
      correo,
      contrasena
    });
    mostrarMensaje(data.mensaje, 3);
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

  function mostrarMensaje(mensaje, tipo) {
    setDatosMensaje({
      ...datosMensaje,
      mensaje: mensaje, tipo
    })
  }
  function ocultarMensaje() {
    setDatosMensaje({
      ...datosMensaje,
      mensaje: null, tipo: 0
    })
  }
  //---------------------- 3.2 Return------------------
  if (cargandoUsuario) {
    return (
      <Main X_Y_Centered={true}>
        <Loading />
      </Main>
    );
  }

  return (
    <Router>
      <Navbar usuario={usuario} logout={logout} />
      <Mensaje datosMensaje={datosMensaje} ocultarMensaje={ocultarMensaje} />
      {
        usuario
          ? (
            <YESAuthenticated usuario={usuario} mostrarMensaje={mostrarMensaje} />
          ) : (
            <NOTAuthenticated usuario={usuario} mostrarMensaje={mostrarMensaje} login={login} logup={logup} logAuth0={logAuth0} />
          )
      }
      <Footer></Footer>
    </Router>
  );
}

export default App;
//------------------- 4 Other components ------------------
function YESAuthenticated({ usuario, mostrarMensaje }) {
  return (
    <Switch>
      <Route
        path="/prueba/:usuario"
        render={props => <Prueba {...props} usuario={usuario} mostrarMensaje={mostrarMensaje}></Prueba>}
      />
      <Route
        path="/advances/:usuario"
        render={props => <Avances {...props} usuario={usuario} mostrarMensaje={mostrarMensaje}></Avances>}
      />
      <Route
        path="/curso/:id"
        render={props => <Curso {...props} usuario={usuario} mostrarMensaje={mostrarMensaje} />}
      />
      <Route
        path="/"
        render={props => <Inicio {...props} usuario={usuario} mostrarMensaje={mostrarMensaje}/>}
        default
      />
    </Switch>
  );
}
function NOTAuthenticated({ usuario, mostrarMensaje, login, logup, logAuth0 }) {
  return (
    <Switch>
      <Route
        path="/curso/:id"
        render={props => <Curso {...props} mostrarMensaje={mostrarMensaje} />}
      />
      <Route
        path="/login"
        render={props => <Login {...props} mostrarMensaje={mostrarMensaje} login={login} logAuth0={logAuth0}></Login>}
      />
      <Route
        path="/logup"
        render={props => <Logup {...props} mostrarMensaje={mostrarMensaje} logup={logup} logAuth0={logAuth0}></Logup>}
      />
      <Route
        path="/"
        render={props => <Inicio {...props} usuario={usuario} mostrarMensaje={mostrarMensaje}></Inicio>}
        default
      />
    </Switch>
  );
}
