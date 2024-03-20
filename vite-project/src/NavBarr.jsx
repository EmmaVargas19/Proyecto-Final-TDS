import { Link, Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { contextName } from './context/MyContext.jsx';
import './App.css'


export function NavBarr() {
  const {setUser, setPassword, logged, setLogged, setShowedToast, setNombre} = useContext(contextName)
  const navigate = useNavigate();
  return (
    <>
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
      <p>Copyright © RenovaTech 2023-2024</p>
    </footer>
    </>
  )
}
