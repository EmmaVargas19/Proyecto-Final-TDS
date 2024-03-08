import { useContext } from 'react';
import { contextName } from './context/myContext';
import { useNavigate } from 'react-router-dom';

import './Login.css';
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

    <div className="login-container">
      <div className="card-container">
        <div className="logo-container">
          <img src="https://www.gob.mx/cms/uploads/article/main_image/108950/imagenes_750x392-05.jpg" width="300" alt="Logo" className="logo" />
        </div>
          <form onSubmit={handleSubmit}>
            <p className="card-title">Iniciar Sesion</p>
            <label htmlFor="user">Usuario</label>
            <input
              className="input-field"
              type="text"
              id="user"
              placeholder="Usuario"
              value={user}
              onInput={(e) => setUser(e.target.value)}/>
            <br />
            <label htmlFor="password">Contraseña</label>
            <input
              className="input-field"
              type="password"
              id="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}/>
            <br />
            <button className="button-field">
              Iniciar
            </button>
          </form>
          <div className="links-container">
            <Link to="/register" className="link-forgot">
              No tienes cuenta? Registrate
            </Link>
          </div>
      </div> 
      <ToastContainer />
    </div>
  );
}