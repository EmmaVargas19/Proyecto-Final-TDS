import { createContext, useState } from "react";
import { toast } from 'react-toastify';
import '../App.css'
export const contextName = createContext()

export function MyContext ({children}){
const [user, setUser] = useState("")
const [password, setPassword] = useState("")
const [confirmPassword, setConfirmPassword] = useState('');
function normal (){
    setUser("normal")
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
        ejem,
        normal,
        toastifye,
        toastifys
    }}>
        {children}
    </contextName.Provider>
)
}