import { ToastContainer } from 'react-toastify';
import { useContext } from "react";
import { contextName } from "./context/MyContext.jsx";
import { NoEventos } from "./NoEventos";
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

export function Eventos() {
const events = [
    {name: "Evento 1", date: "2021-10-10", description: "Este es el evento 1", img: "src/assets/img1.jpeg", id: 1}
    ,
    {name: "Evento 2", date: "2021-10-11", description: "Este es el evento 2", img: "src/assets/img2.jpeg", id: 2}
    ,
    {name: "Evento 3", date: "2021-10-12", description: "Este es el evento 3", img: "src/assets/img3.jpeg", id: 3}
    ,
    {name: "Evento 4", date: "2021-10-13", description: "Este es el evento 4", img: "src/assets/img4.jpeg", id: 4}
    , 
    {name: "Evento 5", date: "2021-10-14", description: "Este es el evento 5", img: "src/assets/img5.jpeg", id: 5}]

const {user, logged, toastifye, localStorageGetEdit} = useContext(contextName)

const mapeo = events.map((obj) => (
    <div key={obj.id} className="evento">
        <img src={obj.img} alt={`Evento ${obj.id}`} title={`Imagen del evento ${obj.name}`} />
        <h3>{obj.name}</h3>
        <p>{obj.date}</p>
        <p>{obj.description}</p>
        <button onClick={()=> {
            logged ?  localStorageGetEdit(obj):
            toastifye("No puedes inscribirte si no estas registrado")}}>Inscribirse</button>
    </div>
))



  return (
    <>
    <h2>Eventos Activos</h2>
    <div className='gridejem'>
        {mapeo}
    </div>
    <h2>Eventos donde estoy alistado</h2>
    <div>
        {user && logged ? <p>Evento 1</p> : <NoEventos/>}
    </div>
    <ToastContainer />
    </>
  )
}
