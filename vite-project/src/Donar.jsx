import { useContext } from "react"
import { contextName } from "./context/MyContext.jsx"
import './Donar.css';
import 'boxicons';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export function Donar() {
const {nombreNegocio, setNombreNegocio, direccion, setDireccion, modelo, setModelo, selectedValue, setSelectedValue, isChecked, setIsChecked, localStorageDonar, nombre, toastifys} = useContext(contextName);

const handleChange = (event) => {
    setSelectedValue(event.target.value);
};

const handleCheckboxChange = (e) => {
setIsChecked(e.target.checked);
};

function handleSubmit(e) {
    e.preventDefault();
    localStorageDonar({nombre: nombre, negocio: nombreNegocio, direccion, dispositivo: selectedValue, modelo, id: crypto.randomUUID()})
    setNombreNegocio("")
    setDireccion("")
    setModelo("")
    setSelectedValue("")
    setIsChecked(false)
}
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
              </select>
              <div className="form-checkbox">
                <input type="checkbox" id="modelo-checkbox" checked={isChecked} onChange={handleCheckboxChange} value={isChecked} />
                <label htmlFor="modelo-checkbox">Click Para agregar modelo</label>
              </div>
              {isChecked && <input type="text" placeholder="Modelo" id="id-checkbox" value={modelo} onInput={(e) => setModelo(e.target.value)} />}
              <button onClick={()=> toastifys("Donacion registrada exitosamente")} className="form-button">Enviar</button>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}