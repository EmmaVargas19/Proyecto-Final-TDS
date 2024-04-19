import { Link, Outlet, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { contextName } from "./context/MyContext.jsx";
import { useEffect } from "react";
import './App.css';
import 'boxicons';


export function NavBarr() {
  const {setUser, setPassword, logged, setLogged, setShowedToast, setNombre, IsOng, setIsOng} = useContext(contextName)
  const navigate = useNavigate();
  return (
    <>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap')
    </style>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
    <div className="navbar">
    <ul>
    <div className="hijo">
    <img src="src/img/logo.png" alt="" width={80} height={80} />
    <li><Link to={'/'}>Inicio</Link></li>
    {IsOng ? null : <li><Link to={'/eventos'}>Eventos</Link></li>}
    {logged ? <li><Link to={'/donar'}>Donar</Link></li> : null}
    </div>
    <div className="hijo">
    {logged ? null : <li><Link to={'/register'}>Registrarse</Link></li>}
    {logged ? null : <li><Link to={'/login'}>Iniciar sesión</Link></li>}
    {logged ? <li><button onClick={()=>{setLogged(false); setUser(""); setPassword(""); setShowedToast(false); setNombre(""); setIsOng(false); navigate("/"); localStorage.removeItem("preU");
    localStorage.removeItem("preL");}}>Cerrar sesión</button></li> : null}
    {logged ? <li><Link to={'/perfil'}>Mi Perfil</Link></li> : null}
    </div>
    </ul>
    </div>
    <main>
      <Outlet/>
    {/* <main>
      test
    </main> */}
    </main>
    <footer className="footerContainer">
    <div className="grupo-1">
      <div className="box">
        <figure>
          <a href="#">
            <img src="src/img/logo.png" alt="" />
          </a>
        </figure>
      </div>
      <div className="box">
        <h2>Sobre Nosotros</h2>
        <hr />
        <br />
        <Link to="/#mision"><p><i className='bx bx-right-arrow-alt'></i> <b>Mision</b></p></Link>
        <Link to="/#vision"><p><i className='bx bx-right-arrow-alt'></i> <b>Vision </b></p></Link>
        <Link to="/#valores"><p><i className='bx bx-right-arrow-alt'></i> <b>Valores </b></p></Link>
      </div>
      <div className="box">
        <h2>Servicios</h2>
        <hr />
        <br />
          <Link to="/eventos"><p><i className='bx bx-right-arrow-alt'></i> <b>Eventos</b></p></Link>
          <a href="#"><p><i className='bx bx-right-arrow-alt'></i> <b>Donaciones</b></p></a>
      </div>
      <div className="box">
        <h2>Siguenos</h2>
        <hr />
        <br />
        <div className="red-social">
          <a href="#"><i className='bx bxl-facebook'></i></a>
          <a href="#"><i className='bx bxl-instagram' ></i></a>
          <a href="#"><i className='bx bxl-github' ></i></a>
          <a href="#"><i className='bx bxl-youtube' ></i></a>
        </div>
      </div>
    </div>
    <div className="grupo-2">
      <small>Copyright © RenovaTech 2023-2024. Todos Los Derechos Reservados</small>
    </div>
  </footer>
    <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
    </>
  )
}