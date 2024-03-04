import { createContext, useState } from "react";
import { toast } from 'react-toastify';
import '../App.css'
export const contextName = createContext()

export function MyContext ({children}){
const [user, setUser] = useState(null)

function normal (){
    setUser("normal")
}

function toastify (value){
    toast.error(value)
}


function ejem (){
    setUser("ejem")
}
return (
    <contextName.Provider value={{
        user,
        ejem,
        normal,
        toastify
    }}>
        {children}
    </contextName.Provider>
)
}