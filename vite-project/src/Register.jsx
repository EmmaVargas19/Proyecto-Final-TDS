import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { contextName } from './context/myContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css';

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
      toastifye('Por favor, llena todos los campos');
    }
  }
  

  return (
    <div className="register-container">
      <div className="card-container">
        <div className="logo-container">
          <img
            src="https://www.gob.mx/cms/uploads/article/main_image/108950/imagenes_750x392-05.jpg"
            width="300"
            alt="Logo"
            className="logo"
          />
        </div>
        <form onSubmit={handleSubmit} className='formPle'>
          <h2 className="card-title">Crear Cuenta</h2>
          <div className="form-group">
            <label className="input-label" htmlFor="user">Nombre Completo</label>
            <input
              className="input-field"
              type="text"
              id="user"
              placeholder="Nombre Completo"
              value={user}
              onInput={(e) => setUser(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="input-label" htmlFor="password">Contraseña</label>
            <input
              className="input-field"
              type="password"
              id="password"
              placeholder="Contraseña"
              value={password}
              onInput={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="input-label" htmlFor="confirm-password">Confirmar Contraseña</label>
            <input
              className="input-field"
              type="password"
              id="confirm-password"
              placeholder="Confirmar Contraseña"
              value={confirmPassword}
              onInput={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button className="button-field">
            Crear Nueva Cuenta
          </button>
        </form>
        <div className="links-container">
          <Link to="/login" className="link-forgot">
              tienes cuenta? Logueate
            </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
