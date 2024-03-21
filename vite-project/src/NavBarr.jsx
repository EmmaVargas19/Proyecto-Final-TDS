import { Link, Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { contextName } from "./context/MyContext.jsx";
import './App.css';
import 'boxicons';


export function NavBarr() {
  const {setUser, setPassword, logged, setLogged, setShowedToast, setNombre} = useContext(contextName)
  const navigate = useNavigate();
  return (
    <>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
    <div className="navbar">
    <ul>
    <div className="hijo">
    <img src="src/assets/WhatsApp Image 2024-02-29 at 2.26.29 PM.jpeg" alt="" />
    <li><Link to={'/'}>Inicio</Link></li>
    <li><Link to={'/eventos'}>Eventos</Link></li>
    {logged ? <li><Link to={'/donar'}>Donar</Link></li> : null}
    </div>
    <div className="hijo">
    {logged ? null : <li><Link to={'/register'}>Registrarse</Link></li>}
    {logged ? null : <li><Link to={'/login'}>Iniciar sesión</Link></li>}
    {logged ? <li><button onClick={()=>{setLogged(false); setUser(""); setPassword(""); setShowedToast(false); setNombre(""); navigate("/")}}>Cerrar sesión</button></li> : null}
    {logged ? <li><Link to={'/perfil'}>Mi Perfil</Link></li> : null}
    </div>
    </ul>
    </div>
    <Outlet/>
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
          <a href="#"><p><i className='bx bx-right-arrow-alt'></i> <b>Mision</b></p></a>
          <a href="#"><p><i className='bx bx-right-arrow-alt'></i> <b>Vision </b></p></a>
          <a href="#"><p><i className='bx bx-right-arrow-alt'></i> <b>Sostenibilidad </b></p></a>
          <a href="#"><p><i className='bx bx-right-arrow-alt'></i> <b>Responsabilidad </b> </p></a>
          <a href="#"><p><i className='bx bx-right-arrow-alt'></i> <b>Colaboración </b> </p></a>
          <a href="#"><p><i className='bx bx-right-arrow-alt'></i> <b>Innovación</b> </p></a>
          <a href="#"><p><i className='bx bx-right-arrow-alt'></i> <b>Transparencia </b></p></a>
        </div>
        <div className="box">
          <h2>Servicios</h2>
          <hr />
          <br />
            <a href="#"><p><i className='bx bx-right-arrow-alt'></i> <b>Eventos</b></p></a>
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
