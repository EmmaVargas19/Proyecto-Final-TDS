import { Link, Outlet } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { useContext, useEffect, useRef } from "react";
import { contextName } from "./context/myContext";
import 'react-toastify/dist/ReactToastify.css';
import './App.css'


export function NavBarr() {
const {user} = useContext(contextName)
const refe = useRef(null)

useEffect(()=>{
if(user){
  console.log("si")
} else {
  refe.current.addEventListener('click', (event)=>{
    event.preventDefault()
    toast.error("No puedes acceder al apartado de eventos hasta que inicies sesion")
  })
}

},[])
  return (
    <>
    <div className="navbar">
    <ul>
    <div className="hijo">
    <img src="src/assets/WhatsApp Image 2024-02-29 at 2.26.29 PM.jpeg" alt="" />
    <li><Link to={'/'}>Inicio</Link></li>
    <li><Link to={'/eventos'} ref={refe}>Eventos</Link></li>
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
    <ToastContainer/>
    </>
  )
}
