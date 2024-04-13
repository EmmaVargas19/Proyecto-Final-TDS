import { useContext } from "react"
import { contextName } from "./context/MyContext"
export function Otros() {
    const {otro, setOtro, textArea, setTextArea} = useContext(contextName)
    return (
                <div className="otros-container">
                  {/* <label htmlFor="otro">Dispositivo</label> */}
                  <i class='bx bx-devices' id="devices"></i>
                  <input type="text" id="otro" placeholder="Dispositivo" className="otros-input" value={otro} onChange={(e) => setOtro(e.target.value)} />
                  
                  {/* <label htmlFor="textArea">Descripción</label> */}
                  <i class='bx bx-message-rounded-dots' id="description"></i>
                  <textarea id="textArea" placeholder="Descripción" className="otros-textarea" value={textArea} onChange={(e) => setTextArea(e.target.value)}></textarea>
                </div>
              )
}