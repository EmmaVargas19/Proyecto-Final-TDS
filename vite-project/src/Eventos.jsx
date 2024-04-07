import { useContext, useState, useEffect, useRef } from "react";
import { contextName } from './context/MyContext.jsx';
import { NoEventos } from "./NoEventos";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

export function Eventos() {
    const { user, logged, toastifye, localStorageGet, localStorageGetEdit, localStorageGetBorrar } = useContext(contextName);
    const [eventosInscritos, setEventosInscritos] = useState(user && logged ? localStorageGet().inscrito : []);
 // en que momento guardas en el local storage? 
/*     const initialEventosInscritos = localStorageGet() !== null ? localStorageGet().inscrito || [] : [];
const [eventosInscritos, setEventosInscritos] = useState(initialEventosInscritos);
 */
    const [mostrar, setMostrar] = useState(false);
    const [objId, setObjId] = useState([]);
    
    const events = [
        { name: "Evento 1", date: "2021-10-10",
        description: "Únete a nuestra jornada de limpieza comunitaria este sábado, donde trabajaremos juntos para limpiar nuestro vecindario y promover un entorno más saludable para todos. ¡Tu ayuda marca la diferencia! Seminario Virtual: Gestión de Residuos Electrónicos para un Futuro Sostenible",
        img: "src/assets/img1.jpeg", id: 1 },
        { name: "Evento 2", date: "2021-10-11", description: "No te pierdas nuestro seminario virtual sobre la gestión de residuos electrónicos esta semana. Aprende sobre las últimas tendencias en reciclaje responsable y descubre cómo puedes contribuir al cuidado del medio ambiente desde la comodidad de tu hogar. Celebración del Día Mundial del Medio Ambiente: Unidos por un Planeta más Verde",
        img: "src/assets/img2.jpeg", id: 2 },
        { name: "Evento 3", date: "2021-10-12", description: "Ven y celebra el Día Mundial del Medio Ambiente con nosotros en nuestro evento especial al aire libre. Disfruta de actividades interactivas, talleres educativos y una feria de productos ecológicos. ¡Juntos podemos marcar el cambio! Taller de Reparación de Dispositivos Electrónicos: Extiende la Vida de tus Gadgets",
        img: "src/assets/img3.jpeg", id: 3 },
        { name: "Evento 4", date: "2021-10-13", description: "Te invitamos a nuestro taller de reparación de dispositivos electrónicos, donde aprenderás habilidades prácticas para alargar la vida útil de tus dispositivos y reducir el desperdicio electrónico. ¡Empodérate para ser parte de la solución! Ciclo de Cine Ambiental: Inspirando Acción para la Conservación del Planeta",
        img: "src/assets/img4.jpeg", id: 4 },
        { name: "Evento 5", date: "2021-10-14", description: "Acompáñanos en nuestro ciclo de cine ambiental mensual, donde proyectaremos documentales inspiradores sobre la conservación del medio ambiente y el impacto de nuestras acciones en el planeta. ¡Una noche de cine con conciencia!",
        img: "src/assets/img5.jpeg", id: 5 }
    ];
console.log(events)
console.log("soy eventos")
console.log(eventosInscritos)
console.log("soy eventos inscritos")
console.log(localStorageGet() + "soy local storage get")
    const handleInscribirse = (obj) => {
        if (logged) {
            setEventosInscritos([...eventosInscritos, obj]); // Agregar evento inscrito al estado local
            localStorageGetEdit(obj);
        } else {
            toastifye("No puedes inscribirte si no estás registrado");
        }
    }

    function handleBorrar (objj){
        if(logged){
            const filtrado = eventosInscritos.filter(obj => obj.id !== objj.id)
            setEventosInscritos(filtrado)
            localStorageGetBorrar(filtrado)
        }
    }

    function saber (obj){
        return eventosInscritos.some(objetos => objetos.id == obj.id)
    }

    function leer (obj)  {
        setMostrar(!mostrar)
        if(objId.some(objeto => objeto === obj.id)){
            const filtrado = objId.filter(objeto => objeto !== obj.id)
            setObjId(filtrado)
        } else {
            setObjId([...objId,obj.id])
        }
    }/* 

    const leer = (obj) => {
        setMostrar(!mostrar);
        if (objId.includes(obj.id)) { // Verificar si el ID del evento ya está en objId
            setObjId(objId.filter(id => id !== obj.id)); // Si ya está, eliminarlo
        } else {
            setObjId([...objId, obj.id]); // Si no está, agregarlo
        }
    }; */
console.log(objId)
console.log(mostrar)
    const mapeo = events.map((obj) => {
    const edam = useRef(null)
    return (
        <div key={obj.id} className="evento">
            <img src={obj.img} alt={`Evento ${obj.id}`} title={`Imagen del evento ${obj.name}`} style={{objectFit: "cover"}}/>
            <h3>{obj.name}</h3>
            <p>Fecha: {obj.date}</p>
            <p>{obj.description}</p>
            <button onClick={() => saber(obj) ? toastifye("Ya estas inscrito a este evento") : handleInscribirse(obj)}>{saber(obj) ? "Inscrito" : "Inscribirse"}</button>
        </div>
)})
    const mapeoEventosInscritos = eventosInscritos.map((obj) => (
        <div key={obj.id} className="evento">
            <img src={obj.img} alt={`Evento ${obj.id}`} title={`Imagen del evento ${obj.name}`} />
            <h3>{obj.name}</h3>
            <p>Fecha: {obj.date}</p>
            <p>{obj.description}</p>
            <button onClick={()=> handleBorrar(obj)}>Borrar evento</button>
        </div>
    ));

    return (
        <>
            <h2>Eventos Activos</h2>
            <div className='gridejem'>
                {mapeo}
            </div>
            <h2>Eventos donde estoy inscrito</h2>
            <div className={user && logged && localStorageGet().inscrito.length !== 0 ? "gridejem" : "normal"}>
                {user && logged && localStorageGet().inscrito.length !== 0 ? mapeoEventosInscritos : <NoEventos />}
            </div>
            <ToastContainer />
        </>
    );
}
