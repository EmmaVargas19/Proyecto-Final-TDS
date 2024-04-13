import { useContext } from "react"
import { contextName } from "./context/MyContext.jsx"
import './Donar.css';
import 'boxicons';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Otros } from "./Otros.jsx";

export function Donar() {
const {user, nombreNegocio, setNombreNegocio, direccion, setDireccion, modelo, setModelo, selectedValue, setSelectedValue, isChecked, setIsChecked, localStorageDonar,localStorageOng ,nombre, toastifys, toastifye, otro, setOtro, textArea, setTextArea, ong, setOng} = useContext(contextName);
const handleChange = (event) => {
    setSelectedValue(event.target.value);
};

function handleChangeOng (e){
    setOng(e.target.value)
}

const handleCheckboxChange = (e) => {
setIsChecked(e.target.checked);
};
console.log(ong)
function handleSubmit(e) {
    e.preventDefault();
    if (!nombreNegocio || !direccion || !selectedValue) {
        return toastifye("Por favor llena todos los campos");
    } else {
      const valor = selectedValue === "otros" ? otro : selectedValue
      const objDonar = {nombre: nombre, negocio: nombreNegocio, direccion, dispositivo: valor, descripcion: textArea, modelo, ong ,statusDonacion: "pendiente" ,id: crypto.randomUUID()}
      localStorageDonar(objDonar)
      localStorageOng({donante: user, donacion: objDonar})
      setNombreNegocio("")
      setDireccion("")
      setModelo("")
      setSelectedValue("")
      setOtro("")
      setTextArea("")
      setOng("")
      setIsChecked(false)
      toastifys("Donacion registrada exitosamente")
  }
}

console.log(localStorage.getItem(ong))
console.log(selectedValue)
  return (
    <div className="donar-container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-content">
            <div className="form-content-background">
              <h1>Donar</h1>
              <div className="form-input">
                <box-icon type='solid' name='building' color="#fff"></box-icon>
                <input type="text" placeholder="Nombre Del Negocio" onInput={(e)=> setNombreNegocio(e.target.value)} value={nombreNegocio}/>
              </div>
              <div className="form-input">
                <box-icon name='location-plus' type='solid' color="#fff"></box-icon>
                <input type="text" placeholder="Dirección" onInput={(e)=> setDireccion(e.target.value)} value={direccion}/>
              </div>
              <select value={ong} onChange={handleChangeOng} className="form-select">
                <option className="option" value="">Ong donde quiero donar</option>
                <option className="option" value="DMAA">EcoElectrónica</option>
                <option className="option" value="MPMC">RafaPC</option>
                <option className="option" value="SBH">ElectroCompu</option>
                <option className="option" value="IVN">CompuCentro</option>
              </select>
              <select value={selectedValue} onChange={handleChange} className="form-select">
                <option className="option" value="">Selecciona un dispositivo a donar</option>
                <option className="option" value="teléfono">telefono</option>
                <option className="option" value="computadora">computadora</option>
                <option className="option" value="tableta">tableta</option>
                <option className="option" value="teclado">teclado</option>
                <option className="option" value="mouse">mouse</option>
                <option className="option" value="otros">otros</option>
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