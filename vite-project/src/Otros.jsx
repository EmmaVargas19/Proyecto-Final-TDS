import { useContext } from "react"
import { contextName } from "./context/MyContext"
export function Otros() {
    const {otro, setOtro, textArea, setTextArea} = useContext(contextName)
    return (
<>
    <input type="text" placeholder="Dispositivo" id="id-select" value={otro} onInput={(e) => setOtro(e.target.value)} />
    <textarea 
    value={textArea} // Establecemos el valor del textarea como el valor del estado
    onInput={(e)=> setTextArea(e.target.value)} // Asignamos la función de manejo de cambios
    placeholder="Descripción" // Establecemos un placeholder
    rows={4} // Número de filas
    cols={20} // Número de columnas
    style={{resize: 'none'}} // Deshabilitamos la redimensión del textarea
    />
</>
    )
}