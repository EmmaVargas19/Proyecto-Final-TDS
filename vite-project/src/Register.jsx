import React, { useState } from 'react';
import './Register.css';
import 'boxicons';
import './Login.jsx';

export function Register() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    if (fullname && email && password) {
      alert('Registro exitoso');
    } else {
      alert('Por favor, complete todos los campos.');
    }
  };

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
                <input type="text" placeholder="Nombre Completo" value={fullname} onChange={(e) => setFullname(e.target.value)} />
              </label>
              <label>
                <box-icon name='envelope' ></box-icon>
                <input type="email" placeholder="Correo Electronico" value={email} onChange={(e) => setEmail(e.target.value)} />
              </label>
              <label>
                <box-icon name='lock-alt' ></box-icon>
                <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
              </label>
              <label>
                <box-icon name='lock-alt' ></box-icon>
                <input type="password" placeholder="Confirmar Contraseña" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              </label>
              <input type="submit" value="Registrar" />
            </form>
          </div>
        </div>
      </div>
      <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
    </div>  
  );
}