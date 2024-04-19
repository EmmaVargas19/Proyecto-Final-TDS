import { useContext } from "react"
import { contextName } from "./context/MyContext"
export function Otros() {
    const {otro, setOtro, textArea, setTextArea} = useContext(contextName)
    return (
                <div className="otros-container">
                  <style>
                    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap')
                  </style>
                  {/* <label htmlFor="otro">Dispositivo</label> */}
                  <i class='bx bx-devices' id="devices"></i>
                  <input type="text" id="otro" placeholder="Dispositivo" className="otros-input" value={otro} onChange={(e) => setOtro(e.target.value)} />
                  
                  {/* <label htmlFor="textArea">Descripción</label> */}
                  <i class='bx bx-message-rounded-dots' id="description"></i>
                  <textarea id="textArea" placeholder="Descripción" className="otros-textarea" value={textArea} onChange={(e) => setTextArea(e.target.value)}></textarea>
                </div>
              )
}