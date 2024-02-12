import React, { useState } from 'react';
import './Register.css';

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
        <form onSubmit={handleSubmit}>
          <h2 className="card-title">Crear Cuenta</h2>
          <div className="form-group">
            {/* <label className="input-label" htmlFor="fullname">Nombre Completo</label> */}
            <input
              className="input-field"
              type="text"
              id="fullname"
              placeholder="Nombre Completo"
              value={fullname}
              onChange={(event) => setFullname(event.target.value)}
            />
          </div>
          <div className="form-group">
            {/* <label className="input-label" htmlFor="email">Correo Electronico</label> */}
            <input
              className="input-field"
              type="email"
              id="email"
              placeholder="Correo Electronico"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form-group">
            {/* <label className="input-label" htmlFor="password">Contraseña</label> */}
            <input
              className="input-field"
              type="password"
              id="password"
              placeholder="Contraseña"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="form-group">
            {/* <label className="input-label" htmlFor="confirm-password">Confirmar Contraseña</label> */}
            <input
              className="input-field"
              type="password"
              id="confirm-password"
              placeholder="Confirmar Contraseña"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </div>
          <button type="submit" className="button-field">
            Crear Nueva Cuenta
          </button>
        </form>
        <div className="links-container">
          <span>¿Ya tienes una cuenta? </span>
          <a href="./Login" className="link-register">
            Iniciar Sesion
          </a>
        </div>
      </div>
    </div>
  );
}