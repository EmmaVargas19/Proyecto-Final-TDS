import { useContext } from 'react';
import { contextName } from './context/MyContext.jsx';
import './Login.css';
import { Link } from 'react-router-dom';

export function Login() {

const {user,setUser,password,setPassword} = useContext(contextName)
  
const handleSubmit = (event) => {

    event.preventDefault();
    if (user === 'admin' && password === 'password') {
      alert('Inicio de sesión exitoso');
    } else {
      alert('Nombre de usuario o contraseña incorrectos');
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
{/*             <a href="#" className="link-forgot">
            ¿Has olvidado tu contraseña?
            </a> */}
            <span> | </span>
            <Link to="/register" className="link-forgot">
              No tienes cuenta? Registrate
            </Link>
          </div>
      </div> 
    </div>
  );
}