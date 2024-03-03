import { createContext, useState } from "react";
import '../App.css'
export const contextName = createContext()

export function MyContext ({children}){
const [user, setUser] = useState(null)


function ejem (){
    setUser("ejem")
}
return (
    <contextName.Provider value={{
        user,
        ejem
    }}>
        {children}
    </contextName.Provider>
)
}