import { useContext } from 'react';
import { contextName } from './context/MyContext.jsx';
import { useNavigate } from 'react-router-dom';

import './Login.css';
import 'boxicons';
import './Register.jsx';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Login() {

const {user,setUser,password,setPassword, localStorageGet, toastifye, setLogged} = useContext(contextName)
const navigate = useNavigate();

const handleSubmit = (e) => {
    e.preventDefault();
    if (localStorageGet() && JSON.parse(localStorageGet()).password === password) {
      setLogged(true);
      navigate('/');
    } else {
      toastifye('Usuario o contraseña incorrectos');
    }
  };

  return (

    <div className="container">
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      <div className="container-form">
        <div className="information">
          <div className="info-childs">
            <h2>Bienvenido</h2>
            <p>Si aun no tienes cuenta registrate aqui</p>
            <input type="button" value="Registrarse" id="sing-up"/>
          </div>
      </div>
      <div className="form-information">
          <div className="form-information-childs">
            <h2>Iniciar Sesión</h2>
            <div className="icons">
              <i class='bx bxl-google bx-md'></i>
              <i class='bx bxl-github bx-md' ></i>
              <i class='bx bxl-facebook bx-md'></i>
            </div>
            <p>O inicia sesión con tu cuenta</p>
            <form className="form">
              <label>
                <box-icon name='envelope' ></box-icon>
                <input type="email" placeholder="Correo Electronico" />
                </label>
                <label>
                  <box-icon name='lock-alt' ></box-icon>
                  <input type="password" placeholder="Contraseña" />
                </label>
                <input type="submit" value="Iniciar Sesión" />
            </form>
          </div>
        </div>
        <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
      </div>
      <ToastContainer />
    </div>
  );
}