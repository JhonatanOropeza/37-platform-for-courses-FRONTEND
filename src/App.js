
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Loading from './components/1_Helpers/Loading';
import Main from './components/1_Helpers/Main';
import Mensaje from './components/1_Helpers/Mensaje';
import Navbar from './components/1_Helpers/Navbar';
import Inicio from './components/2_General/Inicio/Inicio';
import Curso from './components/2_General/Curso/Pestañas/1Curso';
import Avances from './components/3_Inside/Avances';
import Login from './components/2_General/Access/Login';
import Logup from './components/2_General/Access/Logup';
import Footer from './components/1_Helpers/Footer';

import { UsuarioProvider, useUsuario } from './components/0_useContext/usuario-context';
import { initAxiosInterceptors } from './helpers/auth_helpers';
//En caso de tener token, agrega datos del usuario al headers para conocer el usuario
initAxiosInterceptors();

const exportarApp = () =>
  <UsuarioProvider>
    <App/>
  </UsuarioProvider>

export default exportarApp;
//------------------- 3.- PRINCIAPAL COMPONENT ------------
function App() {
  const { usuario, cargandoUsuario } = useUsuario();
  const [datosMensaje, setDatosMensaje] = useState(
    {
      mensaje: null,
      tipo: 0
    }
  );
  //--------------------- 3.1- Functions---------------
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
      <Navbar />
      <Mensaje datosMensaje={datosMensaje} ocultarMensaje={ocultarMensaje} />
      {
        usuario
          ? (
            <YESAuthenticated mostrarMensaje={mostrarMensaje} />
          ) : (
            <NOTAuthenticated mostrarMensaje={mostrarMensaje} />
          )
      }
      <Footer></Footer>
    </Router>
  );
}

//------------------- 4 Other components ------------------
function YESAuthenticated({ mostrarMensaje }) {
  return (
    <Switch>
      <Route
        path="/advances/:usuario"
        render={props => <Avances {...props} mostrarMensaje={mostrarMensaje} />}
      />
      <Route
        path="/curso/:id"
        render={props => <Curso {...props} mostrarMensaje={mostrarMensaje} />}
      />
      <Route
        path="/"
        render={props => <Inicio {...props} mostrarMensaje={mostrarMensaje} />}
        default
      />
    </Switch>
  );
}
function NOTAuthenticated({ mostrarMensaje }) {
  return (
    <Switch>
      <Route
        path="/curso/:id"
        render={props => <Curso {...props} mostrarMensaje={mostrarMensaje} />}
      />
      <Route
        path="/login"
        render={props => <Login {...props} mostrarMensaje={mostrarMensaje} />}
      />
      <Route
        path="/logup"
        render={props => <Logup {...props} mostrarMensaje={mostrarMensaje} />}
      />
      <Route
        path="/"
        render={props => <Inicio {...props} mostrarMensaje={mostrarMensaje} />}
        default
      />
    </Switch>
  );
}
