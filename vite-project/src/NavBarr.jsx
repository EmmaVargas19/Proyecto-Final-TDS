import { Link, Outlet } from "react-router-dom";
import './App.css'

export function NavBarr() {
  return (
    <>
    <div className="navbar">
    <ul>
    <div className="hijo">
    <li><Link to={'/'}>Inicio</Link></li>
    <li><Link to={'/sobrenosotros'}>Sobre nosotros</Link></li>
    </div>
    <div className="hijo">
    <li><Link to={'/register'}>Registrarse</Link></li>
    <li><Link to={'/login'}>Iniciar sesión</Link></li>
    </div>
    </ul>
    </div>
    <Outlet/>
    </>
  )
}
