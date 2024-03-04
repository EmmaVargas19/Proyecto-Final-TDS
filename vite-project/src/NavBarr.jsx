import { Link, Outlet } from "react-router-dom";
import './App.css'


export function NavBarr() {
  return (
    <>
    <div className="navbar">
    <ul>
    <div className="hijo">
    <img src="src/assets/WhatsApp Image 2024-02-29 at 2.26.29 PM.jpeg" alt="" />
    <li><Link to={'/'}>Inicio</Link></li>
    <li><Link to={'/eventos'}>Eventos</Link></li>
    </div>
    <div className="hijo">
    <li><Link to={'/register'}>Registrarse</Link></li>
    <li><Link to={'/login'}>Iniciar sesión</Link></li>
    </div>
    </ul>
    </div>
    <Outlet/>
    <footer className="footerContainer">
      <p>Copyright © EU-Productions 2023</p>
    </footer>
    </>
  )
}
