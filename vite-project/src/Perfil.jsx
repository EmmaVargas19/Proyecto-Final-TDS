import { useContext } from 'react';
import { contextName } from './context/myContext';

export function Perfil() {
const { setUser, setPassword, setLogged, localStorageDelete } = useContext(contextName);
  return (

    <div>
        <p>perfil</p>
        <button onClick={()=> {localStorageDelete(); setUser(""); setPassword(""); setLogged(false)}}>Borrar perfil</button>
    </div>
  )
}
