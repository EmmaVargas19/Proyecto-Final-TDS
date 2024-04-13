import { createContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';
import '../App.css'
import { useNavigate } from "react-router";

export const contextName = createContext()

export function MyContext ({children}){
const [isChecking, setIsChecking] = useState(true);
const [user, setUser] = useState(localStorage.getItem("preU") || "")
const [password, setPassword] = useState("")
const [confirmPassword, setConfirmPassword] = useState("");
const [newPassword, setNewPassword] = useState("")
const [foto, setFoto] = useState("")
const [logged, setLogged] = useState(false)
const [showedToast, setShowedToast] = useState(false);
const [nombre, setNombre] = useState('');
const [nombreNegocio, setNombreNegocio] = useState('');
const [direccion, setDireccion] = useState('');
const [modelo, setModelo] = useState('');
const [selectedValue, setSelectedValue] = useState('');
const [otro, setOtro] = useState('');
const [ong,setOng] = useState("")
const [IsOng, setIsOng] = useState(false);
const [textArea, setTextArea] = useState('');
const [isChecked, setIsChecked] = useState(false);
console.log("Soy Ong")
console.log(IsOng)
const navigate = useNavigate();
useEffect(() => {
    if(user !== ""){
        localStorage.setItem("preU", user);
    }
}, [user]);

useEffect(() => {
    if (localStorage.getItem("preL")) {
        setLogged(JSON.parse(localStorage.getItem("preL")));
    } else if(logged !== false){
        localStorage.setItem("preL", JSON.stringify(logged));
    }
}, [logged]);


function normal (){
    setLogged(true)
    alert("Inscrito")
}

function localStorageSave (){
    localStorage.setItem(`${user}`, JSON.stringify({foto, nombre, password, inscrito: [], donados: []}));
}

function localStorageFoto() {
    const data = localStorageGet(); // Obtener los datos del usuario desde localStorage
    if (data) { // Verificar si los datos existen
      data.foto = foto; // Actualizar la propiedad 'foto' con la nueva ruta de la foto
      localStorage.setItem(user, JSON.stringify(data)); // Guardar los datos actualizados en localStorage
    }
  }
  
/* function localStorageFoto (){
    const data = localStorageGet()
    data.foto = foto
    localStorage.setItem(`${user}`, JSON.stringify(data))
} */
function localStorageGet (){
    const data = localStorage.getItem(`${user}`)
    const dataParsed = JSON.parse(data)
    console.log({dataParsed})
    return dataParsed
}

function localStorageGetEdit (obj){
    const data = localStorageGet()
    data.inscrito = [...data.inscrito, obj]
    localStorage.setItem(`${user}`, JSON.stringify(data))
}

function localStorageSavePassword (){
    const data = localStorageGet()
    data.password = newPassword
    localStorage.setItem(`${user}`, JSON.stringify(data))
}

function localStorageDonar(obj){
    const data = localStorageGet()
    data.donados = [...data.donados, obj]
    localStorage.setItem(`${user}`, JSON.stringify(data))
}

function localStorageDonados(obj){
    const data = localStorageGet()
    data.donados = obj
    localStorage.setItem(`${user}`, JSON.stringify(data))
}

function localStorageDonados2(usuario, obj){
    const data = localStorage.getItem(usuario)
    const dataParsed = JSON.parse(data)
    dataParsed.donados = obj
    localStorage.setItem(usuario, JSON.stringify(dataParsed))
}

function localStorageDonados3(obj){
    const data = localStorage.getItem(user)
    const dataParsed = JSON.parse(data)
    dataParsed.donaciones = obj
    localStorage.setItem(user, JSON.stringify(dataParsed))
}

function localStorageOng(obj){
    const data = localStorage.getItem(ong);
    const dataParsed = JSON.parse(data);
    const existingDonationIndex = dataParsed.donaciones.findIndex(item => item.donante === user);
    if (existingDonationIndex !== -1) {
        // Si el donante ya existe en las donaciones, actualizamos su donación
        const existingDonation = dataParsed.donaciones[existingDonationIndex];
        existingDonation.donacion.push(obj.donacion); // Agregamos la nueva donación al arreglo existente
        localStorage.setItem(ong, JSON.stringify(dataParsed));
    } else {
        // Si el donante no existe en las donaciones, simplemente agregamos la nueva donación
        dataParsed.donaciones.push({ donante: user, donacion: [obj.donacion] });
        localStorage.setItem(ong, JSON.stringify(dataParsed));
    }
}

function localStorageGetBorrar(obj) {
    const data = localStorageGet()
    data.inscrito = obj
    localStorage.setItem(`${user}`, JSON.stringify(data))
}

function localStorageDelete (){
    localStorage.removeItem(`${user}`)
}

function toastifye (value){
    toast.error(value)
}

function toastifys (value){
    toast.success(value)
}

function ejem (){
    setUser("ejem")
}

useEffect(() => {
    const isPageRefreshed = () => {
      return !window.performance || window.performance.navigation.type === window.performance.navigation.TYPE_RELOAD;
    };

    if (isPageRefreshed()) {
    
      navigate('/'); // Redirige a la ruta principal si la página se ha recargado
    }

    setIsChecking(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("DMAA", JSON.stringify({ongValue: "true", password: "1" ,donaciones: []}))
  }, [])


return (
    <contextName.Provider value={{
        localStorageFoto,
        user,
        setUser,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        setNewPassword,
        logged,
        setLogged,
        localStorageSave,
        localStorageGet,
        localStorageGetEdit,
        localStorageSavePassword,
        localStorageDonar,
        localStorageDonados,
        localStorageDonados2,
        localStorageDonados3,
        localStorageOng,
        IsOng, setIsOng,
        localStorageGetBorrar,
        localStorageDelete,
        showedToast,
        setShowedToast,
        ejem,
        foto,
        setFoto,
        normal,
        toastifye,
        toastifys,
        nombre, setNombre,
        nombreNegocio, setNombreNegocio,
        direccion, setDireccion,
        modelo, setModelo,
        selectedValue, setSelectedValue,
        otro, setOtro,
        ong, setOng,
        textArea, setTextArea,
        isChecked, setIsChecked
    }}>
        {!isChecking && children}
    </contextName.Provider>
)
}