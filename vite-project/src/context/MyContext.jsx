import { createContext, useState } from "react";
import { toast } from 'react-toastify';
import '../App.css'
export const contextName = createContext()

export function MyContext ({children}){
const [user, setUser] = useState("")
const [password, setPassword] = useState("")
const [confirmPassword, setConfirmPassword] = useState("");
const [logged, setLogged] = useState(false)
const [showedToast, setShowedToast] = useState(false);

function normal (){
    setLogged(true)
    alert("Inscrito")
}

function localStorageSave (){
    localStorage.setItem(`${user}`, JSON.stringify({password: password}));
}

function localStorageGet (){
    const data = localStorage.getItem(`${user}`)
    return data
}

function localStorageGetEdit (value){
    const data = localStorage.getItem(`${user}`)
    const dataParsed = JSON.parse(data)
    dataParsed.inscrito = [value]
/*     dataParsed.inscrito = []
    dataParsed.inscrito.push(value) */
    localStorage.setItem(`${user}`, JSON.stringify(dataParsed))
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
        logged,
        setLogged,
        localStorageSave,
        localStorageGet,
        localStorageGetEdit,
        localStorageDelete,
        showedToast,
        setShowedToast,
        ejem,
        normal,
        toastifye,
        toastifys
    }}>
        {children}
    </contextName.Provider>
)
}