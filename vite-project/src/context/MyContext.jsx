import { createContext, useState } from "react";
import { toast } from 'react-toastify';
import '../App.css'

export const contextName = createContext()

export function MyContext ({children}){
const [user, setUser] = useState("")
const [password, setPassword] = useState("")
const [confirmPassword, setConfirmPassword] = useState("");
const [newPassword, setNewPassword] = useState("")
const [logged, setLogged] = useState(false)
const [showedToast, setShowedToast] = useState(false);
const [nombre, setNombre] = useState('');
const [nombreNegocio, setNombreNegocio] = useState('');
const [direccion, setDireccion] = useState('');
const [modelo, setModelo] = useState('');
const [selectedValue, setSelectedValue] = useState('');
const [isChecked, setIsChecked] = useState(false);


function normal (){
    setLogged(true)
    alert("Inscrito")
}

function localStorageSave (){
    localStorage.setItem(`${user}`, JSON.stringify({nombre: nombre, password: password, inscrito: [], donados: []}));
}

function localStorageGet (){
    const data = localStorage.getItem(`${user}`)
    const dataParsed = JSON.parse(data)
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
return (
    <contextName.Provider value={{
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
        localStorageGetBorrar,
        localStorageDelete,
        showedToast,
        setShowedToast,
        ejem,
        normal,
        toastifye,
        toastifys,
        nombre, setNombre,
        nombreNegocio, setNombreNegocio,
        direccion, setDireccion,
        modelo, setModelo,
        selectedValue, setSelectedValue,
        isChecked, setIsChecked
    }}>
        {children}
    </contextName.Provider>
)
}