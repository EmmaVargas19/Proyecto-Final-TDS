import { useContext } from "react"
import { contextName } from "./context/myContext"

export function Donar() {
const {nombreNegocio, setNombreNegocio, direccion, setDireccion, modelo, setModelo, selectedValue, setSelectedValue, isChecked, setIsChecked, localStorageDonar, nombre} = useContext(contextName);


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
    <div>
        <form onSubmit={handleSubmit}>
        <h1>Donar</h1>
        <p>Nombre del negocio</p>
        <input type="text" placeholder="pon el nombre del negocio" onInput={(e)=> setNombreNegocio(e.target.value)} value={nombreNegocio}/>
        <p>Direccion del negocio</p>
        <input type="text" placeholder="pon la direccion del negocio" onInput={(e)=> setDireccion(e.target.value)} value={direccion}/>
        <hr />
        <p>valores</p>
        <select value={selectedValue} onChange={handleChange}>
        <option value="">Selecciona un dispositivo a donar</option>
        <option value="teléfono">telefono</option>
        <option value="computadora">computadora</option>
        <option value="tableta">tableta</option>
        <option value="teclado">teclado</option>
        <option value="mouse">mouse</option>
        </select>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        value={isChecked}
      />
      {isChecked ? <input type="text" placeholder="modelo" value={modelo} onInput={(e)=> setModelo(e.target.value)}/> : null}
        <button>Enviar</button>
        </form>
    </div>
  )
}
