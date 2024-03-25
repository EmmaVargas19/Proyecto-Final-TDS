import { Routes, Route, useLocation } from "react-router-dom";
import {NavBarr} from './NavBarr'
import { Eventos } from "./Eventos";
import {Register} from './Register'
import {Login} from './Login'
import {Perfil} from './Perfil'
import { Donar } from "./Donar";
import './App.css'
import { Inicio } from "./Inicio";
import { useEffect } from "react";

function App() {
  // obtenemos el location dentro del router dom
  const location = useLocation()
  
  // ok so seria un useEffect aqui
  useEffect(()=>{
    // Aqui vamos a hacer los redirects a los id, en caso de que no hayan pasado

//En el hash nos vienen los id, entonces queremos que corra este useEffect cada vez que cambia la ruta el id que tenemos en el hash, y claramente solo si tenemos un hash haremos
// el scroll

    if(location.hash){
      const id = location.hash.replace('#', '')
      const element = document.getElementById(id)
      setTimeout(()=>{
        if(element) element.scrollIntoView({behavior: 'smooth'})
      }, 300)
    } 
  },[location.pathname, location.hash])

  return (
    <Routes>
      <Route path="/" element={<NavBarr/>}>
        <Route index element={<Inicio/>}/>
        <Route path="/eventos" element={<Eventos/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/donar" element={<Donar/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/perfil" element={<Perfil/>}/>
        <Route path="*" element={<h1>Ruta no encontrada porque no esta definida, manin, muevase por los apartados definidos, si ute se mete aqui es 404</h1>}/>
      </Route>
    </Routes>
  );
}

export default App