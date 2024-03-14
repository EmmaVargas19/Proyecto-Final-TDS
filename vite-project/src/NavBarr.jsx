import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { contextName } from "./context/myContext";
import './App.css'


export function NavBarr() {
  const {user, setUser, setPassword, logged, setLogged, setShowedToast} = useContext(contextName)
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
    {user && logged ? <li><button onClick={()=>{setLogged(false); setUser(""); setPassword(""); setShowedToast(false)}}>Cerrar sesión</button></li> : null}
    {user && logged ? <li><Link to={'/perfil'}>Mi Perfil</Link></li> : null}
    </div>
    </ul>
    </div>
    <Outlet/>
    <footer className="footerContainer">
      <p>Copyright © RenovaTech 2023-2024</p>
    </footer>
    </>
  )
}
