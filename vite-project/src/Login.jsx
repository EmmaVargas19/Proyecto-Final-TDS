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

const {user,setUser,password,setPassword, localStorageGet, toastifye, setLogged, setIsOng} = useContext(contextName)
const navigate = useNavigate();

const handleSubmit = (e) => {
    e.preventDefault();
    if (localStorageGet() && localStorageGet().password === password) {
      setLogged(true);
      setIsOng(localStorageGet() ? localStorageGet().ongValue || false : false)
      navigate('/');
    } else {
      toastifye('Usuario o contraseña incorrectos');
    }
  };

  return (

    <div className="container">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap')
      </style>
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      <div className="container-form">
        <div className="information">
          <div className="info-childs">
            <h2>Bienvenido</h2>
            <p>Si aun no tienes cuenta registrate aqui</p>
            <Link to="/register">
            <input type="button" value="Registrarse" id="sing-up"/>
            </Link>
          </div>
      </div>
      <div className="form-information">
          <div className="form-information-childs">
            <h2>Iniciar Sesión</h2>
            <div className="icons">
              <i className='bx bxl-google bx-md'></i>
              <i className='bx bxl-github bx-md' ></i>
              <i className='bx bxl-facebook bx-md'></i>
            </div>
            <p>O inicia sesión con tu cuenta</p>
            <form className="form" onSubmit={handleSubmit}>
              <label>
                <box-icon name='user' ></box-icon>
                <input type="text" placeholder="Usuario" value={user} onInput={(e) => {setUser(e.target.value); localStorage.removeItem("preU");}}/>
                </label>
                <label>
                  <box-icon name='lock-alt' ></box-icon>
                  <input type="password" placeholder="Contraseña" value={password} onInput={(e) => setPassword(e.target.value)}/>
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