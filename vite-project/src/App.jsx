import { Routes, Route } from "react-router-dom";
import {NavBarr} from './NavBarr'
import {SobreNosotros} from './SobreNosotros'
import {Register} from './Register'
import {Login} from './Login'
import './App.css'
import { Inicio } from "./Inicio";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBarr/>}>
          <Route index element={<Inicio/>}/>
          <Route path="/sobrenosotros" element={<SobreNosotros/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App