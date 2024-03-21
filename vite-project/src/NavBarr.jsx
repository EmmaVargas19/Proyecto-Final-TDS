import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { contextName } from "./context/MyContext.jsx";
import './App.css';
import 'boxicons';


export function NavBarr() {
  const {user, setUser, setPassword, logged, setLogged, setShowedToast} = useContext(contextName)
  return (
    <>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
    <div className="navbar">
    <ul>
    <div className="hijo">
    <img src="src/img/logo.png" alt="" />
    <li><Link to={'/'}>Inicio</Link></li>
    <li><Link to={'/eventos'}>Eventos</Link></li>
    </div>
    <div className="hijo">
    <li><Link to={'/register'}>Registrarse</Link></li>
    <li><Link to={'/login'}>Iniciar sesión</Link></li>
    {user && logged ? <li><button onClick={()=>{setLogged(false); setUser(""); setPassword(""); setShowedToast(false)}}>Cerrar sesión</button></li> : null}
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
          <a href="#"><p><i class='bx bx-right-arrow-alt'></i> <b>Mision</b></p></a>
          <a href="#"><p><i class='bx bx-right-arrow-alt'></i> <b>Vision </b></p></a>
          <a href="#"><p><i class='bx bx-right-arrow-alt'></i> <b>Valores </b></p></a>
        </div>
        <div className="box">
          <h2>Servicios</h2>
          <hr />
          <br />
            <a href="#"><p><i class='bx bx-right-arrow-alt'></i> <b>Eventos</b></p></a>
            <a href="#"><p><i class='bx bx-right-arrow-alt'></i> <b>Donaciones</b></p></a>
        </div>
        <div className="box">
          <h2>Siguenos</h2>
          <hr />
          <br />
          <div className="red-social">
            <a href="#"><i class='bx bxl-facebook'></i></a>
            <a href="#"><i class='bx bxl-instagram' ></i></a>
            <a href="#"><i class='bx bxl-github' ></i></a>
            <a href="#"><i class='bx bxl-youtube' ></i></a>
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
