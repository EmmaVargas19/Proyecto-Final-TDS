import { useContext } from "react"
import { contextName } from "./context/MyContext.jsx"
import './Donar.css';
import 'boxicons';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Otros } from "./Otros.jsx";

export function Donar() {
const {nombreNegocio, setNombreNegocio, direccion, setDireccion, modelo, setModelo, selectedValue, setSelectedValue, isChecked, setIsChecked, localStorageDonar, nombre, toastifys, toastifye, otro, setOtro, textArea, setTextArea} = useContext(contextName);

const handleChange = (event) => {
    setSelectedValue(event.target.value);
};

const handleCheckboxChange = (e) => {
setIsChecked(e.target.checked);
};

function handleSubmit(e) {
    e.preventDefault();
    if (!nombreNegocio || !direccion || !selectedValue) {
        return toastifye("Por favor llena todos los campos");
    } else {
      const valor = selectedValue === "otros" ? otro : selectedValue
      localStorageDonar({nombre: nombre, negocio: nombreNegocio, direccion, dispositivo: valor, descripcion: textArea, modelo, id: crypto.randomUUID()})
      setNombreNegocio("")
      setDireccion("")
      setModelo("")
      setSelectedValue("")
      setOtro("")
      setTextArea("")
      setIsChecked(false)
      toastifys("Donacion registrada exitosamente")
  }
}
console.log(selectedValue)
  return (
    <div className="donar-container">
      <div className="left-image-container">
        <img src="src/img/donaciones.png" alt="izquierda" className="left-image" />
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-content">
            <div className="form-content-background">
              <h1>Donar</h1>
              <div className="form-input">
                <box-icon type='solid' name='building'></box-icon>
                <input type="text" placeholder="Nombre Del Negocio" onInput={(e)=> setNombreNegocio(e.target.value)} value={nombreNegocio}/>
              </div>
              <div className="form-input">
                <box-icon name='location-plus' type='solid'></box-icon>
                <input type="text" placeholder="Direccion" onInput={(e)=> setDireccion(e.target.value)} value={direccion}/>
              </div>
              <select value={selectedValue} onChange={handleChange} className="form-select">
                <option value="">Selecciona un dispositivo a donar</option>
                <option value="teléfono">telefono</option>
                <option value="computadora">computadora</option>
                <option value="tableta">tableta</option>
                <option value="teclado">teclado</option>
                <option value="mouse">mouse</option>
                <option value="otros">otros</option>
              </select>
              {selectedValue === "otros" && <Otros/>}
              <div className="form-checkbox">
                <input type="checkbox" id="modelo-checkbox" checked={isChecked} onChange={handleCheckboxChange} value={isChecked} />
                <label htmlFor="modelo-checkbox">Click Para agregar modelo</label>
              </div>
              {isChecked && <input type="text" placeholder="Modelo" id="id-checkbox" value={modelo} onInput={(e) => setModelo(e.target.value)} />}
              <button className="form-button">Enviar</button>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}