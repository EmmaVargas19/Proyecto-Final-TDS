import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate desde react-router-dom
import { contextName } from './context/myContext';

export function Perfil() {
    const { setUser, setPassword, setLogged, localStorageDelete, toastifye } = useContext(contextName);
    const navigate = useNavigate(); // Utiliza useNavigate para obtener el objeto de navegación

    const handleDeleteProfile = () => {
        localStorageDelete();
        setUser("");
        setPassword("");
        setLogged(false);
        // Navega a la página de inicio
        navigate("/");
        // Muestra un toastify de usuario eliminado
        toastifye("Usuario eliminado");
    }

    return (
        <div>
            <p>Perfil</p>
            <button onClick={handleDeleteProfile}>Borrar perfil</button>
        </div>
    );
}
