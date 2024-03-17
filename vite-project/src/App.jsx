import { Routes, Route } from "react-router-dom";
import {NavBarr} from './NavBarr'
import { Eventos } from "./Eventos";
import {Register} from './Register'
import {Login} from './Login'
import {Perfil} from './Perfil'
import { Donar } from "./Donar";
import './App.css'
import { Inicio } from "./Inicio";

function App() {
  return (
    <div className="bodyContent">
      <Routes>
        <Route path="/" element={<NavBarr/>}>
          <Route index element={<Inicio/>}/>
          <Route path="/eventos" element={<Eventos/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/donar" element={<Donar/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/perfil" element={<Perfil/>}/>
          <Route path="*" element={<h1>404</h1>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App