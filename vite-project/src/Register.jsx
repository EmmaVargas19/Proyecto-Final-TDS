import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { contextName } from './context/myContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css';
import 'boxicons';
import './Login.jsx';

export function Register() {

const {user, setUser, password, setPassword, confirmPassword, setConfirmPassword, localStorageSave, localStorageGet, toastifye, toastifys} = useContext(contextName);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(localStorageGet()){
      toastifye('El usuario ya existe, por favor elige otro nombre de usuario');
    } else if (user && password && password === confirmPassword) {
      localStorageSave();
      toastifys('Cuenta creada exitosamente');
    } else if (user === ""){
      toastifye('Por favor, llena el campo de usuario')
    } else if (password && confirmPassword === "") {
      toastifye('Por favor, llena el campo de confirmacion');
    } else if (password !== confirmPassword) {
      toastifye('Las contraseñas no coinciden');
    } else {
      alert('Por favor, complete todos los campos.');
    }
  }
  

  return (
  <div className="container">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
    <div className="container-form">
      <div className="information">
        <div className="info-childs">
          <h2>Bienvenido</h2>
          <p>Para unirse a nuestra comunidad, inicie sesión con sus datos</p>
          <input type="button" value="Inicio Sesión" id="sing-in"/>
        </div>
     </div>
    <div className="form-information">
        <div className="form-information-childs">
          <h2>Crear Una Cuenta</h2>
          <div className="icons">
            <i class='bx bxl-google bx-md'></i>
            <i class='bx bxl-github bx-md' ></i>
            <i class='bx bxl-facebook bx-md'></i>
          </div>
          <p>Correo para registrarte</p>
          <form className="form" onSubmit={handleSubmit}>
            <label>
              <box-icon name='user' ></box-icon>
              <input type="text" placeholder="Nombre Completo" value={user}
              onInput={(e) => setUser(e.target.value)}/>
            </label>
            <label>
              <box-icon name='lock-alt' ></box-icon>
              <input type="password" placeholder="Contraseña" value={password}
              onInput={(e) => setPassword(e.target.value)}/>
              </label>
              <label>
                <box-icon name='lock-alt' ></box-icon>
                <input type="password" placeholder="Contraseña de confirmacion" value={confirmPassword}
              onInput={(e) => setConfirmPassword(e.target.value)}/>
              </label>
              <input type="submit" value="Registrar" />
          </form>
          <Link to="/login" className="link-forgot">
              tienes cuenta? Logueate
           </Link>
        </div>
      </div>
      <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
    </div>
  </div>  
  );
}
