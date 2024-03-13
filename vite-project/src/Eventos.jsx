import { useContext, useState } from "react";
import { contextName } from "./context/myContext.jsx";
import { NoEventos } from "./NoEventos";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

export function Eventos() {
    const { user, logged, toastifye, localStorageGetEdit, localStorageGetBorrar } = useContext(contextName);

    const [eventosInscritos, setEventosInscritos] = useState([]);
console.log(eventosInscritos)
    const events = [
        { name: "Evento 1", date: "2021-10-10", description: "Este es el evento 1", img: "src/assets/img1.jpeg", id: 1 },
        { name: "Evento 2", date: "2021-10-11", description: "Este es el evento 2", img: "src/assets/img2.jpeg", id: 2 },
        { name: "Evento 3", date: "2021-10-12", description: "Este es el evento 3", img: "src/assets/img3.jpeg", id: 3 },
        { name: "Evento 4", date: "2021-10-13", description: "Este es el evento 4", img: "src/assets/img4.jpeg", id: 4 },
        { name: "Evento 5", date: "2021-10-14", description: "Este es el evento 5", img: "src/assets/img5.jpeg", id: 5 }
    ];

    const handleInscribirse = (obj) => {
        if (logged) {
            localStorageGetEdit(obj);
            setEventosInscritos([...eventosInscritos, obj]); // Agregar evento inscrito al estado local
        } else {
            toastifye("No puedes inscribirte si no estás registrado");
        }
    }

    function handleBorrar (objj){
        if(logged){
            const filtrado = eventosInscritos.filter(obj => obj.id !== objj.id)
            setEventosInscritos(filtrado)
            localStorageGetBorrar(eventosInscritos)
        }
    }

    const mapeo = events.map((obj) => (
        <div key={obj.id} className="evento">
            <img src={obj.img} alt={`Evento ${obj.id}`} title={`Imagen del evento ${obj.name}`} />
            <h3>{obj.name}</h3>
            <p>{obj.date}</p>
            <p>{obj.description}</p>
            <button onClick={() => handleInscribirse(obj)}>Inscribirse</button>
        </div>
    ));

    const mapeoEventosInscritos = eventosInscritos.map((obj) => (
        <div key={obj.id} className="evento">
            <img src={obj.img} alt={`Evento ${obj.id}`} title={`Imagen del evento ${obj.name}`} />
            <h3>{obj.name}</h3>
            <p>{obj.date}</p>
            <p>{obj.description}</p>
            <button onClick={()=> handleBorrar(obj)}>Hola</button>
        </div>
    ));

    return (
        <>
            <h2>Eventos Activos</h2>
            <div className='gridejem'>
                {mapeo}
            </div>
            <h2>Eventos donde estoy inscrito</h2>
            <div className='gridejem'>
                {user && logged ? mapeoEventosInscritos : <NoEventos />}
            </div>
            <ToastContainer />
        </>
    );
}
