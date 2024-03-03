import { Routes, Route } from "react-router-dom";
import {NavBarr} from './NavBarr'
import {SobreNosotros} from './SobreNosotros'
import {Register} from './Register'
import {Login} from './Login'
import './App.css'
import { Inicio } from "./Inicio";

function App() {
  return (
    <div className="bodyContent">
      <Routes>
        <Route path="/" element={<NavBarr/>}>
          <Route index element={<Inicio/>}/>
          <Route path="/eventos" element={<SobreNosotros/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App