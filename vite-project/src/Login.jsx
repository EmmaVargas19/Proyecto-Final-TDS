import React from 'react';
import './Login.css';

export function Login() {

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const handleSubmit = (event) => {

    event.preventDefault();

    if (username === 'admin' && password === 'password') {

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
            {/* <label htmlFor="username">Correo</label> */}
            <input
              className="input-field"
              type="email"
              id="username"
              placeholder="Correo Electronico"
              value={username}
              onChange={(event) => setUsername(event.target.value)}/>
            <br />
            {/* <label htmlFor="password">Contraseña</label> */}
            <input
              className="input-field"
              type="password"
              id="password"
              placeholder="Contraseña"
              value={password}
              onChange={(event) => setPassword(event.target.value)}/>
            <br />
            <button type="submit" className="button-field">
              Iniciar
            </button>
          </form>
          <div className="links-container">
            <a href="#" className="link-forgot">
            ¿Has olvidado tu contraseña?
            </a>
            <span> | </span>
            <a href="./Register" className="link-register">
            ¿No tienes una cuenta? Crear
            </a>
          </div>
      </div> 
    </div>
  );
}